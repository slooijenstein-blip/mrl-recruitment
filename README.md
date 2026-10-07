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
| `/contact` | Contact form (emails the enquiry) and direct details |
| `/faqs` | Frequently asked questions |
| `/booking` | Book a meeting |

## Contact details used on the site

- Email: slooijenstein@mrlrecruitmentagency.com
- Phone: +34 632 197 659
- Hours: Monday – Friday, 10am – 6pm
- LinkedIn: https://www.linkedin.com/company/mrl-recruitment-consultancy

The contact form does not store submissions on this site. **Send** posts the enquiry to `/api/contact`, which tries to email slooijenstein@mrlrecruitmentagency.com through [FormSubmit](https://formsubmit.co/) with Reply-To set to the visitor. No mail API key is configured. FormSubmit blocks that server call, so the form then posts from the visitor’s browser to the activated alias `https://formsubmit.co/fbc9b65698c1d85ed52a8636ce9a7177`. That alias is already confirmed, so Sam does not need to open another activation email before messages arrive. A successful send returns to `/contact?sent=1` and shows a confirmation. The message includes the visitor’s name, email, and note. Header and page links labeled Booking or “Book a meeting” go to `/booking`, which embeds the Calendly scheduler https://calendly.com/slooijenstein-mrlrecruitmentagency/30min. That event sends a Google Meet link with the invite.

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
| `NEXT_PUBLIC_BOOKING_URL` | Replaces the default Calendly page. A Calendly URL is embedded on `/booking`. Any other `http` link is opened from that page instead. |

Redeploy after changing either variable. `NEXT_PUBLIC_*` values are read at build time.

## Images

Office photography is from Unsplash, used under the [Unsplash License](https://unsplash.com/license):

- Hero: https://unsplash.com/photos/1604328698692-f76ea9498e76
- Mission: https://unsplash.com/photos/1568992687947-868a62a9f521
- About: https://unsplash.com/photos/1497366216548-37526070297c

The gold MRL mark in the header, footer pages, and favicon is the agency logo.
