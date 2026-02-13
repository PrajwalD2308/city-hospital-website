"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopInfoBar() {
  const [isNight, setIsNight] = useState(false);
  const [hideAppointment, setHideAppointment] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();

    // Emergency highlight after 8 PM
    if (hour >= 20 || hour < 6) {
      setIsNight(true);
    }

    // Hide appointment after 9 PM
    if (hour >= 21 || hour < 9) {
      setHideAppointment(true);
    }
  }, []);

  return (
    <div className="hidden lg:block bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div
          className={`grid ${
            hideAppointment ? "grid-cols-3" : "grid-cols-4"
          } items-center gap-6`}
        >
          {/* ================= LOGO ================= */}
          <div className="flex items-center h-full">
            <Image
              src="/images/city-hospital-logoo.png"
              alt="City Multispeciality Hospital"
              width={300}
              height={120}
              className="h-20 w-auto transition-opacity duration-500"
              priority
            />
          </div>
          {/* ================= EMERGENCY ================= */}
          <motion.a
            href="tel:+917709912176"
            animate={isNight ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{
              duration: 1.4,
              repeat: isNight ? Infinity : 0,
            }}
            className={`
              rounded-2xl p-4 flex items-center gap-3 border transition-all
              ${
                isNight
                  ? "bg-red-50 border-red-300 shadow-md"
                  : "border-slate-200 hover:border-red-400"
              }
            `}
          >
            <Phone className={isNight ? "text-red-600" : "text-red-500"} />
            <div>
              <p
                className={`text-sm font-semibold ${
                  isNight ? "text-red-700" : "text-slate-900"
                }`}
              >
                24 Hrs Emergency
              </p>
              <p className="text-[12px] text-slate-500">आपत्कालीन सेवा</p>
              <p
                className={`font-medium ${
                  isNight ? "text-red-600" : "text-red-500"
                }`}
              >
                +91 7709912176
              </p>

              {isNight && (
                <p className="text-[11px] text-red-600 font-semibold mt-1">
                  Night Emergency Active
                </p>
              )}
            </div>
          </motion.a>

          {/* ================= AMBULANCE ================= */}
          <motion.a
            href="tel:+917709912176"
            whileHover={{ y: -3 }}
            className="
              border rounded-2xl p-4 flex items-center gap-3
              border-slate-200 hover:border-blue-500 transition
            "
          >
            <Phone className="text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Ambulance</p>
              <p className="text-[12px] text-slate-500">रुग्णवाहिका</p>
              <p className="text-blue-600 font-medium">+91 7709912176</p>
            </div>
          </motion.a>

          {/* ================= APPOINTMENT ================= */}
          {!hideAppointment && (
            <motion.a
              href="tel:07212571590"
              whileHover={{ y: -3 }}
              className="
                border rounded-2xl p-4 flex items-center gap-3
                border-slate-200 hover:border-green-500 transition
              "
            >
              <Phone className="text-green-600" />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Make Appointment
                </p>
                <p className="text-[12px] text-slate-500">भेटीची वेळ</p>
                <p className="text-green-600 font-medium">0721-2571590</p>
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
}
