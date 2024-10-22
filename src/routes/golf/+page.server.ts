import { redirect } from '@sveltejs/kit';
const URL = 'https://realgolf.games';

export function load() {
	throw redirect(308, URL);
}
