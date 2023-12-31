import fm from 'front-matter';
import { error } from '@sveltejs/kit';
import type { project } from '../types';

const projects_record = import.meta.glob('/src/data/projects/*.md', {
	as: 'raw',
	eager: true
});

import markdownit from 'markdown-it';
const md = new markdownit();

export const load = async (event: { params: { id: any; }; }) => {
	const id = event.params.id;
	const path = `/src/data/projects/${id}.md`;

	if (!(path in projects_record)) {
		throw error(404, 'There is no project with this ID');
	}

	const markdown = projects_record[path];
	const { attributes: _attributes, body } = fm<Omit<project, 'id'>>(markdown);
	const attributes: project = { ..._attributes, id };

	attributes.tags.sort();

	const html_code = md.render(body);

	const meta = {
		title: attributes.name,
		description: attributes.teaser
	};

	return { meta, attributes, html_code };
};
