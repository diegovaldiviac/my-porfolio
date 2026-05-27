"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type NowPlayingData = {
  isPlaying: boolean;
  isRecent: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  songUrl?: string;
};

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    fetch("/api/spotify/now-playing")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, []);

  if (!data || (!data.title && !data.isPlaying)) return null;

  const label = data.isPlaying ? "Now playing" : "Last played";
  const dotColor = data.isPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400";

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      {data.albumArt ? (
        <Image
          src={data.albumArt}
          alt="album art"
          width={48}
          height={48}
          className="rounded-md shrink-0"
        />
      ) : (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-gray-400" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">{data.title}</p>
        <p className="truncate text-xs text-gray-500 dark:text-gray-400">{data.artist}</p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
        <span className={`h-2 w-2 rounded-full ${dotColor}`} />
        {label}
      </div>
    </a>
  );
}
