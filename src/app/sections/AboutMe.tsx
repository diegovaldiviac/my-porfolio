"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import NowPlaying from "../components/NowPlaying";
import TopTracks from "../components/TopTracks";
import PhotoGallery from "../components/PhotoGallery";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const PLAYLIST_ID = "52jRM2zCPLnuf4AzWR4Km4";

export default function AboutMeSection() {
  const { resolvedTheme } = useTheme();
  const t = useTranslations("about");

  const spotifySrc = `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator${
    resolvedTheme === "dark" ? "&theme=0" : ""
  }`;

  return (
    <Section id="about" label={t("title")}>
      <div className="space-y-6">
        {/* Photos lead the section — they are the warm part. */}
        <Reveal>
          <PhotoGallery />
        </Reveal>

        {/* Listening and the playlist ride side by side instead of stacking. */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="h-full rounded-lg border border-border bg-card p-4">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {t("listening")}
              </p>
              <div className="space-y-5">
                <NowPlaying />
                <TopTracks />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <iframe
              title="Spotify playlist"
              src={spotifySrc}
              className="h-full min-h-[352px] w-full rounded-lg border-0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
