import Link from "next/link";
import { DownloadIcon, ExternalIcon } from "@/components/icons";
import { additionalExperience, aiCourses, education, profile, resumeAiPractice, resumeGroups, resumeLeadership, resumeSkills, resumeSummary } from "@/lib/content";

type ResumeVariant = "detailed" | "one-page";
type ResumeGroup = (typeof resumeGroups)[number];

function ResumeJobs({ groups, detailed }: { groups: readonly ResumeGroup[]; detailed: boolean }) {
  return groups.map((group) => (
    <div className="resume-job" key={group.title}>
      <div className="resume-job-heading"><h3>{group.title}</h3><p>{group.period}</p></div>
      <ul>{(detailed ? group.detailedBullets : group.bullets).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
    </div>
  ));
}

export function ResumeDocument({ variant }: { variant: ResumeVariant }) {
  const detailed = variant === "detailed";

  return (
    <div className="resume-wrapper container">
      <div className="resume-toolbar">
        <div>
          <p className="eyebrow">Choose the level of detail</p>
          <nav className="resume-versions" aria-label="CV versions">
            <Link href="/resume/" aria-current={detailed ? "page" : undefined}>Detailed CV</Link>
            <Link href="/resume/one-page/" aria-current={!detailed ? "page" : undefined}>One-page CV</Link>
          </nav>
        </div>
        <div className="resume-downloads">
          <a className="button button-primary" href={profile.detailedResumePath} download>Detailed PDF (2 pages) <DownloadIcon /></a>
          <a className="button button-text" href={profile.resumePath} download>One-page PDF <DownloadIcon /></a>
        </div>
      </div>
      <article className="resume-sheet" data-variant={variant} aria-labelledby="resume-name">
        <header className="resume-header">
          <div><h1 id="resume-name">{profile.name}</h1><p>iOS Engineer | Consumer Products &amp; AI Experiences</p></div>
          <div className="resume-links">
            <a href={profile.publicPortfolio}>www.luisasanto.dev <ExternalIcon /></a>
            <a href={profile.linkedin}>linkedin.com/in/luisa-santo <ExternalIcon /></a>
            <a href={profile.github}>github.com/LuisaSanto <ExternalIcon /></a>
          </div>
        </header>
        <section><h2>Profile</h2><p>{resumeSummary}</p></section>
        {detailed && <section><h2>Technical skills</h2><p>{resumeSkills}</p></section>}
        <section>
          <h2>{detailed ? "Microsoft: product engineering" : "Engineering experience"}</h2>
          <ResumeJobs groups={detailed ? resumeGroups.slice(0, 2) : resumeGroups} detailed={detailed} />
        </section>
        {detailed && (
          <section className="resume-page-break">
            <h2>Earlier engineering experience</h2>
            <ResumeJobs groups={resumeGroups.slice(2)} detailed />
          </section>
        )}
        <section><h2>Technical leadership</h2><p>{resumeLeadership}</p></section>
        <section><h2>AI-assisted engineering</h2><p>{resumeAiPractice}</p></section>
        <section><h2>Education</h2><p><strong>{education.institution}</strong> | {education.qualifications}</p></section>
        <section>
          <h2>AI coursework</h2>
          {detailed
            ? <ul>{aiCourses.map((course) => <li key={course.title}>{course.title} | {course.issuer}, {course.issued}</li>)}</ul>
            : <p>DeepLearning.AI (2026): {aiCourses.map((course) => course.title).join("; ")}.</p>}
          {detailed && <p><a href={profile.credentials}>Course credentials on LinkedIn</a></p>}
        </section>
        <section id="other-experience">
          <h2>Other experience</h2>
          <p>{additionalExperience.research} {additionalExperience.teaching} {additionalExperience.projects}</p>
          {detailed && <p>Contributed to the JANOS mission concept at the 2015 Alpbach Summer School, organised by FFG and co-sponsored by ESA. Team Blue received Best Technical Case recognition.</p>}
        </section>
        {!detailed && <section><h2>Technical skills</h2><p>{resumeSkills}</p></section>}
        <p className="resume-source">Product-scale source: <a href={profile.publicSource}>GroupMe, 2025 Year in Review</a>. Profile views are product-wide, not an individual growth claim. Test and accessibility counts describe the dated work above, not career totals.</p>
      </article>
    </div>
  );
}
