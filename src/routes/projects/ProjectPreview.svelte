<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { project } from './types';
	import PreviewCard from '$lib/components/PreviewCard.svelte';
	export let project: project;

	function imageSourceExists(src: string): Promise<boolean> {
		return fetch(src)
			.then((response) => {
				return response.status === 200;
			})
			.catch(() => {
				return false;
			});
	}

	const image_src = new URL(`../../lib/assets/projects/${project.id}_thumb.webp`, import.meta.url)
		.href;
</script>

<li transition:fade={{ duration: 200 }}>
	<PreviewCard href="../projects/{project.id}">
		<div class="grid">
			<div>
				<h2>{project.name}</h2>
				<div class="teaser">{project.teaser}</div>
				<div class="date">Updated: {project.updated.toLocaleDateString()}</div>
				<div class="date">Published: {project.published.toLocaleDateString()}</div>
				<div class="more">More...</div>
			</div>
			<div class="image-container">
				{#await imageSourceExists(image_src) then imageExists}
					{#if imageExists}
						<img src={image_src} alt="screenshot of the project" loading="lazy" />
					{:else}
						<!-- Image does not exist, do not display anything -->
					{/if}
				{/await}
			</div>
		</div>
	</PreviewCard>
</li>

<style>
	.grid {
		display: grid;
		grid-template-columns: 3fr 2fr;
		align-items: center;
		gap: 0.25rem;
	}

	.teaser {
		color: var(--secondary-font-color);
		margin-bottom: 0.5rem;
	}

	.date {
		color: var(--secondary-font-color);
		font-size: var(--tiny-font);
		margin-bottom: 0rem;
	}

	.image-container {
		display: flex;
		justify-content: center;
	}
</style>
