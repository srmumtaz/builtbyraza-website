import type { APIRoute } from 'astro';
import { experimental_createIslandRoute } from '@tinacms/astro/experimental';
import { islands } from '../../lib/tina/islands';

export const prerender = process.env.CF_PAGES === '1';
export function getStaticPaths() {
  return Object.keys(islands).map((name) => ({ params: { name } }));
}
export const ALL: APIRoute = experimental_createIslandRoute(islands);
