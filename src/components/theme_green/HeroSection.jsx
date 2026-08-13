import React from "react";
import { useState, useEffect } from "react";
import { getWeddingInfo } from "../../api/weddingApi";

// import bgWayang from "../../assets/asset-green/bg-herosection.jpg";

import Ornamentimg from "../../assets/asset-green/another/SCYLLA-ASSET-GC-1.jpg";
import Lottie from "lottie-react";
import birdAnimation from "../../assets/asset-green/another/bird.json";

export default function HeroSection({ guestName }) {
  const [weddingInfo, setWeddingInfo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const info = await getWeddingInfo();
        setWeddingInfo(info || null);
      } catch (err) {
        console.error("Failed to load wedding info", err);
      }
    })();
  }, []);

  const coupleName = weddingInfo
    ? `${weddingInfo.bride_name || ""} & ${weddingInfo.groom_name || ""}`.trim()
    : "Nadya & Ulum";

  const dateText =
    weddingInfo && weddingInfo.wedding_date
      ? new Date(weddingInfo.wedding_date).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "Sabtu, 22 Agustus 2026";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover px-4 sm:px-6 py-10"
      style={{
        backgroundImage: `url(${Ornamentimg})`,
        backgroundColor: "#3b2416",
      }}
    >
      {/* <div className="absolute inset-0 bg-[#3b2416]/60"></div> */}

      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Burung Pertama */}
        <div className="absolute bottom-10 -left-20 w-16 sm:w-24 md:w-32 animate-bird-1 opacity-80">
          <Lottie
            animationData={birdAnimation}
            loop={true}
            autoplay={true}
            style={{ transform: "scale(20)" }}
          />
        </div>

        <div className="absolute bottom-5 -left-20 w-10 sm:w-16 md:w-20 animate-bird-2 opacity-60">
          <Lottie
            animationData={birdAnimation}
            loop={true}
            autoplay={true}
            style={{ transform: "scale(20)" }}
          />
        </div>
      </div>

      <div className="relative w-full max-w-md mx-auto text-center text-textsecondary font-serif rounded-[20px] p-6 sm:p-8 lg:p-10 bg-no-repeat bg-center bg-contain animate-fadeIn">
        <h3 className="text-xl sm:text-sm md:text-base tracking-[3px] font-greatvibes text-[#9B7930]">
          The Wedding Of
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-2 leading-tight  text-[#9B7930] ">
          Nadya & Ulum
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#9B7930]">
          {dateText}
        </p>

        <div className="mt-10 mb-6 flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm md:text-base text-[#9B7930]">
            Kepada Yth :
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold mt-1 text-[#9B7930]">
            Bpk/Ibu/Saudara/i
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mt-2 text-textsecondary">
            {guestName || "Tamu Undangan"}
          </p>
        </div>
      </div>
    </section>
  );
}
