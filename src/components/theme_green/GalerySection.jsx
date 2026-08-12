import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// IMPORT FOTO PENGANTIN
import Photo1 from "../../assets/asset-green/pengantin/1.jpeg";
import Photo2 from "../../assets/asset-green/pengantin/2.jpeg";
import Photo3 from "../../assets/asset-green/pengantin/3.jpeg";
import Photo4 from "../../assets/asset-green/pengantin/4.jpeg";
import Photo5 from "../../assets/asset-green/pengantin/5.jpeg";
import Photo6 from "../../assets/asset-green/pengantin/6.jpeg";
import Photo9 from "../../assets/asset-green/pengantin/9.jpeg";
import Photo10 from "../../assets/asset-green/pengantin/10.jpeg";
import Photo11 from "../../assets/asset-green/pengantin/11.jpeg";
import Photo12 from "../../assets/asset-green/pengantin/12.jpeg";
import Photo14 from "../../assets/asset-green/pengantin/14.jpeg";
import Photo15 from "../../assets/asset-green/pengantin/15.jpeg";
import Photo16 from "../../assets/asset-green/pengantin/16.jpeg";
import Photo17 from "../../assets/asset-green/pengantin/17.jpeg";
import Photo18 from "../../assets/asset-green/pengantin/18.jpeg";
import Photo19 from "../../assets/asset-green/pengantin/19.jpeg";

import BgGallery from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";

export default function GallerySection() {
  const allPhotos = [
    Photo16,
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo15,
    Photo6,
    Photo10,
    Photo11,
    Photo12,
    Photo14,
    Photo9,
    Photo17,
    Photo18,
    Photo19,
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  // Buka modal sesuai index foto
  const openModal = (index) => {
    setCurrentIndex(index);
  };

  // Tutup modal
  const closeModal = () => {
    setCurrentIndex(null);
  };

  // Navigasi Foto Sebelumnya
  const prevPhoto = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? allPhotos.length - 1 : prev - 1));
  };

  // Navigasi Foto Selanjutnya
  const nextPhoto = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === allPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="min-h-screen w-full py-16 px-4 sm:px-6 relative overflow-hidden bg-top"
      style={{
        backgroundImage: `url(${BgGallery})`,
        backgroundSize: "100% auto", // Mempertahankan proporsi lebar gambar asli
        backgroundRepeat: "repeat-y", // Melooping gambar ke arah bawah selama konten masih ada
      }}
    >
      {/* 1. HEADER SEKSI GALERI */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-md mx-auto mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-serif tracking-[0.15em] text-[#8c734b] font-light uppercase mb-2">
          OUR GALLERY
        </h2>
        <p className="text-xs sm:text-sm font-serif italic text-[#655337]">
          "Constantly, consistently, continually, You."
        </p>
      </motion.div>

      {/* CONTAINER UTAMA GALERI */}
      <div className="max-w-4xl mx-auto">
        {/* 2. HIGHLIGHT PHOTO (FOTO UTAMA ATAS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-6 cursor-pointer"
          onClick={() => openModal(0)}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-lg border-2 border-[#c4a97d]/50 group">
            <img
              src={allPhotos[0]}
              alt="Highlight Gallery"
              className="w-full h-[280px] sm:h-[400px] object-cover transform group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300" />
          </div>
        </motion.div>

        {/* 3. GRID GALLERY FOTO-FOTO LAINNYA */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {allPhotos.slice(1).map((photo, idx) => {
            const actualIndex = idx + 1;
            return (
              <motion.div
                key={actualIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl shadow-md border border-[#c4a97d]/40 cursor-pointer group bg-white/30 backdrop-blur-sm"
                onClick={() => openModal(actualIndex)}
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={photo}
                    alt={`Gallery ${actualIndex}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 4. MODAL FULLSCREEN LIGHTBOX */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            {/* Tombol Close */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-2.5 rounded-full transition z-50"
            >
              <X size={24} />
            </button>

            {/* Tombol Prev */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 sm:left-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-3 rounded-full transition z-50"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Container Foto Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl max-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Supaya klik foto tidak menutup modal
            >
              <img
                src={allPhotos[currentIndex]}
                alt={`Selected ${currentIndex}`}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
            </motion.div>

            {/* Tombol Next */}
            <button
              onClick={nextPhoto}
              className="absolute right-3 sm:right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-3 rounded-full transition z-50"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
