<!-- @migration-task Error while migrating Svelte code: Identifier 'project' has already been declared -->
<script lang="ts">
	import PreviewCard from '$lib/components/PreviewCard.svelte';
	import { fade } from 'svelte/transition';
	import type { project } from './types.ts';
	const { project: projectData }: { project: project } = $props();

	function imageSourceExists(src: string): Promise<boolean> {
		return fetch(src)
			.then((response) => {
				return response.status === 200;
			})
			.catch(() => {
				return false;
			});
	}

	const image_src = new URL(
		`../../lib/assets/projects/${projectData.id}_thumb.webp`,
		import.meta.url
	).href;
</script>

<li transition:fade={{ duration: 200 }}>
	<PreviewCard href="../projects/{projectData.id}">
		<div class="grid">
			<div class="space-y-4">
				<div class="flex flex-wrap items-center gap-2">
					{#if projectData.pin}
						<span class="chip accent">Featured</span>
					{/if}
					<span class="chip">Updated {projectData.updated.toLocaleDateString()}</span>
					<span class="chip">Published {projectData.published.toLocaleDateString()}</span>
				</div>
				<div>
					<h2>{projectData.name}</h2>
					<div class="teaser">{projectData.teaser}</div>
				</div>
				<div class="tags">
					{#each projectData.tags as tag}
						<span class="chip">{tag}</span>
					{/each}
				</div>
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
		align-items: center;
		gap: 1.5rem;
	}

	h2 {
		margin: 0;
		font-size: 1.4rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.teaser {
		color: var(--secondary-font-color);
		margin-top: 0.75rem;
	}

	.image-container {
		display: flex;
		justify-content: center;
	}

	img {
		width: 100%;
		border-radius: 1rem;
		border: 1px solid var(--border-color);
	}

	@media (min-width: 52rem) {
		.grid {
			grid-template-columns: minmax(0, 1.5fr) minmax(220px, 1fr);
		}
	}
</style>
