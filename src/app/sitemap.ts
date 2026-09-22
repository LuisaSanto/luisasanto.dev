import type { MetadataRoute } from "next";
import { caseStudies, profile } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/resume/", ...caseStudies.map((study) => `/work/${study.slug}/`)]
    .map((path) => ({ url: new URL(path, profile.publicPortfolio).href }));
}
