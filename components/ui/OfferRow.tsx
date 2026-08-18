import { type OfferRowData } from "@/lib/content";

export function OfferRow({ name, sub }: OfferRowData) {
  return (
    <div className="flex items-baseline justify-between gap-[18px] border-t border-line py-4">
      <span className="font-head text-[1.04rem] font-medium tracking-[-0.01em] text-ink">
        {name}
        {sub && <span className="mt-[3px] block text-[0.82rem] font-normal text-ink-3">{sub}</span>}
      </span>
    </div>
  );
}
