<script lang="ts">
  interface Props {
    label: string;
    title: string;
    subtitle?: string;
  }
  let { label, title, subtitle }: Props = $props();
</script>

<div class="mb-12">
  <span class="text-indigo-400 text-sm font-mono font-medium tracking-widest uppercase">{label}</span>
  <h2 class="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
  {#if subtitle}
    <p class="mt-3 text-gray-400 text-lg max-w-2xl">{subtitle}</p>
  {/if}
</div>
