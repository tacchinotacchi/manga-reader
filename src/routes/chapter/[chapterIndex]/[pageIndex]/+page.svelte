<script lang="ts">
  import { page } from "$app/state";
  import { getBGM, getPage, getSE, getVoice, manga } from "$lib";
  import { onMount } from "svelte";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { pushState } from "$app/navigation";

  let chapterIndex: number = $state(parseInt(page.params.chapterIndex));
  let pageIndex: number = $state(parseInt(page.params.pageIndex));

  let pageCache: Record<string, string> = {};
  const makePageUrlCached = async ({ page, chapterIndex }: { page: string, chapterIndex: number }) => {
    const key = `${chapterIndex}-${page}`;

    if (pageCache[key] === undefined) {
      pageCache[key] = URL.createObjectURL(await getPage({ chapterIndex, page }));
    }

    return pageCache[key];
  };

  let bgmCache: Record<string, string> = {};
  const makeBgmUrlCached = async (bgm: string) => {
    if (bgmCache[bgm] === undefined) {
      bgmCache[bgm] = URL.createObjectURL(await getBGM(bgm));
    }

    return bgmCache[bgm];
  };

  let seCache: Record<string, string> = {};
  const makeSeUrlCached = async (se: string) => {
    if (seCache[se] === undefined) {
      seCache[se] = URL.createObjectURL(await getSE(se));
    }

    return seCache[se];
  };

  let mangaPageUrl: string | null = $state(null);
  let bgmUrls: Array<string> = $state([]);

  function handleInteraction(event: Event) {
    attemptAutoplay();

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
    // Get all background sound elements
    const backgroundSounds = document.querySelectorAll('.background-sound');
    
    // Check each element and play if it's an audio element
    backgroundSounds.forEach(element => {
      if (element instanceof HTMLAudioElement) {
        element.play()
          .then(() => {
            // Audio successfully playing
          })
          .catch(error => {
            console.error("Background sound play failed:", error);
          });
      }
    });
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
  
  const onPageChange = async ({ page, bgm, se, voice }: { page: string, bgm: string | null, se: Array<string>, voice: boolean }) => {
    mangaPageUrl = await makePageUrlCached({ page, chapterIndex });
    let newBgmUrls: Array<string> = [];

    if (bgm !== null) {
      newBgmUrls = [
        ...newBgmUrls,
        await makeBgmUrlCached(bgm),
      ];
    }

    for (const soundEffect of se) {
      newBgmUrls = [
        ...newBgmUrls,
        await makeSeUrlCached(soundEffect),
      ];
    }

    if (voice) {
      newBgmUrls = [
        ...newBgmUrls,
        URL.createObjectURL(await getVoice({ chapterIndex, page })),
      ];
    }

    bgmUrls = newBgmUrls;
    setTimeout(attemptAutoplay, 100);
  };

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

    onPageChange(mangaPage);
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
  <div class="manga-container" role="presentation">
    <button class="nav-button" onclick={navigateToPreviousPage}>
      <ChevronLeft size={48} />
    </button>
    
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="manga-content" onclick={handleInteraction} onkeydown={handleInteraction}>
      {#if mangaPageUrl !== null}
        <img src={mangaPageUrl} alt="Manga Page" />
      {/if}
      {#each bgmUrls as bgmUrl (bgmUrl)}
        <audio class="background-sound" loop>
          <source src={bgmUrl} type="audio/ogg" />
        </audio>
      {/each}
    </div>
    
    <button class="nav-button" onclick={navigateToNextPage}>
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

    gap: 3em;
  }

  .manga-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-button {
    background: transparent;
    border: none;
    color: var(--color-contrast);
  }
</style>
