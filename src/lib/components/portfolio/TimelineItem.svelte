<script lang="ts">
  import type { ExperienceEntry } from '$lib/data/experience';

  interface Props {
    entry: ExperienceEntry;
    last?: boolean;
  }
  let { entry, last = false }: Props = $props();

  const typeColors: Record<ExperienceEntry['type'], string> = {
    'full-time': 'bg-green-500/20 text-green-400 border-green-500/30',
    'part-time': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'freelance': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'self-employed': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'education': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  };
</script>

<div class="relative flex gap-6 pb-10 {last ? 'pb-0' : ''}">
  <!-- Timeline line -->
  {#if !last}
    <div class="absolute left-3.5 top-8 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 to-transparent"></div>
  {/if}

  <!-- Dot -->
  <div class="relative z-10 flex-shrink-0 mt-1">
    <div class="w-7 h-7 rounded-full bg-[#111113] border-2 {entry.current ? 'border-indigo-500' : 'border-[#2f2f35]'} flex items-center justify-center">
      {#if entry.current}
        <div class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
      {:else}
        <div class="w-2 h-2 rounded-full bg-[#3f3f47]"></div>
      {/if}
    </div>
  </div>

  <!-- Content -->
  <div class="flex-1 bg-[#111113] border border-[#1f1f23] rounded-xl p-5 hover:border-[#2f2f3a] transition-colors duration-200">
    <div class="flex flex-wrap items-start gap-3 mb-3">
      <div class="flex-1 min-w-0">
        <h3 class="text-base font-semibold text-white truncate">{entry.title}</h3>
        <p class="text-indigo-300 text-sm mt-0.5">{entry.company}</p>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="text-xs border rounded-full px-2.5 py-1 {typeColors[entry.type]}">
          {entry.type}
        </span>
        <span class="text-xs text-gray-500 font-mono">{entry.period}</span>
      </div>
    </div>
    <p class="text-gray-400 text-sm leading-relaxed mb-3">{entry.description}</p>
    <div class="flex flex-wrap gap-1.5">
      {#each entry.tech as tech}
        <span class="text-xs font-mono bg-[#1a1a1f] text-gray-400 px-2 py-0.5 rounded">
          {tech}
        </span>
      {/each}
    </div>
  </div>
</div>
