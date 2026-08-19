import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function ServicesSection() {
  return (
    <section className="space-y-20 pb-24 lg:space-y-28">
      {services.map((service, index) => (
        <div key={service.id}>
          <ServiceCard service={service} />
          {index !== services.length - 1 && (
            <div className="mx-auto mt-20 h-px max-w-6xl bg-cyan-400/30 px-6 lg:mt-28" />
          )}
        </div>
      ))}
    </section>
  );
}
