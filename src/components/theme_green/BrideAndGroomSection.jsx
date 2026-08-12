import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

// SESUAIKAN PATH IMPORT GAMBAR SESUAI STRUKTUR PROYEKMU
import BgCover from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";
import Groom from "../../assets/asset-green/pengantin/grom.jpeg";
import Bride from "../../assets/asset-green/pengantin/bridge.jpeg";

// IMPORT ORNAMEN FRAME CARD
import bgupcard from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.png";
import bgsidecard from "../../assets/asset-green/another/SCYLLA-ASSET-GC-4.png";
import bgdowncard from "../../assets/asset-green/another/SCYLLA-ASSET-GC-3.png";

export default function BrideAndGroomSection() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BgCover})` }}
    >
      {/* CARD UTAMA DENGAN BENTUK KUBAH (ARCH FRAME) */}
      <div className="relative w-full max-w-md bg-[#fbf9f5]/90 backdrop-blur-sm rounded-t-[180px] rounded-b-[180px] border border-[#c4a97d]/40 shadow-2xl p-6 sm:p-8 text-center flex flex-col items-center overflow-hidden">
        {/* ========================================================= */}
        {/* === LAYER ORNAMEN BACKGROUND CARD (DESAIN BINGKAI) ======= */}
        {/* ========================================================= */}

        {/* 1. Ornamen Atas (bgupcard) */}
        <img
          src={bgupcard}
          alt="Ornamen Atas"
          className="absolute top-0 left-0 w-full h-auto pointer-events-none z-0 object-contain"
        />

        {/* 2. Ornamen Tengah (bgsidecard) */}
        <img
          src={bgsidecard}
          alt="Ornamen Samping/Tengah"
          className="absolute top-1/2 left-0 w-full -translate-y-12 pointer-events-none z-0 object-contain opacity-90"
        />

        {/* 3. Ornamen Bawah (bgdowncard) */}
        <img
          src={bgdowncard}
          alt="Ornamen Bawah"
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-0 object-contain"
        />

        {/* ========================================================= */}
        {/* === KONTEN UTAMA (Z-INDEX 10 AGAR DI ATAS ORNAMEN) ====== */}
        {/* ========================================================= */}

        {/* 1. HEADER TEXT */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="z-10 mt-10 mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#8c734b] mb-2">
            With Love
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#655337] max-w-xs mx-auto leading-relaxed">
            Dengan rahmat Tuhan Yang Maha Esa dan berkah Sang Triratna kami
            mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami:
          </p>
        </motion.div>

        {/* 2. BAGIAN PENGANTIN PRIA (GROOM) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full z-10 mb-8"
        >
          {/* Frame Foto Oval Memanjang */}
          <div className="relative w-48 h-72 sm:w-56 sm:h-80 rounded-[120px] overflow-hidden border-2 border-[#8c734b]/60 shadow-md mb-5">
            <img
              src={Groom}
              alt="Andrew"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nama & Detail */}
          <h3 className="text-3xl sm:text-4xl font-serif italic text-[#8c734b] mb-1">
            Ulum
          </h3>
          <p className="text-sm sm:text-base font-serif font-semibold text-[#5a3e2b] mb-1">
            Muhammad Mietakhul Ulum
          </p>
          <p className="text-xs text-[#7b553a] font-serif mb-3">
            Putra dari Bapak Sunardi & Ibu Sholikatun
          </p>

          {/* Tombol Instagram Minimalis */}
          <a
            href="https://www.instagram.com/ahmadd_ulum"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-[#8c734b] flex items-center justify-center text-[#8c734b] bg-white/50 hover:bg-[#8c734b] hover:text-white transition-colors"
          >
            <FaInstagram className="text-sm" />
          </a>
        </motion.div>

        {/* 3. PEMISAH AMPERSAND (&) DI TENAH (BERSAMA BGSIDECARD) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-6 text-4xl sm:text-5xl font-serif italic text-[#8c734b] z-10"
        >
          &
        </motion.div>

        {/* 4. BAGIAN PENGANTIN WANITA (BRIDE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full z-10 my-4 mb-14"
        >
          {/* Frame Foto Oval Memanjang */}
          <div className="relative w-48 h-72 sm:w-56 sm:h-80 rounded-[120px] overflow-hidden border-2 border-[#8c734b]/60 shadow-md mb-5">
            <img
              src={Bride}
              alt="Riana"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nama & Detail */}
          <h3 className="text-3xl sm:text-4xl font-serif italic text-[#8c734b] mb-1">
            Nadya
          </h3>
          <p className="text-sm sm:text-base font-serif font-semibold text-[#5a3e2b] mb-1">
            Nadya Herlanda
          </p>
          <p className="text-xs text-[#7b553a] font-serif mb-3">
            Putri dari Bapak Hady Sofiar & Ibu Herlina
          </p>

          {/* Tombol Instagram Minimalis */}
          <a
            href="https://www.instagram.com/nadyaaaahrlnda"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-[#8c734b] flex items-center justify-center text-[#8c734b] bg-white/50 hover:bg-[#8c734b] hover:text-white transition-colors"
          >
            <FaInstagram className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
