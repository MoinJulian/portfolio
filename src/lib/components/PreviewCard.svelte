<script lang="ts">
	interface Props {
		href: string;
		children?: import('svelte').Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a {href}>{@render children?.()}</a>

<style>
	a {
		text-decoration: none;
		display: block;
		padding-block: 1.25rem;
		border-bottom: 1px solid var(--border-color);
	}

	a :global(.more) {
		font-size: var(--small-font);
		text-decoration: underline;
	}
</style>