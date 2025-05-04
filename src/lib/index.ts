import { persisted } from "svelte-persisted-store";
import { derived, writable } from "svelte/store";

import { z } from "zod";

export const MangaSpecSchema = z.object({
  version: z.string(),
  lang: z.string(),
  soundDir: z.string(),
  title: z.string(),
  art: z.string(),
  translations: z.record(z.array(z.object({
    name: z.string(),
    url: z.string().nullable()
  }))),
  volumes: z.record(z.array(z.string())),
  chapters: z.record(z.object({
    title: z.record(z.string().nullable()),
    pages: z.array(z.object({
      page: z.string(),
      bgm: z.string().nullable(),
      se: z.array(z.string()),
      voice: z.boolean()
    }))
  }))
});
export type MangaSpec = z.infer<typeof MangaSpecSchema>;

export const MangaSchema = z.object({
  title: z.string(),
  chapters: z.array(z.object({
    title: z.string(),
    pages: z.array(z.object({
      page: z.string(),
      bgm: z.string().nullable(),
      se: z.array(z.string()),
      voice: z.boolean()
    }))
  }))
});
export type Manga = z.infer<typeof MangaSchema>;

export const storeBlob = async (pageKey: string, blob: Blob): Promise<void> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("manga-reader-db", 1);
    
    request.onupgradeneeded = (event) => {
      if (!(event.target instanceof IDBOpenDBRequest)) {
        reject(new Error("Invalid event target"));
        return;
      }
      const db = event.target.result;
      if (!db.objectStoreNames.contains("pages")) {
        db.createObjectStore("pages", { keyPath: "id" });
      }
    };
    
    request.onsuccess = (event) => {
      if (!(event.target instanceof IDBOpenDBRequest)) {
        reject(new Error("Invalid event target"));
        return;
      }
      const db = event.target.result;
      const transaction = db.transaction(["pages"], "readwrite");
      const store = transaction.objectStore("pages");
      
      const storeRequest = store.put({ id: pageKey, data: blob });
      
      storeRequest.onsuccess = () => resolve();
      storeRequest.onerror = () => reject(storeRequest.error);
      
      transaction.oncomplete = () => db.close();
    };
    
    request.onerror = () => reject(request.error);
  });
};

export const getBlob = async (pageKey: string): Promise<Blob | null> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("manga-reader-db", 1);
    
    request.onsuccess = (event) => {
      if (!(event.target instanceof IDBOpenDBRequest)) {
        reject(new Error("Invalid event target"));
        return;
      }
      const db = event.target.result;
      const transaction = db.transaction(["pages"], "readonly");
      const store = transaction.objectStore("pages");
      
      const getRequest = store.get(pageKey);
      
      getRequest.onsuccess = () => {
        const result = getRequest.result;
        resolve(result ? result.data : null);
      };
      
      getRequest.onerror = () => reject(getRequest.error);
      
      transaction.oncomplete = () => db.close();
    };
    
    request.onerror = () => reject(request.error);
    
    request.onupgradeneeded = (event) => {
      if (!(event.target instanceof IDBOpenDBRequest)) {
        reject(new Error("Invalid event target"));
        return;
      }
      const db = event.target.result;
      if (!db.objectStoreNames.contains("pages")) {
        db.createObjectStore("pages", { keyPath: "id" });
      }
    };
  });
};

const processScriptFile = async (file: File) => {
  const text = await file.text();
  
  try {
    // Parse the JSON file content
    const jsonData = JSON.parse(text);
    
    // Validate and process the manga specification
    const mangaData = MangaSpecSchema.parse(jsonData);

    return mangaData;
  } catch (error) {
    console.error("Error processing script file:", error);
    throw new Error(`Invalid script file format: ${error instanceof Error ? error.message : String(error)}`);
  }
};

export const manga = persisted<Manga | null>("manga", null);

export const disableHeader = persisted<boolean>("disable-header", false);
export const darkMode = persisted<boolean>("dark-mode", false);
export const voiceVolume = persisted<number>("voice-volume", 100);
export const seVolume = persisted<number>("se-volume", 80);
export const bgmVolume = persisted<number>("bgm-volume", 80);

export const isMobile = writable<boolean>(false);

export const getPage = async ({ chapterIndex, page }: { chapterIndex: number, page: string }): Promise<Blob> => {
  const fullPath = `img/ch-${chapterIndex + 1}/${page}.jpg`;
  const blob = await getBlob(fullPath);
  if (blob === null) {
    throw new Error(`Page file not found: ${fullPath}`);
  }

  return blob;
};

export const getBGM = async (path: string): Promise<Blob> => {
  const fullPath = `bgm/${path}.ogg`;
  const blob = await getBlob(fullPath);
  if (blob === null) {
    throw new Error(`BGM file not found: ${fullPath}`);
  }

  return blob;
};

export const getSE = async (path: string): Promise<Blob> => {
  const fullPath = `se/${path}.ogg`;
  const blob = await getBlob(fullPath);
  if (blob === null) {
    throw new Error(`SE file not found: ${fullPath}`);
  }

  return blob;
};

export const getVoice = async ({ chapterIndex, page }: { chapterIndex: number, page: string }): Promise<Blob> => {
  const fullPath = `voice/ch-${chapterIndex + 1}/${page}.ogg`;
  const blob = await getBlob(fullPath);
  if (blob === null) {
    throw new Error(`Voice file not found: ${fullPath}`);
  }

  return blob;
};


const validateMangaSpec = async (mangaSpec: MangaSpec): Promise<Manga> => {
  let pagesToCheck: Array<{ chapterIndex: number, page: string }> = [];
  let voiceToCheck: Array<{ chapterIndex: number, page: string }> = [];

  const chapters: Manga["chapters"] = Object.values(mangaSpec.chapters).map((chapter) => {
    return {
      title: Object.values(chapter.title)[0] ?? "",
      pages: Object.values(chapter.pages)
    }
  });

  chapters.forEach((chapter, chapterIndex) => {
    for (const pageInfo of Object.values(chapter.pages)) {
      const { page, bgm, voice } = pageInfo;
      pagesToCheck.push({ chapterIndex, page });

      if (voice) {
        voiceToCheck.push({ chapterIndex, page });
      }
    }
  });

  await Promise.all(pagesToCheck.map(getPage));
  await Promise.all(voiceToCheck.map(getVoice));

  return { title: mangaSpec.title, chapters };
};

const checkSoundFiles = async ($manga: Manga | null): Promise<void> => {
  if ($manga === null) {
    throw new Error("Load manga first");
  }

  let bgmToCheck: Array<string> = [];
  let seToCheck: Array<string> = [];

  const chapters = $manga.chapters;
  for (const chapter of chapters) {
    const pages = chapter.pages;
    for (const page of pages) {
      const { bgm, se, voice } = page;

      if (bgm !== null) {
        bgmToCheck.push(bgm);
      }
      for (const soundEffect of se) {
        seToCheck.push(soundEffect);
      }
    }
  }

  await Promise.all(bgmToCheck.map(getBGM));
  await Promise.all(seToCheck.map(getSE));
};

export const processFiles = derived(manga, ($manga) => async (
  files: FileList,
  loadingSoundFiles: boolean,
  progressCallback?: (progress: number) => void,
): Promise<{ processed: number; errors: string[] }> => {
  const shaveFirstFolder = (path: string) => {
    const parts = path.split('/');
    return parts.slice(1).join('/');
  };

  const filesArray = Array.from(files);

  const result = { processed: 0, errors: [] as string[] };
  const total = filesArray.length;
  
  if (total === 0) {
    return result;
  }

  // Process files in batches to avoid overwhelming the browser
  const BATCH_SIZE = 20;
  let processed = 0;

  for (let i = 0; i < total; i += BATCH_SIZE) {
    const batch = filesArray.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map(async (file) => {
        if (file.name === 'script.json') {
          // skip for now
          return;
        }

        const relativePath = shaveFirstFolder(file.webkitRelativePath);
        try {
          await storeBlob(relativePath, file);
          result.processed++;
        } catch (error) {
          result.errors.push(`Error processing ${file.name}: ${error}`);
        }
      })
    );
    
    processed += batch.length;
    
    if (progressCallback) {
      progressCallback(Math.round((processed / total) * 100));
    }
  }

  if (!loadingSoundFiles) {
    const scriptFile = filesArray.find(file => file.name === 'script.json');
    if (scriptFile) {
      const mangaSpec: MangaSpec = await processScriptFile(scriptFile);
      const mangaEnsured: Manga = await validateMangaSpec(mangaSpec);

      manga.set(mangaEnsured);
    }
  }
  else {
    await checkSoundFiles($manga);
  }
    
  return result;
});

export const resetDatabase = async () => {
  // Clear the IndexedDB database
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.deleteDatabase("manga-reader-db");
    
    request.onsuccess = () => {
      console.log("Database successfully deleted");
      // Reset the manga store
      manga.set(null);
      resolve();
    };
    
    request.onerror = (event) => {
      console.error("Error deleting database:", event);
      reject(new Error("Failed to delete database"));
    };
  });
};