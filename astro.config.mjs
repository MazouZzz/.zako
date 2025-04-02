import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://MazouZzz.github.io',
  base: '.zako',
  trailingSlash: "always",
  integrations: [tailwind()],
});
