import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, DownloadIcon, ExternalIcon } from "@/components/icons";
import { CaseVisual } from "@/components/case-visual";
import { additionalExperience, aiCourses, aiWorkflow, caseStudies, education, experience, portfolioBrief, profile, quality, recommendations, researchProjects } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Luisa Santo / iOS engineer</p>
          <h1 id="hero-title">I build iOS apps<br /><em>at Microsoft.</em></h1>
          <p className="hero-description">I work on GroupMe. Previously, I built iOS features for Microsoft Teams and contributed to the Peacock app launch.</p>
          <div className="button-row">
            <a className="button button-primary" href="#work">Explore my work <ArrowIcon /></a>
            <a className="button button-text" href={profile.resumePath} download>Download CV <DownloadIcon /><span className="sr-only"> (PDF)</span></a>
          </div>
          <p className="hero-footnote">Swift, Objective-C and UIKit.</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="art-coordinate">VIEW &rarr; STATE &rarr; DATA</span>
          <div className="art-window art-window-back"><span className="window-dots"><i /><i /><i /></span><div className="art-code"><span /><span /><span /><span /></div></div>
          <div className="art-window art-window-front">
            <span className="art-symbol">ls.</span>
            <div className="art-title">View. State. Data.</div>
            <div className="art-subtitle">The parts behind a screen.</div>
            <div className="art-pills"><span>Swift</span><span>UIKit</span></div>
            <div className="art-bottom"><span className="status-dot" /> Components and tests <span>+</span></div>
          </div>
          <span className="art-stamp">Native<br /><em>iOS.</em></span>
        </div>
      </section>

      <div className="product-strip">
        <div className="container product-strip-inner"><span>Selected product experience</span><strong>GroupMe</strong><strong>Microsoft Teams</strong><strong>Peacock</strong><strong>Sky</strong></div>
      </div>

      <section className="section container" id="work" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">What I&apos;ve<br /><em>worked on.</em></h2></div><p>The problem, my contribution, and the implementation choices for each project.</p></div>
        <div className="work-grid">
          {caseStudies.map((study) => (
            <article className="work-card" key={study.slug}>
              <CaseVisual kind={study.visual} />
              <div className="work-card-content">
                <div className="work-meta"><span>{study.product}</span><span>{study.number}</span></div>
                <h3><Link href={`/work/${study.slug}/`}>{study.title}<ArrowIcon /></Link></h3>
                <p>{study.summary}</p>
                <ul className="tags" aria-label="Focus areas">{study.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <aside className="scale-note" aria-label="Product scale context">
          <div><span className="scale-number">1.2B+</span><span>profile views across GroupMe in 2025</span></div>
          <p>I owned iOS delivery of redesigned profiles. This is the product&apos;s publicly reported scale, not an individual growth claim. <a href={profile.publicSource}>Read the public source <ExternalIcon /></a></p>
        </aside>
      </section>

      <section className="quality-section" aria-labelledby="quality-title">
        <div className="container quality-grid">
          <div><p className="eyebrow">Alongside feature work</p><h2 id="quality-title">Tests, accessibility<br /><em>and mentoring.</em></h2><p>I build test infrastructure, fix accessibility issues, and help interns plan, implement and explain their work.</p></div>
          <div className="quality-metrics">{quality.map((item) => <div className="quality-item" key={item.label}><strong>{item.value}</strong><div><h3>{item.label}</h3><p>{item.detail}</p></div></div>)}</div>
        </div>
      </section>

      <section className="section container" id="experience" aria-labelledby="experience-title">
        <div className="section-heading"><div><p className="eyebrow">02 / Experience</p><h2 id="experience-title">Work and<br /><em>project experience.</em></h2></div><p>Microsoft, the Peacock launch, and the move from backend engineering to iOS at Talkdesk.</p></div>
        <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.team}><p className="timeline-date">{item.period}</p><div><h3>{item.team}</h3><p className="timeline-focus">{item.focus}</p></div><p>{item.description}</p></article>)}</div>
        <p className="timeline-note">Current Microsoft title: {profile.role}.</p>
        <section className="additional-experience" id="other-experience" aria-labelledby="other-experience-title">
          <h3 id="other-experience-title">Other experience</h3>
          <p>{additionalExperience.teaching}</p>
          <p>{additionalExperience.projects}</p>
        </section>
        <section className="additional-experience" aria-labelledby="education-title">
          <h3 id="education-title">Education</h3>
          <p><strong>{education.institution}</strong><br />{education.qualifications}</p>
        </section>
        <section className="additional-experience" aria-labelledby="credentials-title">
          <h3 id="credentials-title">Recent AI coursework</h3>
          <ul className="credential-list">{aiCourses.map((course) => (
            <li key={course.title}><span>{course.title}</span><span>{course.issuer} / {course.issued}</span></li>
          ))}</ul>
          <a className="text-link" href={profile.credentials}>Credentials on LinkedIn <ExternalIcon /></a>
        </section>
      </section>

      <section className="research-section container" id="research" aria-labelledby="research-title">
        <div className="section-heading"><div><p className="eyebrow">Research background</p><h2 id="research-title">Research and<br /><em>early projects.</em></h2></div><p>Speech-to-text for archives and space-mission design. The Alpbach programme was organised by FFG and co-sponsored by ESA.</p></div>
        <div className="research-grid">{researchProjects.map((project) => (
          <article className="research-card" key={project.title}>
            <p className="eyebrow">{project.context}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a className="text-link" href={project.sourceUrl}>{project.sourceLabel} <ExternalIcon /></a>
            {"photoUrl" in project && <><a className="text-link" href={project.photoUrl}>View the Team Blue photograph on ESA <ExternalIcon /></a><p className="research-credit">Photo credit: {project.photoCredit}. Photograph hosted by ESA.</p></>}
          </article>
        ))}</div>
      </section>

      <section className="ai-work-section container" id="ai-work" aria-labelledby="ai-work-title">
        <div className="section-heading"><div><p className="eyebrow">AI-assisted engineering</p><h2 id="ai-work-title">How I direct<br /><em>AI-assisted work.</em></h2></div><p>Clear requirements, useful context and checks on the result. The tools help with the work; they do not decide what is true or ready to publish.</p></div>
        <div className="ai-workflow-grid">{aiWorkflow.map((step) => (
          <article key={step.title}><h3>{step.title}</h3><p>{step.description}</p></article>
        ))}</div>
        <details className="prompt-example">
          <summary>A public example brief</summary>
          <p>Illustrative example based on this portfolio workflow, not a verbatim internal prompt.</p>
          <pre>{portfolioBrief}</pre>
        </details>
      </section>

      <section className="recommendations-section container" id="recommendations" aria-labelledby="recommendations-title">
        <div className="section-heading">
          <div><p className="eyebrow">Recommendations</p><h2 id="recommendations-title">People I&apos;ve worked with.</h2></div>
        </div>
        <div className="recommendations-grid">
          {recommendations.map((recommendation) => (
            <figure className="recommendation-card" key={recommendation.name}>
              <blockquote><p>&ldquo;{recommendation.quote}&rdquo;</p></blockquote>
              <figcaption><strong>{recommendation.name}</strong><span className="recommendation-role">{recommendation.role}</span><span>{recommendation.context}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="recommendation-source">Selected excerpts from professional recommendations. <a href={profile.recommendations}>Full recommendations on LinkedIn <ExternalIcon /></a></p>
      </section>

      <section className="about-section container" id="about" aria-labelledby="about-title">
        <div className="about-monogram" aria-hidden="true"><span>ls.</span><p>Luisa Santo<br />iOS engineer</p></div>
        <div className="about-copy">
          <p className="eyebrow">03 / How I work</p>
          <h2 id="about-title">Code, reviews<br /><em>and a bit about me.</em></h2>
          <p>Much of my work is in existing codebases: separating responsibilities, tracing state changes, and checking what happens when a request fails.</p>
          <p>I also review code and mentor interns. I help them plan components, work through feedback, and explain their technical decisions.</p>
          <p>Outside work, I like fantasy books and retro objects.</p>
          <Link className="text-link" href="/resume/">Read my CV <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
