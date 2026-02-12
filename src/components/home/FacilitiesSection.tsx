"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Hospital,
  HeartPulse,
  Stethoscope,
  Activity,
  Ambulance,
  BedDouble,
} from "lucide-react";

/* ================= DATA ================= */

const facilities = [
  {
    icon: Hospital,
    title: "Modern Operation Theatres",
    description:
      "Advanced modular OTs designed with precision, hygiene and international safety standards.",
  },
  {
    icon: HeartPulse,
    title: "Advanced ICU & Critical Care",
    description:
      "24×7 intensive care with continuous monitoring and experienced specialists.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Diagnostics",
    description:
      "ECG, 2D Echo, imaging & pathology ensuring fast and accurate diagnosis.",
  },
  {
    icon: Activity,
    title: "Neuro & Cardiac Care",
    description:
      "Dedicated emergency units for brain, spine and cardiac emergencies.",
  },
  {
    icon: Ambulance,
    title: "24×7 Emergency & Ambulance",
    description:
      "Rapid response team with fully equipped life-support ambulances.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Patient Rooms",
    description:
      "Clean, calm and patient-focused environment for faster recovery.",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Facilities & Infrastructure
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Advanced healthcare infrastructure designed for safety, precision and
          compassionate patient care.
        </p>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 grid-cols-3 gap-8">
        {facilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link key={index} href="/facilities" className="group">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  relative bg-white rounded-3xl p-8
                  shadow-lg hover:shadow-2xl
                  transition duration-500
                  border border-slate-100
                  cursor-pointer
                "
              >
                {/* Animated Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="
                    w-14 h-14 rounded-xl
                    bg-[#7A0C0C] text-white
                    flex items-center justify-center
                    mb-6 shadow-md
                  "
                >
                  <Icon size={26} />
                </motion.div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="lg:hidden relative overflow-hidden mt-6">
        <motion.div
          className="flex gap-5 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...facilities, ...facilities].map((item, index) => {
            const Icon = item.icon;

            return (
              <Link key={index} href="/facilities" className="group">
                <div
                  className="
                    w-[280px] shrink-0
                    bg-white rounded-2xl p-6
                    shadow-lg border border-slate-100
                    cursor-pointer
                  "
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-[#7A0C0C] text-white flex items-center justify-center mb-4"
                  >
                    <Icon size={24} />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
