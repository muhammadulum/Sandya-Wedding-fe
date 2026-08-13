import React from "react";
import { motion } from "framer-motion";

import bgtext from "../../assets/asset-green/another/ASSET-GC-KALUNA-10-1-e1753796423225.png";
import fotoPengantin from "../../assets/asset-green/pengantin/hiro.jpeg";
import bgOuter from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";
import bgBottomFloral from "../../assets/asset-green/another/ASSET-GC-KALUNA-10-e1753796372980.png";

export default function VerseSection() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-start py-8 px-4 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgOuter})`,
      }}
    >
      <div className="relative w-full max-w-md flex flex-col items-center">
        <motion.div
          className="relative w-[95%] aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={fotoPengantin}
            alt="Pengantin"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="relative w-[90%] -mt-12 pt-16 pb-36 px-6 bg-cover bg-center text-center shadow-sm z-10 rounded-b-2xl"
          style={{
            backgroundImage: `url(${bgtext})`,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[#655337] text-xs sm:text-sm font-serif leading-relaxed italic mb-3">
            "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
            pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan
            hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang
            demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
            berpikir."
          </p>

          <p className="text-[#8c734b] text-xs sm:text-sm font-serif font-semibold italic">
            QS. Ar-Rum Ayat 21
          </p>
        </motion.div>
      </div>

      <div className="absolute -bottom-9 left-0 right-0 w-full pointer-events-none z-30 translate-y-4">
        <img
          src={bgBottomFloral}
          alt="Ornamen Bunga Bawah"
          className="w-full h-auto object-cover max-h-[220px] sm:max-h-[260px] mx-auto"
        />
      </div>
    </section>
  );
}
