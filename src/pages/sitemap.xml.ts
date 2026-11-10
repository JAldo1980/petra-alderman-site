import type { APIRoute } from 'astro';
import { site } from '../content/site';

// Lists every page in src/pages automatically.
const pages = Object.keys(import.meta.glob('./*.astro'))
  .map((file) => file.replace('./', '').replace('.astro', ''))
  .filter((name) => name !== '404')
  .map((name) => (name === 'index' ? '/' : `/${name}/`))
  .sort();

export const GET: APIRoute = () => {
  const urls = pages.map((path) => `  <url><loc>${new URL(path, site.url).href}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
