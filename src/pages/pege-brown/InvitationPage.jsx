import { useParams, useSearchParams } from "react-router-dom";
import HeroSection from "../../components/theme_brown/HeroSection";

import LocationSection from "../../components/theme_brown/LocationSection";
import MusicControl from "../../components/theme_brown/MusicControl";
import VerseSection from "../../components/theme_brown/VerseSection";
import BrideAndGroomSection from "../../components/theme_brown/BrideAndGroomSection";
import AkadSection from "../../components/theme_brown/AkadAndResepsiSection";
import Countingday from "../../components/theme_brown/CountingDaySection";
import GallerySection from "../../components/theme_brown/GalerySection";
import GiftSection from "../../components/theme_brown/GiftSection";
import BestWishetSection from "../../components/theme_brown/BestWishetSection";
import AnimatedSection from "../../components/theme_brown/AnimatedSection";
import LastSetion from "../../components/theme_brown/LastSetion";
import BeforeLastSection from "../../components/theme_brown/BeforeLastSection";
import DesignVideoSection from "../../components/theme_brown/DesignVideoSection";
import React, { useState, useRef } from "react";
import DesignVideo from "../../assets/asset-brown/DESIGN-JAWA.mp4";
import ExpSplit from "../../components/theme_brown/ExpSplit";

export default function InvitationPage({ guestName }) {
  // const { guestName } = useParams();
  console.log(">>> InvitationPage menerima:", guestName);
  // const [params] = useSearchParams();
  // const guestName = params.get("to");

  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef(null);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  // Hentikan video di detik ke-15, fade out, lalu tampilkan konten
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= 14.5 && !isFadingOut) {
      video.pause();
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVideoEnded(true);
        setAutoPlayMusic(true);
      }, 200); // durasi fade out
    }
  };

  return (
    <main className="relative bg-white text-gray-800 overflow-x-hidden">
      {/* VIDEO PEMBUKA */}
      {!isVideoEnded && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
            isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            ref={videoRef}
            src={DesignVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted={false}
            playsInline
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
      )}

      {/* ISI UNDANGAN */}
      {isVideoEnded && (
        <div className="">
          <HeroSection guestName={guestName} />
          <VerseSection />
          <BrideAndGroomSection />
          <AkadSection />
          <Countingday />
          <GallerySection />
          <GiftSection />
          <BestWishetSection />
          <LocationSection />
          <LastSetion />

          <MusicControl autoPlay={autoPlayMusic} />
        </div>
      )}
    </main>
  );
}
