"use client";

import { motion } from "framer-motion";

export default function PulseDivider() {
  return (
    <div className="relative py-20 bg-white overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/40 to-white" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ECG Line */}
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          {/* ECG Path */}
          <motion.path
            d="
              M0 60 
              L150 60 
              L180 30 
              L220 90 
              L260 20 
              L300 60 
              L420 60 
              L450 40 
              L480 80 
              L520 30 
              L560 60 
              L700 60 
              L740 60 
              L780 20 
              L820 100 
              L860 60 
              L1000 60 
              L1200 60
            "
            fill="none"
            stroke="#7A0C0C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </svg>

        {/* Moving Pulse Dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full hidden sm:block bg-[#7A0C0C] shadow-[0_0_20px_rgba(122,12,12,0.8)]"
          animate={{ x: ["0%", "100%"] }}
          transition={{
            duration: 3.5,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        {/* Optional Label */}
        <div className="mt-6 text-center text-sm tracking-widest text-[#7A0C0C]/70 uppercase">
          Care • Comfort • Technology
        </div>
      </div>
    </div>
  );
}
