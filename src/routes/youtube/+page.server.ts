import { SECRET_YOUTUBE_API_KEY } from '$env/static/private';
import { PUBLIC_YOUTUBE_API_URL, PUBLIC_YOUTUBE_CHANNEL_ID } from '$env/static/public';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	try {
		const statistics = await fetch(
			`${PUBLIC_YOUTUBE_API_URL}/channels?part=statistics&id=${PUBLIC_YOUTUBE_CHANNEL_ID}&key=${SECRET_YOUTUBE_API_KEY}`
		);

		const statistics_data = await statistics.json();
		const subscriber_count = statistics_data.items[0].statistics.subscriberCount;
		const video_count = statistics_data.items[0].statistics.videoCount;
		const view_count = statistics_data.items[0].statistics.viewCount;

		const channels = await fetch(
			`${PUBLIC_YOUTUBE_API_URL}/search?key=${SECRET_YOUTUBE_API_KEY}&channelId=${PUBLIC_YOUTUBE_CHANNEL_ID}&part=snippet&order=date&sort=desc&maxResults=1`
		);

		const channels_data = await channels.json();
		const latest_video = channels_data.items[0].snippet.title;
		const latest_video_id = channels_data.items[0].id.videoId;

		return {
			subscriber_count,
			video_count,
			view_count,
			latest_video,
			latest_video_id
		};
	} catch (error) {
		return { error };
	}
};
