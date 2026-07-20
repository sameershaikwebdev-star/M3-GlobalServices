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
    <div className="mx-auto w-full max-w-[1920px]">
      <Navbar/>
      <AboutHero />

      <WhoWeAre />

      <div className="mt-40 lg:mt-48">
        <MissionVision />
      </div>

      <div className="mt-40 lg:mt-48">
        <CoreValues />
      </div>

      <div className="mt-40 lg:mt-48">
        <Expertise />
      </div>

      <div className="mt-48 lg:mt-56">
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}