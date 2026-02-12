"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, MessageCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mr. Rajesh Deshmukh",
    location: "Amravati, Maharashtra",
    review:
      "My father was admitted in emergency due to brain stroke. Doctors acted very fast and explained everything clearly. ICU staff was very supportive. We are thankful to City Multispeciality Hospital for saving his life.",
  },
  {
    name: "Mrs. Sunita Patil",
    location: "Badnera, Amravati",
    review:
      "I was suffering from severe spine pain for many years. After proper diagnosis and treatment here, my pain is almost gone. Doctors and nurses are very polite and caring.",
  },
  {
    name: "Mr. Akash Kale",
    location: "VMV Road, Amravati",
    review:
      "Good hospital with clean rooms and advanced facilities. Emergency service is very fast. Doctors give proper time to patients and explain treatment clearly.",
  },
  {
    name: "Mrs. Rekha Gawande",
    location: "Rukhmini Nagar, Amravati",
    review:
      "My mother was admitted in ICU for critical condition. The care given by doctors and nursing staff was excellent. Hospital environment is calm and well maintained.",
  },
];

/* ================= DESKTOP CARD ================= */
function DesktopCard({ item }: any) {
  return (
    <div className="relative rounded-2xl p-6 bg-white shadow-lg border border-slate-200">
      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#7A0C0C]/10 text-[#7A0C0C]">
        <Quote size={20} />
      </div>

      <p className="text-slate-700 text-sm leading-relaxed mb-5">
        “{item.review}”
      </p>

      <p className="font-semibold text-slate-900">{item.name}</p>
      <p className="text-slate-500 text-sm">{item.location}</p>
    </div>
  );
}

/* ================= MOBILE SPOTLIGHT ================= */
function MobileSpotlight() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 50%"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.4]);

  return (
    <div
      ref={containerRef}
      className="relative lg:hidden flex justify-center mb-16"
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        {/* Animated Border */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="rounded-3xl p-[2px] bg-gradient-to-r from-[#7A0C0C] via-red-500 to-[#7A0C0C] bg-[length:200%_200%]"
        >
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl overflow-hidden">
            {/* Quote */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#7A0C0C]/10 text-[#7A0C0C]">
              <Quote size={20} />
            </div>

            <p className="text-slate-700 text-sm leading-relaxed mb-5">
              “{testimonials[index].review}”
            </p>

            <p className="font-semibold text-slate-900">
              {testimonials[index].name}
            </p>
            <p className="text-slate-500 text-sm">
              {testimonials[index].location}
            </p>

            {/* Scroll Glass Glow */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute inset-0 bg-gradient-to-br from-[#7A0C0C]/20 to-transparent pointer-events-none"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ================= MAIN SECTION ================= */
export default function TestimonialsSection() {
  return (
    <section className="relative z-0 py-24 lg:py-28 bg-[#F8FAFC] overflow-hidden">
      {/* Background (Mobile Only) */}
      <motion.div
        className="absolute inset-0 -z-10 lg:hidden"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(120deg, rgba(122,12,12,0.06), rgba(122,12,12,0.02), rgba(122,12,12,0.06))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-20 left-6 text-[#7A0C0C]/10 lg:hidden -z-10"
      >
        <MessageCircle size={80} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-20 right-6 text-[#7A0C0C]/10 lg:hidden -z-10"
      >
        <MessageCircle size={70} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
            Real experiences from patients and families who trusted City
            Multispeciality Hospital during critical moments.
          </p>
        </div>

        {/* MOBILE */}
        <MobileSpotlight />

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <DesktopCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
