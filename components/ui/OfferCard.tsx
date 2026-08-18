import { type OfferCardData } from "@/lib/content";
import { Pill } from "./Pill";
import { OfferRow } from "./OfferRow";

export function OfferCard({ title, pill, description, rows, note }: OfferCardData) {
  return (
    <div className="flex flex-col rounded-card border border-line bg-bg p-7 transition-colors duration-200 hover:border-line-2 md:p-11">
      <div className="mb-3.5 flex items-center justify-between gap-3">
        <h3 className="text-[clamp(1.5rem,2.4vw,1.95rem)]">{title}</h3>
        <Pill>{pill}</Pill>
      </div>
      <p className="mb-2 text-ink-2">{description}</p>
      <div className="mt-[26px]">
        {rows.map((row) => (
          <OfferRow key={row.name} {...row} />
        ))}
      </div>
      {note && <p className="mt-5 border-t border-line pt-4 text-[0.86rem] text-ink-3">{note}</p>}
    </div>
  );
}
