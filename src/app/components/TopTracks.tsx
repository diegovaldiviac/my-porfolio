"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Track = { name: string; artist: string; image: string | null; url: string };
type Artist = { name: string; image: string | null; url: string };

export default function TopTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetch("/api/spotify/top")
      .then((r) => r.json())
      .then((d) => { setTracks(d.tracks ?? []); setArtists(d.artists ?? []); })
      .catch(() => {});
  }, []);

  if (!tracks.length && !artists.length) return null;

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Top Tracks
        </p>
        <ol className="space-y-2">
          {tracks.map((t, i) => (
            <li key={t.url}>
              <a
                href={t.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="w-4 shrink-0 text-xs text-gray-400 text-right">{i + 1}</span>
                {t.image && (
                  <Image src={t.image} alt={t.name} width={32} height={32} className="rounded shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-gray-900 dark:text-white">{t.name}</p>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">{t.artist}</p>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Top Artists
        </p>
        <ol className="space-y-2">
          {artists.map((a, i) => (
            <li key={a.url}>
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="w-4 shrink-0 text-xs text-gray-400 text-right">{i + 1}</span>
                {a.image && (
                  <Image src={a.image} alt={a.name} width={32} height={32} className="rounded-full shrink-0" />
                )}
                <p className="truncate text-xs font-medium text-gray-900 dark:text-white">{a.name}</p>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
