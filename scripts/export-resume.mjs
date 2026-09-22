import { chromium } from "@playwright/test";
import { fileURLToPath } from "node:url";

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  const response = await page.goto("http://127.0.0.1:4173/resume/", { waitUntil: "networkidle" });
  if (!response?.ok()) throw new Error(`Resume preview failed: HTTP ${response?.status()}`);
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: fileURLToPath(new URL("../public/luisa-santo-cv.pdf", import.meta.url)),
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true,
    outline: true,
  });
  console.log("Exported public/luisa-santo-cv.pdf from the local resume page.");
} finally {
  await browser.close();
}
