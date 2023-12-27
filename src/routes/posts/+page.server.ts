import { get_frontmatter } from '$lib/server';
import type { posts } from './types';

export const load = async () => {
	const unsorted_posts = get_frontmatter<posts>(
		import.meta.glob('/src/data/posts/**/*.md', {
			as: 'raw',
			eager: true
		})
	);

	const posts = [...unsorted_posts].sort((p, q) => {
		const qTime = q.updated ? q.updated.getTime() : q.published.getTime();
		const pTime = p.updated ? p.updated.getTime() : p.published.getTime();

		return qTime - pTime;
	});

	const meta = {
		title: 'MoinJulian - Blog',
		description: 'Some thoughts on web development'
	};

	return { meta, posts };
};
