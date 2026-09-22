import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const versions = [
  { route: "/resume/", variant: "detailed", pdf: "luisa-santo-cv-detailed.pdf", markdown: "Luisa_Santo_CV_Detailed.md" },
  { route: "/resume/one-page/", variant: "one-page", pdf: "luisa-santo-cv.pdf", markdown: "Luisa_Santo_CV.md" },
];

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await mkdir(new URL("../docs/cv/", import.meta.url), { recursive: true });
  for (const version of versions) {
    const response = await page.goto(`http://127.0.0.1:4173${version.route}`, { waitUntil: "networkidle" });
    if (!response?.ok()) throw new Error(`Resume preview failed for ${version.route}: HTTP ${response?.status()}`);
    const sheet = page.locator(".resume-sheet");
    if (await sheet.getAttribute("data-variant") !== version.variant) {
      throw new Error(`Unexpected CV version at ${version.route}`);
    }
    const markdown = await sheet.evaluate((element) => {
      function inline(block) {
        return Array.from(block.childNodes, (node) => {
          if (node.nodeType === Node.TEXT_NODE) return node.textContent;
          if (node instanceof HTMLAnchorElement) return `[${node.textContent.trim()}](${node.href})`;
          if (node instanceof HTMLElement) return inline(node);
          return "";
        }).join("");
      }
      function requiredText(parent, selector) {
        const match = parent.querySelector(selector);
        if (!match?.textContent?.trim()) throw new Error(`Missing CV content: ${selector}`);
        return match.textContent.trim();
      }
      const header = element.querySelector(".resume-header");
      if (!header) throw new Error("CV header is missing.");
      const lines = [
        ["---", `title: ${JSON.stringify(requiredText(header, "h1"))}`, `subtitle: ${JSON.stringify(requiredText(header, "p"))}`, "lang: en-US", "---"].join("\n"),
        Array.from(header.querySelectorAll("a"), (link) => `[${link.textContent.trim()}](${link.href})`).join(" | "),
      ];
      for (const section of element.querySelectorAll(":scope > section")) {
        lines.push(`# ${requiredText(section, "h2")}`);
        for (const block of section.children) {
          if (block.matches("p")) lines.push(inline(block).trim());
          if (block.matches("ul")) lines.push(Array.from(block.children, (item) => `- ${inline(item).trim()}`).join("\n"));
          if (block.matches(".resume-job")) {
            lines.push(`## ${requiredText(block, "h3")} | ${requiredText(block, ".resume-job-heading p")}`);
            lines.push(Array.from(block.querySelectorAll("li"), (item) => `- ${inline(item).trim()}`).join("\n"));
          }
        }
      }
      const source = element.querySelector(".resume-source");
      if (!source) throw new Error("CV source attribution is missing.");
      lines.push(inline(source).trim());
      return `${lines.join("\n\n")}\n`;
    });
    await page.emulateMedia({ media: "print" });
    await page.pdf({
      path: fileURLToPath(new URL(`../public/${version.pdf}`, import.meta.url)),
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
      outline: true,
    });
    await writeFile(new URL(`../docs/cv/${version.markdown}`, import.meta.url), markdown);
    console.log(`Exported public/${version.pdf} and docs/cv/${version.markdown} from ${version.route}`);
  }
} finally {
  await browser.close();
}
