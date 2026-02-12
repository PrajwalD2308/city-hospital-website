"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { doctors } from "@/data/doctors";
import { Calendar, CheckCircle, Clock, ShieldCheck, Send } from "lucide-react";

/* ================= HELPERS ================= */
const isSunday = (date: string) => new Date(date).getDay() === 0;

export default function AppointmentPage() {
  /* ✅ LANGUAGE */
  const lang = useLanguage();
  const t = lang?.t ?? ((key: string) => key);

  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 400], [0, 120]);
  const yFast = useTransform(scrollY, [0, 400], [0, -120]);

  const [step, setStep] = useState(1);
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState<any>(null);
  const [type, setType] = useState("OPD Visit");
  const [success, setSuccess] = useState(false);

  const departments = [...new Set(doctors.map((d) => d.department))];
  const filteredDoctors = department
    ? doctors.filter((d) => d.department === department)
    : [];

  function handleSubmit(e: any) {
    e.preventDefault();
    const f = e.target;

    if (isSunday(f.date.value)) {
      alert("OPD is not available on Sundays");
      return;
    }

    /* ✅ WhatsApp Message (Language Ready) */
    const msg = `
🏥 *City Multispeciality Hospital, Amravati*

New Appointment Request

Patient Name: ${f.name.value}
Mobile Number: ${f.phone.value}

Department: ${department}
Doctor: ${doctor.name}
Appointment Type: ${type}
Preferred Date: ${f.date.value}

Health Concern:
${f.problem.value}

Kindly confirm the appointment timing and further instructions.

Regards,
${f.name.value}
`;

    setSuccess(true);

    setTimeout(() => {
      window.open(
        `https://wa.me/917709912176?text=${encodeURIComponent(msg)}`,
        "_blank",
      );
      setSuccess(false);
    }, 1800);
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-[#7A0C0C] via-[#8f1d1d] to-[#a73737] text-white overflow-hidden">
        {/* Glow Shapes (kept subtle) */}
        <motion.div
          style={{ y: ySlow }}
          className="absolute -top-32 -left-32 w-[380px] h-[380px] md:-top-40 md:-left-40 md:w-[520px] md:h-[520px] bg-white/10 rounded-full blur-3xl"
        />

        <motion.div
          style={{ y: yFast }}
          className="absolute bottom-0 -right-32 w-[380px] h-[380px] md:-right-40 md:w-[520px] md:h-[520px] bg-black/20 rounded-full blur-3xl"
        />

        {/* Soft radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent_60%)] opacity-10" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-6 text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-sm text-white/80"
          >
            <Link href="/" className="hover:text-white font-medium transition">
              Home
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white font-semibold">
              {t.appointmentTitle}
            </span>
          </motion.div>

          {/* Optimized Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
        text-4xl sm:text-5xl md:text-6xl
        font-bold tracking-tight
        leading-[1.15]
      "
          >
            Book Your Appointment
          </motion.h1>

          {/* Subtle Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "90px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-red-300 mx-auto mt-6 rounded-full"
          />

          {/* Refined Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
        mt-8
        text-white/90
        max-w-2xl
        mx-auto
        text-lg md:text-xl
        leading-relaxed
      "
          >
            Schedule a consultation with our experienced specialists. We ensure
            timely appointments, personalized attention, and trusted medical
            care for every patient.
          </motion.p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10"
          >
            {/* LEFT */}
            <div className="space-y-6">
              <input
                name="name"
                placeholder={t.patientName}
                required
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                name="phone"
                placeholder={t.mobileNumber}
                required
                className="w-full border rounded-xl px-4 py-3"
              />

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t.appointmentType}
                </label>
                <div className="flex gap-3 flex-wrap">
                  {["OPD Visit", "Emergency", "Tele-Consult"].map((v) => (
                    <button
                      type="button"
                      key={v}
                      onClick={() => setType(v)}
                      className={`px-4 py-2 rounded-full text-sm border ${
                        type === v ? "bg-[#7A0C0C] text-white" : "bg-white"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <select
                required
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDoctor(null);
                  setStep(2);
                }}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">{t.selectDepartment}</option>
                {departments.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>

              <select
                required
                disabled={!department}
                onChange={(e) =>
                  setDoctor(
                    filteredDoctors.find((d) => d.name === e.target.value),
                  )
                }
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">{t.selectDoctor}</option>
                {filteredDoctors.map((d) => (
                  <option key={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <div className="relative">
                <Calendar className="absolute left-4 top-3 text-slate-400" />
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full border rounded-xl pl-12 py-3"
                />
                <p className="text-xs mt-1 text-slate-500">
                  OPD not available on Sundays
                </p>
              </div>

              <p className="flex items-center gap-2 text-sm text-slate-600">
                <Clock size={16} /> Estimated waiting time: 10–20 mins
              </p>

              <textarea
                name="problem"
                rows={4}
                placeholder={t.problem}
                className="w-full border rounded-xl px-4 py-3 resize-none"
              />

              <div className="flex gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={16} /> Cashless Available
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={16} /> Insurance Accepted
                </span>
              </div>

              <div className="bg-red-50 border border-red-200 text-sm p-4 rounded-xl">
                ⚠️ {t.emergencyNote}
                <br />
                <strong className="text-red-600">+91 7709912176</strong>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-xl"
              >
                <Send size={18} /> {t.submit}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* SUCCESS OVERLAY */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white p-10 rounded-3xl text-center"
            >
              <CheckCircle size={64} className="text-green-500 mx-auto" />
              <p className="mt-4 font-semibold">Redirecting to WhatsApp…</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
