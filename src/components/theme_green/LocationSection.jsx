import BgLocation from "../../assets/asset-green/another/SCYLLA-ASSET-GC-2.jpg";

export default function LocationSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-[#5B3A29] text-center items-center py-10 px-4"
      style={{
        backgroundImage: `url(${BgLocation})`,
      }}
    >
      <h2 className="text-4xl font-greatVibes text-[#a27b38] mb-6">
        Detail Location
      </h2>
      <p className="text-[#a27b38] mb-4">
        Jl Rangga Sentap, GG. Poltek 1 (Rumah Sebelah Kanan Ujung Warna Putih),
        Kel. Sukaharja. Kec. Delta pawan
      </p>

      <div className="flex justify-center">
        <iframe
          title="Wedding Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1115.7023237857768!2d109.98519156598329!3d-1.816228868639658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNDgnNTcuNSJTIDEwOcKwNTknMDguMiJF!5e1!3m2!1sid!2sid!4v1786197058174!5m2!1sid!2sid"
          width="90%"
          height="350"
          style={{ borderRadius: "15px", border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </section>
  );
}
