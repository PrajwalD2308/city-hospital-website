"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  UserCheck,
  Stethoscope,
  Scale,
} from "lucide-react";
import { useRef } from "react";

const pledges = [
  {
    title: "Ethical Medical Practice",
    desc: "We commit to honest diagnosis, transparent communication, and ethical treatment decisions without compromise.",
    icon: <Scale />,
  },
  {
    title: "Patient Safety First",
    desc: "Every protocol, procedure, and decision is guided by strict safety standards and evidence-based medicine.",
    icon: <ShieldCheck />,
  },
  {
    title: "Compassionate Care",
    desc: "We treat every patient with empathy, dignity, and respect, understanding both medical and emotional needs.",
    icon: <HeartHandshake />,
  },
  {
    title: "Accountability & Responsibility",
    desc: "Our doctors and staff take responsibility for outcomes, continuous improvement, and patient trust.",
    icon: <UserCheck />,
  },
  {
    title: "Clinical Excellence",
    desc: "We continually enhance our skills, technology, and systems to deliver the highest quality healthcare.",
    icon: <Stethoscope />,
  },
];

export default function PledgePage() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 500], [0, -40]);
  const iconY = useTransform(scrollY, [0, 600], [0, -120]);

  return (
    <>
      {/* ================= PREMIUM HERO (BOTH DEVICES) ================= */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <motion.div
          style={{
            y: bgY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1800&q=80')",
          }}
          className="absolute inset-0 bg-cover bg-center scale-110"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A0C0C]/60 via-black/50 to-black/70" />

        {/* Floating Icon */}
        <motion.div
          style={{ y: iconY }}
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-white/10"
        >
          <ShieldCheck size={150} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl px-6 text-white"
        >
          <div className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white font-medium transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold">Our Pledge</span>
          </div>
          <p className="uppercase tracking-widest text-sm text-red-300 mb-4">
            Our Commitment
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Pledge</h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-3xl">
            A promise of integrity, compassion, and excellence in every aspect
            of patient care.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
        {/* Mobile floating icon */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-10 left-6 text-[#7A0C0C]/10 lg:hidden"
        >
          <HeartHandshake size={80} />
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            A Promise We Live By
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-700 text-lg leading-relaxed"
          >
            At City Multispeciality Hospital & Critical Care Centre, our pledge
            goes beyond medical treatment. It reflects our responsibility to
            provide ethical, transparent, and compassionate healthcare while
            maintaining the highest professional standards.
          </motion.p>
        </div>
      </section>

      {/* ================= CORE PLEDGES ================= */}
      <section className="relative py-20 lg:py-24 bg-slate-50 overflow-hidden">
        {/* Mobile floating background icon */}
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 right-6 text-[#7A0C0C]/10 lg:hidden"
        >
          <Stethoscope size={90} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {pledges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border border-slate-100 relative overflow-hidden"
              >
                {/* Soft gradient glow (mobile only visible stronger) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A0C0C]/5 to-transparent pointer-events-none lg:hidden" />

                <div className="w-14 h-14 rounded-full bg-[#7A0C0C] text-white flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PATIENT PROMISE ================= */}
      <section className="relative py-20 bg-[#7A0C0C] text-white overflow-hidden">
        {/* Floating icon mobile */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 right-8 text-white/10 lg:hidden"
        >
          <Scale size={100} />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-semibold leading-relaxed"
          >
            “We pledge to stand by our patients with integrity, compassion, and
            responsibility — in every diagnosis, every treatment, and every
            moment of care.”
          </motion.p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 bg-white overflow-hidden">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 left-6 text-[#7A0C0C]/10 lg:hidden"
        >
          <UserCheck size={80} />
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Your Health. Our Responsibility.
          </h3>
          <p className="text-slate-700 text-lg mb-8">
            Experience healthcare built on trust, ethics, and commitment.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#7A0C0C] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#641010] transition shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
