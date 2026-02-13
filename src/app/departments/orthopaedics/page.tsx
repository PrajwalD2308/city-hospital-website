"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bone, Clock, PhoneCall, Ambulance, CheckCircle } from "lucide-react";

/* ================= DOCTOR DATA ================= */
const doctors = [
  {
    name: "Dr. Vineet Avasarmol",
    designation: "Orthopaedic & Joint Replacement Surgeon",
    whatsapp: "919876543213",
  },
];

export default function OrthopaedicsPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Orthopaedic & Joint Replacement in Amravati | Bone Specialist
        </title>

        <meta
          name="description"
          content="Advanced orthopaedic and joint replacement surgery in Amravati. Knee replacement, hip replacement, fracture care and trauma treatment at City Multispeciality Hospital."
        />

        <meta
          name="keywords"
          content="Orthopaedic Doctor in Amravati, Joint Replacement Amravati, Knee Replacement Surgery Amravati, Bone Specialist Amravati, Fracture Treatment Amravati"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Orthopaedics & Joint Replacement | City Multispeciality Hospital"
        />
        <meta
          property="og:description"
          content="Comprehensive bone and joint care including knee replacement, hip replacement and trauma surgery."
        />
        <meta
          property="og:url"
          content="https://citymultispecialityhospital.com/departments/orthopaedics"
        />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://citymultispecialityhospital.com/departments/orthopaedics"
        />
      </Head>
      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-r from-[#4b1d3f] to-[#7A0C0C] text-white overflow-hidden">
        {/* 🔥 MOBILE FLOATING ICON */}
        <motion.div
          className="absolute top-20 right-6 text-white/10 lg:hidden"
          animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Bone size={120} />
        </motion.div>

        {/* Radial Glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Orthopaedics & Joint Replacement
          </motion.h1>

          <p className="text-lg opacity-90 max-w-3xl">
            Advanced bone, joint and spine care to restore mobility and improve
            quality of life.
          </p>
        </div>
      </section>

      {/* ================= ABOUT DEPARTMENT ================= */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* 🔥 MOBILE SUBTLE ANIMATED BACKGROUND */}
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
              Complete Bone & Joint Care
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The Orthopaedics Department at City Multispecialty Hospital
              provides comprehensive care for bone, joint and musculoskeletal
              conditions.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our approach combines modern surgical techniques, accurate
              diagnosis and personalized rehabilitation plans for faster
              recovery.
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
              src="https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=80"
              alt="Orthopaedics Department"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        {/* 🔥 MOBILE FLOATING ACCENT ICON */}
        <motion.div
          className="absolute bottom-10 left-6 text-[#7A0C0C]/5 lg:hidden"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Bone size={130} />
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#7A0C0C] mb-16">
            Services Offered
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Knee Replacement Surgery",
              "Hip Replacement Surgery",
              "Fracture Fixation & Trauma Care",
              "Arthroscopy & Sports Injury Treatment",
              "Back Pain & Slip Disc Treatment",
              "Arthritis & Joint Pain Management",
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
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#7A0C0C] mb-16">
            Our Orthopaedic Specialist
          </h2>

          <div className="flex justify-center">
            {doctors.map((doc, i) => (
              <motion.a
                key={i}
                href={`https://wa.me/${doc.whatsapp}?text=Hello%20Doctor,%20I%20would%20like%20to%20consult%20for%20an%20orthopaedic%20problem.`}
                target="_blank"
                whileHover={{ y: -8 }}
                className="block bg-slate-50 rounded-3xl p-8 shadow-lg border hover:shadow-xl transition max-w-md"
              >
                <Bone className="text-[#7A0C0C] mb-4" size={36} />
                <h3 className="text-xl font-bold mb-2">{doc.name}</h3>
                <p className="text-slate-600 mb-6">{doc.designation}</p>
                <div className="text-[#7A0C0C] font-semibold">
                  Chat on WhatsApp →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPD TIMINGS ================= */}
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
      <section className="py-24 bg-gradient-to-r from-[#4b1d3f] to-[#7A0C0C] text-white text-center">
        <Ambulance className="mx-auto mb-6" size={48} />
        <h2 className="text-3xl font-bold mb-4">
          Fracture or Accident Injury?
        </h2>
        <p className="opacity-90 mb-8">
          Emergency orthopaedic and trauma care available 24×7.
        </p>
        <a
          href="tel:+919876543210"
          className="inline-flex items-center gap-3 bg-white text-[#7A0C0C] px-8 py-4 rounded-full font-semibold shadow-lg"
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
          Contact Orthopaedics Department
        </Link>
      </section>
    </>
  );
}
