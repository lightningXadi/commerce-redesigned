"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GridTileImage } from "components/grid/tile";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const imageIndex = searchParams.has("image") ? parseInt(searchParams.get("image")!) : 0;

  const updateImage = (index: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("image", index);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  return (
    <form>
      {/* Main image */}
      <div
        className="relative aspect-square w-full overflow-hidden"
        style={{ backgroundColor: 'var(--stone)' }}
      >
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-cover"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1">
            <button
              formAction={() => updateImage(previousImageIndex.toString())}
              aria-label="Previous product image"
              className="flex h-9 w-9 items-center justify-center transition-opacity hover:opacity-70"
              style={{ backgroundColor: 'rgba(247,244,239,0.9)', color: 'var(--espresso)' }}
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </button>
            <button
              formAction={() => updateImage(nextImageIndex.toString())}
              aria-label="Next product image"
              className="flex h-9 w-9 items-center justify-center transition-opacity hover:opacity-70"
              style={{ backgroundColor: 'rgba(247,244,239,0.9)', color: 'var(--espresso)' }}
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((image, index) => {
            const isActive = index === imageIndex;
            return (
              <li key={image.src} className="h-16 w-16 flex-none">
                <button
                  formAction={() => updateImage(index.toString())}
                  aria-label="Select product image"
                  className="h-full w-full transition-opacity"
                  style={{ opacity: isActive ? 1 : 0.5 }}
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={64}
                    height={64}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}
