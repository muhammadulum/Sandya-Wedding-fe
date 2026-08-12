import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import BgCountingDay from "../../assets/asset-brown/bg-count.jpg";

export default function CountingDaySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Ganti dengan tanggal acara kamu
    const targetDate = new Date("2025-12-13T09:00:00").getTime();

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
SUMMARY:Pernikahan Dewi & Irfan 💍
DTSTART:20251213T090000
DTEND:20251213T210000
DESCRIPTION:Jangan lewatkan hari bahagia kami!
LOCATION:Kediaman Mempelai Wanita - JL.R. Suprapto Gg. Durian, Gg. Langsat
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
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${BgCountingDay})` }}
    >
      {/* Overlay supaya teks tetap jelas */}
      <div className="absolute inset-0 bg-[#f7ebe1]/80"></div>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Text Counting The Days */}
        <h2 className="text-3xl md:text-4xl font-[Belleza] text-gray-800 italic mt-6">
          Counting The Days
        </h2>

        {/* Timer */}
        <div className="flex gap-3 mt-4">
          <div className="bg-[#5a3b1f] text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex flex-col items-center justify-center shadow-md">
            <span className="text-xl md:text-2xl font-bold">
              {timeLeft.days}
            </span>
            <span className="text-[10px] md:text-xs">Hari</span>
          </div>
          <div className="bg-[#5a3b1f] text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex flex-col items-center justify-center shadow-md">
            <span className="text-xl md:text-2xl font-bold">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] md:text-xs">Jam</span>
          </div>
          <div className="bg-[#5a3b1f] text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex flex-col items-center justify-center shadow-md">
            <span className="text-xl md:text-2xl font-bold">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] md:text-xs">Menit</span>
          </div>
          <div className="bg-[#5a3b1f] text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex flex-col items-center justify-center shadow-md">
            <span className="text-xl md:text-2xl font-bold">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] md:text-xs">Detik</span>
          </div>
        </div>

        {/* Tombol Simpan di Kalender */}
        <button
          className="mt-6 bg-[#5a3b1f] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#7b5732] transition shadow-md"
          onClick={handleDownloadICS}
        >
          <Calendar className="w-4 h-4" />
          SIMPAN DI KALENDER
        </button>
      </div>
    </section>
  );
}
