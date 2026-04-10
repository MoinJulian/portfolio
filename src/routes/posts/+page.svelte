<script lang="ts">
	import PageShell from '$lib/components/portfolio/PageShell.svelte';
	import PostPreview from './PostPreview.svelte';

	let { data } = $props();
	const { posts } = data;
</script>

<svelte:head>
	<title>MoinJulian - Blog</title>
</svelte:head>

<PageShell
	label="Blog"
	title="Thoughts, experiments, and tutorials on web development."
	description="Notes from building software, learning in public, and documenting the things worth sharing."
>
	<div class="mb-6 flex flex-wrap gap-3">
		<span class="chip accent">{posts.length} posts</span>
	</div>

	<ol class="no-bullets grid gap-5">
		{#each posts as post (post.id)}
			<PostPreview {post} />
		{/each}
	</ol>
</PageShell>
