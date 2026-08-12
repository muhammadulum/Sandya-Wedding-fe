import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

// IMPORT ASSETS
import BgGift from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";
import Bgflowerside from "../../assets/asset-green/another/ASSET-GC-KALUNA-14.png";

export default function BestWishetSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true); // default true/hadir
  const [message, setMessage] = useState("");
  const [rsvpList, setRsvpList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch data awal dari API
  useEffect(() => {
    fetchRsvp();
  }, []);

  const fetchRsvp = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/rsvp");
      const data = await res.json();
      setRsvpList(data);
    } catch (err) {
      console.error("Gagal mengambil data RSVP:", err);
    }
  };

  // Fungsi Kirim Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Harap isi semua kolom!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, attending, message }),
      });

      if (!res.ok) throw new Error("Gagal mengirim data");

      Swal.fire({
        icon: "success",
        title: "Terima kasih!",
        text: "Ucapan & Doa kamu telah berhasil dikirim.",
        confirmButtonColor: "#9e7632",
      });

      // reset input
      setName("");
      setMessage("");

      // refresh list
      await fetchRsvp();
    } catch (err) {
      console.error(err);
      const errorMsg =
        err.response?.data?.error || "Terjadi kesalahan saat mengirim data.";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
        confirmButtonColor: "#9e7632",
      });
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(rsvpList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rsvpList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-start py-14 px-4 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BgGift})` }}
    >
      {/* 1. DEKORASI BINGKAI BUNGA SATU GAMBAR UTUH TRANSPARAN (FULLSCREEN) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <img
          src={Bgflowerside}
          alt="Flower Frame"
          className="w-full h-full object-cover sm:object-contain"
        />
      </div>

      {/* 2. CONTAINER UTAMA (FORM & UCAPAN) */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-md flex flex-col items-center text-left">
        {/* HEADER JUDUL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-serif tracking-[0.15em] text-[#a27b38] font-normal uppercase leading-tight">
            UCAPAN
          </h2>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-[0.15em] text-[#a27b38] font-normal uppercase leading-tight">
            &DOA
          </h2>
        </motion.div>

        {/* FORM ISIAN */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* INPUT NAMA */}
          <div>
            <label className="block text-xs sm:text-sm font-serif text-[#000000] mb-1.5 font-medium">
              Tuliskan nama anda:
            </label>
            <input
              type="text"
              placeholder="..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/90 border border-white/80 rounded-2xl px-4 py-3 text-sm font-serif text-[#5a3e2b] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9e7632]"
            />
          </div>

          {/* INPUT UCAPAN & DOA */}
          <div>
            <label className="block text-xs sm:text-sm font-serif text-[#000000] mb-1.5 font-medium">
              Berikan ucapan & doa:
            </label>
            <div className="relative">
              <textarea
                placeholder="...."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                className="w-full bg-white/90 border border-white/80 rounded-2xl px-4 py-3 text-sm font-serif text-[#5a3e2b] shadow-sm resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#9e7632]"
              />
              <span className="absolute top-2 right-3 text-[10px] font-serif text-gray-400">
                1000
              </span>
            </div>
          </div>

          {/* KONFIRMASI KEHADIRAN */}
          <div className="flex items-center gap-4 text-xs font-serif text-[#655337] pt-1">
            <span className="font-medium">Kehadiran:</span>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="attending"
                checked={attending === true}
                onChange={() => setAttending(true)}
                className="accent-[#9e7632]"
              />
              Hadir
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="attending"
                checked={attending === false}
                onChange={() => setAttending(false)}
                className="accent-[#9e7632]"
              />
              Tidak Hadir
            </label>
          </div>

          {/* TOMBOL SEND */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#9e7632] hover:bg-[#836024] text-white text-xs font-serif tracking-widest py-3 rounded-full transition shadow-md active:scale-95 disabled:opacity-60 uppercase font-medium mt-2"
          >
            {loading ? "SENDING..." : "SEND"}
          </button>
        </form>

        {/* 3. LIST UCAPAN TAMU (CARDS TRANSPARAN) */}
        <div className="w-full mt-8 space-y-3">
          {currentItems.length === 0 ? (
            <p className="text-center text-[#785b28] font-serif text-xs italic">
              Belum ada ucapan 😇
            </p>
          ) : (
            currentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/75 backdrop-blur-sm rounded-2xl p-4 border border-white/90 shadow-sm text-left"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif font-bold text-[#8c734b] text-sm sm:text-base">
                    {item.name}
                  </h4>
                  {item.attending !== undefined && (
                    <span
                      className={`text-[10px] font-serif px-2 py-0.5 rounded-full ${
                        item.attending
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.attending ? "Hadir" : "Tidak Hadir"}
                    </span>
                  )}
                </div>
                <p className="font-serif text-xs sm:text-sm text-[#5a3e2b] leading-relaxed">
                  {item.message}
                </p>
                {item.createdAt && (
                  <p className="text-[10px] font-serif text-gray-400 mt-2">
                    {new Date(item.createdAt).toLocaleString("id-ID")}
                  </p>
                )}
              </motion.div>
            ))
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-7 h-7 text-xs font-serif rounded-full transition-all ${
                  currentPage === i + 1
                    ? "bg-[#9e7632] text-white shadow-sm"
                    : "bg-white/60 text-[#785b28] hover:bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
