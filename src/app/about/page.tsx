"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, HeartPulse, Ambulance } from "lucide-react";

export default function AboutPage() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 600], [0, -40]);
  const iconFloat = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <>
      {/* ================= PREMIUM ABOUT HERO ================= */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden flex items-center">
        {/* Background Image */}
        <motion.div
          style={{
            y: bgY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=80')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[#3a0b0b]/70 to-black/30" />

        {/* Floating Icon (Mobile Only) */}
        <motion.div
          style={{ y: iconFloat }}
          className="absolute bottom-16 right-6 text-white/10 lg:hidden"
        >
          <HeartPulse size={80} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl px-6 text-white"
        >
          <div className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white font-medium transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold">About Us</span>
          </div>

          <p className="uppercase tracking-widest text-sm text-red-300 mb-4">
            About Our Hospital
          </p>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
            City Multispeciality Hospital
            <br />
            <span className="text-red-400">& Critical Care Centre</span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl">
            Delivering advanced multispeciality healthcare with compassion,
            precision, and 24×7 emergency support in Amravati.
          </p>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">Who We Are</h2>

            <p className="text-slate-700 leading-relaxed mb-4 text-sm lg:text-base">
              City Multispeciality Hospital & Critical Care Centre is a modern
              healthcare institution committed to delivering comprehensive and
              ethical medical care under one roof.
            </p>

            <p className="text-slate-700 leading-relaxed text-sm lg:text-base">
              With experienced specialists, advanced infrastructure, and a
              patient-first philosophy, we have become a trusted name in
              healthcare across Amravati and nearby regions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-72 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1505410603994-c3ac6269711f?auto=format&fit=crop&w=1200&q=80"
              alt="Hospital interior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "Our Vision",
              text: "To be a leading multispeciality hospital recognized for clinical excellence, ethical care, and innovation.",
            },
            {
              title: "Our Mission",
              text: "To provide compassionate, affordable, and high-quality healthcare through skilled professionals and advanced technology.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 lg:p-10 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-slate-700 text-sm lg:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY TRUST US ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">
            Why Trust City Multispeciality Hospital
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <ShieldCheck size={40} />,
                title: "Trusted Expertise",
                text: "Experienced doctors delivering ethical and evidence-based care.",
              },
              {
                icon: <HeartPulse size={40} />,
                title: "Patient-Centered Care",
                text: "Every decision is guided by patient safety and comfort.",
              },
              {
                icon: <Ambulance size={40} />,
                title: "24×7 Emergency",
                text: "Round-the-clock emergency & critical care services.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="text-[#7A0C0C] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-700 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 lg:py-20 bg-[#7A0C0C] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* 🔥 MOBILE AUTO SCROLL */}
          <div className="lg:hidden overflow-hidden relative">
            <motion.div
              className="flex gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                ["10+", "Doctors"],
                ["24×7", "Emergency"],
                ["50K+", "Patients Treated"],
                ["100%", "Care Commitment"],
              ]
                .concat([
                  ["10+", "Doctors"],
                  ["24×7", "Emergency"],
                  ["50K+", "Patients Treated"],
                  ["100%", "Care Commitment"],
                ])
                .map(([num, label], i) => (
                  <div key={i} className="min-w-[160px] text-center">
                    <p className="text-3xl font-bold mb-2">{num}</p>
                    <p className="opacity-90 text-sm">{label}</p>
                  </div>
                ))}
            </motion.div>
          </div>

          {/* 💻 DESKTOP GRID (UNCHANGED) */}
          <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 text-center gap-8">
            {[
              ["10+", "Doctors"],
              ["24×7", "Emergency"],
              ["50K+", "Patients Treated"],
              ["100%", "Care Commitment"],
            ].map(([num, label], i) => (
              <motion.div
                key={i}
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.9, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-3xl lg:text-4xl font-bold mb-2">{num}</p>
                <p className="opacity-90 text-sm lg:text-base">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
