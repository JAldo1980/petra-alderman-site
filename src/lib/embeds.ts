/** Pulls the video id and start time out of a YouTube link, or returns null. */
export function youtube(url?: string): { id: string; start: number } | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    const id =
      host === 'youtu.be' ? u.pathname.slice(1) : host === 'youtube.com' ? u.searchParams.get('v') : null;
    if (!id) return null;
    const start = parseInt(u.searchParams.get('t') ?? '0', 10) || 0;
    return { id, start };
  } catch {
    return null;
  }
}
