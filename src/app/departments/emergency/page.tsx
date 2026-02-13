"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

import { Ambulance, Clock, PhoneCall, Siren, CheckCircle } from "lucide-react";

export default function EmergencyPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>
          24×7 Emergency & Trauma Care in Amravati | City Multispeciality
          Hospital
        </title>

        <meta
          name="description"
          content="24×7 Emergency and Trauma Care services in Amravati. Immediate treatment for accidents, heart attacks, stroke, fractures and critical medical emergencies at City Multispeciality Hospital."
        />

        <meta
          name="keywords"
          content="Emergency Hospital in Amravati, 24x7 Emergency Care Amravati, Trauma Care Amravati, ICU Emergency Amravati, Ambulance Service Amravati"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="24×7 Emergency & Trauma Care | City Multispeciality Hospital"
        />
        <meta
          property="og:description"
          content="Immediate life-saving emergency care with ICU and specialist support available round-the-clock in Amravati."
        />
        <meta
          property="og:url"
          content="https://citymultispecialityhospital.com/departments/emergency"
        />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://citymultispecialityhospital.com/departments/emergency"
        />
      </Head>

      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-r from-[#4b1d3f] to-[#7A0C0C] text-white overflow-hidden">
        {/* 🔥 MOBILE FLOATING ICONS */}
        <motion.div
          className="absolute top-20 right-6 text-white/10 lg:hidden"
          animate={{ y: [0, -25, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Ambulance size={120} />
        </motion.div>

        {/* <motion.div
          className="absolute bottom-10 left-6 text-white/5 lg:hidden"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Siren size={130} />
        </motion.div> */}

        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Emergency & Trauma Care
          </motion.h1>

          <p className="text-xl opacity-95 max-w-3xl">
            Immediate, life-saving care for medical, cardiac, neurological and
            trauma emergencies — available 24×7.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* 🔥 MOBILE SOFT ANIMATED BACKGROUND */}
        <motion.div
          className="absolute inset-0 lg:hidden"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(120deg, rgba(122,12,12,0.04), rgba(122,12,12,0.01), rgba(122,12,12,0.04))",
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#7A0C0C] mb-6">
              When Every Second Counts
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The Emergency & Trauma Care Department at City Multispecialty
              Hospital is equipped to handle life-threatening situations with
              speed, accuracy and compassion.
            </p>
            <p className="text-slate-700 leading-relaxed">
              From road traffic accidents and fractures to heart attacks,
              strokes and head injuries — we ensure rapid stabilization and
              advanced critical care under one roof.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1761881917053-a48d16611196?auto=format&fit=crop&w=1200&q=80"
              alt="Emergency Department"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#7A0C0C] mb-16">
            Emergency Services Available
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "24×7 Emergency Medical Services",
              "Road Traffic Accident & Trauma Care",
              "Heart Attack & Cardiac Emergencies",
              "Stroke & Neuro Emergency Care",
              "Fractures, Bleeding & Polytrauma",
              "Advanced ICU & Life Support",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-[#7A0C0C]/10"
              >
                <CheckCircle className="text-[#7A0C0C] mb-4" />
                <h4 className="font-semibold text-slate-800">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAST ACTION STRIP ================= */}
      <section className="py-18 bg-[#7A0C0C] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {/* Mobile stacked premium look */}
          <div className="lg:bg-transparent lg:p-0 bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <Clock className="mx-auto mb-4" size={36} />
            <h4 className="font-semibold text-lg">24×7 Availability</h4>
            <p className="opacity-90 text-sm">
              Emergency team ready round-the-clock
            </p>
          </div>

          <div className="lg:bg-transparent lg:p-0 bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <Siren className="mx-auto mb-4" size={36} />
            <h4 className="font-semibold text-lg">Rapid Response</h4>
            <p className="opacity-90 text-sm">
              Immediate assessment and treatment
            </p>
          </div>

          <div className="lg:bg-transparent lg:p-0 bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <Ambulance className="mx-auto mb-4" size={36} />
            <h4 className="font-semibold text-lg">Critical Care Support</h4>
            <p className="opacity-90 text-sm">
              ICU & specialist backup available
            </p>
          </div>
        </div>
      </section>

      {/* ================= EMERGENCY CTA ================= */}
      <section className="py-28 mt-14 bg-gradient-to-r from-[#7A0C0C] to-[#a73737] text-white text-center">
        <Ambulance className="mx-auto mb-6" size={56} />
        <h2 className="text-4xl font-bold mb-6">
          Medical Emergency? Don’t Wait.
        </h2>
        <p className="text-lg opacity-95 mb-10 max-w-2xl mx-auto">
          Immediate care can save lives. Contact our emergency department now.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#7A0C0C] px-10 py-4 rounded-full font-bold shadow-lg text-lg"
          >
            <PhoneCall /> Call Emergency
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#7A0C0C] transition"
          >
            Contact Hospital
          </Link>
        </div>
      </section>
    </>
  );
}
