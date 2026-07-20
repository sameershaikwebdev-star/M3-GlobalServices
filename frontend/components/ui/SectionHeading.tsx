interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p className="text-lg leading-20 flex items-center justify-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[6px] text-[#06B6D4]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" />
          {eyebrow}
        </p>
      )}

      <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
          {description}
        </p>
      )}
    </div>
  );
}