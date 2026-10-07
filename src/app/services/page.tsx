import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { services, servicesIntro } from "@/lib/content";
import { outlineButtonClass, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Recruitment, recruitment process outsourcing, and HR services from MRL Recruitment Consultancy. Science-based search for critical and confidential hires.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro title="Our Services">
        {servicesIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </PageIntro>

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-8 pt-12 sm:px-8 lg:px-12 lg:pt-16">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-t border-ink/10 py-14 lg:py-16"
            aria-labelledby={`${service.id}-title`}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <h2
                  id={`${service.id}-title`}
                  className="text-3xl font-medium tracking-tight md:text-4xl"
                >
                  {service.title}
                </h2>
                <p className="mt-5 text-[15px] leading-7 text-ink/90">{service.summary}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{service.includedTitle}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-6">
                  {service.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <section className="border border-ink/15 px-6 py-10 sm:px-10" aria-labelledby="service-contact">
          <h2 id="service-contact" className="text-3xl font-medium tracking-tight">
            Talk to us
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/90">
            Tell us about the role, the team, or the hiring process you want to build.
          </p>
          <address className="mt-6 space-y-1 text-[15px] not-italic leading-7">
            <p>
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
          </address>
          <div className="mt-8">
            <Link href="/contact" className={outlineButtonClass}>
              Contact
            </Link>
          </div>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
