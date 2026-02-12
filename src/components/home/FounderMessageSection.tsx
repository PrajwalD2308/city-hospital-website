"use client";

import { motion } from "framer-motion";

export default function FounderMessageSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= VIDEO ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oyYT0Hz6pB8"
            title="Founder Message"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#7A0C0C]/10 text-[#7A0C0C] text-sm font-semibold">
            Founder’s Message
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            A Vision Built on Compassion & Clinical Excellence
          </h2>

          <p className="text-slate-600 leading-relaxed">
            At City Multispeciality Hospital, our mission has always been to
            deliver ethical, affordable, and advanced healthcare with a
            patient-first approach. Every decision we take is guided by care,
            trust, and responsibility towards our community.
          </p>

          <p className="text-slate-600 leading-relaxed">
            We believe modern technology must walk hand-in-hand with human
            empathy. Our dedicated doctors, nurses, and staff work relentlessly
            to ensure every patient feels safe, respected, and confident in
            their treatment journey.
          </p>

          <div>
            <p className="font-semibold text-[#7A0C0C]">— Dr.Pankaj Bagde</p>
            <p className="text-sm text-slate-500">Founder & Medical Director</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
