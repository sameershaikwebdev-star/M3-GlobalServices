import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Compass, CheckCircle } from "lucide-react";

export default function MissionVision() {
  return (
    <Section bg="primary">
      <SectionHeading
        eyebrow="Our Purpose"
        title="Driven By Purpose, Guided By Vision"
        description="We combine deep industry experience with innovative technologies to help organizations operate smarter, scale faster, and deliver exceptional customer experiences."
        align="center"
      />

      <div className="relative mt-16 grid gap-8 lg:grid-cols-2">
        {/* Center glowing connector node for desktop */}
        <span className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4] shadow-[0_0_20px_4px_rgba(6,182,212,0.8)] lg:block z-10" />

        {/* Mission Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-[#2B3142] bg-[#171C2B] p-8 sm:p-12 transition-all duration-500 hover:border-[#06B6D4]/50 hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]">
          <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-[#06B6D4]/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 to-[#2563EB]/20 text-[#06B6D4] border border-[#06B6D4]/30 shadow-inner">
            <Target className="h-7 w-7" />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            Our Mission
          </h3>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
            To empower global businesses by delivering exceptional, secure, and scalable solutions across healthcare, BPO, software engineering, and digital publishing. We strive to maximize efficiency and accelerate customer success.
          </p>

          <ul className="mt-8 space-y-3 border-t border-[#2B3142] pt-6 text-sm text-[#CBD5E1]">
            <li className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-[#06B6D4] shrink-0" />
              Uncompromising quality and operational accuracy
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-[#06B6D4] shrink-0" />
              Agile delivery built for enterprise scalability
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-[#06B6D4] shrink-0" />
              Customer-centric partnerships with transparent communication
            </li>
          </ul>
        </div>

        {/* Vision Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-[#2B3142] bg-[#171C2B] p-8 sm:p-12 transition-all duration-500 hover:border-[#06B6D4]/50 hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]">
          <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-[#2563EB]/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 text-[#38BDF8] border border-[#38BDF8]/30 shadow-inner">
            <Compass className="h-7 w-7" />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            Our Vision
          </h3>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
            To be the recognized leader in global business and technology services,digital transformation processes that redefine industry standards worldwide.
          </p>

          <ul className="mt-8 space-y-3 border-t border-[#2B3142] pt-6 text-sm text-[#CBD5E1]">
            <li className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-[#38BDF8] shrink-0" />
                  digital workflows
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-[#38BDF8] shrink-0" />
              Building long-term value for employees & partners
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-[#38BDF8] shrink-0" />
              Expanding global reach with sustainable technological practices
            </li>
          </ul>
        </div>

      </div>
    </Section>
  );
}
