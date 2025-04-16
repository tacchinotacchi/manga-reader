<script lang="ts">
  import "../app.css";
</script>

<div class="everything">
  <div class="header">
    <a href="/" class="title">Manga Reader</a>
  </div>

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
</style>