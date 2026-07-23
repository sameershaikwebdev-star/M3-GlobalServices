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
        <p
          className={`flex items-center gap-2 font.mono text-xs uppercase tracking-[5px] text-[#06B6D4] mb-3 ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />
          {eyebrow}
        </p>
      )}

      <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
          {description}
        </p>
      )}
    </div>
  );
}