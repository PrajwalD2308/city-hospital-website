"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useMotionValue } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ================= GALLERY DATA ================= */
const galleryImages = [
  // ================= HOSPITAL =================

  {
    id: 1,
    category: "Hospital",
    title: "Hostpital Building",
    image: "/images/main_gallery/hospital.png",
  },
  {
    id: 2,
    category: "Hospital",
    title: "Hospital Banner",
    image: "/images/main_gallery/bagde_banner.png",
  },
  {
    id: 3,
    category: "Hospital",
    title: "General Ward",
    image: "/images/main_gallery/general_ward.png",
  },
  {
    id: 4,
    category: "Hospital",
    title: "Special Room",
    image: "/images/main_gallery/special_room.png",
  },

  {
    id: 5,
    category: "Hospital",
    title: "Hospital Ambulance",
    image: "/images/main_gallery/ambulance.png",
  },
  {
    id: 6,
    category: "Hospital",
    title: "Emergency Ambulance",
    image: "/images/main_gallery/ambulance_2.png",
  },
  {
    id: 7,
    category: "Hospital",
    title: "Medical Store",
    image: "/images/main_gallery/medical_store.png",
  },

  // ================= DOCTORS =================
  {
    id: 8,
    category: "Doctors",
    title: "Consultant Doctor",
    image: "/images/main_gallery/consultant_1.png",
  },
  {
    id: 9,
    category: "Doctors",
    title: "Consultant Team",
    image: "/images/main_gallery/consultant_2.png",
  },
  {
    id: 10,
    category: "Doctors",
    title: "Senior Consultant",
    image: "/images/main_gallery/consultant_3.png",
  },
  {
    id: 11,
    category: "Doctors",
    title: "Main Consultant",
    image: "/images/main_gallery/consultant_main.png",
  },
  {
    id: 12,
    category: "Doctors",
    title: "Medical Staff",
    image: "/images/main_gallery/staff_1.png",
  },

  // ================= CATH LAB =================
  {
    id: 13,
    category: "CathLab",
    title: "Cath Lab Facility 1",
    image: "/images/main_gallery/cathlab_1.png",
  },
  {
    id: 14,
    category: "CathLab",
    title: "Cath Lab Facility 2",
    image: "/images/main_gallery/cathlab_2.png",
  },
  {
    id: 15,
    category: "CathLab",
    title: "Cath Lab Equipment",
    image: "/images/main_gallery/cath_lab_3.png",
  },
  {
    id: 16,
    category: "CathLab",
    title: "Advanced Cath Lab",
    image: "/images/main_gallery/cathlab_4.png",
  },
  {
    id: 17,
    category: "CathLab",
    title: "Cath Lab Procedure Room",
    image: "/images/main_gallery/cath_lab_5.png",
  },

  // ================= ICU =================
  {
    id: 18,
    category: "ICU",
    title: "ICU Room 1",
    image: "/images/main_gallery/icu_1.png",
  },
  {
    id: 19,
    category: "ICU",
    title: "ICU Room 2",
    image: "/images/main_gallery/icu_2.png",
  },
  {
    id: 20,
    category: "ICU",
    title: "ICU Room 3",
    image: "/images/main_gallery/icu_3.png",
  },
  {
    id: 21,
    category: "ICU",
    title: "ICU Staff",
    image: "/images/main_gallery/icu_staff.png",
  },

  // ================= OT =================
  {
    id: 22,
    category: "OT",
    title: "Operation Theatre 1",
    image: "/images/main_gallery/OT_1.png",
  },
  {
    id: 23,
    category: "OT",
    title: "Operation Theatre 2",
    image: "/images/main_gallery/OT_2.png",
  },
  {
    id: 24,
    category: "OT",
    title: "Operation Theatre 3",
    image: "/images/main_gallery/OT_3.png",
  },

  // ================= INFRASTRUCTURE =================
  {
    id: 25,
    category: "Infrastructure",
    title: "Reception Area",
    image: "/images/main_gallery/reception.png",
  },
  {
    id: 26,
    category: "Infrastructure",
    title: "Seating Area 1",
    image: "/images/main_gallery/seating_area_1.png",
  },
  {
    id: 27,
    category: "Infrastructure",
    title: "Seating Area 2",
    image: "/images/main_gallery/seating_area_2.png",
  },
  {
    id: 28,
    category: "Infrastructure",
    title: "Wheel Chair Service",
    image: "/images/main_gallery/wheelchair.png",
  },

  {
    id: 29,
    category: "Infrastructure",
    title: "Two Bed Room",
    image: "/images/main_gallery/two_bed_room.png",
  },
  {
    id: 30,
    category: "Infrastructure",
    title: "Three Bed Room",
    image: "/images/main_gallery/three_bed_room.png",
  },
  {
    id: 31,
    category: "Infrastructure",
    title: "Stretcher Services",
    image: "/images/main_gallery/stretcher.png",
  },
  {
    id: 32,
    category: "Infrastructure",
    title: "ECG Room",
    image: "/images/main_gallery/ecg_room.png",
  },
  {
    id: 33,
    category: "Infrastructure",
    title: "Sonography Room",
    image: "/images/main_gallery/sonography.png",
  },
  {
    id: 34,
    category: "Infrastructure",
    title: "X-Ray Machine",
    image: "/images/main_gallery/xraymachine.png",
  },
];

const categories = [
  "All",
  "Hospital",
  "Doctors",
  "CathLab",
  "ICU",
  "OT",
  "Infrastructure",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);
  const [showFilter, setShowFilter] = useState(true);

  const [visibleCount, setVisibleCount] = useState(8);
  const yFast = useMotionValue(0);
  const ySlow = useMotionValue(0);
  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 150) {
        // scrolling down
        setShowFilter(false);
      } else {
        // scrolling up
        setShowFilter(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-[#7A0C0C] via-[#8f1d1d] to-[#a73737] text-white overflow-hidden">
        {/* Decorative glow shapes */}
        <motion.div
          style={{ y: ySlow }}
          className="absolute -top-32 -left-32 w-[380px] h-[380px] md:-top-40 md:-left-40 md:w-[520px] md:h-[520px] bg-white/10 rounded-full blur-3xl"
        />

        <motion.div
          style={{ y: yFast }}
          className="absolute bottom-0 -right-32 w-[380px] h-[380px] md:-right-40 md:w-[520px] md:h-[520px] bg-black/20 rounded-full blur-3xl"
        />

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent_60%)] opacity-10" />

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
            <span className="text-white font-semibold">Gallery</span>
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
            Hospital{" "}
            <span className="text-red-300 block sm:inline">Gallery</span>
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
            Explore our hospital infrastructure, facilities, doctors, and
            patient care environment.
          </motion.p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <motion.section
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: showFilter ? 0 : -80, opacity: showFilter ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="
    sticky top-[72px] z-30 bg-white shadow-sm
    py-3 md:py-6
  "
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div
            className="
      flex gap-2 md:gap-3 
      overflow-x-auto no-scrollbar 
      justify-start md:justify-center
      snap-x snap-mandatory
    "
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
            snap-start shrink-0
            px-4 md:px-6 py-2
            text-sm md:text-base
            rounded-full font-medium whitespace-nowrap transition
            ${
              activeCategory === cat
                ? "bg-[#7A0C0C] text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }
          `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= GALLERY GRID ================= */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(img)}
                className="relative cursor-pointer overflow-hidden rounded-3xl shadow-xl group bg-white"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                  <div className="p-5">
                    <h3 className="text-white font-semibold">{img.title}</h3>
                    <p className="text-white/70 text-sm">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= MOBILE GRID ================= */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {filteredImages.slice(0, visibleCount).map((img) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(img)}
                className="relative cursor-pointer overflow-hidden rounded-2xl shadow-md group"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-40 object-cover transition duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* ================= LOAD MORE (Mobile Only) ================= */}
          {visibleCount < filteredImages.length && (
            <div className="mt-8 flex justify-center md:hidden">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-2 rounded-full bg-[#7A0C0C] text-white text-sm font-medium shadow-md hover:scale-105 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= VIDEO GALLERY ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#7A0C0C]">
            Video Gallery
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Experience our hospital facilities and care through videos.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/video/video_3.mp4",
              "/video/video_1.mp4",
              "/video/video_2.mp4",
            ].map((src, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden shadow-xl aspect-video group"
              >
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Optional subtle dark overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIRTUAL TOUR CTA ================= */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-[#7A0C0C] to-[#a73737] text-white text-center px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
          Take a Virtual Tour of Our Hospital
        </h2>

        <p className="mt-4 max-w-2xl mx-auto opacity-90 text-sm md:text-base">
          Explore our advanced infrastructure, operation theatres, ICU, and
          patient care areas.
        </p>

        <a
          href="https://www.youtube.com/watch?v=oyYT0Hz6pB8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 md:px-10 py-3 md:py-4 rounded-full 
    bg-white text-[#7A0C0C] font-semibold shadow-xl 
    hover:scale-105 transition duration-300 text-sm md:text-base"
        >
          Start Virtual Tour
        </a>
      </section>

      {/* ================= FEATURED GALLERY SLIDER ================= */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#7A0C0C]">
            Featured Moments
          </h2>

          <div className="relative mt-16 overflow-hidden">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 35,
                repeat: Infinity,
              }}
              whileHover={{ animationPlayState: "paused" }}
              drag="x"
              dragConstraints={{ left: -300, right: 0 }}
            >
              {[
                "/images/main_gallery/reception.png",
                "/images/main_gallery/seating_area_1.png",
                "/images/main_gallery/ambulance.png",
                "/images/main_gallery/general_ward.png",
                "/images/main_gallery/icu_1.png",
                "/images/main_gallery/cathlab_2.png",
                "/images/main_gallery/OT_2.png",
              ]
                .concat([
                  "/images/main_gallery/reception.png",
                  "/images/main_gallery/seating_area_1.png",
                  "/images/main_gallery/ambulance.png",
                  "/images/main_gallery/general_ward.png",
                  "/images/main_gallery/icu_1.png",
                  "/images/main_gallery/cathlab_2.png",
                  "/images/main_gallery/OT_2.png",
                ]) // duplicate for seamless loop
                .map((img, i) => (
                  <div
                    key={i}
                    className="relative h-64 w-[420px] flex-shrink-0 group"
                  >
                    <img
                      src={img}
                      alt="Hospital Moment"
                      className="h-full w-full object-cover rounded-3xl shadow-xl 
                transition-all duration-500 
                group-hover:scale-105"
                    />

                    {/* Center Focus Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-black/20 group-hover:bg-black/0 transition duration-500" />
                  </div>
                ))}
            </motion.div>

            {/* Left Fade */}
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ================= BEFORE / AFTER ================= */}
      <section className="py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#7A0C0C]">
            Treatment Outcomes
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Real recovery journeys highlighting expert medical care and
            successful patient outcomes.
          </p>

          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:max-w-5xl w-full">
              {[
                {
                  title: "Critical ICU Recovery",
                  desc: "Patient admitted in critical condition and successfully stabilized with intensive monitoring and specialist care.",
                  before: "/images/main_gallery/before_icu.png",
                  after: "/images/main_gallery/after_icu.png",
                },
                {
                  title: "Orthopedic Fracture Recovery",
                  desc: "Severe leg fracture treated with expert orthopedic intervention followed by full mobility restoration.",
                  before: "/images/main_gallery/patient_with_plaster.png",
                  after: "/images/main_gallery/patient_without_plaster.png",
                },
              ].map((caseItem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 text-left group"
                >
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#7A0C0C]">
                    {caseItem.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {caseItem.desc}
                  </p>

                  {/* Image Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {/* Before */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full z-10">
                        Before
                      </span>
                      <img
                        src={caseItem.before}
                        className="rounded-2xl object-cover w-full h-64 transition duration-500 group-hover:scale-105"
                        alt="Before Treatment"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
                    </div>

                    {/* After */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full z-10">
                        After
                      </span>
                      <img
                        src={caseItem.after}
                        className="rounded-2xl object-cover w-full h-64 transition duration-500 group-hover:scale-105"
                        alt="After Treatment"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white"
              >
                <X size={28} />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
