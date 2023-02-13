import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://philosopherwaterhead.github.io',
    base: '/comphand',
    markdown: {
        remarkPlugins: [
            'remark-math',
        ],
        rehypePlugins: [
            ['rehype-katex', {
            // Katex plugin options
            }]
        ]
    }
});
