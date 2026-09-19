// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';
import type { HomepageQuery, PostQuery, SitePageQuery, SiteSettingsQuery } from '../../../tina/__generated__/types';
import EditablePage from '../../components/tina/EditablePage.astro';
import ContactPage from '../../components/tina/ContactPage.astro';
import Footer from '../../components/Footer.astro';
import Header from '../../components/Header.astro';
import HomepageAbout from '../../components/tina/HomepageAbout.astro';
import HomepageCardSection from '../../components/tina/HomepageCardSection.astro';
import HomepageHero from '../../components/tina/HomepageHero.astro';
import PostBody from '../../components/tina/PostBody.astro';
import ResumePage from '../../components/tina/ResumePage.astro';
import { getHomepage, getPost, getSitePage, getSiteSettings } from './data';

export const islands: IslandRegistry = {
  resumePage: {
    fetch: (_request, params) => getSitePage(params.get('slug') ?? 'resume'),
    component: ResumePage,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<SitePageQuery>).data?.sitePage,
    }),
  },
  homepageContact: {
    fetch: () => getHomepage(),
    component: ContactPage,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<HomepageQuery>).data?.homepage,
    }),
  },
  siteFooter: {
    fetch: () => getSiteSettings(),
    component: Footer,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<SiteSettingsQuery>).data?.siteSettings,
    }),
  },
  siteHeader: {
    fetch: () => getSiteSettings(),
    component: Header,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<SiteSettingsQuery>).data?.siteSettings,
    }),
  },
  homepageInterests: {
    fetch: () => getHomepage(),
    component: HomepageCardSection,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<HomepageQuery>).data?.homepage,
      kind: 'interests',
    }),
  },
  homepageTechnology: {
    fetch: () => getHomepage(),
    component: HomepageCardSection,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<HomepageQuery>).data?.homepage,
      kind: 'technology',
    }),
  },
  sitePage: {
    fetch: (_request, params) => getSitePage(params.get('slug') ?? 'story'),
    component: EditablePage,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<SitePageQuery>).data?.sitePage,
    }),
  },
  homepageAbout: {
    fetch: () => getHomepage(),
    component: HomepageAbout,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<HomepageQuery>).data?.homepage,
    }),
  },
  homepage: {
    fetch: () => getHomepage(),
    component: HomepageHero,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      data: (data as QueryResult<HomepageQuery>).data?.homepage,
    }),
  },
  post: {
    fetch: (_request, params) => getPost(params.get('slug') ?? 'hello-world'),
    component: PostBody,
    wrapper: { tag: 'article' },
    propsFromData: (data) => ({
      data: (data as QueryResult<PostQuery>).data?.post,
    }),
  },
};
