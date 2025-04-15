<script lang="ts">
  import { page } from "$app/state";
  import { getBGM, getPage, manga } from "$lib";
  import { onMount } from "svelte";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { pushState } from "$app/navigation";

  let chapterIndex: number = $state(parseInt(page.params.chapterIndex));
  let pageIndex: number = $state(parseInt(page.params.pageIndex));

  let mangaPageUrl: string | null = $state(null);
  let lastBgm: string | null = $state(null);
  let bgmUrl: string | null = $state(null);
  let audioElement: HTMLAudioElement | null = $state(null);

  function handleInteraction(event: Event) {
    if (audioElement) {
      audioElement.play()
        .then(() => {
          // Audio successfully playing
        })
        .catch(error => {
          console.error("Audio play failed:", error);
        });
    }

    if (event instanceof KeyboardEvent) {
      // Handle keyboard navigation
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateToPreviousPage();
      }
      else if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateToNextPage();
      }
    }
  }

  function attemptAutoplay() {
    if (audioElement && bgmUrl !== null) {
      audioElement.play();
    }
  }

  function navigateToPreviousPage() {
    if (pageIndex > 0) {
      pageIndex = pageIndex - 1;
    } else if (chapterIndex > 0) {
      // Navigate to the last page of the previous chapter
      // This assumes manga contains the data we need
      if ($manga && $manga.chapters[chapterIndex - 1]) {
        const prevChapterLastPageIndex = $manga.chapters[chapterIndex - 1].pages.length - 1;
        chapterIndex = chapterIndex - 1;
        pageIndex = prevChapterLastPageIndex;
      }
    }
    else {
      alert("No more pages");
    }

    pushState(`/chapter/${chapterIndex}/${pageIndex}`, {});
  }

  function navigateToNextPage() {
    if ($manga && $manga.chapters[chapterIndex] && pageIndex < $manga.chapters[chapterIndex].pages.length - 1) {
      pageIndex = pageIndex + 1;
    } else if ($manga && chapterIndex < $manga.chapters.length - 1) {
      // Navigate to the first page of the next chapter
      pageIndex = 0;
      chapterIndex = chapterIndex + 1;
    }
    else {
      alert("No more pages");
    }

    pushState(`/chapter/${chapterIndex}/${pageIndex}`, {});
  }

  $effect(() => {
    if ($manga === null) {
      alert("Manga not initialized");
      return;
    }

    const mangaChapter = $manga.chapters[chapterIndex];
    if (mangaChapter === undefined) {
      alert(`Chapter ${chapterIndex + 1} not found`);
      return;
    }

    const mangaPage = mangaChapter.pages[pageIndex];
    if (mangaPage === undefined) {
      alert(`Page ${pageIndex + 1} not found`);
      return;
    }

    (async () => {
      const mangaPageImage = await getPage({ chapterIndex, page: mangaPage.page });
      mangaPageUrl = URL.createObjectURL(mangaPageImage);
    })();
    (async () => {
      if (mangaPage.bgm !== null) {
        const bgm = await getBGM(mangaPage.bgm!);

        if (lastBgm !== mangaPage.bgm) {
          console.log(bgm);
          bgmUrl = URL.createObjectURL(bgm);

          setTimeout(attemptAutoplay, 50);

          lastBgm = mangaPage.bgm;
        }
      }
      else {
        lastBgm = null;
        bgmUrl = null;
      }
    })();
  });

  onMount(() => {
    // Add interaction listeners to the entire document
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    // Return a cleanup function
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  });
</script>

<div class="container">
  <div class="header">
    <h1>Chapter {chapterIndex + 1} - Page {pageIndex + 1}</h1>
  </div>
  <div class="manga-container" role="presentation">
    <button class="nav-button prev-button" onclick={navigateToPreviousPage}>
      <ChevronLeft size={48} />
    </button>
    
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="manga-content" onclick={handleInteraction} onkeydown={handleInteraction}>
      {#if mangaPageUrl !== null}
        <img src={mangaPageUrl} alt="Manga Page" />
      {/if}
      {#if bgmUrl !== null}
        {#key bgmUrl}
          <audio bind:this={audioElement} loop>
            <source src={bgmUrl} type="audio/ogg" />
          </audio>
        {/key}
      {/if}
    </div>
    
    <button class="nav-button next-button" onclick={navigateToNextPage}>
      <ChevronRight size={48} />
    </button>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .manga-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .manga-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-button {
    background: rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 10px;
    color: white;
    transition: background 0.2s;
  }

  .nav-button:hover {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
