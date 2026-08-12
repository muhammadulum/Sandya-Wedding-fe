import React from "react";
import Bgsatu from "../../assets/asset-brown/7.jpg";
import Bgdua from "../../assets/asset-brown/6.jpg";
// pastikan file gambarnya ada di folder ini
export default function ExpSplit() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[4/5] overflow-hidden  border-[#b08c59] rounded-2xl shadow-lg">
      {/* Gambar utama (bawah) */}
      <img
        src={Bgdua}
        alt="Bagian bawah"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gambar overlay dengan fade diagonal */}
      <img
        src={Bgsatu}
        alt="Bagian atas"
        className="absolute inset-0 w-full h-full object-cover z-10 [clip-path:polygon(0_0,100%_0,100%_40%,0_60%)] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]"
      />
    </div>
  );
}
