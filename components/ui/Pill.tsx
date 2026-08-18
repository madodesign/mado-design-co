import { type ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-accent-tint px-3 py-[6px] text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent">
      {children}
    </span>
  );
}
