// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://eagleair.com",
  integrations: [
    react(),
    sitemap({
      entryLimit: 45000,

      filter: (page) => {
        // Exclude error & confirmation pages
        if (
          page.includes("/404") ||
          page.includes("/500") ||
          page.includes("-confirmation") ||
          page.includes("?") ||
          page.includes("#")
        ) {
          return false;
        }
        return true;
      },

      serialize: (item) => {
        const { pathname } = new URL(item.url);
        const today = new Date().toISOString().split("T")[0];

        // Homepage
        if (pathname === "/") {
          return {
            url: item.url,
            priority: 1.0,
            changefreq: "daily",
            lastmod: today,
          };
        }

        // Core program pages
        if (pathname.startsWith("/programs/")) {
          return {
            url: item.url,
            priority: 0.9,
            changefreq: "monthly",
            lastmod: today,
          };
        }

        // Aircraft detail pages
        if (pathname.startsWith("/aircraft/")) {
          return {
            url: item.url,
            priority: 0.8,
            changefreq: "monthly",
            lastmod: today,
          };
        }

        // Blog posts
        if (pathname.startsWith("/blog/")) {
          return {
            url: item.url,
            priority: 0.7,
            changefreq: "monthly",
            lastmod: today,
          };
        }

        // Crew pages
        if (pathname.startsWith("/crew/")) {
          return {
            url: item.url,
            priority: 0.6,
            changefreq: "monthly",
            lastmod: today,
          };
        }

        // About & informational pages
        if (pathname.startsWith("/about/")) {
          return {
            url: item.url,
            priority: 0.6,
            changefreq: "yearly",
            lastmod: today,
          };
        }

        // Static pages
        if (
          pathname === "/privacy-policy/" ||
          pathname === "/terms-of-service/"
        ) {
          return {
            url: item.url,
            priority: 0.5,
            changefreq: "yearly",
            lastmod: today,
          };
        }

        // Default
        return {
          url: item.url,
          priority: 0.5,
          changefreq: "monthly",
          lastmod: today,
        };
      },
    }),
  ],
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});
