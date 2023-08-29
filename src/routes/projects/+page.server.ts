import type { project } from './types';
import { get_frontmatter } from '$lib/server/frontmatter';

export const load = async () => {
	const unsorted_projects = get_frontmatter<project>(
		import.meta.glob('/src/data/projects/*.md', {
			as: 'raw',
			eager: true
		})
	);

	const projects = unsorted_projects
		.filter((project) => project.updated instanceof Date)
		.sort((p, q) => q.updated.getTime() - p.updated.getTime());

	const year_list = unsorted_projects
		.filter((project) => project.updated instanceof Date)
		.map((project) => project.updated.getFullYear());

	const years = [...new Set(year_list)].sort();

	const tag_list = projects.map((p) => p.tags).flat();
	const tags = [...new Set(tag_list)].sort();

	const meta = {
		title: 'MoinJulian - Projects',
		description: 'Find out about my personal projects in web development'
	};

	return { meta, projects, tags, years };
};
