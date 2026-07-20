"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
const STATS = [
  { value: "15+", label: "Years Delivering" },
  { value: "10k+", label: "Global Clients" },
  { value: "24/7", label: "Operations" },
];

export default function AboutHero() {
  return (
    <section className="about-hero relative overflow-hidden pt-40 pb-28">
      {/* Ambient glow, same accent color, nothing new */}
      <div className="glow" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow reveal" style={{ ["--d" as string]: "0ms" }}>
            <span className="eyebrow-tick" aria-hidden="true" />
            About M3 Global Services
          </p>

          <h1 className="mt-5 heading reveal" style={{ ["--d" as string]: "80ms" }}>
            Building Global
            <br />
            <span className="heading-accent">Business Excellence</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 body-copy reveal" style={{ ["--d" as string]: "140ms" }}>
            Trusted partner delivering Healthcare, BPO, Software Development
            and Digital Transformation services worldwide.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 reveal" style={{ ["--d" as string]: "200ms" }}>
            {STATS.map((s, i) => (
              <div key={s.label} className="stat" style={i > 0 ? { borderLeft: "1px solid var(--stat-line)", paddingLeft: "2.5rem" } : undefined}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-[7/5] reveal" style={{ ["--d" as string]: "100ms" }}>
          <div className="image-frame">
            <Image
              src="/images/about/about-hero.jpg"
              alt="Corporate Office"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-3xl object-cover"
              priority
            />
          </div>

          <div className="badge">
            <span className="badge-value">15+</span>
            <span className="badge-label">
              Years of
              <br />
              Global Delivery
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-hero {
          --bg: var(--background, #050816);
          --accent: var(--accent, #06b6d4);
          --white: var(--white, #ffffff);
          --muted: var(--muted, #94a3b8);
          --stat-line: color-mix(in srgb, var(--accent) 35%, transparent);
          background: var(--bg);
          color: var(--white);
        }

        .glow {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 45rem;
          height: 45rem;
          background: radial-gradient(circle, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 70%);
          pointer-events: none;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
        }
        .eyebrow-tick {
          display: inline-block;
          width: 22px;
          height: 2px;
          background: var(--accent);
        }

        .heading {
          font-size: 3.75rem;
          font-weight: 900;
          line-height: 1.08;
          color: var(--white);
        }
        .heading-accent {
          background: linear-gradient(90deg, var(--white) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .body-copy {
          color: var(--muted);
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .stat-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--white);
        }
        .stat-label {
          font-size: 0.8rem;
          color: var(--muted);
          letter-spacing: 0.03em;
        }

        .image-frame {
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          box-shadow: 0 25px 60px -20px color-mix(in srgb, var(--accent) 30%, black 70%);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
        }

        .badge {
          position: absolute;
          left: -1.5rem;
          bottom: -1.5rem;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          background: color-mix(in srgb, var(--bg) 82%, transparent);
          backdrop-filter: blur(14px);
          border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          border-radius: 1rem;
          padding: 1.1rem 1.4rem;
          box-shadow: 0 15px 40px -15px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 640px) {
          .badge {
            left: 1rem;
            bottom: 1rem;
          }
        }
        .badge-value {
          font-size: 1.75rem;
          font-weight: 900;
          color: var(--accent);
          line-height: 1;
        }
        .badge-label {
          font-size: 0.72rem;
          line-height: 1.35;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .reveal {
          animation: rise 640ms ease both;
          animation-delay: var(--d, 0ms);
        }
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}