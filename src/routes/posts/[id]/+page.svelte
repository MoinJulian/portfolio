<script lang="ts">
	import Controls from '$lib/components/Controls.svelte';
	import PageShell from '$lib/components/portfolio/PageShell.svelte';

	let { data } = $props();

	let toc = $derived(data.toc);
	let html_code = $derived(data.html_code);
	let title = $derived(data.attributes.title);
	let updated = $derived(data.attributes.updated?.toLocaleDateString());
	let published = $derived(data.attributes.published.toLocaleDateString());
</script>

<svelte:head>
	<title>MoinJulian | {title}</title>
</svelte:head>

<PageShell
	label="Article"
	{title}
	description={data.attributes.description}
	contentClass="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]"
>
	<aside class="space-y-6 xl:sticky xl:top-24 xl:self-start">
		<div class="surface-panel space-y-5">
			<Controls />
			<div class="space-y-3 text-sm text-gray-400">
				<div>
					<div class="font-mono uppercase tracking-[0.25em] text-xs text-gray-500">Published</div>
					<div class="mt-1 text-base text-white">{published}</div>
				</div>
				{#if updated}
					<div>
						<div class="font-mono uppercase tracking-[0.25em] text-xs text-gray-500">Updated</div>
						<div class="mt-1 text-base text-white">{updated}</div>
					</div>
				{/if}
			</div>
		</div>

		{#if toc.length > 0}
			<div class="surface-panel">
				<div class="font-mono uppercase tracking-[0.25em] text-xs text-gray-500">
					Table of Contents
				</div>
				<ol class="mt-4 space-y-2 text-sm text-gray-400">
					{#each toc as item}
						<li>
							<a class="transition-colors hover:text-white" href="#{item.id}">{item.text}</a>
						</li>
					{/each}
				</ol>
			</div>
		{/if}
	</aside>

	<article class="surface-panel portfolio-prose">
		{@html html_code}
	</article>
</PageShell>
