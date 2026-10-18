import { getCollection } from 'astro:content';

/** All publishable posts, newest first. Drafts are visible in dev only. */
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingTime(body: string = '') {
	const words = body.trim().split(/\s+/).length;
	return `${Math.max(1, Math.round(words / 220))} min read`;
}
