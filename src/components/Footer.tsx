import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 md:gap-8 lg:px-12 lg:py-20">
        <div>
          <h2 className="text-xl font-medium">Hours</h2>
          <p className="mt-4 text-[15px] leading-7">
            {site.hours[0]}
            <br />
            {site.hours[1]}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Follow</h2>
          <p className="mt-4">
            <a
              href={site.linkedin}
              className="text-[15px] underline underline-offset-4 hover:text-ink/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div>
          <p className="text-3xl font-medium tracking-wide">MRL</p>
          <address className="mt-4 space-y-1 text-[15px] not-italic leading-7">
            <p>
              <a className="break-all hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
          </address>
        </div>
      </div>
      <p className="mx-auto w-full max-w-[1440px] px-5 pb-10 text-sm text-muted sm:px-8 lg:px-12">
        © 2026 {site.legalName}
      </p>
    </footer>
  );
}
