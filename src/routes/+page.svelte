<script lang="ts">
  import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
  import SectionContainer from '$lib/components/portfolio/SectionContainer.svelte';
  import SectionHeading from '$lib/components/portfolio/SectionHeading.svelte';
  import TimelineItem from '$lib/components/portfolio/TimelineItem.svelte';
  import { experience } from '$lib/data/experience';
  import { projects } from '$lib/data/projects';
  import { skillGroups } from '$lib/data/skills';
</script>

<svelte:head>
  <title>Julian – Full-Stack Developer</title>
  <meta name="description" content="Julian is a full-stack developer specialising in SvelteKit, TypeScript, and modern web technologies. Building clean, fast, and accessible applications." />
  <meta name="keywords" content="Julian, full-stack developer, SvelteKit, TypeScript, TailwindCSS, web development, portfolio" />
  <!-- OpenGraph -->
  <meta property="og:title" content="Julian – Full-Stack Developer" />
  <meta property="og:description" content="Building clean, fast, and accessible web applications with SvelteKit & TypeScript." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://moinjulian.com" />
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Julian – Full-Stack Developer" />
  <meta name="twitter:description" content="Building clean, fast, and accessible web applications with SvelteKit & TypeScript." />
</svelte:head>

<!-- ========== HERO ========== -->
<section id="hero" class="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
  <!-- Background grid -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2305_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2305_1px,transparent_1px)] bg-[size:72px_72px]" aria-hidden="true"></div>
  <!-- Glow -->
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

  <div class="relative max-w-5xl mx-auto w-full pt-24 pb-16">
    <div class="animate-fade-in">
      <div class="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm px-3 py-1.5 rounded-full font-mono mb-8">
        <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
        Building Swingalytica
      </div>
    </div>

    <h1 class="animate-slide-up text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6" style="animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards;">
      Hi, I'm <span class="text-indigo-400">Julian</span>
      <br />
      <span class="text-gray-400">Full-Stack Developer</span>
    </h1>

    <p class="animate-slide-up text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed mb-10" style="animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards;">
      Building scalable web applications with modern technologies.
      Passionate about clean code, great DX/UX, and innovative solutions.
    </p>

    <div class="animate-slide-up flex flex-wrap gap-4" style="animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards;">
      <a
        href="https://github.com/MoinJulian"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-100 transition-colors duration-200 text-sm"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        GitHub
      </a>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
      <span class="text-xs text-gray-500 font-mono">scroll</span>
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </div>
</section>

<!-- ========== ABOUT ========== -->
<SectionContainer id="about" class="border-t border-[#1f1f23]">
  <SectionHeading
    label="01 / about"
    title="About me"
    subtitle="A developer from Germany studying in England, passionate about building things for the web."
  />

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    <div class="space-y-4 text-gray-400 leading-relaxed">
      <p>
        I started my programming journey in <span class="text-white">2022</span>, beginning with HTML and CSS before quickly discovering JavaScript and falling in love with the web platform.
      </p>
      <p>
        After discovering <span class="text-indigo-400">Svelte</span> and <span class="text-indigo-400">SvelteKit</span>, I dove deep into the modern web ecosystem — TypeScript, TailwindCSS, databases, and DevOps. Today I build full-stack applications that are fast, accessible, and maintainable.
      </p>
      <p>
        I'm currently studying A-Levels in Computer Science, Mathematics, and Economics in England, while building Swingalytica.
      </p>
    </div>

    <div class="space-y-6">
      {#each skillGroups as group}
        <div>
          <h3 class="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-3">{group.category}</h3>
          <div class="flex flex-wrap gap-2">
            {#each group.skills as skill}
              <span class="text-sm text-gray-300 bg-[#111113] border border-[#1f1f23] px-3 py-1.5 rounded-lg hover:border-indigo-500/40 hover:text-white transition-all duration-200">
                {skill}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</SectionContainer>

<!-- ========== PROJECTS ========== -->
<SectionContainer id="projects" class="border-t border-[#1f1f23]">
  <SectionHeading
    label="02 / projects"
    title="Selected work"
    subtitle="A selection of projects I've built — from web apps to developer tools."
  />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
    {#each projects.filter(p => p.featured) as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <details class="group">
    <summary class="cursor-pointer text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200 flex items-center gap-2 select-none">
      <svg class="w-4 h-4 transition-transform duration-200 group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
      Show all {projects.length} projects
    </summary>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {#each projects.filter(p => !p.featured) as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </details>
</SectionContainer>

<!-- ========== EXPERIENCE ========== -->
<SectionContainer id="experience" class="border-t border-[#1f1f23]">
  <SectionHeading
    label="03 / experience"
    title="Experience & Education"
    subtitle="My journey so far — from school to building Swingalytica."
  />

  <div>
    {#each experience as entry, i}
      <TimelineItem {entry} last={i === experience.length - 1} />
    {/each}
  </div>
</SectionContainer>
