// Research themes. Publications, media items and events can each be tagged with
// one or more of these ids (e.g. themes: ['elections']). Tagged items appear as
// "related work" on the Research page and can be filtered on Publications.
//
// The ids must match the theme ids in pages.ts → research.themes.

export const themes = [
  { id: 'elections', label: 'Elections' },
  { id: 'nation-branding', label: 'Nation branding' },
  { id: 'southeast-asia', label: 'Southeast Asia' },
] as const;

export type ThemeId = (typeof themes)[number]['id'];
