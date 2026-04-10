<script lang="ts">
	import PreviewCard from '$lib/components/PreviewCard.svelte';
	import type { posts } from './types';

	interface Props {
		post: posts;
	}

	let { post }: Props = $props();

	let draft = $derived(post.id.startsWith('_draft'));
</script>

<li>
	<PreviewCard href="/posts/{post.id}">
		<div class="flex flex-wrap items-center gap-2">
			<span class="chip">Published {post.published.toLocaleDateString()}</span>
			{#if post.updated != undefined}
				<span class="chip">Updated {post.updated?.toLocaleDateString()}</span>
			{/if}
		</div>
		<h2 class:draft>{post.title}</h2>
		<p>{post.description}</p>
		<div class="more">More...</div>
	</PreviewCard>
</li>

<style lang="scss">
	h2 {
		margin: 0;
		font-size: 1.4rem;
		color: white;
	}

	.draft {
		opacity: 0.5;
		&::before {
			content: '[Draft] ';
		}
	}

	p {
		color: var(--secondary-font-color);
	}
</style>
