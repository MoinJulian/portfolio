<script lang="ts">
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faLink } from '@fortawesome/free-solid-svg-icons';

	let pending = $state(false);

	async function copy_url() {
		if (pending) return;
		const url = $page.url.href;
		pending = true;
		await window.navigator.clipboard.writeText(url);
		setTimeout(() => {
			pending = false;
		}, 1000);
	}
</script>

<button onclick={copy_url} aria-label="copy URL to clipboard" aria-live="polite">
	<Fa icon={faLink} />
	<span>{pending ? 'Copied URL' : 'Copy URL'}</span>
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.65rem 1rem;
		border-radius: 999px;
		border: 1px solid var(--border-color);
		background: #111113;
		font-size: 0.95rem;
		color: #e5e7eb;
		transition:
			border-color 150ms ease,
			transform 150ms ease;
	}

	button:hover {
		border-color: rgba(129, 140, 248, 0.35);
		transform: translateY(-1px);
	}
</style>
