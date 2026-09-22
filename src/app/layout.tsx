import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.publicPortfolio),
  title: { default: "Luisa Santo | iOS Engineer", template: "%s | Luisa Santo" },
  description: "iOS engineer at Microsoft, with work on GroupMe, Microsoft Teams and the Peacock app launch, plus earlier backend and iOS development at Talkdesk.",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Luisa Santo | iOS Engineer",
    description: "Luisa Santo, iOS engineer. GroupMe profiles and streaming summaries, Microsoft Teams architecture, and the Peacock iPhone and iPad launch.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
