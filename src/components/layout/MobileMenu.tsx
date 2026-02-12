"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const toggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  /* ===== SHARED MOBILE NAV STYLE ===== */
  const mobileNavItem =
    "block py-4 text-lg font-medium text-slate-800 " +
    "transition-all duration-200 " +
    "hover:text-[#7A0C0C] hover:translate-x-1";

  const subNavItem =
    "block py-2 text-sm text-slate-600 " +
    "transition-all duration-200 " +
    "hover:text-[#7A0C0C] hover:translate-x-1";

  // ✅ AUTO-CLOSE MENU ON ROUTE CHANGE
  useEffect(() => {
    if (isOpen) {
      onClose();
      setOpen(null); // also close any open dropdown
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* DRAWER */}
          <motion.div
            className="
              absolute top-0 right-0
              h-full w-[90%] max-w-sm
              bg-white shadow-2xl
              flex flex-col
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <span className="text-lg font-bold text-[#7A0C0C]">
                City Multispeciality Hospital
              </span>
              <button onClick={onClose} aria-label="Close menu">
                <X size={26} />
              </button>
            </div>

            {/* MENU */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
              <Link href="/" onClick={onClose} className={mobileNavItem}>
                Home
              </Link>

              {/* ABOUT */}
              <div className="pt-2">
                <button
                  onClick={() => toggle("about")}
                  className="flex w-full items-center justify-between py-4 text-lg font-medium text-slate-800"
                >
                  <span>About</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      open === "about" ? "rotate-180 text-[#7A0C0C]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open === "about" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pl-4 border-l border-slate-200 space-y-2"
                    >
                      {[
                        ["About Hospital", "/about"],
                        ["Our Values", "/about/values"],
                        ["Timeline", "/about/timeline"],
                        ["Our Pledge", "/about/pledge"],
                        ["Infrastructure", "/about/infrastructure"],
                      ].map(([label, href]) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={onClose}
                          className={subNavItem}
                        >
                          {label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* DEPARTMENTS */}
              <div className="pt-2">
                <button
                  onClick={() => toggle("departments")}
                  className="flex w-full items-center justify-between py-4 text-lg font-medium text-slate-800"
                >
                  <span>Departments</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      open === "departments" ? "rotate-180 text-[#7A0C0C]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open === "departments" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pl-4 border-l border-slate-200 space-y-2"
                    >
                      <Link
                        href="/departments"
                        onClick={onClose}
                        className={subNavItem}
                      >
                        Departments
                      </Link>
                      <Link
                        href="/specialities"
                        onClick={onClose}
                        className={subNavItem}
                      >
                        Specialities
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/facilities"
                onClick={onClose}
                className={mobileNavItem}
              >
                Facilities
              </Link>

              <Link href="/doctors" onClick={onClose} className={mobileNavItem}>
                Doctors
              </Link>

              <Link href="/gallery" onClick={onClose} className={mobileNavItem}>
                Gallery
              </Link>

              <Link
                href="/appointment"
                onClick={onClose}
                className={mobileNavItem}
              >
                Appointment
              </Link>

              <Link href="/contact" onClick={onClose} className={mobileNavItem}>
                Contact
              </Link>
            </div>

            {/* CTA */}
            <div className="px-5 py-5 border-t bg-white">
              <Link
                href="/appointment"
                onClick={onClose}
                className="
                  block w-full text-center
                  bg-gradient-to-r from-[#7A0C0C] to-[#a73737]
                  text-white py-3 rounded-xl
                  font-semibold shadow-lg
                  active:scale-95 transition
                "
              >
                Make Appointment
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
