import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers from MRL Recruitment on candidate attraction, team hiring, diversity, timelines, and what happens if a hire does not work out.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <PageIntro title="FAQs" />
      <div className="mx-auto w-full max-w-3xl px-5 pb-8 pt-8 sm:px-8">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-b border-ink/15 py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium leading-snug">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="mt-1 text-2xl font-normal leading-none transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-2xl pt-4 text-[15px] leading-7 text-ink/90">{faq.answer}</p>
          </details>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
