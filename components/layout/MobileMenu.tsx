import { navLinks, contactMailto } from "@/lib/content";
import { Button } from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onNavigate: () => void;
};

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-x-0 top-[72px] z-[49] border-b border-line bg-bg px-[clamp(20px,5vw,56px)] pb-7 pt-[18px] transition-all duration-300 md:hidden ${
        open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className="block border-b border-line py-3.5 text-[1.1rem] font-medium text-ink"
        >
          {link.label}
        </a>
      ))}
      <Button href={contactMailto} variant="primary" className="mt-[18px] flex w-full">
        Get in touch
      </Button>
    </div>
  );
}
