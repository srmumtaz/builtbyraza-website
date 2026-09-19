// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../../tina/__generated__/client';

export const getPost = (slug: string) =>
  requestWithMetadata(client.queries.post({ relativePath: slug + '.md' }), {
    priority: 'primary',
  });

export const getHomepage = () =>
  requestWithMetadata(client.queries.homepage({ relativePath: 'hero.md' }), {
    priority: 'primary',
  });

export const getSitePage = (slug: string) =>
  requestWithMetadata(client.queries.sitePage({ relativePath: slug + '.json' }), {
    priority: 'primary',
  });

export const getSiteSettings = () =>
  requestWithMetadata(client.queries.siteSettings({ relativePath: 'site.json' }));
