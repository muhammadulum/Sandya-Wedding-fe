import React from "react";
import Pegantin from "../../assets/asset-brown/pengantin/3.jpg";
import BungaKiri from "../../assets/asset-brown/bunga.png";
import BungaKanan from "../../assets/asset-brown/bunga.png";

export default function BeforeLastSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#5F3C28] to-[#f8f0e7] overflow-hidden">
      <div className="relative mt-10 w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-[6px] border-[#f8f0e7] bg-white z-10">
        <img
          src={Pegantin}
          alt="Pengantin"
          className="w-full h-full object-cover"
        />

        <img
          src={BungaKiri}
          alt="Bunga kiri"
          className="absolute -bottom-8 -left-10 w-28 md:w-36 z-20"
        />
        <img
          src={BungaKanan}
          alt="Bunga kanan"
          className="absolute -bottom-8 -right-10 w-28 md:w-36 z-20"
        />
      </div>

      <div className="mt-10 text-center px-6 max-w-lg z-30">
        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
          kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>

        <p className="mt-6 text-[#5F3C28] font-semibold text-lg">
          Wassalamu'alaikum Wr. Wb.
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-[Parisienne,cursive] text-[#5F3C28]">
          Habib & Adiba
        </h2>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <img
          src={BungaKiri}
          alt="Dekor bawah"
          className="w-40 md:w-48 opacity-80"
        />
      </div>
    </section>
  );
}
