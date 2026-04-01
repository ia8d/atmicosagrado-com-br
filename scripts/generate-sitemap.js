// Script to generate sitemap.xml with posts from Supabase
// Run: node scripts/generate-sitemap.js

const BASE_URL = 'https://www.atmicosagrado.com.br';
const SUPABASE_URL = 'https://tmjwjhympdpnhspxhlhz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtandqaHltcGRwbmhzcHhobGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzA4NjMsImV4cCI6MjA4OTk0Njg2M30.cvcU4wdil3JjBq7kHDP3xZ3ytkkVzTB0UWHQUPH4YIU';

async function generateSitemap() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/posts?select=slug,published_at&order=published_at.desc`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    }
  );
  const posts = await res.json();

  const staticRoutes = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/metodo', changefreq: 'monthly', priority: '0.8' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.9' },
    { loc: '/agendar', changefreq: 'monthly', priority: '0.7' },
  ];

  const urls = staticRoutes.map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.loc}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  );

  for (const post of posts) {
    const slug = post.slug.trim();
    const lastmod = post.published_at ? post.published_at.split('T')[0] : '';
    urls.push(`  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  const fs = await import('fs');
  const path = await import('path');
  const outPath = path.join(import.meta.dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outPath, sitemap, 'utf-8');
  console.log(`✅ Sitemap gerado com ${staticRoutes.length} rotas estáticas e ${posts.length} artigos em ${outPath}`);
}

generateSitemap().catch(console.error);
