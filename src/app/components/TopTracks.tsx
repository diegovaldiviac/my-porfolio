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
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Top Tracks
        </p>
        <ol className="space-y-2">
          {tracks.map((t, i) => (
            <li key={t.url}>
              <a
                href={t.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-muted"
              >
                <span className="w-4 shrink-0 text-right font-mono text-[11px] text-muted-foreground">{i + 1}</span>
                {t.image && (
                  <Image src={t.image} alt={t.name} width={32} height={32} className="rounded shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-foreground">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.artist}</p>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Top Artists
        </p>
        <ol className="space-y-2">
          {artists.map((a, i) => (
            <li key={a.url}>
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-muted"
              >
                <span className="w-4 shrink-0 text-right font-mono text-[11px] text-muted-foreground">{i + 1}</span>
                {a.image && (
                  <Image src={a.image} alt={a.name} width={32} height={32} className="rounded-full shrink-0" />
                )}
                <p className="truncate text-xs font-medium text-foreground">{a.name}</p>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
