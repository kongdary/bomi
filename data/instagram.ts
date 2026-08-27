export type InstagramPost = { url: string; thumbnail?: string; type: 'reel' | 'post'; date?: string };
export const instagramDisplayMode: 'latest' | 'random' = 'random';
export const instagramPosts: InstagramPost[] = [
  { url: 'https://www.instagram.com/reel/DXrkUQ7EYpj/', type: 'reel', date: '2026-01-01' },
  { url: 'https://www.instagram.com/reel/DYHgBYHxgS1/', type: 'reel', date: '2026-01-02' },
  { url: 'https://www.instagram.com/reel/DMF943VhgDI/', type: 'reel', date: '2025-07-18' },
  { url: 'https://www.instagram.com/reel/DFWyVK4SS9h/', type: 'reel', date: '2025-02-03' },
];
