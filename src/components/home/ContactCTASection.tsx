"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Phone, MessageCircle, Calendar, HeartPulse } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

/* ---------------- PREMIUM CARD ---------------- */
function PremiumCard({
  children,
  delay = 0,
  glow = false,
}: {
  children: React.ReactNode;
  delay?: number;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  const rotateX = useTransform(yMotion, [-40, 40], [8, -8]);
  const rotateY = useTransform(xMotion, [-40, 40], [-8, 8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.04 }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        xMotion.set(e.clientX - rect.left - rect.width / 2);
        yMotion.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        xMotion.set(0);
        yMotion.set(0);
      }}
      className="
        relative rounded-2xl p-6
        bg-white/75 backdrop-blur-xl
        border border-white/40
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        overflow-hidden transform-gpu
        lg:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        shadow-xl
      "
    >
      {children}

      {glow && (
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-[#7A0C0C]/15 to-transparent pointer-events-none"
        />
      )}
    </motion.div>
  );
}

/* ---------------- MAIN SECTION ---------------- */
export default function ContactCTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* 🔥 MOBILE ANIMATED MAROON BACKGROUND */}
      <motion.div
        className="absolute inset-0 lg:hidden -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg, rgba(122,12,12,0.06), rgba(122,12,12,0.02), rgba(122,12,12,0.06))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* 💎 FLOATING ICONS (Mobile Only) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-6 text-[#7A0C0C]/10 lg:hidden -z-10"
      >
        <HeartPulse size={90} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-6 text-[#7A0C0C]/10 lg:hidden -z-10"
      >
        <MessageCircle size={80} />
      </motion.div>

      {/* DESKTOP AMBIENT BACKGROUND (UNCHANGED) */}
      <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,12,12,0.08),transparent_60%)] -z-10" />

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
            Emergency & Contact Information
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
            Immediate medical assistance, expert doctors, and 24×7 emergency
            services — we are just a call away.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* EMERGENCY */}
            <PremiumCard>
              <div className="w-12 h-12 rounded-xl bg-[#7A0C0C]/10 flex items-center justify-center mb-4">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Phone className="text-[#7A0C0C]" />
                </motion.div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">
                24 Hrs Emergency
              </h4>
              <p className="text-slate-600 text-sm mb-2">
                Immediate emergency care available
              </p>
              <a
                href="tel:+0721-2571590"
                className="font-semibold text-[#7A0C0C]"
              >
                0721-2571590
              </a>
            </PremiumCard>

            {/* AMBULANCE */}
            <PremiumCard>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Phone className="text-blue-600" />
                </motion.div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">
                Ambulance Service
              </h4>
              <p className="text-slate-600 text-sm mb-2">
                Fast response ambulance support
              </p>
              <a
                href="tel:+917709912176"
                className="font-semibold text-blue-600"
              >
                +91 77099 12176
              </a>
            </PremiumCard>

            {/* WHATSAPP */}
            <PremiumCard>
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <MessageCircle className="text-green-600" />
                </motion.div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">
                WhatsApp Support
              </h4>
              <p className="text-slate-600 text-sm mb-2">
                Chat with our hospital team
              </p>
              <a
                href={`https://wa.me/917709912176?text=${encodeURIComponent(
                  `Hello City Multispeciality Hospital,

I would like to enquire about your medical services.

Kindly provide me with further details.

Thank you.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-600"
              >
                Message Now
              </a>
            </PremiumCard>

            {/* APPOINTMENT */}
            <PremiumCard glow>
              <div className="w-12 h-12 rounded-xl bg-[#7A0C0C]/15 flex items-center justify-center mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Calendar className="text-[#7A0C0C]" />
                </motion.div>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">
                Book Appointment
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Schedule OPD consultation easily
              </p>
              <Link
                href="/appointment"
                className="inline-block bg-[#7A0C0C] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#5F0909] transition"
              >
                Book Now
              </Link>
            </PremiumCard>
          </div>

          {/* RIGHT MAP (UNCHANGED DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="
              rounded-2xl overflow-hidden
              border border-white/40
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              backdrop-blur-xl
            "
          >
            <iframe
              src="https://www.google.com/maps?q=City%20Multispeciality%20Hospital%20Amravati&output=embed"
              className="w-full h-[380px] lg:h-full"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
