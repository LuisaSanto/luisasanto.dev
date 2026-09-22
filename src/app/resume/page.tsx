import type { Metadata } from "next";
import { ResumeDocument } from "@/components/resume-document";

export const metadata: Metadata = {
  title: "Detailed CV",
  description: "Luisa Santo's detailed iOS engineering CV: GroupMe messaging and AI experiences, Teams architecture, Peacock, Talkdesk, technical leadership and AI-assisted delivery.",
  alternates: { canonical: "/resume/" },
  openGraph: {
    title: "Luisa Santo | Detailed CV",
    description: "iOS engineering, product ownership, accessibility, mentoring and AI-assisted delivery. Detailed and one-page versions available.",
    url: "/resume/",
    type: "website",
  },
};

export default function ResumePage() {
  return <ResumeDocument variant="detailed" />;
}
