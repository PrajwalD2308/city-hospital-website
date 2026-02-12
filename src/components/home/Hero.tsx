"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Phone } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* ================= SLIDES DATA ================= */

const slides = [
  {
    image: "/images/hero_icu.png",
    title: "Advanced Multispeciality & ICU Care & Critical Care",
    highlight: "Where Expertise Meets Compassion",
    desc: "Comprehensive critical care with dedicated Cardio and Neuro ICU, modern infrastructure, and 24×7 specialist support.",
    button: "About Hospital",
  },
  {
    image: "/images/hero_emergency.png",
    title: "24×7 Emergency & Trauma Services",
    highlight: "Every Second Counts",
    desc: "Immediate response for accidents, cardiac emergencies, strokes, and critical conditions — day and night.",
    button: "Emergency Care",
  },
  {
    image: "/images/hero_surgery.png",
    title: "Advanced Surgery & Specialist Care",
    highlight: "Neuro • Cardiac • Orthopedic",
    desc: "Expert surgeons, modern operation theatres, Cath Lab, and comprehensive post-operative ICU care.",
    button: "Our Services",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ================= AUTOPLAY ================= */
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  /* ================= TEXT ANIMATION ================= */
  useEffect(() => {
    gsap.fromTo(
      ".slide-anim",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
    );
  }, [active]);

  return (
    <section
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      className="relative h-[90vh] min-h-[680px] overflow-hidden"
    >
      {/* ================= BACKGROUND SLIDER ================= */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 transition-all duration-[1200ms]
              ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            `}
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ================= FLOATING ICONS (UNCHANGED) ================= */}
      <img
        src="https://rimsamravati.com/assets/images/heart.png"
        className="absolute top-32 left-20 w-24 opacity-60 drop-shadow-[0_0_25px_rgba(255,80,80,0.6)] float-slow hidden lg:block pointer-events-none"
        alt=""
      />
      <img
        src="https://rimsamravati.com/assets/images/med.png"
        className="absolute bottom-32 left-40 w-20 opacity-55 drop-shadow-[0_0_25px_rgba(0,180,255,0.6)] float-medium hidden lg:block pointer-events-none"
        alt=""
      />
      <img
        src="https://rimsamravati.com/assets/images/heart.png"
        className="absolute top-32 right-20 w-24 opacity-60 drop-shadow-[0_0_25px_rgba(255,80,80,0.6)] float-slow hidden lg:block pointer-events-none"
        alt=""
      />
      <img
        src="https://rimsamravati.com/assets/images/med.png"
        className="absolute bottom-32 right-40 w-20 opacity-55 drop-shadow-[0_0_25px_rgba(0,180,255,0.6)] float-medium hidden lg:block pointer-events-none"
        alt=""
      />

      {/* ================= CONTENT ================= */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl slide-anim">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {slides[active].title} <br />
            <span className="text-[#0a9dca]">{slides[active].highlight}</span>
          </h1>

          <p className="text-white/90 text-lg mb-8">{slides[active].desc}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/appointment"
              className="px-7 py-3 rounded-xl bg-[#7A0C0C] text-white font-medium hover:bg-[#5F0909] transition"
            >
              Book Appointment
            </a>

            <a
              href="tel:+918055454444"
              className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-white/40 text-white hover:bg-white/10 transition"
            >
              <Phone size={18} /> Call Emergency
            </a>
          </div>
        </div>
      </div> */}

      {/* ================= CENTER GLASS CARD ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 mt-12">
        <div
          className="
            hero-anim
            max-w-5xl w-full text-center
            bg-indigo-50/60 backdrop-blur-l
            rounded-3xl px-8 py-12
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            border border-white/40
          "
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-slate-900">
            {slides[active].title}
          </h1>

          <p className="mt-5 text-slate-700 text-lg leading-relaxed">
            {slides[active].desc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="px-8 py-3 rounded-xl bg-[#7A0C0C] text-white font-medium hover:bg-[#5F0909] transition"
            >
              {slides[active].button}
            </a>

            <a
              href="tel:+917709912176"
              className="px-8 py-3 rounded-xl border border-slate-300 text-slate-800 font-medium hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call Emergency
            </a>
          </div>
        </div>
      </div>

      {/* ================= DOT INDICATOR ================= */}
      <div className="absolute bottom-16 w-full flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === active ? "bg-[#0a9dca]" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ================= SVG WAVE ================= */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-18 fill-white"
        >
          <path d="M0,0 C150,100 350,0 600,30 850,60 1050,20 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
