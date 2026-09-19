import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tina from '@tinacms/astro/integration';
import { tinaAdminDevRedirect } from '@tinacms/astro/vite';

const isCloudflarePages = process.env.CF_PAGES === '1';

// https://astro.build/config
export default defineConfig({
  output: isCloudflarePages ? 'static' : 'server',
  adapter: isCloudflarePages ? undefined : node({ mode: 'standalone' }),
  integrations: [tina()],
  vite: {
    plugins: [tinaAdminDevRedirect()],
    ssr: { noExternal: ['@tinacms/astro', '@tinacms/bridge'] },
  },
});
