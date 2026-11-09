const fmt = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** '2023-04-19' → '19 April 2023' */
export function formatDate(iso: string): string {
  return fmt.format(new Date(`${iso}T00:00:00Z`));
}

/** Newest first. */
export function byDateDesc<T extends { date: string }>(a: T, b: T): number {
  return b.date.localeCompare(a.date);
}

/** Adds a closing full stop unless the title already ends in punctuation. */
export function closeTitle(title: string): string {
  return /[.?!]$/.test(title) ? title : `${title}.`;
}
