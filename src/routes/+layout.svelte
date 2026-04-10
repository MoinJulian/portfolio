<script lang="ts">
  import Footer from '$lib/components/portfolio/Footer.svelte';
  import Navbar from '$lib/components/portfolio/Navbar.svelte';
  import LoadProgress from '$lib/components/LoadProgress.svelte';
  import './app.css';

  interface Props {
    children?: import('svelte').Snippet;
  }
  let { children }: Props = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon16x16.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<LoadProgress />

<div class="min-h-screen bg-[#0a0a0b] text-white flex flex-col">
  <Navbar />
  <main class="flex-1">
    {@render children?.()}
  </main>
  <Footer />
</div>
