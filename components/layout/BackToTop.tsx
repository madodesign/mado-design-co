"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons/icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-[22px] right-[22px] z-[90] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-accent text-white shadow-[0_6px_20px_-6px_rgba(10,10,10,0.22)] transition-all duration-300 hover:bg-ink ${
        show ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-[18px] w-[18px]" />
    </button>
  );
}
