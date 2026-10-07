import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { BookingLink } from "@/components/BookingLink";
import { bookingCopy } from "@/lib/content";
import { bookingEmbedSrc, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description:
    "Book a meeting with MRL Recruitment Consultancy. Tell us about the talent you want to add, and we will confirm a time.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
      <Image src={logo} alt="" width={141} height={96} />
      <h1 className="mt-10 text-[clamp(2.6rem,5vw,4.25rem)] font-medium leading-none tracking-tight">
        {bookingCopy.title}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90">{bookingCopy.body}</p>
      {bookingEmbedSrc ? (
        <div className="mt-10 w-full overflow-hidden border border-ink/10">
          <iframe
            title="Book a meeting with MRL Recruitment"
            src={bookingEmbedSrc}
            className="h-[780px] w-full bg-canvas"
          />
        </div>
      ) : (
        <div className="mt-10">
          <BookingLink className="inline-flex items-center justify-center border border-ink bg-transparent px-8 py-3.5 text-base tracking-wide text-ink transition-colors hover:bg-ink hover:text-canvas">
            Book a meeting
          </BookingLink>
        </div>
      )}
      <p className="mt-6 max-w-xl text-sm leading-6 text-ink/80">
        {bookingEmbedSrc
          ? "Choose a time below. The calendar invite includes a Google Meet link."
          : "This opens the scheduler in a new tab."}
      </p>
      <p className="mt-8 text-sm leading-6 text-ink/70">
        {site.hours[0]}, {site.hours[1]}
      </p>
      <p className="mt-3 text-sm leading-6">
        <Link href="/contact" className="underline underline-offset-4">
          Prefer to write first? Contact us
        </Link>
      </p>
    </section>
  );
}
