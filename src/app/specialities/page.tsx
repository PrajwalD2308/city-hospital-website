"use client";

import { useMotionValue } from "framer-motion";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Bone,
  Ambulance,
  Stethoscope,
  Syringe,
  ArrowRight,
} from "lucide-react";

/* ================= DATA ================= */

const superSpecialities = [
  {
    title: "Cardiology & Cardiac Care",
    icon: HeartPulse,
    link: "/departments/cardiology",
    highlight: true,
  },
  {
    title: "Neurology & Neurosurgery",
    icon: Brain,
    link: "/departments/neurology",
    highlight: true,
  },
];

const otherSpecialities = [
  {
    title: "Medicine & Critical Care",
    icon: Stethoscope,
    link: "/departments/medicine",
  },
  {
    title: "Cardiology & Cath Lab",
    icon: HeartPulse,
    link: "/departments/cardiology",
  },
  {
    title: "General & Laparoscopic Surgery",
    icon: Syringe,
    link: "/departments/surgery",
  },
  {
    title: "Orthopaedics & Joint Replacement",
    icon: Bone,
    link: "/departments/orthopaedics",
  },
  {
    title: "Psychiatry & Mental Health",
    icon: Brain,
    link: "/departments/psychiatry",
  },
  {
    title: "Emergency & Trauma Care",
    icon: Ambulance,
    link: "/departments/emergency",
  },
];

/* ================= PAGE ================= */

export default function SpecialitiesPage() {
  const yFast = useMotionValue(0);
  const ySlow = useMotionValue(0);
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#7A0C0C] via-[#8f1d1d] to-[#a73737] text-white overflow-hidden">
        {/* Decorative Glow Shapes */}
        <motion.div
          style={{ y: ySlow }}
          className="absolute -top-32 -left-32 w-[380px] h-[380px] md:-top-40 md:-left-40 md:w-[520px] md:h-[520px] bg-white/10 rounded-full blur-3xl"
        />

        <motion.div
          style={{ y: yFast }}
          className="absolute bottom-0 -right-32 w-[380px] h-[380px] md:-right-40 md:w-[520px] md:h-[520px] bg-black/20 rounded-full blur-3xl"
        />

        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent_60%)] opacity-10" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-6 text-center">
          {/* Premium Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm text-white/80"
          >
            <Link href="/" className="hover:text-white font-medium transition">
              Home
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white font-semibold">Specialities</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
        text-3xl sm:text-4xl md:text-5xl
        font-bold leading-tight
      "
          >
            Specialities &{" "}
            <span className="text-red-300 block sm:inline">
              Superspecialities
            </span>
          </motion.h1>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "140px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-red-300 mx-auto mt-4 rounded-full"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
        mt-6
        text-white/90
        max-w-xl
        mx-auto
        text-base sm:text-lg md:text-lg
        leading-relaxed
      "
          >
            Comprehensive medical specialities supported by advanced technology,
            expert doctors and compassionate care.
          </motion.p>
        </div>
      </section>

      {/* ================= SUPER SPECIALITIES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">
            Superspecialities
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {superSpecialities.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ scale: 1.02 }}
                className="
                  relative overflow-hidden rounded-3xl
                  bg-gradient-to-br from-[#7A0C0C] to-[#a73737]
                  text-white p-10 shadow-xl
                "
              >
                <item.icon size={48} className="mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-90 mb-6">
                  Advanced diagnosis, precision treatment and 24×7 emergency
                  support.
                </p>
                <div className="inline-flex items-center gap-2 font-semibold">
                  Explore Department <ArrowRight size={18} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OTHER SPECIALITIES ================= */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold tracking-wider text-[#7A0C0C] uppercase">
              Multispeciality Care
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Other Specialities
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Comprehensive medical and surgical services delivered by
              experienced specialists with advanced infrastructure.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherSpecialities.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="
            group relative overflow-hidden
            rounded-2xl p-8
            bg-white/80 backdrop-blur
            border border-slate-200
            shadow-sm hover:shadow-2xl
            transition-all
          "
              >
                {/* Soft gradient hover glow */}
                <div
                  className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-br from-[#7A0C0C]/10 to-transparent
            transition
          "
                />

                {/* Icon with continuous motion */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="
              w-14 h-14 flex items-center justify-center
              rounded-xl bg-[#7A0C0C]/10
              text-[#7A0C0C]
              mb-6
            "
                >
                  <item.icon size={30} />
                </motion.div>

                {/* Text */}
                <h4 className="font-semibold text-lg text-slate-900 relative z-10">
                  {item.title}
                </h4>

                <span
                  className="
            mt-2 inline-block text-sm text-slate-500
            group-hover:text-[#7A0C0C]
            transition
          "
                >
                  Learn more →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-[#7A0C0C] to-[#a73737] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Help Choosing the Right Department?
        </h2>
        <p className="opacity-90 mb-8">
          Our team will guide you to the right specialist.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-white text-[#7A0C0C] px-10 py-4 rounded-full font-semibold shadow-lg"
        >
          Contact Hospital
        </Link>
      </section>
    </>
  );
}
