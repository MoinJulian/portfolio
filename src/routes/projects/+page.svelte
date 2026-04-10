<script lang="ts">
	import PageShell from '$lib/components/portfolio/PageShell.svelte';
	import { fade } from 'svelte/transition';
	import Filter from './Filter.svelte';
	import { active_filter } from './stores';
	import ProjectPreview from './ProjectPreview.svelte';

	let { data } = $props();
	const { projects, tags, years } = data;

	let filtered_projects = $derived(projects
		.filter(
			(project) =>
				$active_filter.tags.every((tag) => project.tags.includes(tag)) &&
				($active_filter.years.length === 0 ||
					$active_filter.years.includes(project.updated.getFullYear()))
		)
		.sort((a, b) => (a.pin && !b.pin ? -1 : b.pin && !a.pin ? 1 : 0)));
</script>

<svelte:head>
	<title>MoinJulian - Projects</title>
</svelte:head>

<PageShell
	label="Projects"
	title="A growing archive of products, experiments, and shipped ideas."
	description="From polished applications to smaller experiments, this is where I collect the work I am most proud of."
>
	<div class="mb-6 flex flex-wrap gap-3">
		<span class="chip accent">{projects.length} total projects</span>
		<span class="chip">{filtered_projects.length} shown</span>
	</div>

	<Filter {tags} {years} />

	{#if filtered_projects.length > 0}
		<ol class="no-bullets mt-6 grid gap-5">
			{#each filtered_projects as project (project.id)}
				<ProjectPreview {project} />
			{/each}
		</ol>
	{:else}
		<div class="surface-panel mt-6 text-gray-400" in:fade={{ duration: 200, delay: 200 }}>
			No projects within this filter.
		</div>
	{/if}
</PageShell>
