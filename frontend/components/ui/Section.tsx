import { cn } from "@/utils/cn"; // twMerge(clsx(inputs)) — already in your lib/utils

type SectionProps = React.PropsWithChildren<{
  bg?: "primary" | "secondary";
  className?: string;
}>;

/**
 * Enforces one spacing scale for every page section:
 * - py-24 on mobile, py-32 on desktop — never set padding on a section directly.
 * - Alternating bg gives sections a visible edge even when padding gets
 *   overridden or a Tailwind class fails to compile (worth checking given
 *   the build/lint issues in your review — confirm tailwind content globs
 *   include every component path).
 */
export default function Section({ bg = "primary", className, children }: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28 lg:py-32 border-t border-white/10 relative",
        bg === "primary" ? "bg-[#050816]" : "bg-[#0B1120]",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">{children}</div>
    </section>
  );
}