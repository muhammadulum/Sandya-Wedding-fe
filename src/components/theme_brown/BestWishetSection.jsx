import React, { useState, useEffect } from "react";
import wayangImg from "../../assets/asset-brown/wayang.png";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function BestWishetSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(null);
  const [message, setMessage] = useState("");
  const [rsvpList, setRsvpList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // ✅ Ambil data awal dari API
  useEffect(() => {
    fetchRsvp();
  }, []);

  const fetchRsvp = async () => {
    try {
      const res = await fetch("https://api.sandyatech.tech/api/rsvp");
      const data = await res.json();
      setRsvpList(data);
    } catch (err) {
      console.error("Gagal mengambil data RSVP:", err);
    }
  };

  // ✅ Fungsi kirim data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || attending === null || !message) {
      alert("Harap isi semua kolom!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.sandyatech.tech/api/rsvp", {
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
        text: "Konfirmasi kehadiranmu telah berhasil dikirim.",
        confirmButtonColor: "#5B3A29",
      });

      // reset input
      setName("");
      setAttending("");
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
        confirmButtonColor: "#5B3A29",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Pagination logic
  const totalPages = Math.ceil(rsvpList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rsvpList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // auto-scroll ke atas
  };

  return (
    <section className="min-h-screen bg-[#5B3A29] flex flex-col items-center py-10 px-4">
      {/* Logo & Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <motion.img
          src={wayangImg}
          alt="Wayang Icon"
          className="w-16 h-20 mb-2"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <h2 className="font-belleza text-3xl text-[#F9EBD0]">Best Wishes</h2>
        <p className="text-sm text-[#F9EBD0]/80">
          Sampaikan doa dan ucapan terbaik Anda
        </p>
      </div>

      {/* Card Utama */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5">
        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-[#5B3A29] font-semibold text-sm">
            ❤️ {rsvpList.length} Ucapan
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Nama Tamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#5B3A29]"
          />
          {/* 
          <select
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#5B3A29]"
          >
            <option value="">Konfirmasi Kehadiran</option>
            <option value="true">Hadir</option>
            <option value="false">Tidak Hadir</option>
          </select> */}

          <select
            value={
              attending === true ? "true" : attending === false ? "false" : ""
            }
            onChange={(e) => setAttending(e.target.value === "true")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#5B3A29]"
          >
            <option value="">Konfirmasi Kehadiran</option>
            <option value="true">Hadir</option>
            <option value="false">Tidak Hadir</option>
          </select>

          <div className="relative">
            <textarea
              placeholder="Tulis ucapan"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none h-24 focus:outline-none focus:border-[#5B3A29]"
              maxLength={300}
            ></textarea>
            <span className="absolute bottom-2 right-3 text-xs text-gray-400">
              {300 - message.length}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5B3A29] text-white py-2 rounded-lg hover:bg-[#704F3C] transition-all disabled:opacity-60"
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>
        </form>

        {/* List Ucapan */}
        {/* <div className="mt-6 space-y-4 max-h-96 overflow-y-auto">
          {rsvpList.length === 0 ? (
            <p className="text-center text-gray-400 text-sm">
              Belum ada ucapan 😇
            </p>
          ) : (
            rsvpList.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[#5B3A29] text-sm flex items-center gap-1">
                    {item.name}{" "}
                    {item.attending ? (
                      <span className="text-green-600 text-xs font-medium ml-1">
                        (Hadir)
                      </span>
                    ) : (
                      <span className="text-red-500 text-xs font-medium ml-1">
                        (Tidak Hadir)
                      </span>
                    )}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mt-1">{item.message}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString("id-ID")
                    : ""}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} */}

        {/* List Ucapan */}
        <div className="mt-6 space-y-4 max-h-96 overflow-y-auto">
          {currentItems.length === 0 ? (
            <p className="text-center text-gray-400 text-sm">
              Belum ada ucapan 😇
            </p>
          ) : (
            currentItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[#5B3A29] text-sm flex items-center gap-1">
                    {item.name}{" "}
                    {item.attending ? (
                      <span className="text-green-600 text-xs font-medium ml-1">
                        (Hadir)
                      </span>
                    ) : (
                      <span className="text-red-500 text-xs font-medium ml-1">
                        (Tidak Hadir)
                      </span>
                    )}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm mt-1">{item.message}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString("id-ID")
                    : ""}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 text-sm rounded-lg border transition-all ${
                  currentPage === i + 1
                    ? "bg-[#5B3A29] text-white border-[#5B3A29]"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
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
