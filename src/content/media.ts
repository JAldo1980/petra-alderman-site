// Media appearances and commentary. To add one, copy an entry, paste it into
// the list and change the details. Entries are sorted by date automatically.
//
//   kind:   'live'       → Live interviews
//           'interview'  → Other interviews
//           'commentary' → Commentary and blog posts
//   date:   'YYYY-MM-DD'
//   note:   optional, shown after the title, e.g. 'in Thai' or 'with Nic Cheeseman'
//   url:    optional

export type MediaItem = {
  kind: 'live' | 'interview' | 'commentary';
  title: string;
  outlet: string;
  date: string;
  note?: string;
  url?: string;
};

export const mediaIntro = [
  'As someone passionate about research and learning, I have found that engaging with the media can be a great way to share my knowledge and insights with a broader audience. Whether it is through writing opinion pieces and blog posts, appearing on television programmes, or providing analysis of current affairs to journalists, there are many different ways to get involved and make an impact.',
  'One of the things I love most about engaging with the media is the opportunity to connect with people outside of academia. It is a chance to share knowledge and insights and contribute to important conversations about the issues that matter.',
];

export const media: MediaItem[] = [
  // ── Live interviews ──────────────────────────────────────────────────────
  {
    kind: 'live',
    title: 'Paetongtarn Shinawatra leads polls as Thailand heads towards election | The World',
    outlet: 'ABC (Australia)',
    date: '2023-04-19',
    url: 'https://www.youtube.com/watch?v=lV-IRHEI-CI&t=7s',
  },
  {
    kind: 'live',
    title: 'Thailand’s 2019 elections as seen by foreign scholars',
    note: 'in Thai',
    outlet: 'BBC Thai',
    date: '2019-03-15',
    url: 'https://www.youtube.com/watch?v=DHTtN-GAW1w&t=584s',
  },

  // ── Other interviews ─────────────────────────────────────────────────────
  {
    kind: 'interview',
    title: 'The progressive Move Forward Party shakes up Thailand',
    note: 'in French',
    outlet: 'La Croix',
    date: '2023-05-16',
  },
  {
    kind: 'interview',
    title: 'Student Flash Mobs: A flash in the frying pan or a bushfire',
    note: 'in Thai',
    outlet: 'BBC Thai',
    date: '2020-02-28',
    url: 'https://www.bbc.com/thai/thailand-51640629',
  },
  {
    kind: 'interview',
    title:
      'Future Forward: A Thai politics expert points out that the dissolution of the [Future Forward] party shows that power is still in the hands of a small elite',
    note: 'in Thai',
    outlet: 'BBC Thai',
    date: '2020-02-21',
    url: 'https://www.bbc.com/thai/thailand-51587563',
  },
  {
    kind: 'interview',
    title: 'Rebranding Thailand: why is junta so obsessed with wordplay?',
    outlet: 'Prachatai English',
    date: '2018-02-04',
    url: 'https://prachatai.com/english/node/7606',
  },

  // ── Commentary and blog posts ────────────────────────────────────────────
  {
    kind: 'commentary',
    title: 'Why domestic politics keeps complicating the conflict between Thailand and Cambodia',
    outlet: 'The Conversation',
    date: '2025-12-12',
    url: 'https://theconversation.com/why-domestic-politics-keeps-complicating-the-conflict-between-thailand-and-cambodia-271660',
  },
  {
    kind: 'commentary',
    title:
      'Thailand’s politically influential Shinawatra family is fading from centre stage – for now',
    outlet: 'The Conversation',
    date: '2025-09-16',
    url: 'https://theconversation.com/thailands-politically-influential-shinawatra-family-is-fading-from-centre-stage-for-now-265217',
  },
  {
    kind: 'commentary',
    title: 'Thailand and Cambodia’s escalating conflict has roots in century-old border dispute',
    outlet: 'The Conversation',
    date: '2025-07-24',
    url: 'https://theconversation.com/thailand-and-cambodias-escalating-conflict-has-roots-in-century-old-border-dispute-261873',
  },
  {
    kind: 'commentary',
    title: 'A border conflict may cost the Thai prime minister her job',
    outlet: 'The Conversation',
    date: '2025-06-24',
    url: 'https://theconversation.com/a-border-conflict-may-cost-the-thai-prime-minister-her-job-259532',
  },
  {
    kind: 'commentary',
    title: 'Thailand’s conservative elites oust prime minister and ban opposition',
    outlet: 'The Conversation',
    date: '2024-08-15',
    url: 'https://theconversation.com/thailands-conservative-elites-oust-prime-minister-and-ban-opposition-236887',
  },
  {
    kind: 'commentary',
    title: 'Can Thailand move forward past its historic 2023 election?',
    outlet: 'Central European Institute of Asian Studies',
    date: '2023-06-17',
    url: 'https://ceias.eu/can-thailand-move-forward-past-its-historic-2023-election/',
  },
  {
    kind: 'commentary',
    title: 'Spin Dictators: The Changing Face of Tyranny in the 21st Century',
    note: 'book review',
    outlet: 'CEDAR blog',
    date: '2023-06-16',
    url: 'https://www.birmingham.ac.uk/news/2023/spin-dictators-the-changing-face-of-tyranny-in-the-21st-century',
  },
  {
    kind: 'commentary',
    title: 'The rise of authoritarianism is misunderstood – and it matters',
    note: 'with Nic Cheeseman, Licia Cianetti, Tim Haughton and Manoel Gehrke',
    outlet: 'CEDAR blog',
    date: '2023-06-13',
    url: 'https://www.birmingham.ac.uk/news/2023/how-the-global-rise-of-authoritarianism-is-misunderstood-and-why-it-matters',
  },
  {
    kind: 'commentary',
    title: 'Kenya election: four ways to better safeguard and defend democracy',
    note: 'with Nic Cheeseman',
    outlet: 'The Conversation',
    date: '2022-08-05',
    url: 'https://theconversation.com/kenya-election-four-ways-to-better-safeguard-and-defend-democracy-187457',
  },
  {
    kind: 'commentary',
    title: 'Undermining Democracy? “Independent” Election Commission in Non-Democratic Regimes',
    note: 'with Saowanee T. Alexander',
    outlet: 'Politics Blog',
    date: '2021-04-22',
    url: 'http://politicsblog.ac.uk/author/petradesatova/',
  },
  {
    kind: 'commentary',
    title: 'Anand Panyarachun and The Making of Modern Thailand: A Review',
    outlet: 'Council on Foreign Relations',
    date: '2019-05-21',
    url: 'https://www.cfr.org/blog/anand-panyarachun-and-making-modern-thailand-review',
  },
  {
    kind: 'commentary',
    title: 'What happened to Thailand’s Democrat Party?',
    outlet: 'Thai Data Points',
    date: '2019-04-15',
    url: 'https://www.thaidatapoints.com/post/what-happened-to-thailand-s-democrat-party',
  },
  {
    kind: 'commentary',
    title: 'Nation Branding in Post-Coup Thailand: A Strategy for Political Legitimation?',
    outlet: 'Kyoto Review of Southeast Asia',
    date: '2019-01-01',
    url: 'https://kyotoreview.org/trendsetters/nation-branding-in-post-coup-thailand-a-strategy-for-political-legitimation/',
  },
  {
    kind: 'commentary',
    title: 'Building the Future Forward Party brand in junta-ruled Thailand',
    outlet: 'Asia Dialogue',
    date: '2018-11-13',
    url: 'https://theasiadialogue.com/2018/11/13/building-the-future-forward-party-brand-in-junta-ruled-thailand/',
  },
];
