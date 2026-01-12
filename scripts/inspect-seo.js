import fs from "fs";
import path from "path";
import { glob } from "glob";
import * as cheerio from "cheerio";

const DIST_DIR = path.resolve("dist");

const files = await glob(`${DIST_DIR}/**/*.html`);

const results = files.map((file) => {
  const html = fs.readFileSync(file, "utf-8");
  const $ = cheerio.load(html);

  const title = $("title").text().trim() || null;
  const description = $('meta[name="description"]').attr("content") || null;
  const h1 = $("h1").first().text().trim() || null;

  const page =
    "/" +
    path
      .relative(DIST_DIR, file)
      .replace(/index\.html$/, "")
      .replace(/\\/g, "/");

  return { page, title, description, h1 };
});

console.table(results);
