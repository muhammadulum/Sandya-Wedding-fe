import React from "react";
import bgWayang from "../../assets/asset-brown/bg-herosection.jpg";

export default function HeroSection({ guestName }) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bgWayang})`,
        backgroundColor: "#3b2416", // fallback warna dasar
      }}
    >
      {/* Overlay warna transparan */}
      {/* <div className="absolute inset-0 bg-[#4B2E06]/50"></div> */}
      {/* Frame isi utama */}
      <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[60%] pt-16 pb-20 px-6 md:px-10 shadow-lg">
        <p className="text-accent tracking-[0.2em] text-sm md:text-base mb-2 font-serif uppercase">
          THE WEDDING OF
        </p>

        {/* Nama pasangan */}
        <div className="flex flex-col items-center justify-center leading-tight">
          <h1 className="text-textenvelop font-bold text-5xl sm:text-6xl md:text-7xl font-pinyon">
            Dewi
          </h1>
          <span className="text-[#6e4a1a] text-3xl sm:text-4xl md:text-5xl font-serif my-1">
            &
          </span>
          <h1 className="text-textenvelop font-bold text-5xl sm:text-6xl md:text-7xl font-pinyon">
            Irfan
          </h1>
        </div>

        {/* Tanggal */}
        <p className="text-accent mt-6 text-sm sm:text-base md:text-lg font-medium tracking-wide">
          SABTU, 13 Desember 2025
        </p>

        {/* Nama tamu */}
        {guestName && (
          <p className="text-textenvelop/80 mt-6 text-xs sm:text-sm md:text-base italic">
            Kepada Yth. {guestName}
          </p>
        )}

        {/* Icon scroll */}
        <div className="mt-10 flex justify-center">
          <div className="w-5 h-8 border-2 border-[#6e4a1a] rounded-full flex justify-center items-start p-1 animate-bounce">
            <div className="w-1 h-2 bg-[#6e4a1a] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
