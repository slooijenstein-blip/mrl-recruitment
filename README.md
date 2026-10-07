# MRL Recruitment

Public marketing site for MRL Recruitment Agency (MRL Recruitment Consultancy).

Built with Next.js (App Router), TypeScript, and Tailwind CSS. It is a static-friendly marketing site: no database, no authentication, and no third-party backend.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, services, mission, booking/contact call to action |
| `/services` | Recruitment, RPO, and HR services |
| `/about` | About Us |
| `/contact` | Contact form (opens the visitor’s email app) and direct details |
| `/faqs` | Frequently asked questions |
| `/booking` | Book a meeting |

## Contact details used on the site

- Email: slooijenstein@mrlrecruitmentagency.com
- Phone: +34 632 197 659
- Hours: Monday – Friday, 10am – 6pm
- LinkedIn: https://www.linkedin.com/company/mrl-recruitment-consultancy

The contact form does not store submissions. **Send** opens a `mailto:` message. The booking button does the same unless you set a scheduling link.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Framework preset: **Next.js**.
4. Leave the build command as `npm run build` and the install command as `npm install`.
5. Do not set a custom output directory. Vercel should use the default Next.js output.
6. Deploy.

Optional environment variables (Project Settings → Environment Variables):

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, for example `https://mrlrecruitmentagency.com`. Used for metadata, sitemap, and Open Graph. |
| `NEXT_PUBLIC_BOOKING_URL` | Scheduling link, for example a Calendly URL. When set, Booking and “Book a meeting” open this URL in a new tab. When unset, those links open an email to the address above. |

Redeploy after changing either variable. `NEXT_PUBLIC_*` values are read at build time.

## Images

Office photography is from Unsplash, used under the [Unsplash License](https://unsplash.com/license):

- Hero: https://unsplash.com/photos/1604328698692-f76ea9498e76
- Mission: https://unsplash.com/photos/1568992687947-868a62a9f521
- About: https://unsplash.com/photos/1497366216548-37526070297c

The gold MRL mark in the header, footer pages, and favicon is the agency logo.
