import { type ReactNode } from "react";
import { CheckIcon } from "@/components/icons/icons";

export function FitItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-[15px] border-t border-line py-[18px] text-[1.06rem] text-ink">
      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-tint text-accent">
        <CheckIcon className="h-[13px] w-[13px]" />
      </span>
      {children}
    </div>
  );
}
