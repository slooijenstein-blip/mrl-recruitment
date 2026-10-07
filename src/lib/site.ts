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

const meetingBody = [
  "Hello MRL Recruitment,",
  "",
  "I would like to book a meeting.",
  "",
  "Name:",
  "Company:",
  "Phone:",
  "What I need help with:",
  "",
  "Thank you.",
].join("\n");

export const bookingHref =
  customBookingUrl && customBookingUrl.length > 0
    ? customBookingUrl
    : `mailto:${site.email}?subject=${encodeURIComponent("Meeting request")}&body=${encodeURIComponent(meetingBody)}`;

export const bookingIsExternal = bookingHref.startsWith("http");

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
