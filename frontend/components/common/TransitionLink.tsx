"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode } from "react";
import { usePageTransition } from "@/components/providers/PageTransitionProvider";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps) {
  const router = useRouter();
  const { startTransition } = usePageTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
  // Already on this page? Don't animate.
  if (window.location.pathname === href) {
    return;
  }

  e.preventDefault();

  // Close mobile menu if needed
  onClick?.();

  // Start loader
  startTransition();

  // Navigate after animation
  setTimeout(() => {
    router.push(href);
  }, 700);
};

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );


}