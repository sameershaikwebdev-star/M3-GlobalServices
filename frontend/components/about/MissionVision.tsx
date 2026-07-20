import Section from "@/components/ui/Section";

export default function MissionVision() {
  return (
    <Section bg="primary">
      <div className="relative py-12 grid gap-6 lg:grid-cols-2">
        <span className="absolute left-1/2 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4] shadow-[0_0_16px_2px_rgba(6,182,212,0.6)] lg:block" />

        <div className="rounded-2xl border border-[#2B3142] bg-[#171C2B] p-10 sm:p-12">
          {/* Mission content unchanged */}
        </div>

        <div className="rounded-2xl border border-[#2B3142] bg-[#171C2B] p-10 sm:p-12">
          {/* Vision content unchanged */}
        </div>
      </div>
    </Section>
  );
}