"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setShowTop(y > 400);
    });
  }, [scrollY]);

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="relative bg-gradient-to-br from-[#f8fafc] via-white to-[#f3f4f6] border-t border-slate-200 overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-red-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-rose-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* ================= BRAND ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/city-hospital-logoo.png"
                alt="City Multispeciality Hospital"
                width={200}
                height={70}
                className="mb-4"
              />

              <p className="text-slate-700 text-sm leading-relaxed">
                City Multispeciality Hospital & Critical Care Centre delivers
                advanced healthcare with compassion, modern infrastructure, and
                expert medical professionals.
              </p>

              {/* Premium Social Icons */}
              <div className="flex gap-4 mt-6">
                {[
                  { icon: Facebook, color: "from-blue-500 to-blue-700" },
                  { icon: Instagram, color: "from-pink-500 to-rose-600" },
                  { icon: Linkedin, color: "from-sky-500 to-blue-700" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -6, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-11 h-11 rounded-xl
                      bg-gradient-to-br ${item.color}
                      text-white flex items-center justify-center
                      shadow-lg shadow-black/10
                      hover:shadow-xl transition
                      backdrop-blur
                    `}
                  >
                    <item.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ================= QUICK LINKS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-slate-700">
                {["Home", "About", "Departments", "Facilities", "Gallery"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="hover:text-[#7A0C0C] transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>

            {/* ================= USEFUL LINKS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Useful Links
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li>
                  <Link href="/doctors" className="hover:text-[#7A0C0C]">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link href="/appointment" className="hover:text-[#7A0C0C]">
                    Make Appointment
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#7A0C0C]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* ================= CONTACT ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Contact Information
              </h4>

              <div className="space-y-4 text-slate-700">
                {[
                  { label: "Emergency", phone: "0721-2571590" },
                  { label: "Ambulance", phone: "+91 77099 12176" },
                  { label: "Appointment", phone: "0721-2571590" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="font-medium">{item.label}</p>
                    <a
                      href={`tel:${item.phone}`}
                      className="flex items-center gap-2 hover:text-[#7A0C0C]"
                    >
                      <Phone size={16} className="text-[#7A0C0C]" />
                      {item.phone}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} City Multispeciality Hospital. All Rights
          Reserved.
        </div>
      </footer>

      {/* ================= BACK TO TOP ================= */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          showTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed bottom-6 right-6 z-50
          w-12 h-12 rounded-full
          bg-gradient-to-br from-[#7A0C0C] to-[#a73737]
          text-white flex items-center justify-center
          shadow-xl hover:shadow-2xl
        "
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </>
  );
}
