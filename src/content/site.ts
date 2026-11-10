// Site-wide details: name, current role, links and navigation.
// Edit the values here and they update everywhere on the site.

export const site = {
  name: 'Dr Petra Alderman',
  shortName: 'Petra Alderman',
  // Used for canonical URLs and social sharing. Update once the domain is live again.
  url: 'https://petraalderman.com',

  discipline: 'Comparative political scientist',
  role: 'Centre Manager',
  centre: 'Saw Swee Hock Southeast Asia Centre',
  institution: 'London School of Economics and Political Science',
  institutionShort: 'LSE',

  // Short lines shown under the name on the home page.
  expertise: ['Authoritarianism', 'Democracy', 'Southeast Asia', 'Thailand'],

  description:
    'Petra Alderman is a UK-based political scientist focused on authoritarianism, democracy, and Southeast Asia — especially Thailand.',

  // Home page introduction (one string per paragraph).
  intro: [
    'I’m a UK-based comparative political scientist, writer, and commentator specialising in authoritarian regimes, democratic decline, and political branding – especially in Southeast Asia and Thailand.',
    'I’ve written for The Conversation, advised UK government bodies, and appeared on BBC, France24, and ABC Australia.',
    'I currently work at the London School of Economics and Political Science. Previously, I held research roles at the University of Birmingham and University of Copenhagen.',
  ],

  links: {
    lse: 'https://www.lse.ac.uk/seac/people',
    linkedin: 'https://www.linkedin.com/in/dr-petra-alderman-8873b44a/',
    bluesky: 'https://bsky.app/profile/petraalderman.bsky.social',
    newBooksNetwork:
      'https://newbooksnetwork.com/hosts/profile/4ccfa374-4540-4e8c-822d-64c91df7a00c',
  },

  // Contact details. Leave email as '' to hide it from the site.
  contact: {
    email: '',
  },
};

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'Podcasts', href: '/podcasts/' },
  { label: 'Media', href: '/media/' },
  { label: 'Events', href: '/events/' },
  { label: 'Contact', href: '/contact/' },
];

// The book featured on the home and publications pages.
export const book = {
  title: 'Branding Authoritarian Nations',
  subtitle: 'Political Legitimation and Strategic National Myths in Military-Ruled Thailand',
  publisher: 'Routledge',
  formats: 'Available in hardback, paperback and ebook.',
  url: 'https://www.routledge.com/Branding-Authoritarian-Nations-Political-Legitimation-and-Strategic-National-Myths-in-Military-Ruled-Thailand/Alderman/p/book/9781032517551',
  cover: '/images/branding-authoritarian-nations.png',
};

// Broadcasters shown in the scrolling "As featured on" strip on the home page.
// To add one: put its logo (SVG preferred) in public/images/logos/ and add a
// line here. `height` is the display height in pixels — wide wordmarks look
// right at about 26, square marks at about 44.
export const featuredOn = [
  { name: 'BBC', logo: '/images/logos/bbc.svg', height: 26 },
  { name: 'France 24', logo: '/images/logos/france24.svg', height: 44 },
  { name: 'ABC Australia', logo: '/images/logos/abc-australia.svg', height: 34 },
];

// Institutions shown in a small row at the bottom of the home page hero, each
// with its coat of arms (or seal). `arms` is optional: without one, only the
// name and note are shown. Image files live in public/images/logos/.
// Credits for these images are listed on the /credits/ page — add a line there
// if you add an image that needs attribution.
export const affiliations: { name: string; note: string; arms?: string }[] = [
  {
    name: 'London School of Economics and Political Science',
    note: 'Current',
    arms: '/images/logos/lse-arms.svg',
  },
  {
    name: 'University of Birmingham',
    note: 'Research Fellow, 2021–2025',
    arms: '/images/logos/birmingham-arms.svg',
  },
  {
    name: 'University of Copenhagen',
    note: 'Postdoctoral Fellow, 2019–2021',
    arms: '/images/logos/copenhagen-seal.svg',
  },
  {
    name: 'University of Leeds',
    note: 'PhD, MA, BA',
    arms: '/images/logos/leeds-arms.svg',
  },
];

// Attribution for images used under a Creative Commons licence (shown on /credits/).
export const imageCredits = [
  {
    what: 'Coat of arms of the London School of Economics and Political Science',
    by: 'TheGlobetrotter',
    source: 'https://commons.wikimedia.org/wiki/File:London_School_of_Economics_Coat_of_Arms.svg',
  },
  {
    what: 'Shield of the University of Birmingham',
    by: 'ET72',
    source: 'https://commons.wikimedia.org/wiki/File:Shield_of_the_University_of_Birmingham.svg',
  },
  {
    what: 'Seal of the University of Copenhagen',
    by: 'Canconier',
    source: 'https://commons.wikimedia.org/wiki/File:Ku-ucph-logo-svg.svg',
  },
  {
    what: 'Shield of the University of Leeds',
    by: 'Shadowssettle',
    source: 'https://commons.wikimedia.org/wiki/File:Shield_of_the_University_of_Leeds.svg',
  },
];
