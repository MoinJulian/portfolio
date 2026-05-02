<script lang="ts">
  interface Props {
    id: string;
    class?: string;
    children?: import('svelte').Snippet;
  }
  let { id, class: className = '', children }: Props = $props();
</script>

<section
  {id}
  class="py-20 px-4 sm:px-6 lg:px-8 {className}"
>
  <div class="max-w-5xl mx-auto">
    {@render children?.()}
  </div>
</section>
