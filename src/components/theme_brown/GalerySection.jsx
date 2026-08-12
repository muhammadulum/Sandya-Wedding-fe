import React, { useState } from "react";
import Photo1 from "../../assets/asset-brown/pengantin/1.jpg"; // sesuaikan path
import Photo2 from "../../assets/asset-brown/pengantin/2.jpg";
import Photo3 from "../../assets/asset-brown/pengantin/3.jpg";
import Photo4 from "../../assets/asset-brown/pengantin/4.jpg";
import Photo5 from "../../assets/asset-brown/pengantin/5.jpg";
import Photo6 from "../../assets/asset-brown/pengantin/6.jpg";

import Photo9 from "../../assets/asset-brown/pengantin/9.jpg";
import Photo10 from "../../assets/asset-brown/pengantin/10.jpg";
import Photo11 from "../../assets/asset-brown/pengantin/11.jpg";
import Photo12 from "../../assets/asset-brown/pengantin/12.jpg";
import Photo13 from "../../assets/asset-brown/pengantin/13.jpg";
import Photo14 from "../../assets/asset-brown/pengantin/14.jpg";
import Photo15 from "../../assets/asset-brown/pengantin/15.jpg";

export default function GallerySection() {
  const photos = [
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
  ];
  const [selectedPhoto, setSelectedPhoto] = useState(null); // state untuk foto yang diklik

  return (
    <section className="min-h-screen bg-[#2a1a12] text-white py-16 px-4 relative">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-2">
          OUR GALLERY
        </h2>
        <p className="text-sm italic text-gray-300">
          Constantly, consistently, continually, You.
        </p>
      </div>

      {/* Highlight photo */}
      <div className="max-w-3xl mx-auto mb-8">
        <div
          className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          onClick={() => setSelectedPhoto(Photo9)}
        >
          <img
            src={Photo9}
            alt="highlight"
            className="w-full h-[300px] object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.slice(1).map((photo, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md bg-[#3b2418] cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo}
              alt={`gallery-${idx}`}
              className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* Modal fullscreen */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)} // klik luar untuk menutup
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-200"
            >
              ✕
            </button>
            <img
              src={selectedPhoto}
              alt="selected"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
