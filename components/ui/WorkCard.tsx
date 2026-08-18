import Image from "next/image";
import { type WorkCardData } from "@/lib/content";
import { Carousel } from "./Carousel";

export function WorkCard(data: WorkCardData) {
  return (
    <div className="flex flex-col overflow-hidden rounded-card border border-line bg-bg transition-colors duration-200 hover:border-line-2">
      <div className="flex flex-1 flex-col gap-[7px] px-5 pb-[26px] pt-[22px] md:px-[26px]">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-accent">{data.label}</span>
        <h3 className="text-[1.2rem] tracking-[-0.01em]">{data.client}</h3>
        <span className="text-[0.98rem] text-ink-2">{data.description}</span>
        {data.type === "image" && data.link && (
          <a
            href={data.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex w-fit items-center gap-1.5 border-b-[1.5px] border-transparent pb-px text-[0.95rem] font-semibold text-accent transition-all hover:gap-2.5 hover:border-accent"
          >
            {data.link.label}
          </a>
        )}
      </div>

      {data.type === "image" ? (
        <div className="relative aspect-square w-full overflow-hidden border-t border-line">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            sizes="(min-width: 980px) 33vw, (min-width: 680px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <Carousel images={data.images} label={`Project images for ${data.client}`} contain={data.contain} />
      )}
    </div>
  );
}
