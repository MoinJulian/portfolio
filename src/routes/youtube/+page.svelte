<script lang="ts">
	import { onMount } from 'svelte';

	// Verwenden Sie import.meta.env, um auf Umgebungsvariablen zuzugreifen
	const youtubeKey = import.meta.env.VITE_YOUTUBE_KEY;
	const youtubeUser = import.meta.env.VITE_YOUTUBE_USER;

	let subscriberCount: string = '';
	let videoCount: string = '';
	let viewCount: string = '';

	let latestVideoTitle: string = '';
	let latestVideoId: string = '';
	let latestVideoThumbnailUrl: string = '';

	async function getSubscribers(): Promise<void> {
		try {
			const response = await fetch(
				`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`
			);
			const data = await response.json();

			console.log(data);

			subscriberCount = data['items'][0].statistics.subscriberCount;
			videoCount = data['items'][0].statistics.videoCount;
			viewCount = data['items'][0].statistics.viewCount;
		} catch (error) {
			console.error(error);
		}
	}

	async function getLatestVideo(): Promise<void> {
		try {
			const response = await fetch(
				`https://www.googleapis.com/youtube/v3/search?key=${youtubeKey}&channelId=${youtubeUser}&part=snippet&order=date&sort=desc&maxResults=1`
			);
			const data = await response.json();

			if (data.items.length > 0) {
				const latestVideo = data.items[0];
				latestVideoTitle = latestVideo.snippet.title;
				latestVideoId = latestVideo.id.videoId;
				latestVideoThumbnailUrl = latestVideo.snippet.thumbnails.default.url;
			} else {
				console.log('Keine Videos gefunden.');
			}
		} catch (error) {
			console.error('Fehler beim Abrufen des neuesten Videos:', error);
		}
	}

	onMount(() => {
		getSubscribers();
		getLatestVideo();
	});
</script>

<svelte:head>
	<title>MoinJulian - YouTube</title>
</svelte:head>

<h1>YouTube</h1>

<p>
	In 2021 I started my <a href="https://youtube.com/@moinjulian" target="_blank">YouTube channel</a>
	on web development. Today the channel has <b>{subscriberCount}</b> subscribers and
	<b>{videoCount}</b>
	published videos. All videos together are having <b>{viewCount}</b> views.
</p>

<p>My latest video (in German):</p>

{#if latestVideoId}
	<h2>{latestVideoTitle}</h2>
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		width="280"
		height="157.5"
		src={`https://www.youtube.com/embed/${latestVideoId}`}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
{:else}
	<p>No videos found.</p>
{/if}

<p>
	On my channel I usually talk about a simple topic for example Paragraphs or Styles in HTML, but
	also about simple Projects for example the Calculator I did in the latest video.
</p>

<p>
	I decided to do the channel in <b>German</b> (my native language) because there are already many good
	english speaking channels, but only a handful good german speaking channels.
</p>

<p>Examples for good english Speaking channels:</p>

<ul>
	<li><a href="https://www.youtube.com/@DaveGrayTeachesCode" target="_blank">Dave Gray</a></li>
	<li><a href="https://www.youtube.com/@TraversyMedia" target="_blank">Traversy Media</a></li>
	<li><a href="https://www.youtube.com/@KevinPowell" target="_blank">Kevin Powell</a></li>
	<li>
		<a href="https://www.youtube.com/@WebDevSimplified" target="_blank">Web Dev Simplified</a>
	</li>
	<li><a href="https://www.youtube.com/@NetNinja" target="_blank">Net Ninja</a></li>
</ul>

<p>Examples for good german speaking channels:</p>

<ul>
	<li><a href="https://www.youtube.com/@ScriptRaccoon" target="_blank">Script Raccoon</a></li>
	<li>
		<a href="https://www.youtube.com/@Programmierenlernen" target="_blank">Programmieren lernen</a>
	</li>
	<li>
		<a href="https://www.youtube.com/@ProgrammierenStarten" target="_blank">Programmieren Starten</a
		>
	</li>
</ul>
