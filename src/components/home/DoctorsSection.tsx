"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  MessageCircle,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

/* ================= DOCTOR DATA ================= */

const doctors = [
  {
    name: "Dr. Pankaj M. Bagade",
    speciality: "Physician & Cardiac Care Specialist",
    education: "MBBS, MD (Medicine)",
    image: "/images/doctors/bagdee.png",
    about:
      "Director of City Multispeciality Hospital. Specialist in cardiac care, diabetes, hypertension, ICU management and emergency medicine.",
    whatsapp: "917709912176",
  },
  {
    name: "Dr. Vaishali Dhande",
    speciality: "Brain & Spine Specialist",
    education: "MBBS, MS (General Surgery), DNB (Neurosurgery)",
    image: "/images/doctors/vaishali.png",
    about:
      "Expert in brain tumour surgery, stroke management, spinal disorders and complex neuro procedures.",
    whatsapp: "917709912176",
  },
  {
    name: "Dr. Ankush Wanakhade",
    speciality: "Consultant Neurosurgeon",
    education: "MBBS, MS, MCh (Neurosurgery)",
    image: "/images/doctors/ankush.png",
    about:
      "Experienced neurosurgeon handling complex brain and spine surgeries with advanced microsurgical techniques.",
    whatsapp: "917709912176",
  },
];

export default function DoctorsSection() {
  const [activeDoctor, setActiveDoctor] = useState<any>(null);

  return (
    <>
      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        {/* 🔥 MOBILE ONLY Animated Maroon Background */}
        <div className="absolute inset-0 lg:hidden">
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-[#7A0C0C]/5 via-[#5a0a0a]/5 to-[#7A0C0C]/5 bg-[length:200%_200%]"
          />
        </div>

        {/* 🩺 Floating Icons (Mobile Only) */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-24 left-6 text-[#7A0C0C]/10 lg:hidden"
        >
          <HeartPulse size={70} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-24 right-6 text-[#7A0C0C]/10 lg:hidden"
        >
          <Stethoscope size={60} />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          {/* SECTION HEADER (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Expert Doctors
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Highly qualified specialists delivering advanced, ethical and
              patient-centered healthcare.
            </p>
          </motion.div>

          {/* DOCTOR CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveDoctor(doctor)}
                className="relative group cursor-pointer"
              >
                {/* 🔥 MOBILE Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl lg:hidden">
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7A0C0C] via-red-400 to-[#7A0C0C] opacity-30 blur-xl bg-[length:200%_200%]"
                  />
                </div>

                {/* MAIN CARD (Desktop unchanged) */}
                <div
                  className="
                  relative bg-white rounded-3xl
                  shadow-lg hover:shadow-2xl
                  transition overflow-hidden
                  border border-slate-100
                  lg:shadow-lg
                  lg:border-slate-100
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 text-center space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {doctor.name}
                    </h3>

                    <p className="text-sm font-medium text-[#7A0C0C]">
                      {doctor.speciality}
                    </p>

                    <p className="text-xs text-slate-500 font-medium">
                      {doctor.education}
                    </p>

                    <div className="w-12 h-[3px] bg-[#7A0C0C] mx-auto mt-3 rounded-full" />

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#7A0C0C] mt-4">
                      View Profile <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
                         bg-[#7A0C0C] text-white font-medium
                         hover:bg-[#5F0909] transition shadow-lg"
            >
              View All Doctors
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeDoctor && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
          relative bg-white 
          w-full max-w-md 
          lg:max-w-4xl
          rounded-3xl overflow-hidden shadow-2xl
        "
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDoctor(null)}
                className="absolute top-4 right-4 z-20 text-slate-600 hover:text-black"
              >
                <X />
              </button>

              {/* ===== MOBILE LAYOUT (unchanged) ===== */}
              <div className="lg:hidden">
                <div className="relative h-72">
                  <Image
                    src={activeDoctor.image}
                    alt={activeDoctor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center space-y-4">
                  <h3 className="text-2xl font-bold text-[#7A0C0C]">
                    {activeDoctor.name}
                  </h3>

                  <p className="font-medium text-slate-700">
                    {activeDoctor.speciality}
                  </p>

                  <p className="text-sm font-semibold text-slate-500">
                    {activeDoctor.education}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeDoctor.about}
                  </p>

                  <a
                    href={`https://wa.me/${activeDoctor.whatsapp}?text=${encodeURIComponent(
                      `Hello ${activeDoctor.name},

I would like to book an appointment at City Multispeciality Hospital.

Kindly let me know your available time slots.

Thank you.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full
                bg-green-500 hover:bg-green-600
                text-white py-3 rounded-xl font-semibold transition"
                  >
                    <MessageCircle size={18} /> Book via WhatsApp
                  </a>
                </div>
              </div>

              {/* ===== DESKTOP PREMIUM LAYOUT ===== */}
              <div className="hidden lg:grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative bg-slate-50 flex items-center justify-center p-8">
                  <div className="relative w-64 h-80">
                    <Image
                      src={activeDoctor.image}
                      alt={activeDoctor.name}
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-10 flex flex-col justify-center space-y-5">
                  <h3 className="text-3xl font-bold text-[#7A0C0C]">
                    {activeDoctor.name}
                  </h3>

                  <p className="text-lg font-medium text-slate-700">
                    {activeDoctor.speciality}
                  </p>

                  <p className="text-sm font-semibold text-slate-500">
                    {activeDoctor.education}
                  </p>

                  <div className="w-16 h-[3px] bg-[#7A0C0C] rounded-full" />

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeDoctor.about}
                  </p>

                  <a
                    href={`https://wa.me/${activeDoctor.whatsapp}?text=${encodeURIComponent(
                      `Hello ${activeDoctor.name},

I would like to book an appointment at City Multispeciality Hospital.

Kindly let me know your available time slots.

Thank you.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2
                bg-green-500 hover:bg-green-600
                text-white py-3 rounded-xl font-semibold transition shadow-lg"
                  >
                    <MessageCircle size={18} /> Book via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
