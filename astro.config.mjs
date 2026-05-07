import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
  site: 'https://rain1.mgorsky.net',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx({
      remarkPlugins: [remarkGfm, remarkSmartypants],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'append', properties: { className: ['heading-anchor'] } }],
      ],
      gfm: true,
    }),
    react(),
    sitemap(),
    // TODO(phase 3): re-enable sitemap i18n with hreflang once translations exist.
  ],
  vite: {
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
});
