"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { Service } from "./servicesData";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  const image = (
    <Image
      src={service.image}
      alt={service.title}
      width={700}
      height={500}
      className="py-4 h-full w-full rounded-3xl object-cover shadow-2xl"
    />
  );

  const content = (
    <div
      className={`w-full max-w-xl ${
        service.reverse ? "lg:pl-12 xl:pl-16" : "lg:pl-8 xl:pl-12"
      }`}
    >
      <p className="uppercase text-lg leading-20 tracking-[6px] text-cyan-400">
        {service.subtitle}
      </p>

      <h2 className="mt-3 py-4 text-4xl text-lg leading-20 font-bold text-white md:text-5xl">
        {service.title}
      </h2>

      <p className="mt-5 max-w-lg text-lg leading-10 text-slate-300">
        {service.description}
      </p>

      {/* LIST */}
      {service.type === "list" && (
        <ul className="mt-8 space-y-3 text-lg  text-slate-200">
          {service.items.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      )}

      {/* TAGS */}
      {service.type === "tags" && (
        <div className="mt-8 flex flex-wrap gap-3">
          {service.items.map((item) => (
            <span
              key={item}
              className="rounded-full border text-lg leading-10 border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* GRID */}
      {service.type === "grid" && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.items.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Container className="grid max-w-6xl grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
        {service.reverse ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </Container>

      <Container className="my-14 text-lg  max-w-6xl lg:my-18">
        <div className="h-px w-full bg-cyan-400/30" />
      </Container>
    </>
  );
}