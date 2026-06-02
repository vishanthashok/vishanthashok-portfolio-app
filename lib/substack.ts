import type { SubstackPost } from '@/types';

const RSS_URL = 'https://vishanthashok.substack.com/feed';
const API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}&count=3`;

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(API, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    if (data.status !== 'ok') throw new Error('bad status');
    return data.items.map((item: Record<string, string>) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description?.replace(/<[^>]+>/g, '').slice(0, 130) + '…',
      thumbnail: item.thumbnail,
    }));
  } catch {
    return [];
  }
}
