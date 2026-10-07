import Link from "next/link";
import { services } from "@/lib/content";

export function ServiceColumns() {
  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-none tracking-tight"
      >
        Our Services
      </h2>
      <div className="mt-14 grid gap-16 md:mt-20 md:grid-cols-3 md:gap-10 lg:gap-16">
        {services.map((service) => (
          <article key={service.id}>
            <h3 className="text-[1.7rem] font-medium leading-tight tracking-tight">
              <Link
                href={`/services#${service.id}`}
                className="hover:underline hover:underline-offset-4"
              >
                {service.title}
              </Link>
            </h3>
            <p className="mt-5 text-[15px] leading-7 text-ink/90">{service.summary}</p>
            <h4 className="mt-8 text-lg font-semibold leading-snug">{service.includedTitle}</h4>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-6 marker:text-ink">
              {service.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
