"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Clock,
  PhoneCall,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";

/* ================= DOCTOR DATA ================= */
const doctors = [
  {
    name: "Dr. Harshad Bhagat",
    designation: "Consultant Psychiatrist",
    whatsapp: "919876543214",
  },
  {
    name: "Dr. Ankita Bhagat (Yawale)",
    designation: "Psychiatrist & Counsellor",
    whatsapp: "919876543215",
  },
];

export default function PsychiatryPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Psychiatrist in Amravati | Mental Health Treatment & Counselling
        </title>

        <meta
          name="description"
          content="Confidential and compassionate mental health treatment in Amravati. Depression, anxiety, stress, addiction and child psychiatry services at City Multispeciality Hospital."
        />

        <meta
          name="keywords"
          content="Psychiatrist in Amravati, Mental Health Doctor Amravati, Depression Treatment Amravati, Anxiety Specialist Amravati, Counselling in Amravati"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Psychiatry & Mental Health | City Multispeciality Hospital"
        />
        <meta
          property="og:description"
          content="Professional and confidential mental healthcare services including anxiety, depression and counselling."
        />
        <meta
          property="og:url"
          content="https://citymultispecialityhospital.com/departments/psychiatry"
        />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://citymultispecialityhospital.com/departments/psychiatry"
        />
      </Head>
      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-r from-[#4b1d3f] to-[#7A0C0C] text-white overflow-hidden">
        {/* 🔥 MOBILE FLOATING ICONS */}
        <motion.div
          className="absolute top-16 right-6 text-white/10 lg:hidden"
          animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <HeartHandshake size={110} />
        </motion.div>

        {/* <motion.div
          className="absolute bottom-10 left-6 text-white/5 lg:hidden"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <HeartHandshake size={120} />
        </motion.div> */}

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Psychiatry & Mental Health
          </motion.h1>

          <p className="text-lg opacity-90 max-w-3xl">
            Compassionate, confidential and professional mental healthcare for
            individuals, families and children.
          </p>
        </div>
      </section>

      {/* ================= ABOUT DEPARTMENT ================= */}
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
              Mental Wellness Matters
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The Psychiatry & Mental Health department provides safe,
              confidential and evidence-based treatment for a wide range of
              mental and emotional health conditions.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our specialists focus on personalized care for anxiety,
              depression, stress, addiction and child behavioral issues —
              without judgment and with complete empathy.
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
              src="https://images.unsplash.com/photo-1621887348744-6b0444f8a058?auto=format&fit=crop&w=1200&q=80"
              alt="Psychiatry Department"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#7A0C0C] mb-16">
            Services Offered
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Depression, Anxiety & Stress Disorders",
              "Panic Attacks & OCD Treatment",
              "Sleep & Appetite Disorders",
              "Addiction & De-addiction Care",
              "ADHD & Child Behavioral Issues",
              "Memory Problems & Epilepsy Care",
              "Relationship & Emotional Counselling",
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

      {/* ================= DOCTORS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#7A0C0C] mb-16">
            Our Mental Health Specialists
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {doctors.map((doc, i) => (
              <motion.a
                key={i}
                href={`https://wa.me/${doc.whatsapp}?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20a%20confidential%20mental%20health%20consultation.`}
                target="_blank"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="block bg-slate-50 rounded-3xl p-8 shadow-lg border hover:shadow-xl transition"
              >
                <Brain className="text-[#7A0C0C] mb-4" size={36} />
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
      {/* ================= SUPPORT CTA ================= */}
      <section className="relative py-24 bg-gradient-to-r from-[#3b2f4a] to-[#7A0C0C] text-white text-center overflow-hidden">
        {/* Mobile floating support icon */}
        <motion.div
          className="absolute top-10 right-6 text-white/10 lg:hidden"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <HeartHandshake size={100} />
        </motion.div>

        <HeartHandshake className="mx-auto mb-6" size={48} />
        <h2 className="text-3xl font-bold mb-4">
          You Are Not Alone. Help Is Available.
        </h2>
        <p className="opacity-90 mb-8">
          Reach out today for professional mental health support.
        </p>
        <a
          href="tel:+919876543210"
          className="inline-flex items-center gap-3 bg-white text-[#7A0C0C] px-8 py-4 rounded-full font-semibold shadow-lg"
        >
          <PhoneCall /> Call for Support
        </a>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 bg-white text-center">
        <Link
          href="/contact"
          className="inline-block bg-[#7A0C0C] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#5f0909]"
        >
          Contact Mental Health Department
        </Link>
      </section>
    </>
  );
}
