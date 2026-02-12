"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===== SHARED NAV ITEM STYLE (ALIGNMENT FIX) ===== */
  const navItem =
    "h-10 flex items-center gap-1 " +
    "text-slate-800 font-medium " +
    "transition-all duration-200 ease-out " +
    "hover:text-[#7A0C0C] hover:-translate-y-[1px]";

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-14">
            {/* MOBILE LOGO */}
            <div className="lg:hidden flex items-center">
              <Image
                src="/images/city-hospital-logoo.png"
                alt="City Multispeciality Hospital"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>

            <div />

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden lg:flex gap-12 px-36 text-base">
              <Link href="/" className={navItem}>
                Home
              </Link>

              {/* ABOUT */}
              <div className="relative group">
                <span className={navItem}>
                  About
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                </span>

                {/* SLIDE-DOWN DROPDOWN */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="
                    absolute left-0 top-full mt-2 w-64
                    bg-[#7A0C0C]
                    rounded-lg shadow-xl
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-300
                    z-50
                  "
                >
                  <ul className="py-1 text-white text-sm">
                    {[
                      { href: "/about", label: "About Hospital" },
                      { href: "/about/values", label: "Our Values" },
                      { href: "/about/timeline", label: "Timeline" },
                      { href: "/about/pledge", label: "Our Pledge" },
                      {
                        href: "/about/infrastructure",
                        label: "Infrastructure",
                      },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-6 py-3 hover:bg-white/15 transition"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <Link href="/facilities" className={navItem}>
                Facilities
              </Link>

              {/* DEPARTMENTS */}
              <div className="relative group">
                <span className={navItem}>
                  Departments
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                </span>

                <div className="absolute left-0 top-full mt-2 w-56 bg-[#7A0C0C] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="py-3 text-white text-sm">
                    <li>
                      <Link
                        href="/departments"
                        className="block px-6 py-3 hover:bg-white/15"
                      >
                        Departments
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/specialities"
                        className="block px-6 py-3 hover:bg-white/15"
                      >
                        Specialities
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/doctors" className={navItem}>
                Doctors
              </Link>
              <Link href="/gallery" className={navItem}>
                Gallery
              </Link>
              <Link href="/appointment" className={navItem}>
                Appointment
              </Link>
              <Link href="/contact" className={navItem}>
                Contact
              </Link>

              <LanguageSwitcher />
            </nav>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              className="lg:hidden p-2 border rounded-md bg-white"
              onClick={() => setMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
            >
              ☰
            </motion.button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
