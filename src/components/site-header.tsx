"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const links = [
  { href: "/#work", label: "Selected work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#ai-work", label: "AI workflow" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLElement>(null);

  useEffect(() => {
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, []);

  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Luisa Santo home">
          <span className="monogram" aria-hidden="true">ls.</span>
          <span>Luisa Santo<span className="brand-caption">iOS engineer</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="nav-resume" href="/resume/">View CV <span aria-hidden="true">+</span></Link>
        </nav>
        <details className="mobile-menu" ref={menu}>
          <summary ref={toggle}>Menu <span className="menu-mark" aria-hidden="true">+</span></summary>
          <nav aria-label="Mobile">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>)}
            <Link href="/resume/" onClick={closeMenu}>View CV</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
