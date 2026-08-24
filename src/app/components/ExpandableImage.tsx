"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

/**
 * Click-to-enlarge for a single image. The enlarged view is capped at the
 * file's intrinsic width so a small asset is never upscaled into a blur —
 * the company logos range from 225px to 861px wide.
 */
export default function ExpandableImage({
  src,
  alt,
  width,
  height,
  sizes,
  triggerClassName,
  imageClassName,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  triggerClassName?: string;
  imageClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={alt}
        className={triggerClassName}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={imageClassName}
        />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-6">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <div
            className="mx-auto w-full rounded-md bg-background p-6"
            style={{ maxWidth: width }}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={`(min-width: 448px) ${width}px, 90vw`}
              className="h-auto w-full object-contain"
            />
          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
            {alt}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
