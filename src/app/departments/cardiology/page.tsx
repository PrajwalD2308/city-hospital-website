"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Clock,
  PhoneCall,
  Ambulance,
  CheckCircle,
} from "lucide-react";

/* ================= DOCTOR DATA ================= */
const doctors = [
  {
    name: "Dr. Pankaj M. Bagade",
    designation: "Consultant Physician & Cardiac Care Specialist",
    whatsapp: "919876543210",
  },
];

export default function CardiologyPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-r from-[#4b1d3f] to-[#7A0C0C] text-white overflow-hidden">
        {/* Mobile Floating Icon */}
        <motion.div
          className="absolute top-16 right-6 text-white/10 lg:hidden"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <HeartPulse size={90} />
        </motion.div>

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Cardiology & Cardiac Care
          </motion.h1>

          <p className="text-base sm:text-lg opacity-90 max-w-3xl">
            Advanced heart care with modern diagnostics, expert physicians and
            24×7 emergency support.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-[#7A0C0C] mb-6">
              Comprehensive Heart Care
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6 text-sm lg:text-base">
              The Department of Cardiology at City Multispecialty Hospital
              delivers complete cardiac care — from early diagnosis to advanced
              interventional procedures. Our focus is on timely treatment,
              precision diagnosis, and compassionate patient care.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm lg:text-base">
              Equipped with modern technology and supported by experienced
              cardiac specialists, we manage heart diseases, hypertension,
              diabetes-related cardiac conditions, and cardiac emergencies with
              excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74"
              alt="Cardiology Department"
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-20 lg:py-24 bg-slate-50 overflow-hidden">
        {/* Mobile Soft Glow Background */}
        <motion.div
          className="absolute inset-0 lg:hidden"
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            background:
              "linear-gradient(120deg, rgba(122,12,12,0.08), transparent)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#7A0C0C] mb-12 lg:mb-16">
            Services Offered
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Preventive & Interventional Cardiology",
              "ECG & 2D Echocardiography",
              "Angiography & Angioplasty",
              "Hypertension & Heart Failure Clinic",
              "Diabetes-related Cardiac Care",
              "Cardiac ICU & Emergency Services",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
                  bg-white rounded-2xl p-6 lg:p-8
                  shadow-md border border-[#7A0C0C]/10
                  backdrop-blur-xl
                "
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <CheckCircle className="text-[#7A0C0C] mb-4" />
                </motion.div>
                <h4 className="font-semibold text-slate-800 text-sm lg:text-base">
                  {service}
                </h4>
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
                  <HeartPulse
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
          Cardiac Emergency? We Are Ready 24×7
        </h2>
        <p className="opacity-90 mb-8 text-sm lg:text-base">
          Immediate response for heart attacks and cardiac emergencies.
        </p>
        <a
          href="tel:+919876543210"
          className="inline-flex items-center gap-3 bg-white text-[#7A0C0C] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold shadow-lg"
        >
          <PhoneCall /> Call Emergency
        </a>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-16 bg-white text-center">
        <Link
          href="/contact"
          className="inline-block bg-[#7A0C0C] text-white px-8 py-3 lg:px-10 lg:py-4 rounded-full font-semibold shadow-lg hover:bg-[#5f0909]"
        >
          Contact Cardiology Department
        </Link>
      </section>
    </>
  );
}
