import React from "react";
import { MapPin } from "lucide-react"; // pastikan sudah install: npm install lucide-react
import BgAkaddanResepsi from "../../assets/asset-brown/bg-akaddanresepsi.jpg"; // pastikan file gambarnya ada di folder ini
import IconAkad from "../../assets/asset-brown/akad.png"; // ikon cincin
import IconResepsi from "../../assets/asset-brown/resepsi.png"; // ikon dekorasi
import ExpSplit from "./ExpSplit.jsx";
import BgCountingDay from "../../assets/asset-brown/bg-count.jpg";
export default function AkadSection() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${BgCountingDay})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="flex justify-center items-center py-10 px-4">
        <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-lg text-center p-8 border border-[#cbb193]">
          {/* ✅ Layer 1: Background ExpSplit */}
          <div className="absolute inset-0 z-0">
            <ExpSplit />
          </div>

          {/* ✅ Layer 2: Overlay gelap semi-transparan */}
          <div className="absolute inset-0 bg-black/30" />

          {/* ✅ Layer 3: Konten utama */}
          <div className="relative z-20 text-[#E8C27E]">
            {/* Ikon */}
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#b08c59] bg-white/20 backdrop-blur-sm">
                <img
                  src={IconAkad}
                  alt="Icon Akad"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            {/* Judul dan tanggal */}
            <h2 className="text-xl font-semibold tracking-wide mb-2">AKAD</h2>
            <p className="text-sm font-medium">Sabtu, 13 Desember 2025</p>
            <p className="text-sm mb-6">09.00 s.d Selesai</p>

            {/* Lokasi */}
            <p className="text-sm font-semibold mb-1">
              Kediaman Mempelai Wanita
            </p>
            <p className="text-xs leading-relaxed mb-6">
              JL.R. Suprapto Gg. Durian, Gg. Langsat
            </p>

            {/* Tombol */}
            <a
              href="https://maps.app.goo.gl/PB1wK7miEp1mwD7n9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7b5b3e] hover:bg-[#5a3e1b] text-[#E8C27E] text-sm font-medium py-2 px-4 rounded-full transition-all"
            >
              <MapPin size={16} />
              OPEN MAPS
            </a>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center py-10 px-4 ">
        <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-lg text-center p-8 border border-[#cbb193]">
          {/* ✅ Layer 1: Background ExpSplit */}
          <div className="absolute inset-0 z-0">
            <ExpSplit />
          </div>

          {/* ✅ Layer 2: Overlay gelap semi-transparan */}
          <div className="absolute inset-0 bg-black/30" />

          {/* ✅ Layer 3: Konten utama */}
          <div className="relative z-20 text-[#E8C27E]">
            {/* Ikon */}
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#b08c59] bg-white/20 backdrop-blur-sm">
                <img
                  src={IconResepsi}
                  alt="Icon Akad"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            {/* Judul dan tanggal */}
            <h2 className="text-xl font-semibold tracking-wide mb-2">
              RESEPSI
            </h2>
            <p className="text-sm font-medium"> Sabtu, 13 Desember 2025</p>
            <p className="text-sm mb-6">16.00 s.d 21.00 WIB</p>

            {/* Lokasi */}
            <p className="text-sm font-semibold mb-1">
              Kediaman Mempelai Wanita
            </p>
            <p className="text-xs leading-relaxed mb-6">
              JL.R. Suprapto Gg. Durian, Gg. Langsat
            </p>

            {/* Tombol */}
            <a
              href="https://maps.app.goo.gl/PB1wK7miEp1mwD7n9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7b5b3e] hover:bg-[#5a3e1b] text-[#E8C27E] text-sm font-medium py-2 px-4 rounded-full transition-all"
            >
              <MapPin size={16} />
              OPEN MAPS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
