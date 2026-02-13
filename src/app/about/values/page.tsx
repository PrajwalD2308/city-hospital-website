"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  TrendingUp,
  HeartPulse,
  Scale,
} from "lucide-react";

const values = [
  {
    title: "Patient-Centric Care",
    description:
      "Every decision we make is guided by what is best for our patients — their safety, comfort, dignity, and recovery.",
    icon: <HeartHandshake />,
  },
  {
    title: "Trust & Transparency",
    description:
      "We believe trust is earned through honest communication, ethical practices, and complete transparency in treatment.",
    icon: <ShieldCheck />,
  },
  {
    title: "Team Commitment",
    description:
      "Our doctors, nurses, and staff work as one team with dedication, accountability, and respect for every life.",
    icon: <Users />,
  },
  {
    title: "Clinical Excellence",
    description:
      "We continuously improve our medical outcomes through skill enhancement, technology, and evidence-based care.",
    icon: <TrendingUp />,
  },
  {
    title: "Compassion & Empathy",
    description:
      "Healing goes beyond treatment — we listen, understand, and support patients and families at every step.",
    icon: <HeartPulse />,
  },
  {
    title: "Responsibility & Ethics",
    description:
      "We uphold strong ethical standards, social responsibility, and fairness in all medical and administrative practices.",
    icon: <Scale />,
  },
];

export default function ValuesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Desktop Overlay (unchanged) */}
        <div className="absolute inset-0 bg-black/70 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A0C0C]/60 via-black/40 to-black/60" />

        {/* 🔥 Mobile Premium Gradient Overlay */}
        <motion.div
          className="absolute inset-0 lg:hidden"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(120deg, rgba(122,12,12,0.85), rgba(0,0,0,0.7), rgba(122,12,12,0.85))",
            backgroundSize: "200% 200%",
          }}
        />

        {/* Floating Icons (Mobile Only) */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-16 left-6 text-white/10 lg:hidden"
        >
          <HeartPulse size={100} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-6 text-white/10 lg:hidden"
        >
          <ShieldCheck size={90} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-6xl px-6 text-white"
        >
          <div className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white font-medium transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold">Our Values</span>
          </div>
          <p className="uppercase tracking-widest text-sm text-red-300 mb-4">
            Our Foundation
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Values</h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl">
            The principles that guide our medical decisions, patient care, and
            commitment to ethical healthcare.
          </p>
        </motion.div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Defines Us
            </h2>
            <p className="text-slate-600 text-lg">
              Our values shape how we treat patients, work together as a team,
              and serve the community with integrity.
            </p>
          </motion.div>

          {/* Grid (Same structure for all devices) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="
            bg-slate-50
            rounded-3xl
            p-8
            shadow-md
            hover:shadow-xl
            transition
          "
              >
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="
              w-14 h-14
              rounded-full
              bg-[#7A0C0C]
              text-white
              flex items-center justify-center
              mb-6
            "
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUE STATEMENT ================= */}
      <section className="py-20 bg-[#7A0C0C] text-white relative overflow-hidden">
        {/* Subtle Mobile Motion Background */}
        <motion.div
          className="absolute inset-0 lg:hidden opacity-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-3xl font-semibold leading-relaxed"
          >
            “Our values are not just words — they are reflected in every
            diagnosis, every treatment, and every life we touch.”
          </motion.p>
        </div>
      </section>
    </>
  );
}
