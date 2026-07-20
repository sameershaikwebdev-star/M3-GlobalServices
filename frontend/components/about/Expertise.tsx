import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const INDUSTRIES = [
  {
    code: "01",
    name: "Healthcare",
    blurb: "Medical billing, claims and patient support operations.",
  },
  {
    code: "02",
    name: "BPO",
    blurb: "Back-office, voice and customer experience outsourcing.",
  },
  {
    code: "03",
    name: "Software Development",
    blurb: "Custom applications, platforms and product engineering.",
  },

  {
    code: "04",
    name: "Publishing",
    blurb: "Editorial, production and digital content services.",
  },
  
]

export default function Expertise() {
  return (
    <Section bg="secondary" className="bg-grid-dots relative">
      {/* Header */}
      <SectionHeading
        eyebrow="Our Expertise"
        title="Industries We Serve"
        description="Delivering specialized business solutions across healthcare, outsourcing, digital transformation and enterprise technology."
     align="center"
     />

      {/* Industry Cards */}
      <div className="mt-24 text-lg leading-15 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry) => (
          <div
            key={industry.name}
            className="group rounded-2xl border border-[#2B3142] bg-[#171C2B] p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#06B6D4]/50 hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.35)]"
          >
            <span className="font-[family-name:var(--font-mono)] text-sm text-[#94A3B8] transition-colors duration-300 group-hover:text-[#06B6D4]">
              IND&middot;{industry.code}
            </span>

            <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
              {industry.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
              {industry.blurb}
            </p>
          </div>
        ))}
      </div>

      {/* Statistics */}
    </Section>
  );
}