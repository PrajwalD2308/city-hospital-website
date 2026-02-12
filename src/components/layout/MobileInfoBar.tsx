"use client";

import { Phone, Ambulance, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileInfoBar() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    // After 8 PM or before 6 AM → highlight emergency
    if (hour >= 20 || hour < 6) {
      setIsNight(true);
    }
  }, []);

  return (
    <div className="lg:hidden sticky top-[64px] z-40 bg-white border-b shadow-md">
      <div className="grid grid-cols-3 text-center text-[11px] font-medium">

        {/* ================= EMERGENCY ================= */}
        <a
          href="tel:+917709912176"
          className={`
            py-3 flex flex-col items-center gap-1 border-r transition
            ${
              isNight
                ? "bg-red-50 text-red-700"
                : "hover:bg-red-50 text-slate-700"
            }
          `}
        >
          <motion.div
            animate={
              isNight
                ? { scale: [1, 1.2, 1] }
                : { scale: 1 }
            }
            transition={{
              duration: 1.2,
              repeat: isNight ? Infinity : 0,
            }}
          >
            <Phone className="text-red-600" size={18} />
          </motion.div>

          <span className="font-semibold leading-tight">
            Emergency
          </span>
          <span className="text-[10px]">
            आपत्कालीन सेवा
          </span>

          {isNight && (
            <span className="text-[9px] mt-1 text-red-600 font-semibold">
              Night Emergency Active
            </span>
          )}
        </a>

        {/* ================= AMBULANCE ================= */}
        <a
          href="tel:+917709912176"
          className="py-3 flex flex-col items-center gap-1 border-r hover:bg-blue-50 transition text-slate-700"
        >
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <Ambulance className="text-blue-600" size={18} />
          </motion.div>

          <span>Ambulance</span>
          <span className="text-[10px] text-slate-500">
            रुग्णवाहिका
          </span>
        </a>

        {/* ================= APPOINTMENT ================= */}
        <a
          href="tel:07212571590"
          className="py-3 flex flex-col items-center gap-1 hover:bg-green-50 transition text-slate-700"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Calendar className="text-green-600" size={18} />
          </motion.div>

          <span>Appointment</span>
          <span className="text-[10px] text-slate-500">
            भेटीची वेळ
          </span>
        </a>

      </div>
    </div>
  );
}
