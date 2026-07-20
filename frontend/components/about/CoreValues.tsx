import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    code: "01",
    title: "Integrity",
    desc: "We do what's right, not what's easy.",
  },
  {
    code: "02",
    title: "Innovation",
    desc: "New tools, sharper solutions.",
  },
  {
    code: "03",
    title: "Quality",
    desc: "No shortcuts, no compromises.",
  },
  {
    code: "04",
    title: "Customer First",
    desc: "Your goals set our priorities.",
  },
  {
    code: "05",
    title: "Teamwork",
    desc: "Better outcomes, built together.",
  },
  {
    code: "06",
    title: "Continuous Improvement",
    desc: "Always refining, never settling.",
  },
];

export default function CoreValues() {
  return (
    <Section bg="primary">
      <SectionHeading eyebrow="What Drives Us" title="Core Values" />

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.code}
            className="group relative overflow-hidden rounded-2xl border border-[#2B3142] bg-[#171C2B] p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#06B6D4]/50 hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.35)]"
          >
            <span className="font-[family-name:var(--font-mono)] text-sm text-[#94A3B8] transition-colors duration-300 group-hover:text-[#06B6D4]">
              V&middot;{value.code}
            </span>

            <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
              {value.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}