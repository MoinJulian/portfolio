<script lang="ts">
	import PageShell from '$lib/components/portfolio/PageShell.svelte';
</script>

<svelte:head>
	<title>MoinJulian - About</title>
</svelte:head>

<PageShell
	label="About"
	title="Building on curiosity, consistency, and a love for the web."
	description="I moved from Germany to England, adapted to a new education system, and kept building software the whole way through."
>
	<div class="grid gap-6 lg:grid-cols-2">
		<section class="surface-panel">
			<p class="text-sm font-mono uppercase tracking-[0.3em] text-indigo-300">Background</p>
			<h2 class="mt-3 text-2xl font-semibold text-white">From Germany to England</h2>
			<div class="mt-4 space-y-4 text-gray-400">
				<p>
					Before moving to England, I attended school in Germany for nine years. Midway through Year
					9, I decided to continue my education abroad and repeat the year so I could properly
					improve my English.
				</p>
				<p>
					After arriving in England in 2022, I quickly settled into the new environment and realised
					how much I enjoyed the experience. That decision shaped both my studies and the way I
					approach growth: be uncomfortable, learn fast, and keep moving.
				</p>
			</div>
		</section>

		<section class="surface-panel">
			<p class="text-sm font-mono uppercase tracking-[0.3em] text-indigo-300">Programming</p>
			<h2 class="mt-3 text-2xl font-semibold text-white">
				Started with the basics, stayed for the craft.
			</h2>
			<div class="mt-4 space-y-4 text-gray-400">
				<p>
					I began programming through HTML and CSS at school, but it did not take long before
					JavaScript pulled me in. The idea of making websites interactive turned into a much deeper
					interest in how the web works end to end.
				</p>
				<p>
					Discovering Svelte and later SvelteKit gave me the framework I wanted: fast,
					component-driven, and enjoyable to build with. Since then I have focused on writing clean,
					maintainable applications with a strong emphasis on UX and developer experience.
				</p>
				<p>
					For a fuller overview of the tools I use regularly, head over to the
					<a href="/skills">skills page</a>.
				</p>
			</div>
		</section>
	</div>
</PageShell>
