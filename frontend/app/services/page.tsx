import Navbar from "@/components/navbar/Navbar";
import ServiceHero from "@/components/services/ServicesHero";
import ServiceSection from "@/components/services/ServicesSection";
import ContactSection from "@/components/services/ServicesSection";
import Footer from "@/components/footer/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050816]">
      <Navbar />

      <ServiceHero />
      <ServiceSection />
      <Footer />
    </main>
  );
}