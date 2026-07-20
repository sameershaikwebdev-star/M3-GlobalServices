import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500",
        "bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}