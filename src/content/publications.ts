// Publications. To add one, copy an entry of the same `kind`, paste it into the
// list and change the details. Order does not matter: entries are sorted by
// year (newest first) automatically.
//
// Set `featured: true` to also show an entry on the home page.

export type Publication =
  | {
      kind: 'book';
      year: number;
      authors: string;
      title: string;
      /** e.g. 'Abingdon: Routledge, 2024' */
      publisher: string;
      url?: string;
      featured?: boolean;
    }
  | {
      kind: 'article';
      year: number;
      authors: string;
      title: string;
      journal: string;
      /** Everything after the journal name, e.g. '43, no. 1 (April 2024): 3–25' or 'forthcoming' */
      issue: string;
      url?: string;
      featured?: boolean;
    }
  | {
      kind: 'chapter';
      year: number;
      authors: string;
      title: string;
      book: string;
      /** e.g. 'edited by Jonas Claes, 63–69' */
      editors: string;
      publisher: string;
      url?: string;
      featured?: boolean;
    }
  | {
      kind: 'report';
      year: number;
      authors: string;
      title: string;
      /** e.g. 'Westminster Foundation for Democracy, November 2022' */
      publisher: string;
      url?: string;
      featured?: boolean;
    };

export const publications: Publication[] = [
  // ── Books ────────────────────────────────────────────────────────────────
  {
    kind: 'book',
    year: 2024,
    authors: 'Alderman, Petra',
    title:
      'Branding Authoritarian Nations: Political Legitimation and Strategic National Myths in Military-Ruled Thailand',
    publisher: 'Abingdon: Routledge, 2024',
    url: 'https://www.routledge.com/Branding-Authoritarian-Nations-Political-Legitimation-and-Strategic-National-Myths-in-Military-Ruled-Thailand/Alderman/p/book/9781032517551',
  },

  // ── Journal articles ─────────────────────────────────────────────────────
  {
    kind: 'article',
    year: 2026,
    authors: 'Alderman, Petra and Jonathan Fisher',
    title: '“Brand Future” and the future of authoritarianism in the Gulf',
    journal: 'International Affairs',
    issue: '102, no. 6 (November 2026): 2127–2148',
    url: 'https://doi.org/10.1093/ia/iiag160',
  },
  {
    kind: 'article',
    year: 2025,
    authors: 'Alderman, Petra',
    title:
      'Subverting Elections in Thailand: Inclusion and independence in election commission design and practice',
    journal: 'International Political Science Review',
    issue: '46, no. 5 (November 2025): 751–766',
    url: 'https://doi.org/10.1177/01925121241312884',
    featured: true,
  },
  {
    kind: 'article',
    year: 2024,
    authors: 'Alderman, Petra, Duncan McCargo, Alfred Gerstl and James Iocovozzi',
    title: 'All About China?',
    journal: 'Asian Survey',
    issue: '64, no. 5 (October 2024): 877–911',
    url: 'https://doi.org/10.1525/as.2024.2315856',
  },
  {
    kind: 'article',
    year: 2024,
    authors: 'Alderman, Petra',
    title: 'Autocratic Electoral Management: Lessons from Thailand',
    journal: 'Journal of Current Southeast Asian Affairs',
    issue: '43, no. 1 (April 2024): 3–25',
    url: 'https://doi.org/10.1177/18681034231190940',
    featured: true,
  },
  {
    kind: 'article',
    year: 2024,
    authors: 'Alderman, Petra and Kristin Eggeling',
    title: 'Vision documents, nation branding and the legitimation of non-democratic regimes',
    journal: 'Geopolitics',
    issue: '29, no. 1 (January 2024): 288–318',
    url: 'https://doi.org/10.1080/14650045.2023.2165441',
    featured: true,
  },
  {
    kind: 'article',
    year: 2023,
    authors: 'Desatova, Petra and Saowanee T. Alexander',
    title: 'Election Commissions and Non-Democratic Outcomes: Thailand’s Contentious 2019 Election',
    journal: 'Politics',
    issue: '43, no. 4 (November 2023): 505–519',
    url: 'https://doi.org/10.1177/02633957211000978',
  },
  {
    kind: 'article',
    year: 2019,
    authors: 'Desatova, Petra',
    title: 'Bangkok: Two Cities',
    journal: 'Contemporary Southeast Asia',
    issue: '41, no. 2 (August 2019): 176–182',
    url: 'https://muse.jhu.edu/article/732131/pdf',
  },
  {
    kind: 'article',
    year: 2018,
    authors: 'Desatova, Petra',
    title: 'Thailand 4.0 and the Internal Focus of Nation Branding',
    journal: 'Asian Studies Review',
    issue: '42, no. 4 (2018): 682–700',
    url: 'https://doi.org/10.1080/10357823.2018.1512555',
    featured: true,
  },
  {
    kind: 'article',
    year: 2017,
    authors: 'McCargo, Duncan, Saowanee T. Alexander and Petra Desatova',
    title: 'Ordering Peace: Thailand’s 2016 Constitutional Referendum',
    journal: 'Contemporary Southeast Asia',
    issue: '39, no. 1 (April 2017): 65–95',
    url: 'https://muse.jhu.edu/article/657979',
  },

  // ── Book chapters ────────────────────────────────────────────────────────
  {
    kind: 'chapter',
    year: 2016,
    authors: 'McCargo, Duncan and Petra Desatova',
    title: 'Thailand: Electoral Intimidation',
    book: 'Electing Peace: Violence Prevention and Impact at the Polls',
    editors: 'edited by Jonas Claes, 63–69',
    publisher: 'Washington DC: United States Institute of Peace Press, 2016',
    url: 'https://www.usip.org/publications/2017/01/electing-peace',
  },

  // ── Policy reports & briefs ──────────────────────────────────────────────
  {
    kind: 'report',
    year: 2022,
    authors: 'Alderman, Petra',
    title: 'Legislative leadership on environmental issues',
    publisher: 'Westminster Foundation for Democracy, November 2022',
    url: 'https://www.wfd.org/what-we-do/resources/legislative-leadership-environmental-issues',
  },
  {
    kind: 'report',
    year: 2022,
    authors: 'Alderman, Petra',
    title: 'What we know (and don’t know) about election observation in 2021',
    publisher: 'Election Observation Research Network, February 2022',
    url: 'https://electordotnetwork.files.wordpress.com/2022/02/elector-brief-06.pdf',
  },
  {
    kind: 'report',
    year: 2022,
    authors: 'Alderman, Petra',
    title:
      'Research in Brief 3: The importance and implications of electoral commission independence',
    publisher: 'Election Observation Research Network, February 2022',
    url: 'https://elector.network/research-briefs/',
  },
];
