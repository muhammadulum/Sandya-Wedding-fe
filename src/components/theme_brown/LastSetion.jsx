import React from "react";
import BgCountingDay from "../../assets/asset-brown/bg-lastsection.png";
import Pegantin from "../../assets/asset-brown/pengantin/6.jpg";
import BungaKiri from "../../assets/asset-brown/bunga.png";
import BungaKanan from "../../assets/asset-brown/bunga.png";

export default function LastSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${BgCountingDay})` }}
    >
      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Wrapper untuk foto dan bunga */}
        <div className="relative mt-10 flex items-center justify-center">
          {/* Bunga kiri */}

          <img
            src={BungaKiri}
            alt="Bunga kiri"
            className="absolute left-[-40px] top-[80%] -translate-y-1/2 w-28 md:w-36 z-20 scale-x-[-1] -rotate-[15deg]"
          />

          {/* Foto pengantin */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-[6px] border-[#f8f0e7] bg-white z-10">
            <img
              src={Pegantin}
              alt="Pengantin"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bunga kanan */}
          <img
            src={BungaKanan}
            alt="Bunga kanan"
            className="absolute right-[-40px] top-[80%] -translate-y-1/2 w-28 md:w-36 z-20 rotate-[15deg]"
          />
        </div>

        {/* Teks bawah */}
        <div className="relative text-center px-6 py-16">
          <p className="text-[#5a3e1b] text-[15px] leading-relaxed mb-4">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restu kepada
            kami. Atas kehadiran dan doa restunya kami ucapkan terima kasih.
          </p>

          <h1 className="text-[#5a3e1b] tracking-wide text-lg mb-2 font-pinyon">
            Wassalamualaikum Warahmatullahi Wabarakatuh
          </h1>
          <h2 className="text-3xl md:text-4xl text-[#5a3e1b] font-pinyon">
            Dewi &amp; Irfan
          </h2>
        </div>
      </div>
    </section>
  );
}
