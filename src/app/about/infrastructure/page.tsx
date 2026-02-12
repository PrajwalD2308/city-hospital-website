"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Activity,
  Ambulance,
  BedDouble,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ================= FEATURES DATA ================= */
const features = [
  {
    title: "Advanced ICU & Critical Care",
    desc: "Fully equipped ICU with advanced monitoring systems and round-the-clock specialist supervision.",
    icon: <Activity />,
  },
  {
    title: "Modern Operation Theatres",
    desc: "State-of-the-art modular OTs designed for precision, safety, and infection control.",
    icon: <Stethoscope />,
  },
  {
    title: "24×7 Emergency Services",
    desc: "Rapid-response emergency department supported by trained trauma and critical care teams.",
    icon: <Ambulance />,
  },
  {
    title: "Advanced Diagnostics",
    desc: "High-end diagnostic facilities including imaging, pathology, and laboratory services.",
    icon: <Building2 />,
  },
  {
    title: "Comfortable Patient Rooms",
    desc: "Well-designed private and general rooms focused on comfort, hygiene, and recovery.",
    icon: <BedDouble />,
  },
];

/* ================= GALLERY IMAGES ================= */
const galleryImages = [
  "/images/main_gallery/reception.png",
  "/images/main_gallery/seating_area_1.png",
  "/images/main_gallery/seating_area_2.png",
  "/images/main_gallery/general_ward.png",
  "/images/main_gallery/two_bed_room.png",
  "/images/main_gallery/three_bed_room.png",
  "/images/main_gallery/icu_1.png",
  "/images/main_gallery/icu_2.png",
  "/images/main_gallery/OT_1.png",
  "/images/main_gallery/cathlab_1.png",
  "/images/main_gallery/xraymachine.png",
  "/images/main_gallery/sonography.png",
];

export default function InfrastructurePage() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, -40]);
  const iconY = useTransform(scrollY, [0, 600], [0, -120]);

  /* ================= AUTO SLIDER STATE ================= */
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1,
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= PREMIUM HERO ================= */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=80')",
          }}
          className="absolute inset-0 bg-cover bg-center scale-110"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A0C0C]/60 via-black/50 to-black/70" />

        <motion.div
          style={{ y: iconY }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-16 right-10 text-white/10"
        >
          <Building2 size={160} />
        </motion.div>

        <div className="relative z-10 max-w-6xl px-6 text-white">
          <div className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white font-medium transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold">Infrastructure</span>
          </div>
          <p className="uppercase tracking-widest text-sm text-red-300 mb-4">
            World-Class Facilities
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl">
            Designed to deliver safety, comfort, and advanced medical care under
            one roof.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built for Excellence in Healthcare
          </h2>
          <p className="text-slate-700 max-w-4xl mx-auto text-lg leading-relaxed">
            City Multispeciality Hospital & Critical Care Centre is built with
            modern infrastructure, advanced technology, and patient-focused
            design to ensure high standards of safety, efficiency, and comfort.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border border-slate-100"
              >
                <div className="w-14 h-14 rounded-full bg-[#7A0C0C] text-white flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UPDATED AUTO SLIDING GALLERY ================= */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Infrastructure Gallery
          </h2>

          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-xl">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentIndex === index ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={src}
                  alt="Hospital infrastructure"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 bg-[#7A0C0C] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Advanced Healthcare Infrastructure
          </h3>
          <p className="text-lg text-slate-200 mb-8">
            Designed to support excellence in diagnosis, treatment, and patient
            recovery.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#7A0C0C] px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
