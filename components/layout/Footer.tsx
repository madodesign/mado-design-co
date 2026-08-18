import Image from "next/image";
import { navLinks, contactMailto, footerMeta } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 pb-10">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image src="/assets/mado-logo.png" alt="Mado Design" width={68} height={34} className="h-[34px] w-auto" />
          <div className="mt-1.5 text-[0.95rem] text-ink-2">www.madodesign.co</div>
        </div>

        <div className="text-left sm:text-right">
          <nav className="flex flex-wrap justify-start gap-6 text-[0.92rem] sm:justify-end">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-ink-2 transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3.5 text-[0.85rem] text-ink-3">
            {footerMeta.kvk} &nbsp;·&nbsp; {footerMeta.uen} &nbsp;·&nbsp;{" "}
            <a href={contactMailto} className="transition-colors hover:text-ink-2">
              {footerMeta.emailDisplay}
            </a>{" "}
            &nbsp;·&nbsp; {footerMeta.copyright}
          </div>
        </div>
      </Container>
    </footer>
  );
}
