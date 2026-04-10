<script lang="ts">
	import { active_filter, filters_expanded } from './stores';
	interface Props {
		tags: string[];
		years: number[];
	}

	let { tags, years }: Props = $props();
	let focussed_tag: string | null = $state(null);
	let focussed_year: number | null = $state(null);
</script>

<section aria-label="Filters">
	<details bind:open={$filters_expanded} class="surface-panel">
		<summary class="flex items-center justify-between gap-4 text-sm font-medium text-white">
			<span>Filter projects</span>
			<span class="text-xs font-mono text-gray-500">
				{$active_filter.tags.length + $active_filter.years.length} active
			</span>
		</summary>
		<div class="filter-list">
			{#each tags as tag}
				<label
					class="chip"
					class:selected={$active_filter.tags.includes(tag)}
					class:focus={focussed_tag === tag}
					onfocusin={() => (focussed_tag = tag)}
					onfocusout={() => (focussed_tag = null)}
				>
					<input
						type="checkbox"
						value={tag}
						bind:group={$active_filter.tags}
						class="visually-hidden"
					/>
					{tag}
				</label>
			{/each}
			{#each years as year}
				<label
					class="chip"
					class:selected={$active_filter.years.includes(year)}
					class:focus={focussed_year === year}
					onfocusin={() => (focussed_year = year)}
					onfocusout={() => (focussed_year = null)}
				>
					<input
						type="checkbox"
						value={year}
						bind:group={$active_filter.years}
						class="visually-hidden"
					/>
					{year}
				</label>
			{/each}
		</div>
	</details>
</section>

<style lang="scss">
	.filter-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}
	label {
		cursor: pointer;
		transition:
			border-color 150ms ease,
			background-color 150ms ease,
			color 150ms ease;
		&.selected {
			border-color: rgba(129, 140, 248, 0.35);
			background-color: rgba(129, 140, 248, 0.14);
			color: #c7d2fe;
		}
		&.focus {
			outline: 0.1rem solid var(--accent-color);
		}
	}
</style>
