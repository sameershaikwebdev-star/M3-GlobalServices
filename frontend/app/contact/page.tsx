import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
export default function ContactPage() {
  return (
<main className="min-h-screen flex flex-col bg-[#050816]">
   <Navbar />
   <Contact />
   <Footer />
</main>
  );
}