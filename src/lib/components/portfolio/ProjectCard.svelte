<script lang="ts">
  import type { Project } from '$lib/data/projects';

  interface Props {
    project: Project;
  }
  let { project }: Props = $props();
</script>

<article
  class="group relative bg-[#111113] border border-[#1f1f23] rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
>
  <div class="flex items-start justify-between gap-4">
    <h3 class="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
      {project.title}
    </h3>
    <div class="flex items-center gap-3 flex-shrink-0">
      {#if project.github}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-white transition-colors duration-200"
          aria-label="View on GitHub"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      {/if}
      {#if project.live}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-white transition-colors duration-200"
          aria-label="View live site"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      {/if}
    </div>
  </div>

  <p class="text-gray-400 text-sm leading-relaxed flex-grow">{project.description}</p>

  <div class="flex flex-wrap gap-2 mt-2">
    {#each project.tech as tech}
      <span class="text-xs font-mono bg-[#1a1a1f] text-indigo-300 border border-[#2a2a32] px-2.5 py-1 rounded-md">
        {tech}
      </span>
    {/each}
  </div>
</article>
