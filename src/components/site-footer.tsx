import Link from "next/link";
import { profile } from "@/lib/content";
import { ExternalIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s talk<br /><em>about iOS.</em></h2>
            <p>Reach me on LinkedIn about iOS roles or the projects here.</p>
          </div>
          <div className="contact-links">
            <a href={profile.linkedin}>Connect on LinkedIn <ExternalIcon /></a>
            <a href={profile.github}>Find me on GitHub <ExternalIcon /></a>
            <Link href="/resume/">Read my CV <ExternalIcon /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="footer-signature">Luisa Santo</Link>
          <p>A personal portfolio. Views are my own.</p>
          <a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </footer>
  );
}
