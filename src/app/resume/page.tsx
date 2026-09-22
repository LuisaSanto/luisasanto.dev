import type { Metadata } from "next";
import { DownloadIcon, ExternalIcon } from "@/components/icons";
import { additionalExperience, education, profile, resumeGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "CV",
  description: "Luisa Santo's iOS engineering CV: Microsoft, Peacock and Talkdesk, with CERN research, teaching and an MEng in Artificial Intelligence.",
  alternates: { canonical: "/resume/" },
  openGraph: {
    title: "Luisa Santo | CV",
    description: "iOS engineering experience at Microsoft, Peacock and Talkdesk, with research, teaching and AI education.",
    url: "/resume/",
    type: "website",
  },
};

export default function ResumePage() {
  return (
    <div className="resume-wrapper container">
      <div className="resume-toolbar"><p className="eyebrow">The concise version</p><a className="button button-primary" href={profile.resumePath} download>Download PDF <DownloadIcon /></a></div>
      <article className="resume-sheet" aria-labelledby="resume-name">
        <header className="resume-header"><div><h1 id="resume-name">{profile.name}</h1><p>iOS Engineer | Consumer Products &amp; AI Experiences</p></div><div className="resume-links"><a href={profile.github}>github.com/LuisaSanto <ExternalIcon /></a><a href={profile.linkedin}>linkedin.com/in/luisa-santo <ExternalIcon /></a></div></header>
        <section><h2>Profile</h2><p>iOS engineer and Member of Technical Staff at Microsoft, working on GroupMe. Experience includes consumer apps, streaming UI, legacy refactoring, automated testing, accessibility and mentoring.</p></section>
        <section><h2>Engineering experience</h2>{resumeGroups.map((group) => <div className="resume-job" key={group.title}><div className="resume-job-heading"><h3>{group.title}</h3><p>{group.period}</p></div><ul>{group.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>)}</section>
        <section id="other-experience"><h2>Other experience</h2><p>{additionalExperience.research} {additionalExperience.teaching} {additionalExperience.projects}</p></section>
        <section><h2>Technical leadership</h2><p>Mentored two interns across Teams and GroupMe in architecture, implementation and code review. Contributed to onboarding and shared engineering knowledge.</p></section>
        <section><h2>Education</h2><p><strong>{education.institution}</strong> | {education.qualifications}</p></section>
        <section><h2>Technical skills</h2><p>Swift, Objective-C, UIKit, Swift Concurrency, MVVM-C, REST APIs, WebSockets, caching, feature flags, telemetry, XCTest, UI automation, VoiceOver, accessibility and Git.</p></section>
        <p className="resume-source">Product-scale source: <a href={profile.publicSource}>GroupMe, 2025 Year in Review</a>. Profile views are product-wide, not an individual growth claim.</p>
      </article>
    </div>
  );
}
