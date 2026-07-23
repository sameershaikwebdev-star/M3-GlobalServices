import TransitionLink from "@/components/common/TransitionLink";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <Section bg="secondary">
      <div className="relative isolate overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-[#06B6D4]/40 via-blue-500/20 to-[#06B6D4]/40 shadow-2xl">
        {/* Animated gradient spinning border backlayer */}
        <div className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0%,#06B6D4_15%,transparent_35%)] opacity-60 pointer-events-none" />

        <div className="relative rounded-[23px] bg-[#0B1120] px-6 py-16 text-center sm:px-16 sm:py-24 overflow-hidden">
          {/* Subtle inner radial glow */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[500px] rounded-full bg-[#06B6D4]/10 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Let's Connect"
              title="Ready to Scale Your Business With M3?"
              description="Discover how our Healthcare, BPO, and Software Engineering solutions can optimize your operations and drive global growth."
              align="center"
            />

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <TransitionLink href="/contact">
                <Button size="lg" className="gap-2 shadow-lg shadow-cyan-500/20">
                  <MessageSquare className="h-5 w-5" />
                  Get in Touch
                </Button>
              </TransitionLink>

              <TransitionLink href="/services">
                <Button variant="secondary" size="lg" className="gap-2">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
