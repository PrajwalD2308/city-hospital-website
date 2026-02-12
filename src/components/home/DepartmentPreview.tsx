"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Stethoscope } from "lucide-react";

const departments = [
  {
    title: "Cardiac & Critical Care",
    slug: "/departments/cardiology",
    image: "/images/gallery/cardio_department.jpg",
    description:
      "Comprehensive heart care including ECG, 2D Echo, angiography, angioplasty, ICU care, and treatment for heart disease, BP, and diabetes.",
  },
  {
    title: "Brain & Spine Care",
    slug: "/departments/neurology",
    image: "/images/gallery/neuro_department.jpg",
    description:
      "Advanced treatment for brain tumours, stroke, spine disorders, paralysis, head injuries, migraine, dizziness, and pediatric neurological conditions.",
  },
  {
    title: "Emergency & Trauma Care",
    slug: "/departments/emergency",
    image: "/images/gallery/emergency_department.jpg",
    description:
      "24×7 emergency services for accidents, trauma, critical conditions, stroke, cardiac emergencies, and life-saving interventions.",
  },
];

export default function DepartmentsPreview() {
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePause = () => {
    setIsPaused(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000); // Restart after 6 seconds
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* 🔥 Animated Maroon Gradient (Mobile Only) */}
      <div className="absolute inset-0 lg:hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-[#7A0C0C] via-[#5a0a0a] to-[#7A0C0C] bg-[length:200%_200%] opacity-5"
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-6 text-[#7A0C0C]/10 lg:hidden"
      >
        <HeartPulse size={80} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-24 right-6 text-[#7A0C0C]/10 lg:hidden"
      >
        <Stethoscope size={70} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Medical Departments
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
            Specialized departments led by experienced doctors, delivering
            advanced medical care with precision, compassion, and trust.
          </p>
        </motion.div>

        {/* ================= DESKTOP GRID (UNCHANGED) ================= */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={dept.slug}>
                <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white border border-slate-200">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={dept.image}
                      alt={dept.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#7A0C0C] transition">
                      {dept.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {dept.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#7A0C0C]">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ================= MOBILE AUTO SLIDER ================= */}
        <div className="lg:hidden overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={!isPaused ? { x: ["0%", "-100%"] } : { x: "0%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            onTouchStart={handlePause}
            onMouseDown={handlePause}
          >
            {[...departments, ...departments].map((dept, index) => (
              <div key={index} className="min-w-[85%]">
                <Link href={dept.slug}>
                  <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#7A0C0C] via-red-500 to-[#7A0C0C]">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={dept.image}
                          alt={dept.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {dept.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">
                          {dept.description}
                        </p>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A0C0C]">
                          Learn More <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-14"
        >
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
                       bg-[#7A0C0C] text-white font-medium
                       hover:bg-[#5F0909] transition shadow-md"
          >
            View All Departments
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
