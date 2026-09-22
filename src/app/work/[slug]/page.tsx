import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseVisual } from "@/components/case-visual";
import { ArrowIcon, ExternalIcon } from "@/components/icons";
import { caseStudies, profile } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type CasePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  const title = `${study.product}: ${study.category}`;
  const path = `/work/${study.slug}/`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: { title, description: study.summary, url: path, type: "website" },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  const nextStudy = caseStudies[(caseStudies.findIndex((item) => item.slug === slug) + 1) % caseStudies.length];

  return (
    <article className="case-page container">
      <Link className="back-link" href="/#work"><span aria-hidden="true">&larr;</span> All selected work</Link>
      <header className="case-heading">
        <p className="eyebrow">{study.product} / {study.category}</p>
        <h1>{study.title}</h1>
        <p className="case-intro">{study.summary}</p>
        <ul className="tags" aria-label="Focus areas">{study.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </header>
      <CaseVisual kind={study.visual} large />
      <div className="case-body">
        <aside className="case-sidebar"><p className="eyebrow">My contribution</p><p>iOS engineering<br />{study.product}</p><p className="case-disclosure">Individual iOS contributions to projects delivered with product, design and engineering teams.</p></aside>
        <div className="case-prose">
          <section><h2>The problem</h2><p>{study.challenge}</p></section>
          <section><h2>My contribution</h2><ul className="contribution-list">{study.ownership.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h2>Technical decisions</h2><div className="decisions">{study.decisions.map((decision) => <div key={decision.title}><h3>{decision.title}</h3><p>{decision.body}</p></div>)}</div></section>
          <section className="outcome"><h2>The result</h2><p>{study.outcome}</p><p className="attribution">{study.context}</p>{study.slug === "groupme-profiles" && <a className="text-link" href={profile.publicSource}>GroupMe&apos;s public year in review <ExternalIcon /></a>}</section>
        </div>
      </div>
      <nav className="next-case" aria-label="Next case study"><div><p className="eyebrow">Next project</p><Link href={`/work/${nextStudy.slug}/`}>{nextStudy.title}<ArrowIcon /></Link></div><span>{nextStudy.product}</span></nav>
    </article>
  );
}
