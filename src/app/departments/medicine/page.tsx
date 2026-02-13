"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  Clock,
  PhoneCall,
  Ambulance,
  CheckCircle,
} from "lucide-react";

/* ================= DOCTOR DATA ================= */
const doctors = [
  {
    name: "Dr. Pankaj M. Bagade",
    designation: "Consultant Physician & Critical Care Specialist",
    whatsapp: "919876543210",
  },
];

/* ================= COMPONENT ================= */
export default function MedicinePage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>
          General Medicine & Critical Care in Amravati | City Multispeciality
          Hospital
        </title>

        <meta
          name="description"
          content="Expert General Medicine and Critical Care services in Amravati. Advanced ICU, emergency care, diabetes, hypertension, stroke and infection management at City Multispeciality Hospital."
        />

        <meta
          name="keywords"
          content="General Medicine Amravati, Critical Care Hospital Amravati, ICU Hospital Amravati, Physician in Amravati, Internal Medicine Doctor Amravati"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="General Medicine & Critical Care | City Multispeciality Hospital"
        />
        <meta
          property="og:description"
          content="Comprehensive internal medicine and ICU services with 24×7 emergency care in Amravati."
        />
        <meta
          property="og:url"
          content="https://citymultispecialityhospital.com/departments/medicine"
        />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://citymultispecialityhospital.com/departments/medicine"
        />
      </Head>
      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-r from-[#4b1d3f] to-[#7A0C0C] text-white overflow-hidden">
        {/* 🔥 MOBILE FLOATING ICON */}
        <motion.div
          className="absolute top-20 right-6 text-white/10 lg:hidden"
          animate={{ y: [0, -20, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Stethoscope size={110} />
        </motion.div>

        {/* Subtle glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Medicine & Critical Care
          </motion.h1>

          <p className="text-lg opacity-90 max-w-3xl">
            Comprehensive internal medicine services with advanced ICU and
            emergency care support.
          </p>
        </div>
      </section>

      {/* ================= ABOUT DEPARTMENT ================= */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Mobile background soft motion */}
        <motion.div
          className="absolute inset-0 lg:hidden"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
              Comprehensive Medical & ICU Care
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The Department of Medicine & Critical Care at City Multispecialty
              Hospital provides expert diagnosis and treatment for a wide range
              of acute and chronic medical conditions.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Supported by a well-equipped ICU and 24×7 emergency services, we
              manage life-threatening conditions such as stroke, infections,
              metabolic emergencies and multi-organ failure with precision.
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
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
              alt="Medicine Department"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        {/* Mobile floating icon */}
        <motion.div
          className="absolute bottom-10 left-6 text-[#7A0C0C]/5 lg:hidden"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Ambulance size={120} />
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#7A0C0C] mb-16">
            Services Offered
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "General & Internal Medicine Consultation",
              "Advanced ICU & Critical Care Services",
              "Stroke & Encephalopathy Management",
              "Diabetes, Hypertension & Thyroid Disorders",
              "Severe Infections & Sepsis Care",
              "Emergency Medical Services",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-[#7A0C0C]/10"
              >
                <CheckCircle className="text-[#7A0C0C] mb-4" />
                <h4 className="font-semibold text-slate-800">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOCTORS ================= */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#7A0C0C] mb-12 lg:mb-16">
            Our Physician
          </h2>

          <div className="flex justify-center">
            {doctors.map((doc, i) => (
              <motion.a
                key={i}
                href={`https://wa.me/${doc.whatsapp}`}
                target="_blank"
                whileHover={{ y: -8 }}
                className="block bg-slate-50 rounded-3xl p-6 lg:p-8 shadow-lg border hover:shadow-xl transition max-w-md text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Stethoscope
                    className="text-[#7A0C0C] mb-4 mx-auto"
                    size={36}
                  />
                </motion.div>

                <h3 className="text-lg lg:text-xl font-bold mb-2">
                  {doc.name}
                </h3>
                <p className="text-slate-600 mb-6 text-sm">{doc.designation}</p>
                <div className="text-[#7A0C0C] font-semibold">
                  Chat on WhatsApp →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPD ================= */}
      <section className="relative py-16 bg-slate-50 text-center overflow-hidden">
        {/* Mobile Floating Clock */}
        <motion.div
          className="absolute top-6 left-6 text-[#7A0C0C]/10 lg:hidden"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Clock size={80} />
        </motion.div>

        <Clock className="mx-auto text-[#7A0C0C] mb-4" size={40} />
        <h3 className="text-xl lg:text-2xl font-bold mb-4">OPD Timings</h3>
        <p className="text-slate-700 text-sm lg:text-base">
          Monday – Saturday
          <br />
          Morning : <strong>11:00 AM – 2:00 PM</strong>
          <br />
          Evening : <strong> 5:00 PM – 8:00 PM</strong>
        </p>
      </section>
      {/* ================= EMERGENCY CTA ================= */}

      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#7A0C0C] to-[#a73737] text-white text-center">
        <Ambulance className="mx-auto mb-6" size={48} />
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Medical Emergency? We Are Available 24×7
        </h2>
        <p className="opacity-90 mb-8 text-sm lg:text-base">
          Immediate care for critical and life-threatening conditions.
        </p>
        <a
          href="tel:+919876543210"
          className="inline-flex items-center gap-3 bg-white text-[#7A0C0C] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold shadow-lg"
        >
          <PhoneCall /> Call Emergency
        </a>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 bg-white text-center">
        <Link
          href="/contact"
          className="inline-block bg-[#7A0C0C] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#5f0909]"
        >
          Contact Medicine Department
        </Link>
      </section>
    </>
  );
}
