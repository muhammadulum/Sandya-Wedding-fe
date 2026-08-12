import React from "react";

import BgCover from "../../assets/asset-brown/bg-cover.jpg"; // pastikan file bg-cover kamu ada di folder ini
import AndSection from "../../assets/asset-brown/dan.png";
import { FaInstagram } from "react-icons/fa";

import Groom from "../../assets/asset-brown/pengantin/7.jpg";
import Bride from "../../assets/asset-brown/pengantin/8.jpg";
import { motion } from "framer-motion";

export default function BrideAndGroomSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 py-16"
      style={{ backgroundImage: `url(${BgCover})` }}
    >
      {/* === Kartu besar menyatu === */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg max-w-lg w-full text-center border border-[#b48a60] p-8">
        {/* === Bagian Anis === */}
        <h2 className="text-3xl font-belleza tracking-widest text-[#5a3e2b] mb-4">
          BRIDE & GROOM
        </h2>

        <p className="text-sm text-[#5a3e2b] leading-relaxed mb-6">
          Assalamualaikum Warahmatullaahi Wabarakaatuh <br />
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri
          kami:
        </p>

        <div className="relative w-64 h-80 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-[#5a3e2b] rounded-full"></div>
          <img
            src={Bride}
            alt="Bride"
            className="w-full h-full object-cover rounded-full border-4 border-[#5a3e2b]"
          />
        </div>

        {/* <h3 className="text-3xl font-belleza text-[#5a3e2b] mb-1">Dewi</h3>
        <p className="text-[#5a3e2b] font-medium mb-2">Dewi Hatansiah</p>
        <p className="text-sm text-[#5a3e2b] mb-6">
          Putri Pertama dari <br />
          Bpk. Sulaiman (Alm) & Ibu Rukiah
        </p> */}

        <motion.div
          initial={{ opacity: 0, x: 50 }} // mulai dari kanan (x positif)
          whileInView={{ opacity: 1, x: 0 }} // geser ke posisi normal
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-belleza text-[#5a3e2b] mb-1">Dewi</h3>
          <p className="text-[#5a3e2b] font-medium mb-2">Dewi Hatansiah</p>
          <p className="text-sm text-[#5a3e2b] mb-6">
            Putri Pertama dari <br />
            Bpk. Sulaiman (Alm) & Ibu Rukiah
          </p>
        </motion.div>

        <a
          href="https://www.instagram.com/dewiatan_?igsh=MTZxeHgxc29ja3VkYQ=="
          className="inline-flex items-center justify-center w-10 h-10 bg-[#5a3e2b] rounded-full hover:bg-[#7b553a] transition mb-6"
        >
          <FaInstagram className="text-white text-xl" />
        </a>

        {/* === Pemisah & dekorasi tengah === */}
        <div className="flex flex-col items-center my-8 relative">
          <div className="px-4 relative z-10">
            <img
              src={AndSection}
              alt="Decoration"
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16"
            />
          </div>
        </div>

        {/* === Bagian Fadli === */}
        <div className="relative w-64 h-80 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-[#5a3e2b] rounded-full"></div>
          <img
            src={Groom}
            alt="Groom"
            className="w-full h-full object-cover rounded-full border-4 border-[#5a3e2b]"
          />
        </div>

        {/* <h3 className="text-3xl font-script text-[#5a3e2b] mb-1">Irfan</h3>
        <p className="text-[#5a3e2b] font-medium mb-2">Mohamad Irfan Saputra</p>
        <p className="text-sm text-[#5a3e2b] mb-6">
          Putra Kedua dari <br />
          Bpk. Tuswanto & Ibu Widiyani
        </p> */}

        <motion.div
          initial={{ opacity: 0, x: -50 }} // mulai dari kiri (x negatif)
          whileInView={{ opacity: 1, x: 0 }} // geser ke posisi normal
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-script text-[#5a3e2b] mb-1">Irfan</h3>
          <p className="text-[#5a3e2b] font-medium mb-2">
            Mohamad Irfan Saputra
          </p>
          <p className="text-sm text-[#5a3e2b] mb-6">
            Putra Kedua dari <br />
            Bpk. Tuswanto & Ibu Widiyani
          </p>
        </motion.div>
        <a
          href="https://www.instagram.com/m_irfansaputra?igsh=MWJsZ3Z1aXp5ajIwZQ=="
          className="inline-flex items-center justify-center w-10 h-10 bg-[#5a3e2b] rounded-full hover:bg-[#7b553a] transition mb-6"
        >
          <FaInstagram className="text-white text-xl" />
        </a>
      </div>
    </section>
  );
}
