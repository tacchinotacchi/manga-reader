<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/state";
  import { browser } from "$app/environment";
  
  const chapterIndex = page.params.chapterIndex;
  
  onMount(() => {
    if (browser) {
      // Use replaceState instead of goto to avoid breaking browser history
      window.history.replaceState(null, "", `/chapter/${chapterIndex}/0`);
      // Trigger a page reload to handle the new URL without adding to history
      window.location.reload();
    }
  });
</script>
