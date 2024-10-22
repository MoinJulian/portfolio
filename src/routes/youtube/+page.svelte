<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	console.log(data);
</script>

<svelte:head>
	<title>MoinJulian - YouTube</title>
</svelte:head>

<h1>YouTube</h1>

<p>
	In 2021 I started my <a href="https://youtube.com/@moinjulian" target="_blank">YouTube channel</a>
	on web development. Today the channel has <b>{data.subscriber_count}</b> subscribers and
	<b>{data.video_count}</b>
	published videos. All videos together are having <b>{data.view_count}</b> views.
</p>

<p>My latest video (in German):</p>

{#if data.latest_video_id}
	<h2>{data.latest_video}</h2>
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		width="280"
		height="157.5"
		src={`https://www.youtube.com/embed/${data.latest_video_id}`}
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
