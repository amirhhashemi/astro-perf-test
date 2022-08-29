import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import image from "@astrojs/image";
import react from "@astrojs/react";
import node from '@astrojs/node';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node(),
  integrations: [compress(), image(), react(), tailwind()]
});
