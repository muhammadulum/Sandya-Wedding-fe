// import { useParams, useSearchParams } from "react-router-dom";
import HeroSection from "../../components/theme_green/HeroSection";
import React, { useState } from "react";
import LocationSection from "../../components/theme_green/LocationSection";
import MusicControl from "../../components/theme_green/MusicControl";
import VerseSection from "../../components/theme_green/VerseSection";
import BrideAndGroomSection from "../../components/theme_green/BrideAndGroomSection";
import AkadSection from "../../components/theme_green/AkadAndResepsiSection";
import Countingday from "../../components/theme_green/CountingDaySection";
import GallerySection from "../../components/theme_green/GalerySection";
import GiftSection from "../../components/theme_green/GiftSection";
import BestWishetSection from "../../components/theme_green/BestWishetSection";
import LoveStory from "../../components/theme_green/LoveStory";

import LastSetion from "../../components/theme_green/LastSetion";

export default function InvitationPage({ guestName }) {
  console.log(">>> InvitationPage menerima:", guestName);

  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  return (
    <main className="relative bg-white text-gray-800 overflow-x-hidden">
      <div className="">
        <HeroSection guestName={guestName} />
        <VerseSection />
        <BrideAndGroomSection />
        <Countingday />
        <AkadSection />
        <GallerySection />
        <LoveStory />
        <GiftSection />
        <BestWishetSection />
        <LocationSection />
        <LastSetion />

        <MusicControl autoPlay={autoPlayMusic} />
      </div>
    </main>
  );
}
