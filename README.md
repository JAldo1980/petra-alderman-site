# petraalderman.com

Academic website for Dr Petra Alderman. Built with [Astro](https://astro.build) as a
fully static site (plain HTML and CSS, no client-side JavaScript) and deployed on Netlify.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321. `npm run build` writes the finished site to `dist/`.

## Adding and editing content

All content lives in `src/content/`. You never need to touch the page layouts.

| To change…                                         | Edit                          |
| -------------------------------------------------- | ----------------------------- |
| Name, job title, intro, social links, email, menu  | `src/content/site.ts`         |
| Books, articles, chapters, reports                 | `src/content/publications.ts` |
| Interviews, commentary, blog posts                 | `src/content/media.ts`        |
| Talks, briefings, conferences (past and upcoming)  | `src/content/events.ts`       |
| About, Research, Teaching and Podcasts text        | `src/content/pages.ts`        |

Each file starts with a short note on its fields. In general: copy an existing
entry, paste it into the list, change the details, save.

- **Sorting is automatic.** Publications sort by `year`, media and events by `date`
  (`YYYY-MM-DD`), newest first. Put new entries anywhere in the list.
- **Home page picks.** Publications marked `featured: true` appear under
  "Selected publications". "Recent commentary" always shows the four newest
  commentary items from `media.ts`.
- **Upcoming events.** Any event dated today or later appears under "Upcoming" and
  moves to its past section by itself once the date has gone (on the next deploy).
- **Email.** Set `contact.email` in `site.ts` to show an email card on the Contact
  page. Leave it as `''` to hide it.
- **Images** go in `public/images/`. Replace `petra-alderman.png` (square) to change
  the portrait.

## Deploying

`netlify.toml` holds the build settings (`npm run build`, publish `dist`). Connect
the repository in Netlify and every push to `main` deploys.

The site URL used for canonical links is set in two places: `site.url` in
`src/content/site.ts` and `site` in `astro.config.mjs`.

## Content still to confirm

See `CONTENT-REVIEW.md`.
