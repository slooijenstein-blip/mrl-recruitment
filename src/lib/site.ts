export const site = {
  name: "MRL Recruitment",
  legalName: "MRL Recruitment Consultancy",
  tagline: "Smart Hiring, Stronger Teams",
  description:
    "MRL Recruitment Consultancy helps companies fill critical roles, build dedicated recruitment teams, and strengthen the people systems around them.",
  email: "slooijenstein@mrlrecruitmentagency.com",
  phoneDisplay: "+34 632 197 659",
  phoneTel: "+34632197659",
  hours: ["Monday – Friday", "10am – 6pm"],
  linkedin: "https://www.linkedin.com/company/mrl-recruitment-consultancy",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrlrecruitmentagency.com",
} as const;

const customBookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();

/** 30-minute meeting. Location is Google Meet. */
const defaultBookingUrl = "https://calendly.com/slooijenstein-mrlrecruitmentagency/30min";

export const bookingHref =
  customBookingUrl && customBookingUrl.length > 0 ? customBookingUrl : defaultBookingUrl;

export const bookingIsExternal = bookingHref.startsWith("http");

function calendlyEmbedSrc(url: string) {
  const parsed = new URL(url);
  const embedDomain = (() => {
    try {
      return new URL(site.url).host;
    } catch {
      return "mrlrecruitmentagency.com";
    }
  })();

  const params: Record<string, string> = {
    hide_gdpr_banner: "1",
    background_color: "eaeaea",
    text_color: "111111",
    primary_color: "111111",
    embed_domain: embedDomain,
    embed_type: "Inline",
  };

  for (const [key, value] of Object.entries(params)) {
    if (!parsed.searchParams.has(key)) parsed.searchParams.set(key, value);
  }

  return parsed.toString();
}

/** Inline Calendly URL. Null when booking is not a Calendly event. */
export const bookingEmbedSrc = (() => {
  if (!bookingHref.includes("calendly.com")) return null;
  try {
    return calendlyEmbedSrc(bookingHref);
  } catch {
    return null;
  }
})();

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Service" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQs" },
] as const;

export const outlineButtonClass =
  "inline-flex items-center justify-center border border-ink bg-transparent px-5 py-2.5 text-sm tracking-wide text-ink transition-colors hover:bg-ink hover:text-canvas";

export const headerBookingClass =
  "inline-flex shrink-0 items-center justify-center border border-ink bg-transparent px-3 py-2 text-[13px] tracking-wide text-ink transition-colors hover:bg-ink hover:text-canvas min-[400px]:px-4 min-[400px]:text-[15px] sm:px-5";
