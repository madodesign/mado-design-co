import { type ElementType, type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Container({ children, as: Tag = "div", className = "" }: ContainerProps) {
  return <Tag className={`mx-auto w-full max-w-wrap px-[clamp(20px,5vw,56px)] ${className}`}>{children}</Tag>;
}
