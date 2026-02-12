"use client";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Hospital, HeartPulse, Stethoscope, Ambulance } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* ================= DATA ================= */
const timelineData = [
  {
    year: 2018,
    title: "Foundation of City Multispeciality Hospital",
    description:
      "City Multispeciality Hospital & Critical Care Centre was established with a vision to provide ethical and affordable healthcare in Amravati.",
    icon: <Hospital />,
  },
  {
    year: 2019,
    title: "Expansion of Medical Departments",
    description:
      "Multiple speciality departments were introduced, bringing experienced consultants and modern diagnostics under one roof.",
    icon: <Stethoscope />,
  },
  {
    year: 2020,
    title: "Critical Care & Emergency Services",
    description:
      "24×7 emergency services, ICU, and critical care units were strengthened to handle complex and life-saving cases.",
    icon: <Ambulance />,
  },
  {
    year: 2022,
    title: "Advanced Patient-Centric Care",
    description:
      "Focused on patient safety, compassion, and technology-driven treatments for better outcomes and trust.",
    icon: <HeartPulse />,
  },
];

/* ================= YEAR COUNTER (MOBILE ONLY) ================= */
function AnimatedYear({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [year, setYear] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = value - 5;
    const interval = setInterval(() => {
      start += 1;
      setYear(start);
      if (start >= value) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return <span ref={ref}>{year}</span>;
}

/* ================= MAIN COMPONENT ================= */
export default function TimelinePage() {
  const mobileRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mobileRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* ================= PREMIUM HERO (DESKTOP + MOBILE) ================= */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A0C0C]/60 via-black/40 to-black/60" />

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-white/10"
        >
          <Hospital size={150} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-6xl px-6 text-white"
        >
          <div className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white font-medium transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-semibold">Our Timeline</span>
          </div>

          <p className="uppercase tracking-widest text-sm text-red-300 mb-4">
            Hospital Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Timeline</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl">
            A journey of growth, trust, and commitment to excellence in
            multispeciality healthcare.
          </p>
        </motion.div>
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          {/* DESKTOP VERSION (UNCHANGED) */}
          <div className="hidden md:block">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-slate-200" />

            <div className="space-y-20">
              {timelineData.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`relative flex ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-lg max-w-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#7A0C0C] text-white flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="text-[#7A0C0C] font-bold text-lg">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-700">{item.description}</p>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 top-10">
                      <div className="w-5 h-5 rounded-full bg-[#7A0C0C]" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= MOBILE PREMIUM VERSION ================= */}
          <div ref={mobileRef} className="relative md:hidden pl-8 space-y-14">
            {/* Animated Connecting Line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-3 top-0 w-1 bg-[#7A0C0C]"
            />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-1 top-3 w-6 h-6 rounded-full bg-[#7A0C0C] border-4 border-white shadow-lg" />

                {/* Card */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7A0C0C]/5 to-transparent pointer-events-none" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#7A0C0C] text-white flex items-center justify-center">
                      {item.icon}
                    </div>

                    <span className="text-[#7A0C0C] font-bold text-lg">
                      <AnimatedYear value={item.year} />
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
