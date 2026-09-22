import { expect, test } from "@playwright/test";
import { access } from "node:fs/promises";
import AxeBuilder from "@axe-core/playwright";
import { aiCourses, caseStudies, profile, recommendations } from "../src/lib/content";

const routes = ["/", ...caseStudies.map((study) => `/work/${study.slug}/`), "/resume/", "/resume/one-page/"];

for (const route of routes) {
  test(`${route} is readable, responsive and accessible`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator("main h1")).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /^index, follow$/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new URL(route, profile.publicPortfolio).href);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("all case-study links reach the matching page", async ({ page }) => {
  for (const study of caseStudies) {
    await page.goto("/");
    await page.getByRole("link", { name: study.title, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/work/${study.slug}/$`));
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(study.title);
    await page.getByRole("link", { name: "All selected work" }).click();
    await expect(page).toHaveURL(/\/#work$/);
  }
});

test("mobile navigation closes on selection and Escape", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Native mobile menu is hidden at desktop widths.");
  await page.goto("/");
  const menu = page.locator(".mobile-menu");
  const toggle = menu.locator("summary");
  await toggle.click();
  await expect(menu).toHaveAttribute("open", "");
  await page.keyboard.press("Escape");
  await expect(menu).not.toHaveAttribute("open");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.getByRole("navigation", { name: "Mobile", exact: true }).getByRole("link", { name: "Experience" }).click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(menu).not.toHaveAttribute("open");
});

test("keyboard users can skip navigation", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop keyboard focus behavior.");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
});

test("reduced motion disables movement and animated scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(await page.locator(".hero-copy").evaluate((element) => getComputedStyle(element).animationName)).toBe("none");
  expect(await page.locator("html").evaluate((element) => getComputedStyle(element).scrollBehavior)).toBe("auto");
});

test("small screens and enlarged text do not overflow", async ({ page, isMobile }) => {
  test.skip(isMobile, "Viewport sweep uses desktop text zoom simulation.");
  for (const width of [320, 375, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
  await page.setViewportSize({ width: 1280, height: 1000 });
  await page.addStyleTag({ content: "html { font-size: 200%; }" });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test("CV download is a real PDF and contact links are verified", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "One-page PDF", exact: true })).toHaveAttribute("href", profile.resumePath);
  const response = await request.get(profile.resumePath);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  await expect(page.getByRole("link", { name: "Connect on LinkedIn" })).toHaveAttribute("href", profile.linkedin);
  await expect(page.getByRole("link", { name: "Find me on GitHub" })).toHaveAttribute("href", profile.github);
});

test("content works without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4173/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("I build iOS apps");
    await page.locator(".mobile-menu summary").click();
    await expect(page.getByRole("navigation", { name: "Mobile", exact: true })).toBeVisible();
    await page.getByRole("navigation", { name: "Mobile", exact: true }).getByRole("link", { name: "View CV" }).click();
    await expect(page.getByRole("heading", { name: "Luisa Santo", level: 1 })).toBeVisible();
    await page.getByRole("navigation", { name: "CV versions" }).getByRole("link", { name: "One-page CV", exact: true }).click();
    await expect(page.locator(".resume-sheet")).toHaveAttribute("data-variant", "one-page");
  } finally {
    await context.close();
  }
});

test("no private sources or third-party trackers load", async ({ page }) => {
  const thirdPartyRequests: string[] = [];
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (url.protocol.startsWith("http") && url.hostname !== "127.0.0.1") thirdPartyRequests.push(url.hostname);
  });
  for (const route of routes) {
    await page.goto(route);
    const text = await page.locator("main").innerText();
    expect(text).not.toMatch(/mixpanel\.com|teams\.microsoft\.com|linear\.app|@microsoft\.com|dev\.azure\.com|L61|GMAI-\d|Connect\d+\.pdf/);
    expect(text).not.toMatch(/99% reliability|91% (faster|reduction)|80% (test|coverage)|11s.*1s/);
  }
  expect(thirdPartyRequests).toEqual([]);
  await page.goto("/");
  await expect(page.getByLabel("Product scale context")).toContainText("not an individual growth claim");
});

test("404 keeps a working route home", async ({ page }) => {
  const response = await page.goto("/not-a-real-page/");
  expect(response?.status()).toBe(404);
  await page.getByRole("link", { name: "Back to the portfolio" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("I build iOS apps");
});

test("public recommendations are short, attributed and source-linked", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#recommendations");
  await expect(section.getByRole("heading", { level: 2 })).toHaveText("People I've worked with.");
  await expect(section.locator("blockquote")).toHaveCount(4);
  for (const name of ["Rui Gramacho", "Allen Yee", "Gabriel N\u00f3voa", "Mariana Mendes"]) {
    await expect(section.getByText(name, { exact: true })).toBeVisible();
  }
  await expect(section.getByRole("link", { name: "Full recommendations on LinkedIn" })).toHaveAttribute("href", profile.recommendations);
  for (const recommendation of recommendations) {
    const card = section.locator("figure").filter({ hasText: recommendation.name });
    await expect(card.locator("blockquote")).toContainText(recommendation.quote);
    await expect(card.locator("figcaption")).toContainText(recommendation.role);
    await expect(card.locator("figcaption")).toContainText(recommendation.context);
  }
  for (const quote of await section.locator("blockquote").allTextContents()) {
    expect(quote.trim().split(/\s+/).length).toBeLessThanOrEqual(35);
  }
});

test("capture the finished layout", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.screenshot({ path: testInfo.outputPath("home.png"), fullPage: true, scale: "css" });
  await page.goto("/resume/");
  await page.screenshot({ path: testInfo.outputPath("resume.png"), fullPage: true, scale: "css" });
  await page.goto("/resume/one-page/");
  await page.screenshot({ path: testInfo.outputPath("resume-one-page.png"), fullPage: true, scale: "css" });
});

for (const route of ["/", "/resume/", "/resume/one-page/"]) {
  test(`${route} includes the earlier engineering roles and supporting experience`, async ({ page }) => {
    await page.goto(route);
    const peacock = page.locator(route === "/" ? ".timeline-item" : ".resume-job").filter({ has: page.getByRole("heading", { name: /Peacock/ }) });
    await expect(peacock).toContainText("Apr 2020 - Mar 2021");
    await expect(peacock).toContainText("launch");
    await expect(peacock).toContainText("highlights");
    const talkdesk = page.locator(route === "/" ? ".timeline-item" : ".resume-job").filter({ has: page.getByRole("heading", { name: /Talkdesk/ }) });
    await expect(talkdesk).toContainText("May 2019 - Apr 2020");
    await expect(talkdesk).toContainText("Ruby");
    await expect(talkdesk).toContainText("push notifications");
    const section = page.locator("#other-experience");
    await expect(section.getByRole("heading", { name: "Other experience" })).toBeVisible();
    for (const name of ["Sky", "Comcast", "Girls Code", "Happy Code"]) {
      await expect(section).toContainText(name);
    }
    await expect(page.locator("main")).toContainText("CERN");
    await expect(page.locator("main")).toContainText("speech-to-text");
    await expect(page.getByText(/MEng, Artificial Intelligence \(2020\)/)).toBeVisible();
  });
}

test("AI coursework is attributed and linked to the credential listing", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Recent AI coursework" })).toBeVisible();
  await expect(page.locator(".credential-list li")).toHaveCount(4);
  for (const course of aiCourses) {
    const row = page.locator(".credential-list li").filter({ hasText: course.title });
    await expect(row).toContainText(course.issuer);
    await expect(row).toContainText(course.issued);
  }
  await expect(page.getByRole("link", { name: "Credentials on LinkedIn" })).toHaveAttribute("href", profile.credentials);
});

test("the illustrative AI brief exposes constraints and acceptance criteria", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) await page.locator(".mobile-menu summary").click();
  await page.getByRole("navigation", { name: isMobile ? "Mobile" : "Primary", exact: true }).getByRole("link", { name: "AI workflow" }).click();
  await expect(page).toHaveURL(/#ai-work$/);
  await page.locator("#engineering-brief summary").click();
  const example = page.locator("#engineering-brief");
  await expect(example.getByText(/Illustrative brief/)).toBeVisible();
  await expect(example.locator("pre")).toContainText("Do not deploy");
  await expect(example.locator("pre")).toContainText("Acceptance criteria");
  await expect(example.locator("pre")).toContainText("out-of-order responses");
});

test("research references link to the original photograph without republishing images", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#research");
  await expect(section).toContainText("co-sponsored by ESA");
  await expect(section).toContainText("Team Blue received the programme's Best Technical Case recognition");
  await expect(section.getByRole("link", { name: "View the Team Blue photograph on ESA" })).toHaveAttribute("href", "https://www.esa.int/ESA_Multimedia/Images/2015/07/Alpbach_team_blue_2015");
  await expect(section).toContainText("FFG/Summer School Alpbach/MA Jakob");
  await expect(section.locator("img")).toHaveCount(0);
});

test("the public export preserves its domain and exposes an accurate sitemap", async ({ request }) => {
  const cname = await request.get("/CNAME");
  expect(cname.status()).toBe(200);
  expect((await cname.text()).trim()).toBe("www.luisasanto.dev");
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Allow: /");
  expect(await robots.text()).not.toContain("Disallow: /");
  expect(await robots.text()).toContain(`${profile.publicPortfolio}sitemap.xml`);
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  for (const route of routes) {
    expect(xml).toContain(`<loc>${new URL(route, profile.publicPortfolio).href}</loc>`);
  }
  expect(xml.match(/<loc>/g)).toHaveLength(routes.length);
  await access("out/.nojekyll");
});

test("the work index gives six contributions their own case studies", async ({ page }) => {
  await page.goto("/");
  const work = page.locator("#work");
  await expect(work.locator(".work-card")).toHaveCount(6);
  for (const [title, slug] of [
    ["Chat bubbles and theming.", "chat-bubbles"],
    ["Progressive image loading.", "progressive-image-loading"],
    ["Feedback and responsive interactions.", "feedback-and-responsiveness"],
  ]) {
    await expect(work.getByRole("link", { name: title, exact: true })).toHaveAttribute("href", `/work/${slug}/`);
  }
  await expect(page.locator("#more-contributions")).toContainText("Privacy");
  await expect(page.locator("#more-contributions")).toContainText("onboarding");
});

test("AI workflow explains prompt structure and instruction-file checks", async ({ page }) => {
  await page.goto("/#ai-work");
  const section = page.locator("#ai-work");
  await expect(section.locator(".ai-workflow-grid article")).toHaveCount(6);
  await expect(section).toContainText("copilot-instructions.md");
  await expect(section).toContainText("hallucinations");
  await expect(section).toContainText("acceptance criteria");
  await page.locator("#engineering-brief summary").click();
  await expect(page.locator("#engineering-brief pre")).toContainText("rollback");
  await expect(page.locator("#engineering-brief pre")).toContainText("Do not invent APIs");
  await page.locator("#instruction-rules summary").click();
  await expect(page.locator("#instruction-rules pre")).toContainText("actual command output");
  await expect(page.locator("#instruction-rules")).toContainText("Illustrative");
});

test("CV readers can switch between detailed and one-page versions", async ({ page, request }) => {
  await page.goto("/resume/");
  const versions = page.getByRole("navigation", { name: "CV versions" });
  await expect(versions.getByRole("link", { name: "Detailed CV", exact: true })).toHaveAttribute("aria-current", "page");
  await expect(page.locator(".resume-sheet")).toHaveAttribute("data-variant", "detailed");
  for (const [label, path] of [
    ["Detailed PDF (2 pages)", "/luisa-santo-cv-detailed.pdf"],
    ["One-page PDF", "/luisa-santo-cv.pdf"],
  ]) {
    await expect(page.getByRole("link", { name: label, exact: true })).toHaveAttribute("href", path);
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  }
  await versions.getByRole("link", { name: "One-page CV", exact: true }).click();
  await expect(page).toHaveURL(/\/resume\/one-page\/$/);
  await expect(page.locator(".resume-sheet")).toHaveAttribute("data-variant", "one-page");
  await expect(page.locator(".resume-sheet")).toContainText("chat bubbles");
  await expect(page.locator(".resume-sheet")).toContainText("instruction files");
  await expect(page.getByRole("navigation", { name: "CV versions" }).getByRole("link", { name: "One-page CV", exact: true })).toHaveAttribute("aria-current", "page");
  await page.getByRole("navigation", { name: "CV versions" }).getByRole("link", { name: "Detailed CV", exact: true }).click();
  await expect(page).toHaveURL(/\/resume\/$/);
});

test("public numbers include their measurement scope", async ({ page }) => {
  await page.goto("/");
  const metrics = page.locator(".quality-metrics");
  await expect(metrics).toContainText("63");
  await expect(metrics).toContainText("end-of-2024");
  await expect(metrics).toContainText("17");
  await expect(metrics).toContainText("July 2026");
  await expect(metrics).toContainText("seven");
  await expect(metrics).toContainText("2024 and 2025");
  await expect(page.getByLabel("Product scale context")).toContainText("product");
});
