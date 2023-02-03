import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const html = '<h1>Hello world</h1>';
  return { html };
};
