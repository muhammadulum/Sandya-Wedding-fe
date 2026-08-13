import React from "react";
import { motion } from "framer-motion";

import BgLastSection from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";
import bgbuttomSection from "../../assets/asset-green/another/ASSET-GC-KALUNA-6.png";
import Pengantin from "../../assets/asset-green/pengantin/15.jpeg";

export default function LastSection() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-12 px-4 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BgLastSection})` }}
    >
      <div className="relative z-20 flex flex-col items-center text-center max-w-sm sm:max-w-md w-full my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-48 h-72 sm:w-56 sm:h-80 rounded-[120px] overflow-hidden border-2 border-[#c4a97d]/70 shadow-xl mb-8"
        >
          <img
            src={Pengantin}
            alt="Pengantin"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="px-2"
        >
          <p className="text-xs sm:text-sm font-serif text-[#a27b38] leading-relaxed max-w-xs sm:max-w-sm mx-auto mb-6">
            Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dalam hari bahagia ini. Terima kasih atas segala
            ucapan, doa, dan perhatian yang diberikan.
          </p>

          <p className="text-sm sm:text-base font-serif italic text-[#a27b38] mb-4 font-medium">
            See you on our big day!
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.2em] text-[#a27b38] font-normal uppercase leading-tight">
            NADYA
          </h2>
          <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.2em] text-[#a27b38] font-normal uppercase leading-tight">
            & ULUM
          </h2>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
        <img
          src={bgbuttomSection}
          alt="Ornamen Bawah"
          className="w-full h-auto object-contain object-bottom block"
        />
      </div>
    </section>
  );
}
