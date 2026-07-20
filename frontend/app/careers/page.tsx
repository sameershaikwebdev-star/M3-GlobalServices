import Job from "@/components/careers/job";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function CareersPage() {
  return (
    <>
   <Navbar />
   <main className="bg-[#050816]">
      <Job />
   </main>
   <Footer />
</>
);
}
