<script lang="ts">
	import PageShell from '$lib/components/portfolio/PageShell.svelte';
	import { skillGroups } from '$lib/data/skills';
</script>

<svelte:head>
	<title>MoinJulian - Skills</title>
</svelte:head>

<PageShell
	label="Skills"
	title="Tools and technologies I reach for most."
	description="A practical stack built around SvelteKit, TypeScript, backend services, and deployment workflows."
>
	<div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
		<section class="surface-panel">
			<p class="text-sm font-mono uppercase tracking-[0.3em] text-indigo-300">Focus</p>
			<h2 class="mt-3 text-2xl font-semibold text-white">Product-minded full-stack development</h2>
			<div class="mt-4 space-y-4 text-gray-400">
				<p>
					I enjoy building web products from first idea to deployment, which means thinking
					about architecture, UI, performance, accessibility, and developer workflow together.
				</p>
				<p>
					My strongest day-to-day tools are around modern TypeScript applications, with enough
					backend and DevOps knowledge to ship complete products independently.
				</p>
			</div>
		</section>

		<div class="grid gap-6">
			{#each skillGroups as group}
				<section class="surface-panel">
					<p class="text-sm font-mono uppercase tracking-[0.3em] text-indigo-300">
						{group.category}
					</p>
					<div class="mt-4 flex flex-wrap gap-3">
						{#each group.skills as skill}
							<span class="chip">{skill}</span>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>
</PageShell>
