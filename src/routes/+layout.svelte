<script lang="ts">
  import "../app.css";
  import { darkMode, disableHeader } from "$lib/index";

  $effect(() => {
    if ($darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  });
</script>

<div class="everything">
  {#if !$disableHeader}
    <div class="header">
      <a href="/" class="title">seagulls.live</a>
      <div class="header-right">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <button class="toggle-button" onclick={() => $darkMode = !$darkMode}>
        {$darkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </div>
    </div>
  {/if}

  <div class="content">
    <slot />
  </div>
</div>

<style>
  .everything {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 1.2em;
    padding: 0.5em;
    border-bottom: 1px solid var(--color-muted);
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
  }

  .content {
    flex: 1;
    overflow-y: auto;
    padding: 0.5em;
  }

  .header-right {
    margin-left: auto;
  }

  .toggle-button {
    color: var(--color-contrast);
    background-color: var(--color-background);
    border: 1px solid var(--color-muted);
    border-radius: 0.25rem;
    font-size: 0.9em;
    padding: 0.2em 0.5em;
  }
</style>