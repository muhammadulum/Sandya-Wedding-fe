import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import BgStory from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";
import Photo1 from "../../assets/asset-green/pengantin/9.jpeg";
import Photo2 from "../../assets/asset-green/pengantin/17.jpeg";
import Photo3 from "../../assets/asset-green/pengantin/16.jpeg";

export default function LoveStory() {
  const stories = [
    {
      title: (
        <>
          Awal Pertemuan <br />
          <span className="text-xl sm:text-2xl text-[#7a603a]">&</span> <br />
          Takdir yang Bersilangan
        </>
      ),
      description: `Kisah kami bermula dari lorong-lorong SMPN 3, tempat di mana kami pertama kali saling mengenal. Namun, jalan cerita sempat membawa kami pada arah yang berbeda; setelah lulus, ia melangkah ke MAN sementara saya menimba ilmu di SMKN. Jarak di antara kami semakin membentang ketika masa kuliah tiba—saya merantau ke Jogja, dan ia di Jakarta, membuat komunikasi kami semakin memudar. Lucunya, semesta seolah memiliki cara diam-diam untuk tetap merajut benang merah di antara kami. Bertahun-tahun kemudian kami baru menyadari sebuah kebetulan yang manis: di tanggal dan bulan yang persis sama, kami pernah berdiri menikmati ombak di satu pantai yang sama di Jogja, tanpa sedikit pun menyadari kehadiran satu sama lain.`,
    },
    {
      title: (
        <>
          Perjumpaan Kembali <br />
          <span className="text-xl sm:text-2xl text-[#7a603a]">&</span> <br />
          Mengikat Janji
        </>
      ),
      description: `Waktu dan kedewasaan akhirnya benar-benar menyatukan kembali langkah kami. Setelah lulus kuliah dan mulai bekerja di Jakarta, sebuah sapaan sederhana menjadi awal dari komunikasi kami yang sempat terputus. Hingga tibalah hari itu, perjumpaan pertama kami setelah sekian lama di riuhnya bandara—sebuah momen canggung namun hangat yang tanpa disadari menjadi titik balik segalanya. Sejak detik itu, jarak tak lagi punya ruang. Kami menghabiskan hampir tiga tahun masa pacaran untuk saling bertukar cerita, termasuk menertawakan momen tak kasat mata di pantai Jogja dulu, belajar memahami, dan saling mendewasakan. Kini, dengan keyakinan yang utuh, kami memutuskan untuk berhenti mencari dan mulai membangun rumah kami sendiri dalam sebuah ikatan PERNIKAHAN.`,
    },
  ];

  const scrollRefs = useRef([]);

  // Fungsi Auto-Scroll Baru
  useEffect(() => {
    const intervals = [];
    const scrollListeners = []; // Untuk menyimpan event listener agar bisa dibersihkan

    scrollRefs.current.forEach((el, index) => {
      if (el) {
        const step = 1;
        const delay = 60;
        let isPaused = false; // Penanda apakah auto-scroll sedang di-pause

        // 1. Logika untuk Interval Auto-scroll
        const timer = setInterval(() => {
          if (isPaused) return; // Jika sedang di-pause, jangan lakukan apa-apa

          // Jika scroll sudah mentok ke bawah
          if (el.scrollTop + el.clientHeight >= el.scrollHeight - 1) {
            isPaused = true; // Hentikan auto-scroll
          } else {
            // Terus scroll ke bawah
            el.scrollTop += step;
          }
        }, delay);

        intervals.push(timer);

        // 2. Logika untuk Mendeteksi Scroll Manual oleh User
        const handleScroll = () => {
          // Jika user menggeser (scroll) manual teks kembali ke paling atas (posisi 0)
          if (el.scrollTop <= 1) {
            isPaused = false; // Jalankan auto-scroll kembali
          }
        };

        el.addEventListener("scroll", handleScroll);
        scrollListeners.push({ el, handleScroll });
      }
    });

    // Membersihkan interval dan event listener saat komponen ditutup/unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
      scrollListeners.forEach(({ el, handleScroll }) => {
        el.removeEventListener("scroll", handleScroll);
      });
    };
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center py-16 px-4 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BgStory})` }}
    >
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* 1. JUDUL */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-serif text-[#8a6b32] font-normal uppercase tracking-[0.1em] text-center mb-8 z-10 drop-shadow-sm"
      >
        Kisah Cinta
      </motion.h2>

      {/* 2. GALLERY FOTO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center gap-3 sm:gap-4 mb-10 z-10"
      >
        {[Photo1, Photo2, Photo3].map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Momen ${index + 1}`}
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-[20px] shadow-sm border border-white/30"
          />
        ))}
      </motion.div>

      {/* 3. KARTU CERITA (TIMELINE) */}
      <div className="w-full max-w-sm flex flex-col gap-8 z-10">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-[35px] border border-white/50 shadow-sm p-8 text-center"
          >
            <h3 className="text-xl sm:text-3xl font-serif text-[#7a603a] mb-4">
              {story.title}
            </h3>

            <div
              ref={(el) => (scrollRefs.current[index] = el)}
              className="h-40 overflow-y-auto hide-scrollbar"
            >
              <p className="text-sm sm:text-base font-serif text-[#9b8e75] leading-relaxed text-justify pb-4">
                {story.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
