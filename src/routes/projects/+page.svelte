<script lang="ts">
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

<h1>Projects</h1>

<p>This is a selection of my favourite web applications I've developed.</p>

<p>I currently got {projects.length} projects.</p>
<Filter {tags} {years} />

{#if filtered_projects.length > 0}
	<ol class="no-bullets">
		{#each filtered_projects as project (project.id)}
			<ProjectPreview {project} />
		{/each}
	</ol>
{:else}
	<p in:fade={{ duration: 200, delay: 200 }}>No projects within this filter</p>
{/if}

<style>
	ol {
		margin-top: 1rem;
	}
</style>
