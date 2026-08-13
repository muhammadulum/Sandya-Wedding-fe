import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

import BgCountingDay from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";
import bgbuttomcountingday from "../../assets/asset-green/another/SCYLLA-ASSET-GC-9.png";

export default function CountingDaySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-08-22T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadICS = () => {
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Pernikahan Nadya & Ulum 💍
DTSTART:20260822T090000
DTEND:20260822T200000
DESCRIPTION:Jangan lewatkan hari bahagia kami!
LOCATION:Kediaman Mempelai Wanita - Jl Rangga Sentap, GG. Poltek 1 (Rumah Sebelah Kanan Ujung Warna Putih), Kel. Sukaharja. Kec. Delta pawan
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-end min-h-screen w-full overflow-hidden bg-cover bg-center pb-6 px-4"
      style={{
        backgroundImage: `url(${BgCountingDay})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-sm flex flex-col items-center justify-center text-center z-10"
      >
        <img
          src={bgbuttomcountingday}
          alt="Frame Background Text"
          className="w-full h-auto object-contain pointer-events-none drop-shadow-md"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-10 pb-6 z-10">
          <div className="mb-2 sm:mb-4">
            <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.15em] text-[#b48a60] font-normal uppercase leading-tight">
              SAVE THE
            </h2>
            <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.15em] text-[#b48a60] font-normal uppercase leading-tight mb-2">
              DATE
            </h2>

            <p className="text-xs sm:text-sm font-serif italic text-[#8c734b] mb-1">
              for the wedding of
            </p>

            <h3 className="text-base sm:text-lg font-serif tracking-[0.12em] text-[#4a3b2c] uppercase font-medium">
              Nadya & Ulum
            </h3>

            <p className="text-[10px] sm:text-xs font-serif tracking-[0.12em] text-[#7b6248] mt-0.5">
              22 AGUSTUS 2026
            </p>
          </div>

          <div className="flex justify-center items-center gap-1.5 sm:gap-2.5 w-full my-2 sm:my-3">
            <div className="w-13 h-16 sm:w-16 sm:h-20 bg-white/70 backdrop-blur-md rounded-full border border-white/80 flex flex-col items-center justify-center shadow-sm">
              <span className="text-sm sm:text-lg font-serif font-medium text-[#655337]">
                {timeLeft.days}
              </span>
              <span className="text-[9px] sm:text-xs font-serif text-[#8c734b]">
                Hari
              </span>
            </div>

            <div className="w-13 h-16 sm:w-16 sm:h-20 bg-white/70 backdrop-blur-md rounded-full border border-white/80 flex flex-col items-center justify-center shadow-sm">
              <span className="text-sm sm:text-lg font-serif font-medium text-[#655337]">
                {timeLeft.hours}
              </span>
              <span className="text-[9px] sm:text-xs font-serif text-[#8c734b]">
                Jam
              </span>
            </div>

            <div className="w-13 h-16 sm:w-16 sm:h-20 bg-white/70 backdrop-blur-md rounded-full border border-white/80 flex flex-col items-center justify-center shadow-sm">
              <span className="text-sm sm:text-lg font-serif font-medium text-[#655337]">
                {timeLeft.minutes}
              </span>
              <span className="text-[9px] sm:text-xs font-serif text-[#8c734b]">
                Menit
              </span>
            </div>

            <div className="w-13 h-16 sm:w-16 sm:h-20 bg-white/70 backdrop-blur-md rounded-full border border-white/80 flex flex-col items-center justify-center shadow-sm">
              <span className="text-sm sm:text-lg font-serif font-medium text-[#655337]">
                {timeLeft.seconds}
              </span>
              <span className="text-[9px] sm:text-xs font-serif text-[#8c734b]">
                Detik
              </span>
            </div>
          </div>

          <button
            className="mt-1 bg-[#655337] text-white text-[10px] sm:text-xs font-serif tracking-widest px-5 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#8c734b] transition shadow-md active:scale-95"
            onClick={handleDownloadICS}
          >
            <Calendar className="w-3 h-3" />
            SIMPAN DI KALENDER
          </button>
        </div>
      </motion.div>
    </section>
  );
}
