"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Stethoscope, Users, HeartPulse, Hospital, Clock } from "lucide-react";

/* ---------------- COUNTER COMPONENT ---------------- */
function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const end = value;
    const duration = 1200;
    const increment = Math.ceil(end / 60);
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(current);
      }
    }, duration / 60);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

/* ---------------- CARD ---------------- */
function WhyCard({ item, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-40, 40], [10, -10]);
  const rotateY = useTransform(x, [-40, 40], [-10, 10]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -12, scale: 1.04 }}
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="
        relative rounded-2xl p-6 text-center text-white
        bg-gradient-to-br from-[#7A0C0C] to-[#5F0909]
        shadow-xl overflow-hidden transform-gpu
      "
    >
      {/* FLOATING ICON */}
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
        className="flex justify-center mb-4 text-white/90"
      >
        {item.icon}
      </motion.div>

      <div className="text-3xl font-bold mb-2">
        <AnimatedCounter value={item.value} />
        {item.suffix}
      </div>

      <p className="text-sm font-medium text-white/90">{item.label}</p>

      {/* Soft Glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none"
      />
    </motion.div>
  );
}

/* ---------------- MAIN SECTION ---------------- */
export default function WhyChooseUs() {
  const items = [
    {
      icon: <Hospital size={36} />,
      value: 15,
      suffix: "+",
      label: "Years of Excellence",
    },
    {
      icon: <Users size={36} />,
      value: 10,
      suffix: "+",
      label: "Expert Doctors",
    },
    {
      icon: <HeartPulse size={36} />,
      value: 24,
      suffix: "×7",
      label: "Emergency Services",
    },
    {
      icon: <Stethoscope size={36} />,
      value: 10,
      suffix: "+",
      label: "Specialized Departments",
    },
    {
      icon: <Clock size={36} />,
      value: 50000,
      suffix: "+",
      label: "Happy Patients",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden">
      {/* 🔥 MOBILE MAROON ANIMATED BACKGROUND */}
      <motion.div
        className="absolute inset-0 lg:hidden -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg, rgba(122,12,12,0.05), rgba(122,12,12,0.02), rgba(122,12,12,0.05))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating Icons (Mobile Only) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-16 left-6 text-[#7A0C0C]/10 lg:hidden -z-10"
      >
        <HeartPulse size={90} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-6 text-[#7A0C0C]/10 lg:hidden -z-10"
      >
        <Stethoscope size={80} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose City Multispeciality Hospital
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
            We combine compassionate care, advanced technology, and experienced
            medical professionals to deliver trusted healthcare services.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <WhyCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
