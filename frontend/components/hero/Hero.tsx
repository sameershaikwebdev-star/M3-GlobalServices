"use client";
import Button from "@/components/ui/Button";
import TransitionLink from "@/components/common/TransitionLink";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="absolute inset-0 z-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-12">

        <div className="max-w-[500px]">

          <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-400">
            Welcome to
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-[0.92] tracking-tight">
            M3
            <br />
            GLOBAL
            <br />
            SERVICES
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Delivering Healthcare, BPO and Digital Solutions with Global Standards.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <TransitionLink href="/services">
              <Button variant="primary">Explore Services</Button>
            </TransitionLink>
            <TransitionLink href="/contact">
            <Button variant="outline">Contact Us</Button>
            </TransitionLink>
          </div>

        </div>

      </div>
    </section>
  );
}