import Link from "next/link";
import { BookingLink } from "@/components/BookingLink";
import { outlineButtonClass } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 py-20 text-center sm:px-8 lg:py-28">
      <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-tight tracking-tight">
        Let’s talk about your next hire
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/90">
        Whether you need one critical placement or a recruitment team inside your business, we are
        ready to help.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <BookingLink className={outlineButtonClass}>Book a meeting</BookingLink>
        <Link href="/contact" className={outlineButtonClass}>
          Contact us
        </Link>
      </div>
    </section>
  );
}
