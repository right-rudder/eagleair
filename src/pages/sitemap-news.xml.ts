import posts from "../data/blog.json";

export async function GET({ site }) {
  const recentPosts = posts.filter((p) => {
    const age = (Date.now() - new Date(p.date).getTime()) / 86400000;
    return age <= 2;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">

${recentPosts
  .map(
    (p) => `
  <url>
    <loc>${site}/blog/${p.slug}/</loc>
    <news:news>
      <news:publication>
        <news:name>Eagle Air Flight Training</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${p.date}</news:publication_date>
      <news:title>${p.title}</news:title>
    </news:news>
  </url>
`
  )
  .join("")}

</urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
}
