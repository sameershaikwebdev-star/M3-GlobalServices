import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Cpu, ShieldCheck, Zap, Layers } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Strict Compliance",
    desc: "Rigorous adherence to global data privacy and security standards.",
  },
  {
    icon: Zap,
    title: "Scalable Execution",
    desc: "Flexible team ramp-ups to match rapid business growth and demands.",
  },
];

export default function WhoWeAre() {
  return (
    <Section bg="secondary">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* Left Column: Image with Gradient Blur */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#06B6D4]/20 via-[#2563EB]/20 to-transparent blur-2xl opacity-80" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2B3142] bg-[#171C2B] shadow-2xl">
              <Image
                src="/images/about/team.jpg"
                alt="The M3 Global Services team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent" />
            </div>
            
            {/* Feature Tag */}
            <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-xl border border-white/10 bg-[#171C2B]/90 px-4 py-3 shadow-xl backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#06B6D4]/20 text-[#06B6D4]">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Full-Spectrum</p>
                <p className="text-[11px] text-[#94A3B8]">Domain Expertise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <SectionHeading
            eyebrow="Who We Are"
            title="Technology Driven Business Solutions"
            description="M3 Global Services is a technology-driven business solutions company specializing in Healthcare Services, BPO, Software Developments, and Digital Publishing. We empower enterprise clients across the globe."
            align="left"
          />

          <div className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-xl border border-[#2B3142]/60 bg-[#171C2B]/50 p-4 transition-all duration-300 hover:border-[#06B6D4]/40 hover:bg-[#171C2B]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#06B6D4]/15 text-[#06B6D4]">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
}
