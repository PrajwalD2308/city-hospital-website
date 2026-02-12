"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

/* ================= DATA ================= */
const specializations = [
  {
    title: "Neuro & Spine Care",
    tagline: "Advanced Brain & Spine Treatment with Dedicated Neuro ICU",
    points: [
      "Brain tumor & hemorrhage surgeries",
      "Stroke & paralysis management",
      "Spine fixation (Cervical & Lumbar)",
      "Neuro-trauma & post-operative ICU care",
      "24×7 emergency neurosurgery",
    ],
    image: "/images/specialization/neurology.png",
    cta: "/appointment",
  },
  {
    title: "Cardiology & Cath Lab",
    tagline: "Life-Saving Cardiac Care When Every Second Matters",
    points: [
      "Heart attack management",
      "Angiography & Angioplasty",
      "Cath Lab facility",
      "2D Echo & ECG monitoring",
      "Dedicated Cardiac ICU",
    ],
    image: "/images/specialization/cardiology.png",
    cta: "/appointment",
  },
  {
    title: "Critical Care & ICU",
    tagline: "24×7 Intensive Care with Advanced Life Support",
    points: [
      "Ventilator-supported ICU",
      "Emergency & trauma care",
      "Trained intensivists & ICU staff",
      "Neuro ICU & Medical ICU",
      "Continuous patient monitoring",
    ],
    image: "/images/specialization/criticalcare.png",
    cta: "/appointment",
  },
  {
    title: "Orthopaedic Surgery",
    tagline: "Advanced Joint, Trauma & Spine Orthopaedic Care",
    points: [
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "Fracture & trauma surgeries",
      "Spine-related orthopaedic problems",
      "Arthroscopy & ligament repair",
    ],
    image: "/images/specialization/orthopedic.png",
    cta: "/appointment",
  },
];

export default function SpecializationSection() {
  const [active, setActive] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % specializations.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const current = specializations[active];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Our Specializations
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Advanced medical procedures and critical care services delivered
            with precision, compassion, and expertise.
          </p>
        </motion.div>

        {/* SLIDER CARD */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* IMAGE */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-black">
                <Image
                  src={current.image}
                  alt={current.title}
                  width={800}
                  height={520}
                  priority
                  className="w-full h-auto object-contain"
                />

                {/* Overlay (optional – lighter now) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                {/* Badge */}
                {/* <span className="absolute top-4 right-6 bg-[#ffffff] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Advanced Speciality
                </span> */}
              </div>

              {/* CONTENT */}
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  {current.title}
                </h3>
                <p className="text-slate-700 mb-6 text-lg">{current.tagline}</p>

                <ul className="space-y-3 mb-8">
                  {current.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#7A0C0C]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={current.cta}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl
                             bg-[#7A0C0C] text-white font-medium
                             hover:bg-[#5F0909] transition shadow-lg"
                >
                  Book Appointment <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? specializations.length - 1 : prev - 1,
                )
              }
              className="w-12 h-12 rounded-full border border-slate-300
                         flex items-center justify-center hover:bg-slate-100 transition"
            >
              <ChevronLeft />
            </button>

            {/* DOTS */}
            <div className="flex gap-2">
              {specializations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === active ? "bg-[#7A0C0C]" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActive((prev) => (prev + 1) % specializations.length)
              }
              className="w-12 h-12 rounded-full border border-slate-300
                         flex items-center justify-center hover:bg-slate-100 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
