"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import PulseDivider from "@/components/PulseDivider";
import {
  Ambulance,
  HeartPulse,
  Hospital,
  Activity,
  Brain,
  Bone,
  Stethoscope,
  Microscope,
  ShieldCheck,
  BedDouble,
  FlaskConical,
} from "lucide-react";

/* ================= SECTIONS DATA ================= */

const criticalCare = [
  "24×7 Intensive Care Unit (ICU)",
  "Dedicated Neuro ICU – 10 Beds",
  "General Medicine & Cardiac ICU – 8 Beds",
  "Ventilator & life-support systems",
  "Trained Intensivists & ICU nursing staff",
  "Emergency & trauma management",
];

const specialityFacilities = [
  {
    title: "Cardiology & Cath Lab",
    icon: HeartPulse,
    points: [
      "Heart attack (MI) management",
      "Cath Lab facility",
      "Angiography & Angioplasty",
      "2D Echo & ECG",
      "Dedicated Cardiac ICU",
    ],
  },
  {
    title: "General Medicine",
    icon: Stethoscope,
    points: [
      "Diabetes & hypertension care",
      "Fever & infectious diseases",
      "Kidney & lung medical conditions",
      "Anemia & critical medical illnesses",
      "Swine flu & emergency medicine",
    ],
  },
  {
    title: "Neuro & Spine Care",
    icon: Brain,
    points: [
      "Brain tumor & hemorrhage surgeries",
      "Stroke & paralysis management",
      "Spine fixation (Cervical & Lumbar)",
      "Neuro-trauma post-operative ICU care",
      "24×7 emergency neurosurgery",
    ],
  },
  {
    title: "Orthopaedic Services",
    icon: Bone,
    points: [
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "Arthroscopy & ligament surgeries",
      "Complex trauma & fracture care",
      "Spine-related orthopaedic treatment",
    ],
  },
];

const infrastructure = [
  {
    label: "Total Hospital Beds",
    value: "18",
    icon: BedDouble,
  },
  {
    label: "24×7 Intensive Care Unit",
    value: "24×7",
    icon: HeartPulse,
  },
  {
    label: "Modular Operation Theatres",
    value: "2",
    icon: Microscope,
  },
  {
    label: "Neurosurgery & Spine OT",
    value: "Advanced",
    icon: Brain,
  },
  {
    label: "Orthopaedic Trauma OT",
    value: "Advanced",
    icon: Bone,
  },
  {
    label: "Emergency Laboratory Services",
    value: "In-house",
    icon: FlaskConical,
  },
];

/* ================= PAGE ================= */

export default function FacilitiesPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Hospital Facilities in Amravati | ICU, Cath Lab & Emergency Care
        </title>

        <meta
          name="description"
          content="Explore advanced hospital facilities at City Multispeciality Hospital, Amravati. 24x7 ICU, Cath Lab, Neuro ICU, Emergency Services, Modular OTs and Critical Care infrastructure."
        />

        <meta
          name="keywords"
          content="Hospital facilities in Amravati, ICU in Amravati, Cath Lab Amravati, Neuro ICU Amravati, Emergency hospital Amravati, Critical care hospital Amravati"
        />

        <meta
          property="og:title"
          content="Advanced Hospital Facilities | City Multispeciality Hospital Amravati"
        />

        <meta
          property="og:description"
          content="Modern infrastructure including ICU, Cath Lab, Neuro ICU, Modular Operation Theatres and 24x7 Emergency services in Amravati."
        />

        <meta
          property="og:url"
          content="https://city-multispeciality-hospital-websi.vercel.app/facilities"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://city-multispeciality-hospital-websi.vercel.app/facilities"
        />
      </Head>

      {/* ================= HERO ================= */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#7A0C0C] via-[#8f1d1d] to-[#a73737] text-white overflow-hidden">
        {/* Decorative glow shapes */}
        <motion.div
          style={{ y: 0 }}
          className="absolute -top-32 -left-32 w-[380px] h-[380px] md:-top-40 md:-left-40 md:w-[520px] md:h-[520px] bg-white/10 rounded-full blur-3xl"
        />

        <motion.div
          style={{ y: 0 }}
          className="absolute bottom-0 -right-32 w-[380px] h-[380px] md:-right-40 md:w-[520px] md:h-[520px] bg-black/20 rounded-full blur-3xl"
        />

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent_60%)] opacity-10" />

        {/* 🔹 Mobile floating background icon (kept) */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-10 right-6 text-white/10 lg:hidden"
        >
          <Hospital size={140} />
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-6 text-center">
          {/* ✅ Breadcrumb Added */}
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
            <span className="text-white font-semibold">Facilities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
        text-3xl sm:text-4xl md:text-5xl
        font-bold leading-tight
      "
          >
            Facilities &{" "}
            <span className="text-red-300 block sm:inline">
              Clinical Excellence
            </span>
          </motion.h1>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-red-300 mx-auto mt-4 rounded-full"
          />

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
            Advanced critical care, modern infrastructure and multispeciality
            services designed to deliver safe, timely and effective treatment.
          </motion.p>
        </div>
      </section>

      {/* ================= CRITICAL CARE ================= */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* 🔹 Mobile soft glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A0C0C]/5 via-white to-white lg:hidden pointer-events-none" />

        {/* 🔹 Mobile floating icon */}
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-16 left-6 text-[#7A0C0C]/10 lg:hidden"
        >
          <Activity size={110} />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#7A0C0C] mb-4">
              Critical Care & ICU Facilities
            </h2>
            <p className="text-slate-700 text-lg">
              Advanced intensive care infrastructure with dedicated ICUs,
              trained specialists, and round-the-clock emergency readiness.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* AUTO SCROLL IMAGES */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 22, // smoother mobile premium speed
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[
                  "/images/facilities_page/icu_1.png",
                  "/images/facilities_page/neuro_icu.png",
                  "/images/facilities_page/cardiac_icu.png",
                  "/images/facilities_page/ventilator.png",
                  "/images/facilities_page/nursing.png",
                  "/images/facilities_page/emergency.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="min-w-[280px] lg:min-w-[320px] h-[200px] lg:h-[240px] rounded-3xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={img}
                      alt="ICU Facility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT – GLASS CARDS (UNCHANGED STRUCTURE) */}
            <div className="grid sm:grid-cols-2 gap-6">
              {criticalCare.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="relative rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-[#7A0C0C]/15 shadow-lg hover:shadow-xl transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#7A0C0C]/10 flex items-center justify-center">
                      <ShieldCheck className="text-[#7A0C0C]" size={22} />
                    </div>
                    <p className="text-slate-800 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PulseDivider />

      {/* ================= SPECIALITY FACILITIES (PREMIUM – FIXED ANIMATIONS) ================= */}
      <section className="relative py-28 bg-slate-50 overflow-hidden">
        {/* Soft background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-transparent to-white pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#7A0C0C] mb-4">
              Multispeciality Treatment Facilities
            </h2>
            <p className="text-slate-700 text-lg">
              Comprehensive care across major medical and surgical specialties,
              supported by modern infrastructure and experienced specialists.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-12">
            {specialityFacilities.map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -10 }}
                className="
            relative group rounded-3xl p-8
            bg-white/80 backdrop-blur-xl
            border border-[#7A0C0C]/20
            shadow-xl hover:shadow-2xl
            transition-all
          "
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-5 mb-6">
                  {/* FLOATING ICON */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="
                relative w-14 h-14 rounded-2xl
                bg-gradient-to-br from-[#7A0C0C] to-[#5F0909]
                flex items-center justify-center
                text-white shadow-lg
              "
                  >
                    <dept.icon size={28} />

                    {/* ICON GLOW */}
                    <motion.span
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-white/20 blur-md"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {dept.title}
                  </h3>
                </div>

                {/* POINTS */}
                <ul className="space-y-4">
                  {dept.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex gap-3 items-start"
                    >
                      {/* PULSING BULLET ICON */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.4,
                        }}
                        className="mt-1"
                      >
                        <Activity size={18} className="text-[#7A0C0C]" />
                      </motion.div>

                      <span className="text-slate-700 leading-relaxed">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CARD GLOW */}
                <motion.div
                  animate={{ opacity: [0.08, 0.15, 0.08] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl bg-[#7A0C0C]/10 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE (PREMIUM FINAL SECTION) ================= */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Soft animated background */}
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-[#7A0C0C]/10 via-transparent to-transparent"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#7A0C0C] mb-4">
              Hospital Infrastructure
            </h2>
            <p className="text-slate-700 text-lg">
              Built to support critical care, advanced surgeries, and emergency
              management with modern medical infrastructure.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT – CARDS */}
            <div className="grid sm:grid-cols-2 gap-8">
              {infrastructure.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="
                  relative rounded-3xl p-6
                  bg-white/80 backdrop-blur-xl
                  border border-[#7A0C0C]/20
                  shadow-lg hover:shadow-2xl
                  transition-all
                "
                >
                  {/* ICON */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="
                    w-14 h-14 rounded-2xl
                    bg-gradient-to-br from-[#7A0C0C] to-[#5F0909]
                    flex items-center justify-center
                    text-white shadow-lg mb-4
                  "
                  >
                    <item.icon size={26} />
                  </motion.div>

                  <p className="text-3xl font-bold text-[#7A0C0C] mb-1">
                    {item.value}
                  </p>
                  <p className="text-slate-800 font-medium">{item.label}</p>

                  {/* Glow */}
                  <motion.span
                    animate={{ opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute inset-0 rounded-3xl bg-[#7A0C0C]/10 pointer-events-none"
                  />
                </motion.div>
              ))}
            </div>

            {/* RIGHT – AUTO SCROLL IMAGES */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <motion.div
                className="flex gap-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[
                  "https://i.pinimg.com/736x/53/9b/ad/539badc994132cb0f2a707ddb0a2e46d.jpg",
                  "https://i.pinimg.com/736x/e9/e7/d4/e9e7d44d0893853874a617b8e7d359ef.jpg",
                  "https://i.pinimg.com/736x/d2/8f/6a/d28f6a624acb8d32d98d4a0516025856.jpg",
                  "https://i.pinimg.com/736x/17/a8/55/17a85519af1fa01d573633b271e0fa7a.jpg",
                  "https://i.pinimg.com/736x/2f/b4/09/2fb409ea34572ccf9448fe15448d190a.jpg",
                ]
                  .concat([
                    "https://i.pinimg.com/736x/53/9b/ad/539badc994132cb0f2a707ddb0a2e46d.jpg",
                    "https://i.pinimg.com/736x/e5/2f/c4/e52fc4488d875b9d8a5978ede9845671.jpg",
                    "https://i.pinimg.com/736x/d2/8f/6a/d28f6a624acb8d32d98d4a0516025856.jpg",
                    "https://i.pinimg.com/736x/17/a8/55/17a85519af1fa01d573633b271e0fa7a.jpg",
                    "https://i.pinimg.com/736x/2f/b4/09/2fb409ea34572ccf9448fe15448d190a.jpg",
                  ])
                  .map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Hospital Infrastructure"
                      className="w-64 h-40 object-cover rounded-xl"
                    />
                  ))}
              </motion.div>

              {/* <span className="absolute top-6 left-6 bg-[#7A0C0C] text-white px-4 py-1 rounded-full text-sm font-medium">
                Advanced Medical Infrastructure
              </span> */}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-[#7A0C0C] to-[#a73737] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Trusted Infrastructure. Advanced Care.
        </h2>
        <p className="opacity-90 mb-8">
          Contact City Multispeciality Hospital for advanced treatment and
          emergency care.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-10 py-4 rounded-full bg-white text-[#7A0C0C] font-semibold shadow-xl"
        >
          Contact Hospital
        </Link>
      </section>
    </>
  );
}
