# Content to confirm with Petra

The site was rebuilt from the previous petraalderman.com content, LSE's staff
page and Crossref (the DOI registry). Everything below is a point where those
sources were out of date, disagreed, or could not be checked.

## Changed from the old site — please confirm

- **Book year.** Listed as "Abingdon: Routledge, 2024" (as on the old site).
  Crossref and LSE's staff page give 2023. `publications.ts`
- **Journal details updated from Crossref**, replacing "forthcoming"/"online first":
  - *Journal of Current Southeast Asian Affairs* 43, no. 1 (April 2024): 3–25, with
    the published title "Autocratic Electoral Management" (old list said "Authoritarian").
  - *Geopolitics* 29, no. 1 (January 2024): 288–318.
  - *Politics* 43, no. 4 (November 2023): 505–519, with the published title
    "Election Commissions…" (old list said "Electoral Commissions").
  - *Asian Studies Review* 42, no. 4 (2018): 682–700 (old list said "December 2018: 1-19").
- **Three journal articles added** (found on Crossref, not on the old list):
  - *International Affairs* 102, no. 6 (2026), with Jonathan Fisher.
  - *International Political Science Review* 46, no. 5 (2025).
  - *Asian Survey* 64, no. 5 (2024), with McCargo, Gerstl and Iocovozzi. Crossref
    records the title only as "All About China?" — **add the subtitle** if there is one.
- **Five articles in The Conversation added** to Media (2024–2025), from Crossref.
- **Podcasts intro** now uses the past tense ("I founded… I was also a regular host"),
  taken from Petra's own later wording. The empty "People, Power, Politics — coming
  soon" episode group was removed; add episodes in `pages.ts`.
- **About → Other activities.** Three roles were listed as "– Present" in 2023
  (Nordic Asia Podcast, Sinophone Borderlands survey, TS4 committee). They now read
  "from <date>" with no claim about being current. Add end dates or "present".
- **Research → Southeast Asia.** Removed the paragraph beginning "I am currently
  working on a research article that examines… the US-China rivalry", which was
  written in 2023. Replace with current work if wanted.
- **Events.** Removed "Book launch events coming soon". Nothing is listed after
  2022 — add recent talks in `events.ts`.

## Research theme tags — please check

Every publication, media item and talk has been tagged with a research theme
(elections, nation branding, Southeast Asia) so related work can be shown on the
Research page. The tags are a reading of the titles, not Petra's own
classification. Three items are deliberately untagged: the Westminster Foundation
for Democracy report and the two June 2023 CEDAR blog posts. Change any tag by
editing the `themes: [...]` line on the entry.

## New pages — wording to approve

These pages were assembled from content already on the site, but some linking
sentences are new and written in Petra's name.

- **Policy page intro** (`pages.ts` → `policy.intro`). The first clause ("Alongside
  my academic research, I work with governments and international organisations…")
  is new; the rest is from her existing text.
- **Short biography** on the media page (`pages.ts` → `press.bio`). Third person,
  built only from facts elsewhere on the site.
- **Areas of expertise** on the media page (`pages.ts` → `press.topics`). Derived
  from her research themes and stated expertise.
- **Awards and languages** on About and the CV come from her public LinkedIn
  profile. The five awards have no years; add them if wanted.
- **Book page.** The chapter list and page ranges are from Crossref. The series
  name "Rethinking Southeast Asia" was read off the cover image. "The argument"
  reuses her Nation Branding research text, not the publisher's blurb.
- **Open access badges** are on the three articles Crossref lists with a Creative
  Commons licence (International Affairs, IPSR, JCSEA). Others may also be free to read.

## Could not verify

- **France24.** The home page intro says "appeared on BBC, France24, and ABC
  Australia", but no France24 item is on the Media page. Add it to `media.ts`.
- **La Croix interview (16 May 2023)** has no link.
- **Positions (About).** Birmingham 2021–2025 and Copenhagen 2019–2021 come from the
  old About page; the LSE start date is not stated anywhere, so it shows "Current".

## Still to add

- Contact email and any other contact details (`site.ts` → `contact.email`).
- Newer photographs (`public/images/`). The current portrait is the LinkedIn profile image.
- Live domain: petraalderman.com has lapsed; update `site.url` if it changes.
