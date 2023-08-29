import { get_frontmatter } from '$lib/server/frontmatter';
import type { post } from './types';

export const load = async () => {
	const unsorted_posts = get_frontmatter<post>(
		import.meta.glob('/src/data/posts/**/*.md', {
			as: 'raw',
			eager: true
		})
	);

	const posts = [...unsorted_posts].sort((p, q) => q.published.getTime() - p.published.getTime());

	const meta = {
		title: 'MoinJulian - Blog',
		description: 'Some thoughts on web development'
	};

	return { meta, posts };
};
