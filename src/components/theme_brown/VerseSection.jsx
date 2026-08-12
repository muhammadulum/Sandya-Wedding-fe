import React from "react";
import wayang from "../../assets/asset-brown/wayang.png";
import { motion } from "framer-motion";
import BgBrideAndGroom from "../../assets/asset-brown/pengantin/9.jpg";
import AnimatedSection from "../../components/theme_brown/AnimatedSection";

export default function VerseSection() {
  return (
    <section
      className="relative flex flex-col justify-center items-center min-h-screen text-[#E8C27E] text-center overflow-hidden"
      style={{
        backgroundImage: `url(${BgBrideAndGroom})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Overlay agar teks terlihat jelas */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Wayang di atas kepala */}
      {/* <img
        src={wayang}
        alt="Wayang"
        className="absolute top-[10%] w-20 md:w-24 animate-slideDown z-10"
      /> */}

      <motion.img
        src={wayang}
        alt="Wayang"
        className="absolute top-[10%] w-20 md:w-24 z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Teks di bagian bawah (tepat di kain merah) */}
      {/* <div className="absolute bottom-[6%] w-full px-6 text-center z-10 animate-slideUp">
        <h2 className="text-2xl md:text-3xl font-belleza tracking-widest mb-4">
          WE FOUND LOVE
        </h2>

        <p className="max-w-2xl font-belleza mx-auto text-sm md:text-base leading-relaxed mb-3">
          "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati
          dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang
          demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
          berpikir."
        </p>

        <p className="text-sm italic font-belleza">QS. Ar-Rum Ayat 21</p>
      </div> */}

      <motion.div
        className="absolute bottom-[6%] w-full px-6 text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-belleza tracking-widest mb-4">
          WE FOUND LOVE
        </h2>

        <p className="max-w-2xl font-belleza mx-auto text-sm md:text-base leading-relaxed mb-3">
          "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati
          dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang
          demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
          berpikir."
        </p>

        <p className="text-sm italic font-belleza">QS. Ar-Rum Ayat 21</p>
      </motion.div>
    </section>
  );
}
