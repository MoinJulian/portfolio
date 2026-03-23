<script lang="ts">

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  $effect(() => {
    function onScroll() {
      scrolled = window.scrollY > 20;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function scrollToSection(e: MouseEvent, href: string) {
    if (href.startsWith('#')) {
      e.preventDefault();
      mobileOpen = false;
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
    ? 'bg-[#0a0a0b]/90 backdrop-blur-md border-b border-[#1f1f23] shadow-sm'
    : 'bg-transparent'}"
>
  <nav class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">
    <!-- Logo -->
    <a
      href="/"
      class="text-white font-bold text-lg tracking-tight hover:text-indigo-400 transition-colors duration-200 font-mono"
    >
      moinjulian<span class="text-indigo-400">.</span>com
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-1">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={(e) => scrollToSection(e, link.href)}
          class="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="https://github.com/MoinJulian"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors duration-200"
      >
        GitHub
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
    >
      {#if mobileOpen}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      {:else}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      {/if}
    </button>
  </nav>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div class="md:hidden bg-[#0a0a0b]/95 backdrop-blur-md border-b border-[#1f1f23] px-4 pb-4">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={(e) => scrollToSection(e, link.href)}
          class="block px-3 py-3 text-gray-400 hover:text-white transition-colors duration-200 border-b border-[#1f1f23] last:border-0"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="https://github.com/MoinJulian"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-3 block text-center px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
      >
        GitHub
      </a>
    </div>
  {/if}
</header>
