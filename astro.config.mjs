import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), image(), react()]
});