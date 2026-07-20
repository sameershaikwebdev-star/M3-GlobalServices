"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePageTransition } from "@/components/providers/PageTransitionProvider";

export default function PageTransition() {
  const { loading } = usePageTransition();

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="page-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050816]"
        >
          {/* Background glow */}
          <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.9, 1, 0.95],
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/logo/m3-logo.png"
              alt="M3 Global Services"
              width={220}
              height={220}
              priority
              className="drop-shadow-[0_0_45px_rgba(59,130,246,.9)]"
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
            className="absolute bottom-28 text-sm tracking-[8px] uppercase text-cyan-300"
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}