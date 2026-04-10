<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

	function go_back() {
		history.back();
	}
</script>

<button onclick={go_back} aria-label="Go back">
	<Fa icon={faLeftLong} />
	<span>Back</span>
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
