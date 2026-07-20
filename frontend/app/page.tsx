import SceneCanvas from "@/components/three/core/SceneCanvas";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/AboutHero";

export default function HomePage() {
  return (
    <main>
      <SceneCanvas />
      <Navbar />
      <Hero />
      
    </main>
  );
}