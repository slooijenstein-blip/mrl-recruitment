import type { Metadata } from "next";
import Link from "next/link";
import { outlineButtonClass } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="text-sm tracking-[0.18em] uppercase">404</p>
      <h1 className="mt-4 text-5xl font-medium tracking-tight">This page is not here</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink/90">
        The link may be out of date. Head back to the homepage, or contact us directly.
      </p>
      <Link href="/" className={`${outlineButtonClass} mt-8`}>
        Home
      </Link>
    </section>
  );
}
