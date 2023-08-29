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
	import GoBack from '$lib/components/GoBack.svelte';

	export let data;

	const {
		attributes: { name, url, repository, tutorial, published, updated, tags, id },
		html_code
	} = data;

	let publish_date = published.toLocaleDateString();
	let update_date = updated.toLocaleDateString();

	const links = [
		{ label: 'URL', href: url },
		{ label: 'Repository', href: repository },
		{ label: 'Tutorial', href: tutorial }
	].filter((link) => link.href?.length > 0);

	const image_src = new URL(`../../../lib/assets/projects/${id}.webp`, import.meta.url).href;
</script>

<svelte:head>
	<title>MoinJulian | {name}</title>
</svelte:head>

<GoBack />

<h1>
	{name}
</h1>

<div class="dates">
	<div>Published: {publish_date}</div>
	{#if updated}
		<div>Updated: {update_date}</div>
	{/if}
</div>

<section aria-label="links" class="links">
	{#each links as { href, label }}
		<a {href} target="_blank">{label}</a>
	{/each}
</section>

<ul class="no-bullets tag-list" aria-label="list of tags">
	{#each tags as tag}
		<li class="tag">
			{tag}
		</li>
	{/each}
</ul>

<div class="image-container">
	<img src={image_src} alt="screenshot of the project" loading="lazy" />
</div>

<article>
	{@html html_code}
</article>

<style lang="scss">
	.dates {
		margin-top: -0.5rem;
		font-size: var(--small-font);
		color: var(--secondary-font-color);
		margin-top: 0.5rem;
	}

	article {
		:global(h2) {
			padding-top: 5rem;
			margin-top: -3.5rem;
		}

		:global(blockquote) {
			margin-block: 1rem;
			margin-left: 1rem;
			padding-left: 0.5rem;
			color: var(--secondary-font-color);
			font-size: var(--small-font);
			border-left: 0.2rem solid var(--border-color);
			line-height: 1.6;
		}

		:global(pre) {
			border-radius: 0.4rem;
			font-size: var(--small-font);
			padding: 1rem;
			margin-block: 1rem;
			overflow: auto;
			max-height: 30rem;
			border: 0.15rem solid var(--code-border-color);
			background-color: var(--code-bg-color);
			tab-size: 4;

			scrollbar-width: thin;
			&::-webkit-scrollbar {
				width: 0.4rem;
				height: 0.4rem;
			}
			&::-webkit-scrollbar-thumb {
				background-color: var(--secondary-font-color);
			}
		}

		:global(code:not(pre code)) {
			font-family: monospace;
			background-color: var(--inline-code-bg-color);
			padding-inline: 0.5rem;
			padding-block: 0.05rem;
			border-radius: 0.2rem;
			font-size: var(--small-font);
			white-space: nowrap;
		}
	}

	img {
		margin-block: 1.5rem;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: var(--small-font);
		margin-top: 1.5rem;
	}

	.tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}

	.image-container {
		border-bottom: 1px solid var(--border-color);
	}
</style>
