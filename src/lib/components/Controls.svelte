<script lang="ts">
	import CopyURL from './CopyURL.svelte';
	import GoBack from './GoBack.svelte';
	interface Props {
		variant?: string;
	}

	let { variant = 'top' }: Props = $props();
</script>

<div class={variant}>
	<GoBack />
	<CopyURL />
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
	div.bottom {
		margin-block: 1rem 0;
	}
</style>
