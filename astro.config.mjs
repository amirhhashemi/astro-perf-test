import { defineConfig } from 'astro/config';
import compress from "astro-compress";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), image()]
});