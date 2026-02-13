"use client";

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

/* ================= DEPARTMENTS DATA ================= */
const departments = [
  {
    title: "Cardiology & Cardiac Care",
    slug: "cardiology",
    icon: "❤️",
    core: true,
    points: [
      "Preventive & Interventional Cardiology",
      "ECG, 2D Echo & Advanced Cath Lab",
      "Angiography & Angioplasty",
      "Cardiac ICU & Emergency Care",
    ],
  },
  {
    title: "General Medicine & Critical Care",
    slug: "medicine",
    icon: "💊",
    points: [
      "Superspecialist Medical & Critical Care",
      "Diabetes, BP & Thyroid Disorders",
      "Fever, Dengue, Malaria & Viral & Infectious Diseases",
      "24×7 Emergency & Critical Care Services",
    ],
  },
  {
    title: "Neurology & Neurosurgery",
    slug: "neurology",
    icon: "🧠",
    core: true,
    points: [
      "Pediatric Neurosurgery & Neuro ICU",
      "Brain & Spine Surgery",
      "Brain Tumour, Paralysis & Stroke Management",
      "Brain Haemorrhage & Head Injury Care",
    ],
  },
  {
    title: "Orthopaedics & Joint Replacement",
    slug: "orthopaedics",
    icon: "🦴",
    points: [
      "Knee & Hip Replacement Surgery",
      "Fracture Fixation & Trauma Care",
      "Arthroscopy & Sports Injury Treatment",
      "Back Pain, Slip Disc & Arthritis Care",
    ],
  },

  {
    title: "Psychiatry & Mental Health",
    slug: "psychiatry",
    icon: "🧩",
    points: [
      "Depression, Anxiety & Stress Management",
      "Addiction, OCD & Sleep Disorders",
      "Child & Adolescent Mental Health Care",
      "Confidential Counselling & Therapy",
    ],
  },
  {
    title: "Emergency & Trauma Care",
    slug: "emergency",
    icon: "🚑",
    points: [
      "24×7 Emergency Services",
      "Accident & Trauma Management",
      "Cardiac & Stroke Emergency Response",
      "Critical Care & Life Support",
    ],
  },
];

const facilities = [
  {
    title: "Advanced ICU & Ventilator Support",
    icon: "🫁",
  },
  {
    title: "Cath Lab for Angiography & Angioplasty",
    icon: "❤️",
  },
  {
    title: "Dedicated Neuro ICU",
    icon: "🧠",
  },
  {
    title: "Modular Operation Theatres",
    icon: "🏥",
  },
  {
    title: "Emergency & Trauma Unit",
    icon: "🚑",
  },
  {
    title: "In-house Diagnostics (ECG, 2D Echo, Sonography)",
    icon: "🧪",
  },
];

/* ================= COMPONENT ================= */
export default function DepartmentsPage() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>
          Hospital Departments in Amravati | City Multispeciality Hospital
        </title>

        <meta
          name="description"
          content="Explore advanced medical departments at City Multispeciality Hospital, Amravati including Cardiology, Neurology, Orthopaedics, Psychiatry, Emergency & Critical Care."
        />

        <meta
          name="keywords"
          content="Hospital departments Amravati, Cardiology Amravati, Neurology Amravati, Orthopaedics hospital Amravati, Emergency hospital Amravati, Best multispeciality hospital Amravati"
        />

        <meta
          property="og:title"
          content="Hospital Departments in Amravati | City Multispeciality Hospital"
        />

        <meta
          property="og:description"
          content="Discover expert medical departments with advanced technology and compassionate care at City Multispeciality Hospital, Amravati."
        />

        <meta
          property="og:url"
          content="https://city-multispeciality-hospital-websi.vercel.app/departments"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://city-multispeciality-hospital-websi.vercel.app/departments"
        />
      </Head>

      {/* ================= HERO ================= */}

      <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#7A0C0C] via-[#8f1d1d] to-[#a73737] text-white overflow-hidden">
        {/* Decorative glow shapes */}
        <motion.div
          style={{ y: 0 }} // Replace '0' with the desired value or animation logic
          className="absolute -top-32 -left-32 w-[380px] h-[380px] md:-top-40 md:-left-40 md:w-[520px] md:h-[520px] bg-white/10 rounded-full blur-3xl"
        />

        <motion.div
          style={{ y: 0 }} // Replace '0' with the desired value or animation logic
          className="absolute bottom-0 -right-32 w-[380px] h-[380px] md:-right-40 md:w-[520px] md:h-[520px] bg-black/20 rounded-full blur-3xl"
        />

        {/* Subtle texture overlay */}
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
            <span className="text-white font-semibold">Departments</span>
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
            Our{" "}
            <span className="text-red-300 block sm:inline">Departments</span>
          </motion.h1>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
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
            Comprehensive multispeciality departments delivering expert medical
            care with compassion and advanced technology.
          </motion.p>
        </div>
      </section>

      {/* ================= DEPARTMENTS GRID ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {departments.map((dept, i) => (
              <Link
                key={dept.slug}
                href={`/departments/${dept.slug}`}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{
                    y: -12,
                    scale: dept.core ? 1.05 : 1.02,
                  }}
                  className={`
                    relative rounded-3xl overflow-hidden
                    border cursor-pointer
                    ${
                      dept.core
                        ? "bg-gradient-to-br from-white via-[#fff5f5] to-[#f2d6d6] border-[#7A0C0C]/40"
                        : "bg-gradient-to-br from-white via-white to-[#f7eaea] border-[#7A0C0C]/20"
                    }
                    shadow-lg hover:shadow-2xl transition-all
                  `}
                >
                  {/* ===== Core Department Badge ===== */}
                  {dept.core && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="
                        absolute top-6 left-6
                        bg-[#7A0C0C] text-white
                        text-xs font-semibold
                        px-3 py-1 rounded-full
                        tracking-wide shadow-md
                      "
                    >
                      Core Department
                    </motion.div>
                  )}

                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute top-6 right-6 text-5xl opacity-30"
                  >
                    {dept.icon}
                  </motion.div>

                  <div className="p-10">
                    {/* Icon */}
                    <div className="w-20 h-20 mb-6 rounded-full bg-[#7A0C0C]/10 flex items-center justify-center text-4xl">
                      {dept.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#7A0C0C] mb-6 uppercase tracking-wide group-hover:underline">
                      {dept.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-[3px] bg-[#7A0C0C] mb-6 rounded-full" />

                    {/* Points */}
                    <ul className="space-y-4">
                      {dept.points.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-700">
                          <CheckCircle
                            size={20}
                            className="text-[#7A0C0C] mt-1"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {/* <div className="mt-8 text-sm font-semibold text-[#7A0C0C]">
                      View Department →
                    </div> */}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACILITIES & INFRASTRUCTURE ================= */}
      <section className="py-24 bg-white ">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-semibold tracking-wider text-[#7A0C0C] uppercase">
              Infrastructure & Technology
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3">
              Advanced Facilities & Infrastructure
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Our hospital is equipped with modern infrastructure and advanced
              medical technology to support accurate diagnosis, safe procedures,
              and comprehensive critical care.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="
            group rounded-2xl p-8
            border border-slate-200
            bg-gradient-to-br from-white to-slate-50
            shadow-sm hover:shadow-xl
            transition-all
          "
              >
                {/* Icon */}
                <div
                  className="
            w-16 h-16 mb-6
            flex items-center justify-center
            rounded-xl
            bg-[#7A0C0C]/10
            text-3xl
            opacity-90
          "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-slate-900 leading-snug">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= EMERGENCY CTA ================= */}
      <section className="relative py-20 bg-gradient-to-r from-[#7A0C0C] to-[#4b1d3f] text-white overflow-hidden">
        {/* Soft pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase text-white/80">
                24×7 Emergency Services
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Emergency & Critical Care When Every Second Matters
              </h2>

              <p className="text-white/90 max-w-xl mb-8 leading-relaxed">
                Our emergency department is fully equipped to handle accidents,
                cardiac emergencies, strokes, trauma, and critical medical
                conditions with immediate response and expert care.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:07212571590"
                  className="
              inline-flex items-center justify-center
              px-8 py-4 rounded-xl
              bg-white text-[#7A0C0C]
              font-semibold
              shadow-lg hover:shadow-2xl
              transition
            "
                >
                  📞 Call Emergency
                </a>

                <Link
                  href="/departments/emergency"
                  className="
              inline-flex items-center justify-center
              px-8 py-4 rounded-xl
              border border-white/40
              text-white font-semibold
              hover:bg-white/10
              transition
            "
                >
                  🚑 Emergency Services
                </Link>
              </div>
            </div>

            {/* RIGHT HIGHLIGHTS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "24×7 Emergency & Trauma Care",
                "Advanced ICU & Life Support",
                "Cardiac & Stroke Emergency Response",
                "Experienced Doctors & Rapid Action Team",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="
              bg-white/10 backdrop-blur
              border border-white/20
              rounded-2xl p-6
              flex items-start gap-4
            "
                >
                  <span className="text-xl">✔</span>
                  <span className="text-sm font-medium leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Breadcrumb */

{
  /* <div className="mb-6 text-sm text-white/80">
  <Link href="/" className="hover:text-white font-medium">
    Home
  </Link>
  <span className="mx-2">/</span>
  <span className="text-white font-semibold">Departments</span>
</div> */
}
