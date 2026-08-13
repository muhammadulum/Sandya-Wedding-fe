import React from "react";
import { motion } from "framer-motion";

import BgAkad from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";
import Bgtext from "../../assets/asset-green/another/ASSET-GC-KALUNA-8-2-e1753774995538.png";
import Bgflowerupper from "../../assets/asset-green/another/flowerup.png";
import Bgflowerdown from "../../assets/asset-green/another/B.png";

export default function AkadSection() {
  return (
    <section
      className="relative min-h-screen w-full flex justify-start items-center bg-cover bg-center overflow-hidden py-12"
      style={{
        backgroundImage: `url(${BgAkad})`,
      }}
    >
      <div className="relative w-full max-w-md mx-auto min-h-screen flex flex-col justify-center items-start">
        <div className="absolute top-3 right-0 w-[95%] sm:w-[65%] pointer-events-none z-30">
          <img
            src={Bgflowerupper}
            alt="Ornamen Bunga Upper"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="absolute bottom-1 right-10 w-[85%] sm:w-[65%] pointer-events-none z-30">
          <img
            src={Bgflowerdown}
            alt="Ornamen Bunga Down"
            className="w-full h-auto object-contain"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-[80%] sm:w-[82%] h-fit my-auto py-10 px-6 sm:px-8 text-left bg-cover bg-center rounded-r-3xl shadow-xl z-20 mr-auto"
          style={{
            backgroundImage: `url(${Bgtext})`,
          }}
        >
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif tracking-widest text-[#a27b38] font-normal uppercase mb-3">
              AKAD
            </h2>

            <p className="text-xs sm:text-sm font-serif text-[#785b28] mb-1 font-medium">
              Sabtu, 22 Agustus 2026
            </p>

            <p className="text-xs sm:text-sm font-serif text-[#785b28] mb-3">
              09.00 WIB - Selesai
            </p>

            <p className="text-xs sm:text-sm font-serif tracking-wider uppercase font-semibold text-[#785b28] mb-1">
              KEDIAMAN MEMPELAI WANITA
            </p>

            <p className="text-xs sm:text-sm font-serif italic text-[#785b28] mb-4 leading-relaxed">
              Jl Rangga Sentap, GG. Poltek 1 (Rumah Sebelah Kanan Ujung Warna
              Putih), Kel. Sukaharja. Kec. Delta pawan
            </p>

            <a
              href="https://maps.app.goo.gl/njCvrKHSb2LKS5u37"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e7632] hover:bg-[#836024] text-white text-[11px] font-serif tracking-widest px-5 py-2 rounded-full transition shadow-sm active:scale-95"
            >
              LIHAT LOKASI
            </a>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif tracking-widest text-[#a27b38] font-normal uppercase leading-snug mb-3">
              RESEPSI <br />
              PERNIKAHAN
            </h2>

            <p className="text-xs sm:text-sm font-serif text-[#785b28] mb-1 font-medium">
              Sabtu, 22 Agustus 2026
            </p>

            <p className="text-xs sm:text-sm font-serif text-[#785b28] mb-3">
              15.00 s.d 20.00 WIB
            </p>

            <p className="text-xs sm:text-sm font-serif tracking-wider uppercase font-semibold text-[#785b28] mb-1">
              KEDIAMAN MEMPELAI WANITA
            </p>

            <p className="text-xs sm:text-sm font-serif italic text-[#785b28] mb-4 leading-relaxed">
              Jl Rangga Sentap, GG. Poltek 1 (Rumah Sebelah Kanan Ujung Warna
              Putih), Kel. Sukaharja. Kec. Delta pawan
            </p>

            <a
              href="https://maps.app.goo.gl/njCvrKHSb2LKS5u37"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e7632] hover:bg-[#836024] text-white text-[11px] font-serif tracking-widest px-5 py-2 rounded-full transition shadow-sm active:scale-95"
            >
              LIHAT LOKASI
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
