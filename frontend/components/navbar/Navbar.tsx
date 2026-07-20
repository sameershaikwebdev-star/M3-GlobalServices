"use client";
import TransitionLink from "@/components/common/TransitionLink";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Show navbar when mouse reaches top
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setShow(e.clientY < 80);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Close mobile menu after page navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
  className={`fixed top-4 left-1/2 z-50 w-[94%] max-w-7xl -translate-x-1/2 transition-all duration-500 ${
  show || mobileOpen
    ? "translate-y-0 opacity-100"
    : "-translate-y-32 opacity-0 pointer-events-none"
}`}
>
      <nav className="flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-[#0b1225]/55 px-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-white">
            M3
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              M3 Global Services
            </h2>
            <p className="text-xs text-slate-400">
              Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Menu */}
       <ul className="hidden items-center gap-10 lg:flex">
  {[
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href  : "/careers" },
    { name: "Contact", href: "/contact" },
  ].map((item) => (
    <li key={item.href} className="text-lg">
      <TransitionLink
        href={item.href}
        className={`transition ${
          pathname === item.href    
            ? "text-cyan-400 font-semibold"
            : "text-slate-300 hover:text-cyan-400"
        }`}
      >
        {item.name}
      </TransitionLink>
    </li>
  ))}
</ul>

        {/* Button */}
       <button
  type="button"
  onClick={() => setMobileOpen((prev) => !prev)}
  className="lg:hidden text-white"
>
  {mobileOpen ? <X size={28} /> : <Menu size={28} />}
</button>
      </nav>
      {mobileOpen && (
  <div className="mt-3 rounded-2xl border border-white/10 bg-[#0b1225]/95 backdrop-blur-xl lg:hidden">
   {[
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
].map((item) => (
  <TransitionLink
    key={item.href}
    href={item.href}
    className={`block px-6 py-4 border-b border-white/10 transition ${
      pathname === item.href
        ? "text-cyan-400"
        : "text-slate-300 hover:text-cyan-400"
    }`}
  >
    {item.name}
  </TransitionLink>
))}
  </div>
)}
    </header>
  );
}