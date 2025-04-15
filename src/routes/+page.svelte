<script lang="ts">
  import { manga, processFolder } from "$lib/index";

  let progress = 0;
  let isProcessing = false;
  let result: { processed: number; errors: string[] } | null = null;

  function handleFolderSelect() {
    const input = document.createElement('input');
    input.type = 'file';
    input.setAttribute('webkitdirectory', '');
    input.setAttribute('directory', '');
    
    input.onchange = async (event: Event) => {
      if (event.target instanceof HTMLInputElement && event.target.files && event.target.files.length > 0) {
        isProcessing = true;
        
        try {
          result = await processFolder(event.target.files, (progressValue) => {
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
</script>

<div class="main-container">
  <div class="loading-container">
    <h1>Manga Reader</h1>
    
    <button on:click={handleFolderSelect} disabled={isProcessing}>
      {isProcessing ? 'Processing...' : 'Select Folder'}
    </button>
    
    {#if isProcessing}
      <div class="progress">
        <div class="progress-bar" style="width: {progress}%"></div>
        <div class="progress-text">{progress}%</div>
      </div>
    {/if}
    
    {#if result !== null}
      <div class="result">
        <p>Processed {result.processed} files</p>
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
      </div>
    {/if}
  </div>

  <div class="toc-container">
    <h1>Table of Contents</h1>
    {#each $manga?.chapters ?? [] as chapter, chapterIndex}
      <div class="chapter">
        <a href={`/chapter/${chapterIndex}`}>{chapter.title}</a>
      </div>
    {/each}
  </div>
</div>

<style>
  .main-container {
    display: flex;
    flex-direction: row;
    gap: 2em;
  }

  .loading-container {
    display: flex;
    flex-direction: column;
  }

  .toc-container {
    display: flex;
    flex-direction: column;
  }
  
  button {
    padding: 0.8rem 1.5rem;
    background-color: #4a5568;
    color: white;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  button:hover:not(:disabled) {
    background-color: #2d3748;
  }
  
  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .progress {
    margin-top: 1rem;
    height: 20px;
    background-color: #e2e8f0;
    border-radius: 0.25rem;
    overflow: hidden;
    position: relative;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #4a5568;
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
  
  .result {
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: #f7fafc;
    border-radius: 0.25rem;
  }
  
  .errors {
    margin-top: 1rem;
    color: #e53e3e;
  }
</style>
