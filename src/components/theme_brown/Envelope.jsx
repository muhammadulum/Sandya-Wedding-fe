import { useState, useEffect } from "react";

import { getWeddingInfo } from "../../api/weddingApi";
import InvitationPage from "../../pages/pege-brown/InvitationPage.jsx";
import wayangImg from "../../assets/asset-brown/wayang.png";
import Ornamentimg from "../../assets/asset-brown/ornament.jpg";

export default function Envelope() {
  const [guestName, setGuestName] = useState("");
  const [showInvitation, setShowInvitation] = useState(false);
  const [weddingInfo, setWeddingInfo] = useState(null);

  // Ambil nama tamu dari URL (contoh: ?to-Muhammad%20Fadli)
  // useEffect(() => {
  //   const query = window.location.search;
  //   const nameFromUrl = query.startsWith("?to-")
  //     ? decodeURIComponent(query.replace("?to-", "").trim())
  //     : "";
  //   setGuestName(nameFromUrl);
  // }, []);

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
    : "Dewi & Irfan";

  const dateText =
    weddingInfo && weddingInfo.wedding_date
      ? new Date(weddingInfo.wedding_date).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "Sabtu, 13 Desember 2025";

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

      <div className="relative w-full max-w-md mx-auto text-center text-textsecondary font-serif rounded-[20px] p-6 sm:p-8 lg:p-10 bg-no-repeat bg-center bg-contain animate-fadeIn">
        <div className="flex justify-center mb-4 animate-slideDown">
          <img
            src={wayangImg}
            alt="Wayang Icon"
            className="w-14 sm:w-16 md:w-20 h-auto object-contain"
          />
        </div>

        <h3 className="text-xs sm:text-sm md:text-base tracking-[3px] uppercase text-teksprimary">
          The Wedding Of
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-2 leading-tight text-textsecondary font-pinyon">
          {coupleName}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-teksprimary">
          {dateText}
        </p>

        <div className="mt-10 mb-6 flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm md:text-base text-teksprimary/90">
            Kepada Yth :
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold mt-1 text-teksprimary">
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
              <span>💌</span> Buka Undangan
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
