import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Expertise from "@/components/about/Expertise";
import CTASection from "@/components/about/CTASection";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function AboutPage() {
  return (
    <main className="w-full bg-[#050816] text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <AboutHero />

      {/* Who We Are */}
      <div className="my-10 lg:my-16">
        <WhoWeAre />
      </div>

      {/* Mission & Vision */}
      <div className="my-10 lg:my-16">
        <MissionVision />
      </div>

      {/* Core Values */}
      <div className="my-10 lg:my-16">
        <CoreValues />
      </div>

      {/* Expertise / Industries */}
      <div className="my-10 lg:my-16">
        <Expertise />
      </div>

      {/* CTA Section */}
      <div className="my-10 lg:my-16">
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}