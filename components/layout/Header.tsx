"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, contactMailto } from "@/lib/content";
import { MenuIcon, CloseIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-bg/[.86] backdrop-blur-md backdrop-saturate-150 transition-colors duration-300 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-wrap items-center justify-between px-[clamp(20px,5vw,56px)]">
          <a href="#top" aria-label="Mado Design — home" className="flex items-center gap-[11px]">
            <Image src="/assets/mado-logo.png" alt="Mado Design" width={76} height={38} className="h-[38px] w-auto" priority />
          </a>

          <nav className="hidden items-center gap-[34px] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.95rem] font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {scrolled && (
            <Button href={contactMailto} variant="primary" className="px-5 py-[10px]">
              Get in touch
            </Button>
          )}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="-m-2 p-2 text-ink md:hidden"
          >
            {menuOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </>
  );
}
