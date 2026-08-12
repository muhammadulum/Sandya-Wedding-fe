import { useState, useEffect } from "react";

import { getWeddingInfo } from "../../api/weddingApi";
import InvitationPage from "../../pages/page-green/InvitationPage";
import wayangImg from "../../assets/asset-green/wayang.png";
// import Ornamentimg from "../../assets/asset-green/ornament.jpg";

import Ornamentimg from "../../assets/asset-green/another/SCYLLA-ASSET-GC-1.jpg";
import Lottie from "lottie-react";
import birdAnimation from "../../assets/asset-green/another/bird.json";

export default function Envelope() {
  const [guestName, setGuestName] = useState("");
  const [showInvitation, setShowInvitation] = useState(false);
  const [weddingInfo, setWeddingInfo] = useState(null);

  useEffect(() => {
    const raw = window.location.search;

    // Format lama: ?to-Nama%20Tamu
    if (raw.startsWith("?to-")) {
      const name = raw.substring(4); // buang "?to-"
      setGuestName(decodeURIComponent(name).trim());
      return;
    }

    // Format baru (jagai kalau nanti pakai ?to=Nama)
    const params = new URLSearchParams(window.location.search);
    const name2 = params.get("to");
    if (name2) setGuestName(decodeURIComponent(name2).trim());
  }, []);
  // Ambil data info pernikahan
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

  // Kalau sudah klik buka undangan → tampilkan halaman InvitationPage
  if (showInvitation) {
    return <InvitationPage guestName={guestName} />;
  }

  // Tampilan awal (Envelope)
  return (
    <div
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

        {/* Burung Kedua (Pengiring) */}
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
          {coupleName}
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

        {guestName ? (
          <div className="flex justify-center w-full mt-6">
            <button
              onClick={() => setShowInvitation(true)}
              className="mt-4 bg-[#d9b777] text-[#3b2416] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#e4c489] transition flex items-center gap-2 text-sm sm:text-base md:text-lg"
            >
              Open Invitation
            </button>
          </div>
        ) : (
          <p className="text-textsecondary/70 text-sm mt-4">
            Nama tamu tidak ditemukan di URL.
          </p>
        )}
      </div>
    </div>
  );
}
