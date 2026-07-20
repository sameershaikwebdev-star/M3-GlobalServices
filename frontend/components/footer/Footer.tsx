"use client";
import TransitionLink from "@/components/common/TransitionLink";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {FaWhatsapp} from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { FaBriefcase } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-blue-800/40 bg-blue-950">
      <div className="mx-auto grid max-w-7xl gap-16 px-8 py-20 md:grid-cols-4">

        {/* Logo */}

        <div>

          <Image
  src="/logo/m3-logo.png"
  alt="M3"
  width={90}
  height={90}
  priority
  className="rounded-lg bg-white p-2"
/>

          <p className="mt-8 leading-8 text-blue-200">
            M3 Global Services is a next-generation outsourcing
            partner delivering high-impact business solutions
            across the global BPO services landscape.
          </p>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-8 text-2xl font-bold text-white">
            Contact Info
          </h3>

          <div className="space-y-6 text-blue-200">

            <p className="flex gap-3">
              <MapPin size={20} className="shrink-0 text-blue-300" />
              Guntur, Andhra Pradesh, India
            </p>

            <p className="flex gap-3">
              <MapPin size={20} className="shrink-0 text-blue-300" />
              opposite.Sri Chaitanaya Junior College, Sangadigunt,Guntur,Andhra Pradesh 522003  
              </p>

            <p className="flex gap-3">
              <Phone size={20} className="shrink-0 text-blue-300" />
              +916301422662
            </p>

            

            <p className="flex gap-3">
              <Mail size={20} className="shrink-0 text-blue-300" />
              m3globalservicespvtltd@gmail.com
            </p>


          </div>

        </div>

        {/* Links */}

        <div>

          <h3 className="mb-8 text-2xl font-bold text-white">
            Quick Links
          </h3>

          <div className="space-y-4 text-blue-200">

            <TransitionLink href="/" className="block transition hover:text-white">
              Home
            </TransitionLink>

            <TransitionLink href="/about" className="block transition hover:text-white">
              About Us
            </TransitionLink>

            <TransitionLink href="/services" className="block transition hover:text-white">
              Services
            </TransitionLink>

            <TransitionLink href="/contact" className="block transition hover:text-white">
              Contact Us
            </TransitionLink>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="mb-8 text-2xl font-bold text-white">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl text-white">

            <a
              href="https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61592268080967&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/m3globalservices_pvtltd?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-300"
            >
              <FaInstagram />
            </a>

            <a
  href="https://wa.me/916301422662"
  target="_blank"
  rel="noopener noreferrer"
  className="transition hover:text-blue-300"
>
  <FaWhatsapp />
</a>

          </div>

        </div>

      </div>

      <div className="border-t border-blue-800/40 py-8 text-center text-blue-300">

        © 2026 M3 Global Services Pvt. Ltd. • Privacy Policy • Terms &
        Conditions • Designed & Developed by M3 Global Services

      </div>

    </footer>
  );
}