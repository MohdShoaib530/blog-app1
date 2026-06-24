export type Post = {
  slug: String;
  title: String;
  content: String;
};

export const posts: Post[] = [
  {
    slug: 'sveltekit',
    title: 'learn sveltekit',
    content: 'sveltekit is amazing',
  },
  {
    slug: 'javascript',
    title: 'learn js',
    content: 'js is very simple',
  },
];
