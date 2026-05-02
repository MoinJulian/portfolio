<script lang="ts">
	interface Props {
		label?: string;
		title: string;
		description?: string;
		class?: string;
		contentClass?: string;
		children?: import('svelte').Snippet;
		actions?: import('svelte').Snippet;
	}

	let {
		label,
		title,
		description,
		class: className = '',
		contentClass = '',
		children,
		actions
	}: Props = $props();
</script>

<section class={`relative overflow-hidden px-4 sm:px-6 lg:px-8 ${className}`}>
	<div
		class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2308_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2308_1px,transparent_1px)] bg-[size:72px_72px] opacity-60"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_42%)]"
		aria-hidden="true"
	></div>

	<div class="relative max-w-5xl mx-auto pt-28 pb-20">
		<div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-3xl">
				{#if label}
					<div
						class="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm font-mono text-indigo-300"
					>
						<span class="h-2 w-2 rounded-full bg-indigo-400"></span>
						{label}
					</div>
				{/if}

				<h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
					{title}
				</h1>

				{#if description}
					<p class="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
						{description}
					</p>
				{/if}
			</div>

			{#if actions}
				<div class="flex flex-wrap items-center gap-3 lg:justify-end">
					{@render actions()}
				</div>
			{/if}
		</div>

		<div class={`mt-12 ${contentClass}`}>
			{@render children?.()}
		</div>
	</div>
</section>
