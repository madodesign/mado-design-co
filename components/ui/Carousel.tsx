"use client";

import { useState } from "react";
import Image from "next/image";
import { type CarouselImage } from "@/lib/content";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/icons";

type CarouselProps = {
  images: CarouselImage[];
  label: string;
  contain?: boolean;
};

export function Carousel({ images, label, contain }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const go = (n: number) => setIndex((n + images.length) % images.length);

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden border-t border-line ${contain ? "bg-bg-2" : ""}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          role="img"
          aria-label={`${img.alt} — image ${i + 1} of ${images.length}`}
          className={`absolute inset-0 transition-opacity duration-300 ${
            i === index ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 980px) 33vw, (min-width: 680px) 50vw, 100vw"
            className={contain ? "object-contain object-top" : "object-cover"}
          />
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 z-[3] flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-line-2 bg-bg text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 z-[3] flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full border border-line-2 bg-bg text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>

      <div className="absolute inset-x-0 bottom-3 z-[3] flex justify-center gap-[7px]" role="group" aria-label="Choose image">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Go to image ${i + 1} of ${images.length}`}
            onClick={() => go(i)}
            className={`h-[7px] w-[7px] rounded-full transition-transform ${
              i === index ? "scale-125 bg-accent" : "bg-line-2"
            }`}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        {`Image ${index + 1} of ${images.length}`}
      </span>
    </div>
  );
}
