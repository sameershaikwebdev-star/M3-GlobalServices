"use client";

import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-white/5 backdrop-blur-2xl",
        "shadow-[0_8px_32px_rgba(0,0,0,.35)]",
        "transition-all duration-500",
        "hover:border-cyan-400/50",
        "hover:shadow-[0_0_50px_rgba(6,182,212,.35)]",
        className
      )}
    >
      {children}
    </div>
  );
}
