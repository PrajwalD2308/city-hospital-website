"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { doctors } from "@/data/doctors";
import { ArrowLeft, CheckCircle, HeartPulse } from "lucide-react";

/* ================= HELPERS ================= */
function isDateDisabled(date: string) {
  const d = new Date(date);
  return d.getDay() === 0;
}

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [showAppointment, setShowAppointment] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const { scrollY } = useScroll();
  const cardOverlay = useTransform(scrollY, [0, 400], [0, 0.15]);
  const ySlow = useTransform(scrollY, [0, 400], [0, 100]);
  const yFast = useTransform(scrollY, [0, 400], [0, 200]);

  function handleAppointmentSubmit(e: any) {
    e.preventDefault();
    const form = e.target;

    if (isDateDisabled(form.date.value)) {
      alert("OPD is not available on Sundays.");
      return;
    }

    const msg = `
*New Appointment Request*

Hello ${selectedDoctor.name},

I would like to book an appointment.

*Patient Details:*
Name: ${form.patient.value}
Mobile: ${form.phone.value}
Preferred Date: ${form.date.value}

*Health Concern:*
${form.problem.value}

Kindly confirm the appointment time.

Thank you.
`;

    setSuccess(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/${selectedDoctor.whatsapp}?text=${encodeURIComponent(
          msg,
        )}`,
        "_blank",
      );
      setSuccess(false);
      setShowAppointment(false);
    }, 1800);
  }

  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>Best Doctors in Amravati | City Multispeciality Hospital</title>

        <meta
          name="description"
          content="Meet experienced and trusted doctors at City Multispeciality Hospital, Amravati. Expert specialists in Cardiology, Neurology, Orthopaedics, Psychiatry, and Critical Care."
        />

        <meta
          name="keywords"
          content="Best doctors in Amravati, Cardiologist Amravati, Neurologist Amravati, Orthopaedic doctor Amravati, Hospital doctors Amravati, Multispeciality hospital Amravati"
        />

        <meta
          property="og:title"
          content="Best Doctors in Amravati | City Multispeciality Hospital"
        />

        <meta
          property="og:description"
          content="Consult experienced specialists and book appointments with trusted doctors at City Multispeciality Hospital, Amravati."
        />

        <meta
          property="og:url"
          content="https://city-multispeciality-hospital-websi.vercel.app/doctors"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://city-multispeciality-hospital-websi.vercel.app/doctors"
        />
      </Head>

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
          {/* ✅ Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm text-white/80"
          >
            <Link href="/" className="hover:text-white font-medium transition">
              Home
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white font-semibold">Doctors</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
        text-3xl sm:text-4xl md:text-5xl 
        font-bold leading-tight
      "
          >
            Our{" "}
            <span className="text-red-300 block sm:inline">Expert Doctors</span>
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
            Meet our experienced specialists delivering compassionate
            healthcare.
          </motion.p>
        </div>
      </section>

      {/* ================= HEART ================= */}
      <div className="flex justify-center py-12 bg-white">
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-[#7A0C0C]"
        >
          <HeartPulse size={48} />
        </motion.div>
      </div>
      {/* ================= DOCTOR GRID ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[360px] rounded-3xl bg-slate-200 animate-pulse"
                />
              ))
            : doctors.map((doc) => (
                <motion.div
                  key={doc.id}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedDoctor(doc)}
                  className="cursor-pointer rounded-3xl overflow-hidden bg-white shadow-lg"
                >
                  <img src={doc.image} className="h-56 w-full object-cover" />
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-[#7A0C0C]">{doc.name}</h3>

                    {/* Qualification */}
                    <p className="text-xs text-slate-500 mt-1">
                      {doc.qualification}
                    </p>

                    {/* Title */}
                    <p className="text-[11px] uppercase tracking-wide text-slate-500 mt-1">
                      {doc.title}
                    </p>

                    <span className="text-sm font-semibold text-[#7A0C0C] mt-3 inline-block">
                      View Profile →
                    </span>
                  </div>
                </motion.div>
              ))}
        </div>
      </section>
      {/* ================= PATIENT TESTIMONIALS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-center text-[#7A0C0C]"
          >
            What Our Patients Say
          </motion.h2>

          <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
            Real experiences from patients who trusted our doctors for their
            care.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh P.",
                text: "Excellent care by Dr. Pankaj Bagade. Explained everything calmly and clearly.",
              },
              {
                name: "Anita S.",
                text: "Very supportive doctors and staff. Treatment was smooth and reassuring.",
              },
              {
                name: "Mohit K.",
                text: "Advanced facilities and compassionate care. Highly recommended hospital.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100"
              >
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed">“{t.text}”</p>

                <div className="mt-5 font-semibold text-[#7A0C0C]">
                  — {t.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE OUR DOCTORS ================= */}
      <section className="relative py-24 bg-gradient-to-br from-[#7A0C0C] via-[#8f1d1d] to-[#a73737] text-white overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_55%)]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-center"
          >
            Why Choose Our Doctors
          </motion.h2>

          <p className="mt-4 text-center text-white/85 max-w-2xl mx-auto">
            Trusted expertise, advanced care, and compassion at every step.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "🎯",
                title: "Precision Treatment",
                desc: "Accurate diagnosis and personalized treatment plans for every patient.",
              },
              {
                icon: "🏥",
                title: "Advanced Infrastructure",
                desc: "Modern operation theatres, ICU, diagnostics, and emergency care.",
              },
              {
                icon: "🤝",
                title: "Compassionate Care",
                desc: "We treat patients with empathy, dignity, and constant support.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="
            relative rounded-3xl p-8 text-center
            bg-white/12 backdrop-blur-xl
            border border-white/20
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          "
              >
                {/* Floating / Rotating Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 6, -6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="text-5xl mb-5"
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl font-semibold tracking-wide">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/80 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Subtle bottom glow */}
                <div className="absolute inset-x-6 -bottom-6 h-12 bg-white/10 blur-2xl rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOCTOR MODAL (DESKTOP FIXED, MOBILE SAME) ================= */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="
                bg-white w-full max-w-5xl rounded-3xl overflow-hidden
                max-h-[90vh]
                grid md:grid-cols-2
              "
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={selectedDoctor.image}
                  className="
                    w-full object-cover
                    h-64
                    md:h-full
                  "
                />

                {/* Close / Back */}
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="
                    absolute top-4 left-4
                    bg-white/90 backdrop-blur
                    px-3 py-1 rounded-full
                    text-sm font-medium shadow
                    md:hidden
                  "
                >
                  ← Back
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="hidden md:flex items-center gap-2 text-sm mb-4"
                >
                  <ArrowLeft size={16} /> Back to Doctors
                </button>

                <h2 className="text-2xl font-bold text-[#7A0C0C]">
                  {selectedDoctor.name}
                </h2>

                <p className="text-sm text-slate-600 mt-1">
                  {selectedDoctor.qualification}
                </p>

                <p className="font-medium mt-1">{selectedDoctor.title}</p>

                <p className="text-sm text-slate-600 mt-4">
                  {selectedDoctor.about}
                </p>

                <ul className="list-disc ml-5 text-sm mt-4 space-y-1">
                  {selectedDoctor.services.map((s: string, i: number) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                <div className="bg-green-50 p-4 rounded-xl text-sm mt-6">
                  <strong>OPD Timings</strong>
                  <p>Morning: {selectedDoctor.opd.morning}</p>
                  <p>Evening: {selectedDoctor.opd.evening}</p>
                </div>

                <button
                  onClick={() => setShowAppointment(true)}
                  className="w-full mt-6 bg-[#7A0C0C] text-white py-3 rounded-full font-semibold"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ================= APPOINTMENT DRAWER (UPDATED PREMIUM UI) ================= */}
      <AnimatePresence>
        {showAppointment && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAppointment(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
          absolute bottom-0 w-full 
          md:right-0 md:top-0 md:h-full md:max-w-md
          bg-gradient-to-br from-[#7A0C0C] via-[#8E1B1B] to-[#a73737]
          text-white rounded-t-3xl md:rounded-none
          max-h-[92vh] overflow-y-auto shadow-2xl
        "
            >
              <div className="p-6 space-y-6 pb-24">
                {/* HEADER */}
                <div>
                  <h3 className="text-2xl font-bold mb-1 ">Book Appointment</h3>
                  <p className="text-white/80 text-sm">
                    Schedule consultation with our specialist doctor
                  </p>
                </div>

                {/* FORM CARD */}
                <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-lg">
                  <form
                    onSubmit={handleAppointmentSubmit}
                    className="space-y-4"
                  >
                    {/* INPUT FIELD STYLE */}
                    <input
                      name="patient"
                      required
                      placeholder="Patient Name"
                      className="
                  w-full p-3 rounded-xl
                  bg-white text-slate-800
                  border border-slate-200
                  focus:outline-none focus:ring-2 focus:ring-[#7A0C0C]
                  transition
                "
                    />

                    <input
                      name="phone"
                      required
                      placeholder="Mobile Number"
                      className="
                  w-full p-3 rounded-xl
                  bg-white text-slate-800
                  border border-slate-200
                  focus:outline-none focus:ring-2 focus:ring-[#7A0C0C]
                  transition
                "
                    />

                    <input
                      name="date"
                      type="date"
                      required
                      className="
                  w-full p-3 rounded-xl
                  bg-white text-slate-800
                  border border-slate-200
                  focus:outline-none focus:ring-2 focus:ring-[#7A0C0C]
                  transition
                "
                    />

                    <textarea
                      name="problem"
                      rows={3}
                      placeholder="Describe problem"
                      className="
                  w-full p-3 rounded-xl
                  bg-white text-slate-800
                  border border-slate-200
                  focus:outline-none focus:ring-2 focus:ring-[#7A0C0C]
                  transition resize-none
                "
                    />

                    {/* PREMIUM BUTTON */}
                    <button
                      type="submit"
                      className="
                  w-full mt-2
                  bg-white text-[#7A0C0C]
                  py-3 rounded-full
                  font-semibold tracking-wide
                  shadow-md
                  hover:bg-slate-100
                  active:scale-[0.98]
                  transition-all
                "
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
