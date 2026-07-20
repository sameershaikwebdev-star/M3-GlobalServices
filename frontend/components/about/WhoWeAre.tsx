import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function WhoWeAre() {
  return (
    <Section bg="secondary">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#06B6D4]/20 to-[#2563EB]/20 blur-2xl" />
          <Image
            src="/images/about/team.jpg"
            alt="The M3 Global Services team at work"
            width={700}
            height={500}
            className="relative h-full w-full rounded-2xl border border-[#2B3142] object-cover shadow-2xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <SectionHeading
  eyebrow="Who We Are"
  title="Technology Driven Business Solutions"
  description="M3 Global Services is a technology-driven business solutions company specializing in Healthcare Services, BPO, Software Development, AI Solutions and Digital Publishing."
  align="center"
/>
        </div>
      </div>
    </Section>
  );
}