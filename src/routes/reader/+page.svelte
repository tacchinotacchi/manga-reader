<script lang="ts">
  import { bgmVolume, getBGM, getPage, getSE, getVoice, manga, seVolume, voiceVolume } from "$lib";
  import { onMount } from "svelte";
  import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-svelte";
  import { browser } from "$app/environment";
  import { pushState } from "$app/navigation";
  import { persisted } from "svelte-persisted-store";

  let chapterIndex: number = $state(0);
  let pageIndex: number = $state(0);
  let isMuted = persisted<boolean>("muted", false);

  onMount(() => {
    if (browser) {
      loadFromUrl();
    }

    // Listen for browser navigation events (back/forward buttons)
    window.addEventListener('popstate', loadFromUrl);
    window.addEventListener('pushstate', loadFromUrl);

    return () => {
      window.removeEventListener('popstate', loadFromUrl);
      window.removeEventListener('pushstate', loadFromUrl);
    };
  });

  const loadFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterParam = urlParams.get('chapter');
    const pageParam = urlParams.get('page');
    
    if (chapterParam) {
      chapterIndex = parseInt(chapterParam, 10) || 0;
    }
    
    if (pageParam) {
      pageIndex = parseInt(pageParam, 10) || 0;
    }
  };

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
  let bgms: Array<{ url: string, loop: boolean, type: "bgm" | "se" | "voice" }> = $state([]);

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
      return;
    }

    pushState(`/reader?chapter=${chapterIndex}&page=${pageIndex}`, {});
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
      return;
    }

    pushState(`/reader?chapter=${chapterIndex}&page=${pageIndex}`, {});
  }
  
  const onPageChange = async ({ page, bgm, se, voice }: { page: string, bgm: string | null, se: Array<string>, voice: boolean }) => {
    mangaPageUrl = await makePageUrlCached({ page, chapterIndex });
    let newBgms: Array<{ url: string, loop: boolean, type: "bgm" | "se" | "voice" }> = [];

    if (bgm !== null) {
      newBgms = [
        ...newBgms,
        { url: await makeBgmUrlCached(bgm), loop: true, type: "bgm" },
      ];
    }

    for (const soundEffect of se) {
      newBgms = [
        ...newBgms,
        { url: await makeSeUrlCached(soundEffect), loop: true, type: "se" },
      ];
    }

    if (voice) {
      newBgms = [
        ...newBgms,
        { url: URL.createObjectURL(await getVoice({ chapterIndex, page })), loop: false, type: "voice" },
      ];
    }

    bgms = newBgms;
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

  function toggleMute() {
    $isMuted = !$isMuted;
  }
</script>

<button class="volume-button" onclick={toggleMute} aria-label={$isMuted ? "Unmute audio" : "Mute audio"}>
  {#if $isMuted}
    <VolumeX size={30} />
  {:else}
    <Volume2 size={30} />
  {/if}
</button>

<div class="manga-container" role="presentation">
  <div class="buttons-column">
    <button class="nav-button" onclick={navigateToPreviousPage}>
      <ChevronLeft size={48} />
    </button>
  </div>
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="manga-content" onclick={handleInteraction} onkeydown={handleInteraction}>
    {#if mangaPageUrl !== null}
      <img class="manga-image" src={mangaPageUrl} alt="Manga Page" />
    {/if}
  </div>
  
  <div class="buttons-column">
    <button class="nav-button" onclick={navigateToNextPage}>
      <ChevronRight size={48} />
    </button>
  </div>
</div>

{#each bgms as { url, loop, type } (url)}
  <audio class="background-sound" loop={loop} volume={(type === "bgm" ? $bgmVolume : (type === "se" ? $seVolume : $voiceVolume)) / 100} muted={$isMuted}>
    <source src={url} type="audio/ogg" />
  </audio>
{/each}

<style>
  .manga-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    gap: 3em;
  }

  .manga-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-button {
    background: transparent;
    border: none;
    color: var(--color-contrast);

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

    transition: background 0.1s linear;
  }

  .nav-button:hover {
    cursor: pointer;
    background: color-mix(in srgb, var(--color-contrast) 20%, transparent 80%);
  }

  .volume-button {
    position: absolute;
    top: 1em;
    right: 1em;

    background: transparent;
    border: none;
    color: var(--color-contrast);
  }

  .volume-button:hover {
    cursor: pointer;
  }

  .buttons-column {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 95%;
  }

  .background-sound {
    display: none;
  }

  .manga-image {
    max-width: 100%;
    height: 95%;
    object-fit: contain;
  }
</style>
