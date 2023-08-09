import { fail, type Actions, redirect } from '@sveltejs/kit';
import { save_session } from '../../db/session';
import { SECRET_PASSWORD, SECRET_USERNAME } from '$env/static/private';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const username_is_correct = username == SECRET_USERNAME;
		const password_is_correct = password == SECRET_PASSWORD;
		if (
			!password_is_correct ||
			!username_is_correct ||
			(!username_is_correct && !password_is_correct)
		) {
			return fail(401, { password_is_correct, username_is_correct });
		} else {
			const session_id = save_session();
			const one_week = 60 * 60 * 24 * 7;
			event.cookies.set('session_id', session_id, {
				path: '/',
				maxAge: one_week
			});
			throw redirect(307, '/personal');
		}
	}
};
