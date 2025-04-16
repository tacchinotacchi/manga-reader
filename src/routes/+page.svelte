<script lang="ts">
  import { manga, processFiles, resetDatabase, voiceVolume, seVolume, bgmVolume } from "$lib/index";

  let progress = 0;
  let isProcessing = false;
  let result: { processed: number; errors: string[] } | null = null;

  function handleLoadFiles(fn: (files: FileList, progressCallback?: (progress: number) => void) => Promise<{ processed: number; errors: string[] }>) {
    const input = document.createElement('input');
    input.type = 'file';
    input.setAttribute('webkitdirectory', '');
    input.setAttribute('directory', '');
    
    input.onchange = async (event: Event) => {
      if (event.target instanceof HTMLInputElement && event.target.files && event.target.files.length > 0) {
        isProcessing = true;
        
        try {
          result = await fn(event.target.files, (progressValue) => {
            progress = progressValue;
          });
        } catch (error) {
          console.error("Error processing folder:", error);
        } finally {
          isProcessing = false;
        }
      }
    };
    
    input.click();
  }

  function handleLoadEpisode() {
    handleLoadFiles((files, progressCallback) => $processFiles(files, false, progressCallback));
  }

  function handleLoadSound() {
    handleLoadFiles((files, progressCallback) => $processFiles(files, true, progressCallback));
  }
</script>

<div class="main-container">
  <div class="loading-container">
    <div class="title">
      Input
    </div>

    <div>
      These buttons do NOT upload anything to the internet!
    </div>

    <div>
      They only load the files into your browser's memory.
    </div>


    <div>
      Expected folder structure for the episode:
      <pre class="code">script.json
img/
  ch-1/
    01.jpg
    ...
voice/
  ch-1/
    01.ogg
    ...</pre>
    </div>
    <button class="load-button" on:click={handleLoadEpisode} disabled={isProcessing}>
      {isProcessing ? 'Processing...' : 'Load episode'}
    </button>

    <div>
      Expected folder structure for the sound files:
      <pre class="code">se/
  001.ogg
  ...
bgm/
  001.ogg
  ...</pre>
    </div>
    <button class="load-button" on:click={handleLoadSound} disabled={isProcessing}>
      {isProcessing ? 'Processing...' : 'Load sound files'}
    </button>

    <div>
      Use this button before loading a new episode.
    </div>
    <button class="load-button" on:click={resetDatabase} disabled={isProcessing}>
      Reset
    </button>
    
    {#if isProcessing}
      <div class="progress">
        <div class="progress-bar" style="width: {progress}%"></div>
        <div class="progress-text">{progress}%</div>
      </div>
    {/if}
    
    {#if result !== null}
      <div>Processed {result.processed} files</div>
      {#if result.errors.length > 0}
        <div class="errors">
          <h3>Errors ({result.errors.length}):</h3>
          <ul>
            {#each result.errors as error}
              <li>{error}</li>
            {/each}
          </ul>
        </div>
      {/if}
    {/if}
  </div>

  <div class="vertical-divider"></div>

  <div class="toc-container">
    <div class="title">Table of Contents</div>
    {#each $manga?.chapters ?? [] as chapter, chapterIndex}
      <div class="chapter">
        <a href={`/chapter/${chapterIndex}`}>{chapter.title}</a>
      </div>
    {/each}
  </div>

  <div class="vertical-divider"></div>

  <div class="settings-container">
    <div class="title">Settings</div>
    <div class="settings-content">
      <label for="voice-volume">Voice Volume: {Math.round($voiceVolume)}</label>
      <input 
        type="range"
        id="voice-volume"
        min="0"
        max="100"
        bind:value={$voiceVolume}
      />
      
      <label for="se-volume">Sound Effect Volume: {Math.round($seVolume)}</label>
      <input 
        type="range" 
        id="se-volume" 
        min="0" 
        max="100" 
        bind:value={$seVolume}
      />
      
      <label for="bgm-volume">Background Music Volume: {Math.round($bgmVolume)}</label>
      <input 
        type="range" 
        id="bgm-volume" 
        min="0" 
        max="100" 
        bind:value={$bgmVolume}
      />
    </div>
  </div>
</div>

<style>
  .title {
    font-size: 1.2em;
    font-weight: bold;
  }

  .vertical-divider {
    width: 1px;
    background-color: var(--color-muted);
  }

  .main-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 2em;

    padding-left: 10em;
    padding-right: 10em;

    height: 100%;
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  
  .settings-content {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .load-button {
    max-width: 20em;
  }

  .toc-container {
    display: flex;
    flex-direction: column;
    min-width: 20em;
  }

  button {
    padding: 0.8rem 1.5rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  button:hover:not(:disabled) {
    background-color: color-mix(in srgb, var(--color-primary) 80%, var(--color-contrast) 20%);
  }
  
  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .progress {
    margin-top: 1rem;
    height: 20px;
    background-color: var(--color-background);
    border-radius: 0.25rem;
    overflow: hidden;
    position: relative;
  }
  
  .progress-bar {
    height: 100%;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
  }
  
  .progress-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }
  
  .errors {
    margin-top: 1rem;
    color: #e53e3e;
  }

  .code {
    background-color: color-mix(in srgb, var(--color-background) 90%, var(--color-contrast) 10%);
    border-radius: 0.25rem;
    border: 1px solid var(--color-muted);
    padding: 0.5rem;
    font-size: 0.8rem;
  }
</style>
