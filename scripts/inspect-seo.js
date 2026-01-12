import fs from "fs";
import path from "path";
import { glob } from "glob";
import * as cheerio from "cheerio";

const DIST_DIR = path.resolve("dist");
const OUTPUT_JSON = "seo-report.json";
const OUTPUT_CSV = "seo-report.csv";

const files = await glob(`${DIST_DIR}/**/*.html`);

const results = files.map((file) => {
  const html = fs.readFileSync(file, "utf-8");
  const $ = cheerio.load(html);

  const title = $("title").text().trim() || "";
  const description = $('meta[name="description"]').attr("content") || "";
  const h1 = $("h1").first().text().trim() || "";

  const page =
    "/" +
    path
      .relative(DIST_DIR, file)
      .replace(/index\.html$/, "")
      .replace(/\\/g, "/");

  return { page, title, description, h1 };
});

console.table(results);

fs.writeFileSync(OUTPUT_JSON, JSON.stringify(results, null, 2), "utf-8");

const csvHeader = "page,title,description,h1\n";
const csvRows = results
  .map(({ page, title, description, h1 }) =>
    [page, title, description, h1]
      .map((v) => `"${v.replace(/"/g, '""')}"`)
      .join(",")
  )
  .join("\n");

fs.writeFileSync(OUTPUT_CSV, csvHeader + csvRows, "utf-8");

console.log(`\n✅ SEO reports saved:`);
console.log(`- ${OUTPUT_JSON}`);
console.log(`- ${OUTPUT_CSV}`);
