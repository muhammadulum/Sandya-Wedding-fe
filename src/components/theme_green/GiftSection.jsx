import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, MapPin, Gift, ChevronUp } from "lucide-react";
import CardAtm from "../../assets/asset-green/cardatm.webp";
import BgGift from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";

import Bgflowerupper from "../../assets/asset-green/another/cardup.png";
import Bgflowerdown from "../../assets/asset-green/another/carddown.png";

export default function GiftSection() {
  const [showCards, setShowCards] = useState(false);

  const accounts = [
    {
      bank: "Mandiri",
      name: "Nadya Herlanda",
      number: "1460020779190",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fa/Bank_Mandiri_logo.svg",
    },
    {
      bank: "Bank Central Asia (BCA)",
      name: "Muhammad Mietakhul Ulum",
      number: "8020773686",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/500px-Bank_Central_Asia.svg.png?utm_source=id.wikipedia.org&amp;utm_campaign=imageinfo&amp;utm_content=thumbnail",
    },
  ];

  const giftAddress = {
    title: "Kirim Hadiah ke Alamat",
    name: "Nadya & Ulum",
    address:
      "Jl Rangga Sentap, GG. Poltek 1 (Rumah Sebelah Kanan Ujung Warna Putih), Kel. Sukaharja.  Kec. Delta pawan, Kabupaten Ketapang, Kalimantan Barat 78813",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Teks berhasil disalin!");
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BgGift})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full max-w-sm sm:max-w-md bg-[#fdfcf9]/95 backdrop-blur-sm rounded-t-[35px] rounded-b-[40px] border border-[#c4a97d]/40 shadow-2xl p-6 sm:p-8 text-center flex flex-col items-center my-8 z-10 overflow-hidden"
      >
        <img
          src={Bgflowerupper}
          alt="Ornamen Atas"
          className="absolute top-[-20px] left-[-10px] w-full h-auto pointer-events-none z-0 object-contain"
        />

        <img
          src={Bgflowerdown}
          alt="Ornamen Bawah"
          className="absolute bottom-[-40px] left-10 w-full h-auto pointer-events-none z-0 object-contain"
        />

        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.15em] text-[#a27b38] font-normal uppercase mb-3 mt-4">
            WEDDING GIFT
          </h2>

          <p className="text-xs sm:text-sm font-serif text-[#785b28] leading-relaxed max-w-xs mx-auto mb-6">
            Kehadiran dan doa Anda adalah hadiah terindah bagi kami. Namun,
            apabila berkenan memberikan tanda kasih, silakan gunakan informasi
            di bawah ini.
          </p>

          <button
            onClick={() => setShowCards(!showCards)}
            className="bg-[#9e7632] hover:bg-[#836024] text-white text-xs font-serif tracking-widest px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md active:scale-95"
          >
            {showCards ? (
              <>
                <ChevronUp size={16} />
                SEMBUNYIKAN
              </>
            ) : (
              <>
                <Gift size={16} />
                TAMPILKAN
              </>
            )}
          </button>

          <AnimatePresence>
            {showCards && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full space-y-6 mt-8 overflow-hidden text-left"
              >
                {accounts.map((acc, index) => (
                  <div
                    key={index}
                    className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md text-white border border-[#c4a97d]/30"
                    style={{
                      backgroundImage: `url(${CardAtm})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="relative z-10 h-full flex flex-col justify-between p-5">
                      <div className="flex justify-between items-start">
                        <div className="w-9 h-6 bg-yellow-500/80 rounded-sm shadow-inner" />
                        <img
                          src={acc.logo}
                          alt={acc.bank}
                          className="w-16 h-auto object-contain brightness-200"
                        />
                      </div>

                      <div className="text-center my-1">
                        <p className="font-mono text-base sm:text-lg tracking-[0.2em]">
                          {acc.number}
                        </p>
                      </div>

                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[10px] text-gray-200 uppercase tracking-widest">
                            {acc.bank}
                          </p>
                          <p className="font-serif font-semibold text-xs sm:text-sm uppercase tracking-wide">
                            {acc.name}
                          </p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(acc.number)}
                          className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white text-[11px] font-serif px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all border border-white/30"
                        >
                          <Copy size={12} />
                          Salin
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-[#f8f5ee] rounded-2xl p-5 border border-[#c4a97d]/40 shadow-sm text-left">
                  <div className="flex items-center gap-2 mb-2 text-[#9e7632]">
                    <MapPin size={18} />
                    <h3 className="font-serif font-semibold text-xs uppercase tracking-wider">
                      {giftAddress.title}
                    </h3>
                  </div>
                  <p className="font-serif font-medium text-sm text-[#5a3e2b] mb-1">
                    {giftAddress.name}
                  </p>
                  <p className="font-serif text-xs text-[#785b28] leading-relaxed mb-4">
                    {giftAddress.address}
                  </p>
                  <button
                    onClick={() => copyToClipboard(giftAddress.address)}
                    className="bg-[#9e7632] hover:bg-[#836024] text-white text-[11px] font-serif tracking-widest px-4 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                  >
                    <Copy size={12} />
                    SALIN ALAMAT
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
