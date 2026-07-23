import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  Sparkles,
  Award,
  HeartHandshake,
  Users,
  TrendingUp,
} from "lucide-react";

const VALUES = [
  {
    code: "01",
    title: "Integrity First",
    desc: "We prioritize trust, transparency, and ethical execution in every partnership and client relationship.",
    icon: ShieldCheck,
  },
  {
    code: "02",
    title: "Relentless Innovation",
    desc: "We continuously integrate modern tools, AI capabilities, and smart frameworks to stay ahead.",
    icon: Sparkles,
  },
  {
    code: "03",
    title: "Uncompromising Quality",
    desc: "We hold ourselves to rigorous global standards, ensuring zero shortcuts and exceptional outcomes.",
    icon: Award,
  },
  {
    code: "04",
    title: "Client Centricity",
    desc: "Your strategic goals determine our priorities. We tailor our services to accelerate your growth.",
    icon: HeartHandshake,
  },
  {
    code: "05",
    title: "Collaborative Teamwork",
    desc: "We foster unified global teams, leveraging diverse skillsets for compound results.",
    icon: Users,
  },
  {
    code: "06",
    title: "Continuous Growth",
    desc: "We constantly refine our skills, optimize processes, and evolve alongside emerging technologies.",
    icon: TrendingUp,
  },
];

export default function CoreValues() {
  return (
    <Section bg="secondary">
      <SectionHeading
        eyebrow="What Drives Us"
        title="Core Values"
        description="Our principles guide our culture, inform our decisions, and define how we deliver success for clients worldwide."
        align="center"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((val) => {
          const IconComponent = val.icon;
          return (
            <div
              key={val.code}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2B3142] bg-[#171C2B] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#06B6D4]/50 hover:shadow-[0_0_40px_-12px_rgba(6,182,212,0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06B6D4]/10 text-[#06B6D4] transition-colors duration-300 group-hover:bg-[#06B6D4] group-hover:text-white">
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#94A3B8] transition-colors duration-300 group-hover:text-[#06B6D4]">
                  VAL&middot;{val.code}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-xl text-white transition-colors duration-300 group-hover:text-[#06B6D4]">
                  {val.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                  {val.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}