"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, HeartPulse, Stethoscope } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* 🔥 MOBILE ANIMATED MAROON BACKGROUND */}
      <motion.div
        className="absolute inset-0 lg:hidden -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg, rgba(122,12,12,0.05), rgba(122,12,12,0.02), rgba(122,12,12,0.05))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* 💎 FLOATING ICONS (Mobile Only) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-16 left-6 text-[#7A0C0C]/10 lg:hidden -z-10"
      >
        <HeartPulse size={80} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-6 text-[#7A0C0C]/10 lg:hidden -z-10"
      >
        <Stethoscope size={70} />
      </motion.div>

      {/* DESKTOP BACKGROUND (UNCHANGED) */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-white pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            relative w-full h-72 lg:h-[420px]
            rounded-3xl overflow-hidden
            shadow-2xl lg:shadow-2xl
            shadow-xl
          "
        >
          <img
            src="/images/about_home.png"
            alt="City Multispeciality Hospital ICU and critical care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-7"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            About{" "}
            <span className="text-[#7A0C0C]">
              City Multispeciality Hospital & Critical Care Centre
            </span>
          </h2>

          <p className="text-slate-700 text-base lg:text-lg leading-relaxed max-w-xl">
            City Multispeciality Hospital is a dedicated critical care and
            trauma centre in Amravati, offering advanced treatment in
            Cardiology, General Medicine, Neurology, Orthopaedics, and Emergency
            Care. Equipped with modern state-of-the-art ICUs, Cath Lab with
            patient-friendly ventilator and multi-para monitors, operation
            theatres, and round-the-clock emergency services, we deliver timely,
            ethical, and expert medical care when it matters most.
          </p>

          {/* HIGHLIGHTS */}
          <div className="space-y-4 max-w-md">
            {[
              "24×7 ICU, Neuro ICU & Emergency services",
              "Advanced brain, spine, cardiac care, angiography & angioplasty",
              "Multispeciality consultant team with critical care expertise",
              "Modern operation theatres & in-house diagnostics",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={22}
                  className="text-[#7A0C0C] mt-1 shrink-0"
                />
                <p className="text-slate-700 font-medium leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full
                         bg-[#7A0C0C] text-white font-semibold tracking-wide
                         shadow-lg hover:shadow-xl hover:bg-[#5f0909] transition"
            >
              Know More
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full
                         border border-[#7A0C0C] text-[#7A0C0C]
                         font-semibold tracking-wide hover:bg-[#7A0C0C]/5 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
