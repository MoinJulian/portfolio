<script lang="ts">
	interface Props {
		href: string;
		children?: import('svelte').Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a
	{href}
	class="group block rounded-2xl border border-[#1f1f23] bg-[#111113]/90 p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-[#141418]"
>
	<div class="space-y-4">
		{@render children?.()}
	</div>
</a>

<style>
	a :global(.more) {
		font-size: 0.95rem;
		color: #a5b4fc;
		font-weight: 500;
	}
</style>
