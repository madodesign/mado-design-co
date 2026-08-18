import { type ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-[18px] text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-accent">{children}</p>;
}
