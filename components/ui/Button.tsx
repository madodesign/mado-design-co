import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-[22px] py-3 text-[0.95rem] font-semibold transition-colors duration-200";

const variants = {
  primary: "border border-transparent bg-accent text-white hover:bg-ink",
  ghost: "border border-line-2 bg-transparent text-ink hover:border-ink hover:bg-bg-2",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
