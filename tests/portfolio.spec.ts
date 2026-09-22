import { expect, test } from "@playwright/test";
import { access } from "node:fs/promises";
import AxeBuilder from "@axe-core/playwright";
import { aiCourses, caseStudies, profile, recommendations } from "../src/lib/content";

const routes = ["/", ...caseStudies.map((study) => `/work/${study.slug}/`), "/resume/"];

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
  await expect(page.getByRole("link", { name: "Download CV (PDF)" })).toHaveAttribute("href", profile.resumePath);
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
  await page.goto("/");
  const text = await page.locator("main").innerText();
  expect(text).not.toMatch(/mixpanel\.com|teams\.microsoft\.com|linear\.app|@microsoft\.com|dev\.azure\.com/);
  expect(thirdPartyRequests).toEqual([]);
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
});

for (const route of ["/", "/resume/"]) {
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
  await page.locator(".prompt-example summary").click();
  const example = page.locator(".prompt-example");
  await expect(example.getByText(/Illustrative example/)).toBeVisible();
  await expect(example.locator("pre")).toContainText("Do not deploy");
  await expect(example.locator("pre")).toContainText("keyboard navigation");
  await expect(example.locator("pre")).toContainText("ask before changing publication scope");
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
