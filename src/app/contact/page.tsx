"use client";

import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Ambulance,
  Send,
  ChevronRight,
} from "lucide-react";

/* ---------------- DATA ---------------- */
const departments = {
  Cardiology: ["Dr. Pankaj M. Bagade"],
  Neurology: ["Dr. Vaishali Dhade"],
  Orthopaedics: ["Dr. Vineet Avasarmol"],
  Psychiatry: ["Dr. Rahul Deshmukh"],
};

export default function ContactPage() {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, 120]);
  const yFast = useTransform(scrollY, [0, 600], [0, -160]);

  const [dept, setDept] = useState("");
  const [doctor, setDoctor] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const f = e.target;

    const msg = `
Hello City Multispeciality Hospital,

Name: ${f.name.value}
Phone: ${f.phone.value}

Department: ${dept}
Doctor: ${doctor}

Message:
${f.message.value}
`;

    window.open(
      `https://wa.me/918055454444?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  }

  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>Contact City Multispeciality Hospital | Amravati</title>

        <meta
          name="description"
          content="Contact City Multispeciality Hospital & Critical Care Centre, Amravati for appointments, emergency services, ambulance support, and medical consultations."
        />

        <meta
          name="keywords"
          content="Contact hospital Amravati, Emergency hospital Amravati, Ambulance service Amravati, Hospital phone number Amravati, City Multispeciality Hospital contact"
        />

        <meta
          property="og:title"
          content="Contact City Multispeciality Hospital | Amravati"
        />

        <meta
          property="og:description"
          content="Reach out to City Multispeciality Hospital for appointments, emergency care, and expert medical consultations in Amravati."
        />

        <meta
          property="og:url"
          content="https://city-multispeciality-hospital-websi.vercel.app/contact"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://city-multispeciality-hospital-websi.vercel.app/contact"
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
          {/* ✅ Breadcrumb Added */}
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
            <span className="text-white font-semibold">Contact</span>
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
            Contact{" "}
            <span className="text-red-300 block sm:inline">
              City Multispeciality Hospital
            </span>
          </motion.h1>

          <p
            className="
        mt-4 
        text-white/90 
        max-w-xl 
        mx-auto 
        text-base sm:text-lg md:text-lg
        leading-relaxed
      "
          >
            Appointments, emergencies, or general queries — we’re always here
            for you.
          </p>
        </div>
      </section>
      {/* ================= CONTACT + MAP ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* LEFT INFO */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Let Us <span className="text-[#7A0C0C]">Help You</span>
            </h2>

            {[
              {
                icon: <MapPin />,
                title: "Hospital Address",
                text: "City Multispecialty Hospital & Critical Care Center, Dastur Nagar, New Colony Road, Moti Nagar, Amravati-444606, Maharashtra",
              },
              {
                icon: <Phone />,
                title: "Appointments",
                text: "0721-2571590",
              },
              {
                icon: <Ambulance />,
                title: "Emergency / Ambulance",
                text: "917709912176",
              },
              {
                icon: <Mail />,
                title: "Email",
                text: "cityhospital2010@gmail.com",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7A0C0C]/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#7A0C0C]/10 flex items-center justify-center text-[#7A0C0C]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-slate-600 text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MAP */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.792432697562!2d77.7628515!3d20.92066900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4bc736e0f31%3A0x8257e137a29e224b!2sCity%20Multispecialty%20Hospital%20%26%20Critical%20Care%20Centre!5e0!3m2!1sen!2sin!4v1770292061602!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Doctor"
            className="rounded-3xl shadow-2xl hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-xl space-y-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Let’s Talk <span className="text-[#7A0C0C]">Today</span>
            </h3>

            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full border rounded-xl px-4 py-3"
            />

            {/* Department */}
            <select
              value={dept}
              onChange={(e) => {
                setDept(e.target.value);
                setDoctor("");
              }}
              className="w-full border rounded-xl px-4 py-3"
              required
            >
              <option value="">Select Department</option>
              {Object.keys(departments).map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            {/* Doctor */}
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
              required
              disabled={!dept}
            >
              <option value="">Select Doctor</option>
              {dept &&
                departments[dept as keyof typeof departments].map((doc) => (
                  <option key={doc}>{doc}</option>
                ))}
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Describe your concern"
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-[#7A0C0C] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#641010] transition"
            >
              Send on WhatsApp <ChevronRight size={18} />
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
