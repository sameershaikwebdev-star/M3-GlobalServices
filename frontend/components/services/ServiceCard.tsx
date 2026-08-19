import Image from "next/image";
import Container from "@/components/ui/Container";
import { Service } from "./servicesData";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  const image = (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl lg:aspect-auto lg:h-full lg:min-h-[420px]">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );

  const content = (
    <div
      className={`flex w-full flex-col justify-center py-6 lg:py-0 ${
        service.reverse ? "lg:pl-12 xl:pl-16" : "lg:pl-8 xl:pl-12"
      }`}
    >
      <p className="text-sm font-medium uppercase tracking-[6px] text-cyan-400">
        {service.subtitle}
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
        {service.title}
      </h2>

      <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
        {service.description}
      </p>

      {service.type === "list" && (
        <ul className="mt-8 space-y-4 text-lg text-slate-200">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 text-cyan-400">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {service.type === "tags" && (
        <div className="mt-8 flex flex-wrap gap-3">
          {service.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/20"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {service.type === "grid" && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200 transition-colors hover:bg-white/10"
            >
              <span className="mt-0.5 text-cyan-400">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <Container className="grid max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
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
  );
}
