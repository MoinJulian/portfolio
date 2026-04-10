<!-- <script lang="ts">
	import GoBack from '$lib/components/GoBack.svelte';

	export let data;

	const {
		attributes: { name, url, repository, tutorial, published, updated, tags, id },
		html_code
	} = data;

	const year = published.getDate();

	const links = [
		{ label: 'URL', href: url },
		{ label: 'Repository', href: repository },
		{ label: 'Tutorial', href: tutorial }
	].filter((link) => link.href?.length > 0);

	const image_src = new URL(`../../../lib/assets/projects/${id}.webp`, import.meta.url).href;
</script>

<svelte:head>
	<title>MoinJulian - {name}</title>
</svelte:head>

<GoBack />

<h1>
	{name}
</h1>

<p class="year">
	{year}
</p>

<section aria-label="links" class="links">
	{#each links as { href, label }}
		<a {href} target="_blank">{label}</a>
	{/each}
</section>

<article>
	{@html html_code}
</article>

<img src={image_src} alt="screenshot" />

<ul class="no-bullets tag-list" aria-label="list of tags">
	{#each tags as tag}
		<li class="tag">
			{tag}
		</li>
	{/each}
</ul>

<style>
	img {
		margin-block: 1.5rem;
	}
	.year {
		margin-top: -0.5rem;
		font-size: var(--small-font);
		color: var(--secondary-font-color);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: var(--small-font);
	}

	.tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style> -->

<script lang="ts">
	import Controls from '$lib/components/Controls.svelte';
	import PageShell from '$lib/components/portfolio/PageShell.svelte';
	import GoBack from '$lib/components/GoBack.svelte';

	let { data } = $props();

	const {
		attributes: { name, teaser, url, repository, tutorial, published, updated, tags, id },
		html_code
	} = data;

	let publish_date = published?.toLocaleDateString?.() ?? published;
	let update_date = updated?.toLocaleDateString?.() ?? updated;

	const links = [
		{ label: 'URL', href: url },
		{ label: 'Repository', href: repository },
		{ label: 'Tutorial', href: tutorial }
	].filter((link) => link.href?.length > 0);

	function imageSourceExists(src: string): Promise<boolean> {
		return fetch(src)
			.then((response) => {
				return response.status === 200;
			})
			.catch(() => {
				return false;
			});
	}

	const image_src = new URL(`../../../lib/assets/projects/${id}.webp`, import.meta.url).href;
</script>

<svelte:head>
	<title>MoinJulian | {name}</title>
</svelte:head>

<PageShell
	label="Project"
	title={name}
	description={teaser}
	contentClass="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]"
>
	<aside class="space-y-6 xl:sticky xl:top-24 xl:self-start">
		<div class="surface-panel space-y-5">
			<Controls />
			<div class="space-y-3 text-sm text-gray-400">
				<div>
					<div class="font-mono uppercase tracking-[0.25em] text-xs text-gray-500">Published</div>
					<div class="mt-1 text-base text-white">{publish_date}</div>
				</div>
				{#if updated}
					<div>
						<div class="font-mono uppercase tracking-[0.25em] text-xs text-gray-500">Updated</div>
						<div class="mt-1 text-base text-white">{update_date}</div>
					</div>
				{/if}
			</div>

			{#if links.length > 0}
				<div>
					<div class="font-mono uppercase tracking-[0.25em] text-xs text-gray-500">Links</div>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each links as { href, label }}
							<a class="chip accent" {href} target="_blank" rel="noopener noreferrer">{label}</a>
						{/each}
					</div>
				</div>
			{/if}

			{#if tags.length > 0}
				<div>
					<div class="font-mono uppercase tracking-[0.25em] text-xs text-gray-500">Tags</div>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each tags as tag}
							<span class="chip">{tag}</span>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</aside>

	<div class="space-y-6">
		<div class="surface-panel overflow-hidden">
			{#await imageSourceExists(image_src) then imageExists}
				{#if imageExists}
					<img src={image_src} alt="screenshot of the project" loading="lazy" />
				{:else}
					<div class="rounded-2xl border border-dashed border-[#2a2a32] p-10 text-center text-gray-500">
						Preview image coming soon.
					</div>
				{/if}
			{/await}
		</div>

		<article class="surface-panel portfolio-prose">
			{@html html_code}
		</article>
	</div>
</PageShell>
