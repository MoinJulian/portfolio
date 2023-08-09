import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { has_session } from '../../db/session';

export const load: PageServerLoad = async (request) => {
	const session_id = request.cookies.get('session_id');

	if (!session_id) throw redirect(307, '/login');
	const logged_in = has_session(session_id);
	if (!logged_in) throw redirect(301, '/login');
};

export const actions: Actions = {
	default: async () => {}
};
