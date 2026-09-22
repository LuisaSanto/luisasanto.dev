import type { Metadata } from "next";
import { ResumeDocument } from "@/components/resume-document";

export const metadata: Metadata = {
  title: "One-page CV",
  description: "Luisa Santo's one-page iOS engineering CV: product ownership at Microsoft, chat UI, AI experiences, Teams architecture, testing and mentoring.",
  alternates: { canonical: "/resume/one-page/" },
  openGraph: {
    title: "Luisa Santo | One-page CV",
    description: "A concise iOS engineering CV, with a detailed version also available.",
    url: "/resume/one-page/",
    type: "website",
  },
};

export default function OnePageResume() {
  return <ResumeDocument variant="one-page" />;
}
