import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Nomor WA dummy, ganti dengan nomor Anda (gunakan kode negara 62 tanpa + atau 0 di depan)
  const waNumber = "6281234567890"; 
  const waMessage = "Halo SandyaWedding, saya tertarik untuk membuat undangan digital.";

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center py-5 px-6 md:px-16 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-wider">
          Sandya<span className="text-gray-800">Wedding</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#fitur" className="hover:text-blue-600 transition">Keunggulan</a>
          <a href="#tema" className="hover:text-blue-600 transition">Katalog Tema</a>
          <a href="#testimoni" className="hover:text-blue-600 transition">Testimoni</a>
          <a href="#kontak" className="hover:text-blue-600 transition">Kontak</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium transition hidden md:block">
            Login Admin
          </Link>
          <Link to="/wedding-brown" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-blue-200 hover:bg-blue-700 transition">
            Lihat Demo
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-center pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
            Platform Undangan Digital Premium
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Rayakan Momen Bahagia <br/>
            Secara <span className="text-blue-600">Lebih Elegan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            SandyaWedding adalah solusi modern untuk undangan pernikahan Anda. Desain memukau, fitur lengkap, dan sangat praktis untuk dibagikan ke seluruh tamu undangan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-lg font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition transform hover:-translate-y-1">
              Pesan Sekarang
            </a>
            <a href="#tema" className="bg-white text-blue-600 border border-blue-600 px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-blue-50 transition">
              Lihat Desain Kami
            </a>
          </div>
        </div>
      </header>

      {/* Mengapa Memilih Kami Section */}
      <section id="fitur" className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih SandyaWedding?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Bukan sekadar undangan biasa. Kami menawarkan pengalaman premium baik bagi Anda maupun tamu undangan Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Desain Elegan & Kekinian</h3>
              <p className="text-gray-600 leading-relaxed">Template kami dirancang oleh profesional. Tampilan minimalis yang bersih membuat undangan Anda terlihat mewah dan berkelas.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proses Cepat & Praktis</h3>
              <p className="text-gray-600 leading-relaxed">Tidak perlu pusing memikirkan cetak dan kirim fisik. Undangan digital siap disebarkan hanya dengan satu klik ke berbagai platform.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Dashboard Manajemen Tamu</h3>
              <p className="text-gray-600 leading-relaxed">Dapatkan akses ke dashboard khusus untuk melacak siapa saja yang sudah membuka undangan dan konfirmasi kehadiran (RSVP).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Tema Section */}
      <section id="tema" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pilihan Tema Eksklusif</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Sesuaikan tema undangan dengan konsep dan warna pernikahan Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Tema Brown */}
            <div className="group rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
              {/* Ganti div ini dengan tag img yang berisi screenshot tema Anda */}
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400 font-medium z-10">[ Tempat Screenshot Tema Brown ]</span>
                {/* <img src="/path-ke-gambar-brown.jpg" alt="Tema Cokelat" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" /> */}
              </div>
              <div className="p-8 bg-white flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Classic Brown</h3>
                  <p className="text-gray-500">Nuansa hangat dan klasik</p>
                </div>
                <Link to="/wedding-brown" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition font-semibold">
                  Lihat Live
                </Link>
              </div>
            </div>

            {/* Tema Green */}
            <div className="group rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
              {/* Ganti div ini dengan tag img yang berisi screenshot tema Anda */}
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400 font-medium z-10">[ Tempat Screenshot Tema Green ]</span>
                {/* <img src="/path-ke-gambar-green.jpg" alt="Tema Hijau" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" /> */}
              </div>
              <div className="p-8 bg-white flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Emerald Green</h3>
                  <p className="text-gray-500">Kesan alami dan mewah</p>
                </div>
                <Link to="/wedding-green" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition font-semibold">
                  Lihat Live
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Client Section */}
      <section id="testimoni" className="py-20 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Mereka?</h2>
            <p className="text-gray-500 text-lg">Kepercayaan klien adalah kebanggaan kami.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "Hasilnya di luar ekspektasi! Desainnya sangat elegan dan modern. Fitur RSVP-nya juga sangat membantu kami mendata tamu undangan dengan akurat. Terima kasih SandyaWedding!"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Arka & Dina</h4>
                <p className="text-sm text-gray-500">Klien, Jakarta</p>
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "Banyak tamu yang memuji desain undangannya karena gampang dibuka di HP dan tampilannya bersih. Proses pembuatannya juga cepat banget, adminnya ramah!"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Reza & Putri</h4>
                <p className="text-sm text-gray-500">Klien, Bandung</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4 text-xl">★★★★★</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "Suka banget sama tema Emerald Green-nya. Warnanya pas banget dengan konsep pernikahan kami. Sangat recommended buat yang cari undangan digital premium tapi harga terjangkau."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Bima & Ayu</h4>
                <p className="text-sm text-gray-500">Klien, Surabaya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Siap Membuat Undangan Anda?</h2>
          <p className="text-lg text-gray-500 mb-10">Hubungi tim kami untuk konsultasi gratis dan wujudkan undangan impian pernikahan Anda hari ini.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-green-600 transition shadow-lg shadow-green-200">
              {/* WhatsApp Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.245 3.481 5.226 3.48 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.657zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Chat WhatsApp
            </a>
            
            <a href="mailto:hello@sandyawedding.com" className="flex items-center justify-center gap-3 bg-white text-blue-600 border border-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition">
              {/* Email Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@sandyawedding.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-extrabold text-blue-400 mb-4">
              Sandya<span className="text-white">Wedding</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Membantu pasangan membagikan kabar bahagia mereka dengan cara yang modern, elegan, dan ramah lingkungan.
            </p>
          </div>
          <div>
             <h4 className="font-bold mb-4">Tautan</h4>
             <ul className="text-gray-400 text-sm space-y-2">
               <li><a href="#fitur" className="hover:text-blue-400">Keunggulan</a></li>
               <li><a href="#tema" className="hover:text-blue-400">Katalog Tema</a></li>
               <li><Link to="/login" className="hover:text-blue-400">Login Admin</Link></li>
             </ul>
          </div>
          <div>
             <h4 className="font-bold mb-4">Sosial Media</h4>
             <ul className="text-gray-400 text-sm space-y-2">
               <li><a href="#" className="hover:text-blue-400">Instagram (@sandyawedding)</a></li>
               <li><a href="#" className="hover:text-blue-400">TikTok (@sandyawedding)</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SandyaWedding. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center animate-bounce group"
        aria-label="Chat via WhatsApp"
      >
        <span className="absolute right-16 bg-white text-gray-800 text-sm py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium pointer-events-none">
          Hubungi Kami!
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.245 3.481 5.226 3.48 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.657zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

    </div>
  );
};

export default LandingPage;