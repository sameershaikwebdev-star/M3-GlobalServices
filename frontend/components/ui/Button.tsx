"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center",
        "font-semibold transition-all duration-300",
        "rounded-full",
        "select-none",
        "active:scale-95",
        "disabled:cursor-not-allowed disabled:opacity-50",

        size === "sm" && "h-10 px-5 text-sm",
        size === "md" && "h-12 px-7 text-base",
        size === "lg" && "h-14 px-9 text-lg",
        size === "xl" && "h-16 px-12 text-xl",

        variant === "primary" &&
          "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,.45)]",

        variant === "secondary" &&
          "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20",

        variant === "outline" &&
          "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",

        variant === "ghost" &&
          "text-white hover:bg-white/10",

        fullWidth && "w-full",

        className
      )}
    >
      {children}
    </button>
  );
}