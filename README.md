# petraalderman.com

Academic website for Dr Petra Alderman. Built with [Astro](https://astro.build) as a
fully static site and deployed on Netlify. The only JavaScript is two small scripts: the
publication theme filter and click-to-play for video and audio.

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
| Logos in the "As featured on" strip                | `src/content/site.ts`         |
| Institutions and coats of arms in the hero         | `src/content/site.ts`         |
| Book page: chapters, reviews                       | `src/content/site.ts` → `book` |
| Awards, languages                                  | `src/content/pages.ts` → `about` |
| Policy page intro and advisory roles               | `src/content/pages.ts` → `policy` |
| Media page: topics, short bio, headshot            | `src/content/pages.ts` → `press` |
| The list of research themes                        | `src/content/themes.ts`       |

Each file starts with a short note on its fields. In general: copy an existing
entry, paste it into the list, change the details, save.

- **Sorting is automatic.** Publications sort by `year`, media and events by `date`
  (`YYYY-MM-DD`), newest first. Put new entries anywhere in the list.
- **Research themes.** Add `themes: ['elections']` (or `'nation-branding'`,
  `'southeast-asia'`, or several) to any publication, media item or event. Tagged
  items appear as related work under that theme on the Research page, and
  publications can be filtered by theme.
- **Latest panel.** The band under the home page hero fills itself: the newest
  publication (highest `year`; for a tie, whichever is listed first in the file),
  the newest commentary item, and the next upcoming event if there is one.
- **Video.** Give a media item a YouTube `url` and it becomes a click-to-play video.
- **Podcast audio.** Give an episode an `audio` id (see the note in `pages.ts`) and
  it gets a Listen button. Nothing loads from YouTube or Megaphone until a visitor
  clicks play, apart from the YouTube thumbnail image.
- **CV.** The `/cv/` page is assembled from the content files, so it is always in
  step with the site. Its button opens the browser's print dialog, where "Save as
  PDF" produces a clean CV without the site header or footer.
- **Policy page.** Briefings (`events.ts`, kind `briefing`) and policy reports
  (`publications.ts`, kind `report`) appear there automatically.
- **Publication extras.** `openAccess: true` adds an "Open access" badge;
  `abstract: '…'` adds an expandable abstract. Every entry has a "Copy citation" button.
- **Book reviews.** Add entries to `book.reviews` in `site.ts` and a Reviews section
  appears on the book page.
- **Google Scholar.** Paste the profile URL into `links.googleScholar` in `site.ts`.
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
