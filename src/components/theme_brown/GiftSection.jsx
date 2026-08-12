import React from "react";
import { Copy, MapPin } from "lucide-react";
import CardAtm from "../../assets/asset-brown/cardatm.webp"; // pastikan path ini sesuai

export default function GiftSection() {
  const accounts = [
    {
      bank: "Mandiri",
      name: "Dewi Hatansiah",
      number: "1460018929518",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fa/Bank_Mandiri_logo.svg",
    },
    {
      bank: "Mandiri",
      name: "Mohamad Irfan Saputra",
      number: "1460017710273",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fa/Bank_Mandiri_logo.svg",
    },
  ];

  const giftAddress = {
    title: "Kirim Hadiah ke Alamat",
    name: "Dewi & Irfan",
    address:
      "Gg. Langsat 33,Tengah, Kec. Delta Pawan, Kabupaten Ketapang, Kalimantan Barat 78821",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Teks disalin ke clipboard!");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#d8b9a3] text-center px-6 py-12">
      {/* Judul */}
      <h2 className="font-[Belleza] text-3xl md:text-4xl text-brown-900 italic mb-3">
        Wedding Gift
      </h2>
      <p className="text-sm md:text-base text-gray-700 max-w-md mb-8">
        Bagi bapak/Ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat
        melalui nomor rekening atau alamat di bawah ini
      </p>

      {/* Kartu rekening */}
      <div className="space-y-6 w-full max-w-md">
        {accounts.map((acc, index) => (
          <div
            key={index}
            className="relative w-full h-52 rounded-2xl overflow-hidden shadow-2xl border border-gray-300 text-white"
            style={{
              backgroundImage: `url(${CardAtm})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay gelap agar teks lebih jelas */}
            {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" /> */}

            {/* Konten kartu */}
            <div className="relative z-10 h-full flex flex-col justify-between p-5">
              {/* Logo bank di kanan atas */}
              <div className="flex justify-between items-start">
                <div className="w-10 h-7  rounded-sm" /> {/* simulasi chip */}
                <img
                  src={acc.logo}
                  alt={acc.bank}
                  className="w-20 h-auto object-contain"
                />
              </div>

              {/* Nomor rekening */}
              <div className="text-center mt-3">
                <p className="font-mono text-lg md:text-xl tracking-widest">
                  {acc.number}
                </p>
              </div>

              {/* Nama & tombol salin */}
              <div className="flex justify-between items-center mt-2">
                <div className="text-left">
                  <p className="font-semibold text-sm uppercase tracking-wide">
                    {acc.name}
                  </p>
                  <p className="text-xs opacity-80">{acc.bank}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(acc.number)}
                  className="bg-white/30 hover:bg-white/50 text-white text-xs px-3 py-1 rounded-lg flex items-center gap-1 transition-all"
                >
                  <Copy size={14} />
                  Salin
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Kartu alamat hadiah */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-2xl p-5 border border-gray-200 text-left">
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="text-gray-600" />
            <h3 className="font-semibold text-gray-700">{giftAddress.title}</h3>
          </div>
          <p className="font-semibold text-gray-800 text-sm mb-1">
            {giftAddress.name}
          </p>
          <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
            {giftAddress.address}
          </pre>
          <button
            onClick={() => copyToClipboard(giftAddress.address)}
            className="mt-3 bg-gray-200 hover:bg-gray-300 transition-all text-gray-700 px-3 py-1 rounded-lg flex items-center gap-1"
          >
            <Copy size={14} />
            <span className="text-sm">Salin Alamat</span>
          </button>
        </div>
      </div>
    </section>
  );
}
