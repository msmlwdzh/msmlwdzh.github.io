import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://msmlwdzh.github.io',
  title: "APPLEpig's Blog",
  description: "A minimal dark-mode blog by APPLEpig (msmlwdzh) — technical thoughts, projects, and ideas.",
  vite: {
    plugins: [tailwind()],
  },
});
