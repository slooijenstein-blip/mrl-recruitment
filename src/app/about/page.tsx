import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/images/logo.png";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { aboutParagraphs, aboutQuote } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MRL was born to make hiring personal rather than transactional. A select number of clients, science-based assessments, and introductions made with intent.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About Us">
        <p>{aboutParagraphs[0]}</p>
      </PageIntro>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <blockquote className="max-w-4xl text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-snug tracking-tight">
          {aboutQuote}
        </blockquote>

        <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-5 text-[17px] leading-8 text-ink/90">
            {aboutParagraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="relative min-h-[320px] bg-canvas sm:min-h-[460px]">
            <Image
              src={logo}
              alt="MRL Recruitment"
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-contain p-10 sm:p-16"
            />
          </div>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
