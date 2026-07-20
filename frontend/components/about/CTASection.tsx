import Link from "next/link";
import TransitionLink from "@/components/common/TransitionLink";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CTASection() {
  return (
    <Section bg="primary">
  <div className="relative isolate overflow-hidden rounded-3xl p-[1px]">

    <div className="absolute inset-[-50%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0%,#06B6D4_10%,transparent_25%)] opacity-40" />

    <div className="relative rounded-3xl bg-[#0B1120] px-8 py-20 text-center sm:px-20 sm:py-24">

      <SectionHeading
        eyebrow="Let's Talk"
        title="Ready to Grow With M3?"
        description="Let's discuss your next Healthcare, BPO, AI or Software Development project."
      />

      <div className="mt-10 flex justify-center">
        <TransitionLink href="/contact">
          <Button>Contact Us</Button>
        </TransitionLink>
      </div>

    </div>

  </div>
    </Section>
  );
}