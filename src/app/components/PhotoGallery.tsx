"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

/**
 * Intrinsic dimensions are declared so next/image can reserve the exact box
 * before load (no layout shift) and so the masonry keeps every photo's own
 * shape. The set is mixed portrait/landscape, so any fixed aspect-ratio grid
 * would crop most of it. Ordering interleaves the wide shots with the tall
 * ones so the columns stay roughly balanced.
 *
 * Sources were normalised before being committed: EXIF rotation baked in,
 * all metadata stripped (one carried GPS coordinates), phone-screenshot
 * chrome cropped off, and the long edge capped at 2000px.
 *
 * image0 is deliberately absent — it is the hero portrait.
 */
const PHOTOS = [
  { src: "/images/image5.jpg", width: 4032, height: 3024 },
  { src: "/images/image6.jpg", width: 1600, height: 1062 },
  { src: "/images/image7.jpg", width: 1007, height: 1536 },
  { src: "/images/image8.jpg", width: 1500, height: 2000 },
  { src: "/images/image9.jpg", width: 1500, height: 2000 },
  { src: "/images/image10.jpg", width: 1500, height: 2000 },
  { src: "/images/image11.jpg", width: 591, height: 900 },
  { src: "/images/image12.jpg", width: 1500, height: 2000 },
  { src: "/images/image1.jpg", width: 2397, height: 4032 },
  { src: "/images/image2.jpg", width: 482, height: 853 },
  { src: "/images/image3.jpg", width: 1047, height: 2078 },
  { src: "/images/image4.jpg", width: 1440, height: 1800 },
];

export default function PhotoGallery() {
  const t = useTranslations("about");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const active = openIndex === null ? null : PHOTOS[openIndex];

  return (
    <>
      {/* CSS columns give true masonry: each photo keeps its natural height. */}
      <div className="columns-2 gap-3 sm:columns-3">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`${t("gallery")} — ${i + 1}`}
            className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src={photo.src}
              alt={`${t("gallery")} — ${i + 1}`}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 640px) 240px, 45vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(o) => !o && setOpenIndex(null)}
      >
        <DialogContent className="max-w-3xl p-3">
          <DialogTitle className="sr-only">{t("gallery")}</DialogTitle>
          {active && (
            <Image
              src={active.src}
              alt={`${t("gallery")} — ${(openIndex ?? 0) + 1}`}
              width={active.width}
              height={active.height}
              sizes="(min-width: 768px) 768px, 100vw"
              className="h-auto max-h-[78vh] w-full rounded-md object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
