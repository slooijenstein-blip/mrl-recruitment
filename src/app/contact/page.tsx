import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactFormFields } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { contactIntro } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MRL Recruitment Consultancy. Send a note, email slooijenstein@mrlrecruitmentagency.com, or call +34 632 197 659.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pb-20 lg:pb-28">
      <PageIntro title="Contact">
        <p>{contactIntro}</p>
      </PageIntro>

      <div className="mx-auto mt-12 grid w-full max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:gap-20 lg:px-12">
        <Suspense fallback={<ContactFormFields />}>
          <ContactForm />
        </Suspense>
        <aside className="h-fit border border-ink/15 px-6 py-8 sm:px-8 lg:sticky lg:top-32">
          <h2 className="text-2xl font-medium tracking-tight">Or contact us directly</h2>
          <address className="mt-6 space-y-2 text-[15px] not-italic leading-7">
            <p>
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a href={`tel:${site.phoneTel}`} className="hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          </address>
          <h3 className="mt-8 text-lg font-medium">Hours</h3>
          <p className="mt-2 text-[15px] leading-7">
            {site.hours[0]}
            <br />
            {site.hours[1]}
          </p>
          <p className="mt-8">
            <a
              href={site.linkedin}
              className="text-[15px] underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </aside>
      </div>
    </div>
  );
}
