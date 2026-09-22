import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404 / A small detour</p>
      <h1>This page isn&apos;t here.</h1>
      <p>The selected work and CV are a better place to start.</p>
      <Link className="button button-primary" href="/">Back to the portfolio <ArrowIcon /></Link>
    </section>
  );
}
