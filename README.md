# greenest

Marketing website for **greenest**, a nature-led mountain homestay currently in planning and construction in Kanthalloor, Kerala.

- Production domain: [greenestco.in](https://greenestco.in)
- Email: [greenest5000@gmail.com](mailto:greenest5000@gmail.com)
- WhatsApp / phone: [+91 62820 77926](https://wa.me/916282077926)
- Current stage: planning & construction

## Design direction

The site uses a cinematic hospitality style inspired by the supplied Wix reference: full-bleed landscape photography, a translucent floating navigation bar, editorial serif typography, organic green/cream tones, soft shadows and rounded calls to action. The investor and blog tabs are intentionally excluded from primary and footer navigation.

The home page includes GSAP-powered entrance, scroll-reveal and parallax sequences. Pointer movement adds subtle hero depth and perspective interaction to experience cards. Motion respects the operating system's `prefers-reduced-motion` setting.

## Content and assets

Project facts and destination content come from the original greenest project. Selected supplied imagery and the supplied GN logo are copied into:

- `public/images/greenest-mountain-sunrise.png` — home hero and social preview
- `public/images/greenest-interior.png` — envisioned mountain-home interior
- `public/images/mountain-view-garden.jpg` — contact page hero
- `public/images/kanthalloor-tea-estate.jpg` — Kanthalloor landscape
- `public/images/fireplace-retreat.jpg` — waiting-list hero
- `public/brand/greenest-mark.png` — navigation and footer brand mark
- `public/brand/greenest-brand-footer-transparent-v2.png` — transparent GreeNest Associates footer lockup
- `app/favicon.ico` — browser favicon supplied in the device-icon package
- `app/icon1.png` and `app/icon2.png` — 32px and 16px browser/search icons
- `app/apple-icon.png` — 180px Apple touch icon
- `public/icons/android-chrome-192x192.png` — Android/PWA icon
- `public/icons/android-chrome-512x512.png` — high-resolution Android/PWA icon
- `public/site.webmanifest` — installable-site metadata and device icon mapping

## Routes

- `/` — redesigned brand and project overview
- `/about` — story, vision and values
- `/kanthalloor` — destination guide
- `/waitlist` — early guest registration
- `/contact` — contact details, enquiry form and map

Legacy investor and blog content is not linked from the site navigation or sitemap.

## Development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Quality checks:

```bash
npm run lint
npm run build
```

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- GSAP with ScrollTrigger
- `next/image` and `next/font`
- Vercel Speed Insights

## SEO and deployment

Global metadata, structured data, Open Graph imagery, device-specific icons, the web manifest, `robots.txt`, and the generated sitemap all use `https://greenestco.in`. Search metadata covers high-intent location, accommodation, family travel, farm-stay, eco-tourism, and near-Munnar search phrases. Deploy the Next.js application to a compatible Node.js host or Vercel, then point the production domain to that deployment.
