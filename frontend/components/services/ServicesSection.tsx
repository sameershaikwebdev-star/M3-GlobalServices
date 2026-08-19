import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function ServicesSection() {
  return (
    <section className="pb-24">
      {services.map((service, index) => (
        <div key={service.id}>
          <ServiceCard service={service} />
          {index !== services.length - 1 && (
            <div className="mx-auto my-14 h-px max-w-6xl bg-cyan-400/30 lg:my-18" />
          )}
        </div>
      ))}
    </section>
  );
}
