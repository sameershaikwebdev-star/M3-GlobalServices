"use client";

import Image from "next/image";
import { Award, Globe2, Users2, Clock, CheckCircle2 } from "lucide-react";

const STATS = [
  { value: "15+", label: "Years Delivering Excellence", icon: Award },
  { value: "10k+", label: "Global Clients Served", icon: Users2 },
  { value: "24/7", label: "Operations & Support", icon: Clock },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#050816] text-white">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#06B6D4]/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-4 py-1.5 text-xs font-mono font-medium text-[#06B6D4] backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-[#06B6D4] animate-pulse" />
              ABOUT M3 GLOBAL SERVICES
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Building Global <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-[#06B6D4] bg-clip-text text-transparent">
                Business Excellence
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base text-[#94A3B8] sm:text-lg lg:text-xl leading-relaxed">
              We are a trusted global partner providing Healthcare Services, BPO, Software Development, and Digital Transformation for enterprises worldwide.
            </p>

            {/* Quick highlights */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs sm:text-sm text-[#CBD5E1]">
              <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 text-[#06B6D4]" />
                HIPAA & ISO Certified
              </span>
              <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 text-[#06B6D4]" />
                Global Delivery Centers
              </span>
              <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 text-[#06B6D4]" />
                End-to-End Enterprise Scale
              </span>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-8">
              {STATS.map((s) => {
                const IconComponent = s.icon;
                return (
                  <div key={s.label} className="group">
                    <div className="flex items-center gap-2 text-[#06B6D4] mb-1">
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-xl font-extrabold sm:text-3xl lg:text-4xl text-white">
                        {s.value}
                      </span>
                    </div>
                    <p className="text-xs text-[#94A3B8] sm:text-sm font-medium leading-tight">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Badge */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#06B6D4]/30 to-[#2563EB]/30 blur-xl opacity-75" />
              
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#171C2B] shadow-2xl">
                <Image
                  src="/images/about/about-hero.jpg"
                  alt="M3 Global Services Corporate Office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-2 sm:-left-4 flex items-center gap-3.5 rounded-2xl border border-cyan-500/30 bg-[#0B1120]/90 p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#2563EB] text-white shadow-lg shadow-cyan-500/20">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">Global Delivery</div>
                  <div className="text-xs text-[#94A3B8]">Serving Clients Worldwide</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
