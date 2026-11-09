// Talks, briefings and conference papers. To add one, copy an entry, paste it
// into the list and change the details.
//
//   kind:      'briefing' | 'conference' | 'seminar' | 'workshop'
//   date:      'YYYY-MM-DD' — the first day of the event. Used for sorting, and
//              to decide whether the event is upcoming or past.
//   dateLabel: how the date should read on the page, e.g. '29 June – 1 July 2022'
//   venue:     event name and place
//   url:       optional link (registration page, recording, etc.)

export type EventItem = {
  kind: 'briefing' | 'conference' | 'seminar' | 'workshop';
  title: string;
  venue?: string;
  date: string;
  dateLabel: string;
  url?: string;
};

export const eventsIntro = [
  'I give regular presentations of my research at academic conferences, seminars, and workshops in the UK, United States, Europe, and Asia. I have also briefed research analysts at the Foreign, Commonwealth and Development Office (FCDO) in the UK.',
];

export const events: EventItem[] = [
  // ── FCDO briefings ───────────────────────────────────────────────────────
  {
    kind: 'briefing',
    title: 'Understanding Pracharat: From a Thaksin-Style Economic Strategy to a Successful Electoral Brand?',
    date: '2019-05-08',
    dateLabel: '8 May 2019',
  },
  {
    kind: 'briefing',
    title: 'Thailand – Outlook for 2018',
    date: '2017-12-01',
    dateLabel: '1 December 2017',
  },

  // ── Conferences and roundtables ──────────────────────────────────────────
  {
    kind: 'conference',
    title: 'Authoritarian Electoral Management: Lessons from the 2019 Thai election',
    venue: 'EuroSEAS Conference, École des Hautes Études en Sciences Sociales, Paris',
    date: '2022-06-29',
    dateLabel: '29 June – 1 July 2022',
  },
  {
    kind: 'conference',
    title: 'Authoritarian Electoral Management: Lessons from the 2019 Thai election',
    venue: 'ASIANET Conference, University of Oslo',
    date: '2021-10-21',
    dateLabel: '21–22 October 2021',
  },
  {
    kind: 'conference',
    title: 'Simple slogans are deep: Nation-branding and the legitimation of political regimes',
    venue: 'British International Studies Association Conference (virtual)',
    date: '2021-06-21',
    dateLabel: '21–23 June 2021',
  },
  {
    kind: 'conference',
    title: 'From Nation Branding to Political Marketing: Pracharat and the 2019 Thai Election',
    venue: 'Association for Asian Studies Annual Conference (virtual)',
    date: '2021-03-21',
    dateLabel: '21–26 March 2021',
  },
  {
    kind: 'conference',
    title: 'Thailand’s Internal Nation Branding',
    venue: 'SEAREG conference (virtual), University of Arizona',
    date: '2020-12-16',
    dateLabel: '16–18 December 2020',
  },
  {
    kind: 'conference',
    title:
      'The Politics of Grief: Managing the passing of King Bhumibol Adulyadej in the lead up to the royal transition',
    venue: 'PSA Annual International Conference, Nottingham Trent University, Nottingham',
    date: '2019-04-15',
    dateLabel: '15–17 April 2019',
  },
  {
    kind: 'conference',
    title: 'Re-Branding the Meaning of Good Governance in Post-Coup Thailand',
    venue: 'Association of Southeast Asian Studies UK (ASEASUK) Conference, University of Leeds',
    date: '2018-09-05',
    dateLabel: '5–7 September 2018',
  },
  {
    kind: 'conference',
    title: 'Thailand 4.0: The Junta’s Post-Coup Nation Branding Project',
    venue: 'Thailand Update Conference, Columbia University, New York, USA',
    date: '2018-03-27',
    dateLabel: '27 March 2018',
  },
  {
    kind: 'conference',
    title: 'Thailand 4.0: The Junta’s Post-Coup Nation Branding Project',
    venue: 'Association for Asian Studies Annual Conference, Washington D.C., USA',
    date: '2018-03-22',
    dateLabel: '22–25 March 2018',
  },
  {
    kind: 'conference',
    title: '‘Thailand Update’ Roundtable',
    venue: 'EuroSEAS Conference, University of Oxford',
    date: '2017-08-16',
    dateLabel: '16–18 August 2017',
  },
  {
    kind: 'conference',
    title: 'Thailand 4.0 and the Internal Focus of Nation Branding',
    venue: 'PSA Annual International Conference, University of Strathclyde, Glasgow',
    date: '2017-04-10',
    dateLabel: '10–12 April 2017',
  },
  {
    kind: 'conference',
    title: 'Nation Branding in Thailand: Moving Beyond Tourism and Export Campaigns',
    venue:
      '1st International Symposium on Thai Studies: ‘The Globalized Face of Thai Studies,’ Chulalongkorn University, Bangkok, Thailand',
    date: '2016-06-16',
    dateLabel: '16–17 June 2016',
  },

  // ── Research seminars ────────────────────────────────────────────────────
  {
    kind: 'seminar',
    title:
      'Undermining Democracy: The Election Commission of Thailand in the 2019 Election (with Saowanee T. Alexander)',
    venue: 'Thailand Social Science Seminar Series (virtual)',
    date: '2021-11-11',
    dateLabel: '11 November 2021',
  },
  {
    kind: 'seminar',
    title: 'Southeast Asia’s Contentious Polls: Electoral management in Comparative Perspective',
    venue:
      'Roundtable (virtual) by LSE Saw Swee Hock Southeast Asia Centre and the Nordic Institute of Asian Studies, University of Copenhagen',
    date: '2021-11-10',
    dateLabel: '10 November 2021',
  },
  {
    kind: 'seminar',
    title: 'Thailand’s New Political Generation – From Future Forward to Youth Protests',
    venue: 'Public seminar (virtual), Stockholm University',
    date: '2020-11-18',
    dateLabel: '18 November 2020',
  },
  {
    kind: 'seminar',
    title:
      'Nation Branding and Political Legitimacy in Non-Democratic Regimes: Re-branding post-coup Thailand',
    venue: 'Asian Dynamics Initiative, University of Copenhagen',
    date: '2019-10-23',
    dateLabel: '23 October 2019',
  },
  {
    kind: 'seminar',
    title: 'Post-Election Thailand: Reflections and Looking Forward',
    venue:
      'Saw Swee Hock Southeast Asia Centre (panel discussion), London School of Economics and Political Science',
    date: '2019-07-11',
    dateLabel: '11 July 2019',
  },
  {
    kind: 'seminar',
    title: 'Prospects for Elections in Thailand: The Future Forward Party under the Spotlight',
    venue:
      'Department of International Development and Saw Swee Hock Southeast Asia Centre (panel discussion), London School of Economics and Political Science',
    date: '2018-10-08',
    dateLabel: '8 October 2018',
  },
  {
    kind: 'seminar',
    title: 'Nation Branding in Post-Coup Thailand: A Strategy Towards Political Legitimation?',
    venue: 'Thai Forum, University of Leeds',
    date: '2018-04-24',
    dateLabel: '24 April 2018',
  },

  // ── Workshops ────────────────────────────────────────────────────────────
  {
    kind: 'workshop',
    title: 'Authoritarian Electoral Management: Lessons from the 2019 Thai election',
    venue: 'Electoral Integrity Project pre-IPSA Workshop (virtual)',
    date: '2021-07-06',
    dateLabel: '6 July 2021',
  },
  {
    kind: 'workshop',
    title:
      'Branding Authoritarian Nations: Political Legitimacy, Nation Branding and Strategic National Myths in Post-Coup Thailand',
    venue: 'IR Research Day, University of Copenhagen',
    date: '2020-06-04',
    dateLabel: '4 June 2020',
  },
  {
    kind: 'workshop',
    title: 'Politics and Nation Branding in Thailand',
    venue: 'EuroSEAS PhD Masterclass, University of Oxford',
    date: '2017-08-15',
    dateLabel: '15 August 2017',
  },
];
