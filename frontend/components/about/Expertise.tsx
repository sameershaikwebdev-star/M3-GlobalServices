import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Stethoscope,
  Headphones,
  Code2,
  Bot,
  FileText,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const INDUSTRIES = [
  {
    code: "01",
    name: "Healthcare Services",
    blurb: "End-to-end medical billing, revenue cycle management, and HIPAA-compliant patient support operations.",
    icon: Stethoscope,
  },
  {
    code: "02",
    name: "BPO & Customer Experience",
    blurb: "Scalable back-office operations, omnichannel customer care, and technical support teams.",
    icon: Headphones,
  },
  {
    code: "03",
    name: "Software & App Development",
    blurb: "Custom application engineering, cloud-native platforms, enterprise software, and APIs.",
    icon: Code2,
  },
  {
    code: "04",
    name: "AI & Intelligent Automation",
    blurb: "Workflow automation, LLM integration, intelligent document processing, and custom AI agents.",
    icon: Bot,
  },
  {
    code: "05",
    name: "Digital Publishing & Content",
    blurb: "Editorial support, metadata processing, multi-format conversion, and digital asset management.",
    icon: FileText,
  },
  {
    code: "06",
    name: "Cloud & Enterprise Solutions",
    blurb: "Cloud architecture, DevOps pipelines, cybersecurity audits, and managed IT services.",
    icon: Cloud,
  },
];

export default function Expertise() {
  return (
    <Section bg="primary" className="relative">
      {/* Background radial gradient accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#06B6D4]/5 blur-[160px]"
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="Our Expertise"
        title="Industries We Serve"
        description="Delivering specialized business solutions across healthcare, outsourcing, software engineering, digital transformation, and enterprise technology."
        align="center"
      />

      {/* Industry Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry) => {
          const IconComp = industry.icon;
          return (
            <div
              key={industry.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2B3142] bg-[#171C2B] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#06B6D4]/50 hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.35)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] transition-colors duration-300 group-hover:bg-[#06B6D4] group-hover:text-white">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#94A3B8] transition-colors duration-300 group-hover:text-[#06B6D4]">
                    IND&middot;{industry.code}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#06B6D4]">
                  {industry.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                  {industry.blurb}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-[#06B6D4] opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}