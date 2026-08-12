export default function LocationSection() {
  return (
    <section className="min-h-screen bg-[#5B3A29] text-center items-center py-10 px-4">
      <h2 className="text-4xl font-greatVibes text-[#F9EBD0] mb-6">
        Detail Location
      </h2>
      <p className="text-[#F9EBD0] mb-4">
        Jl. R. Suprapto Gg. Durian, Gg. Langsat
      </p>

      <div className="flex justify-center">
        <iframe
          title="Wedding Location"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d618.5432352525858!2d109.9666724!3d-1.8431472!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTAnMzQuNSJTIDEwOcKwNTgnMDAuOSJF!5e1!3m2!1sid!2sid!4v1760268912989!5m2!1sid!2sid"
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
