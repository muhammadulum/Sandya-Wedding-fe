import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

const empty = {
  groom_name: "",
  bride_name: "",
  wedding_date: "",
  wedding_time: "",
  location: "",
  map_url: "",
  verse: "",
  music_url: "",
  photo_url: "",
};

const SettingsPage = () => {
  const [data, setData] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get("/wedding");
      if (res.data) {
        const d = res.data;
        setData({
          groom_name: d.groom_name || "",
          bride_name: d.bride_name || "",
          wedding_date: d.wedding_date
            ? new Date(d.wedding_date).toISOString().slice(0, 10)
            : "",
          wedding_time: d.wedding_time || "",
          location: d.location || "",
          map_url: d.map_url || "",
          verse: d.verse || "",
          music_url: d.music_url || "",
          photo_url: d.photo_url || "",
        });
      }
    } catch (err) {
      setError("Gagal memuat data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = { ...data };
      // send date as ISO if present
      if (payload.wedding_date)
        payload.wedding_date = new Date(payload.wedding_date).toISOString();
      const res = await axiosClient.put(`/wedding`, payload);
      console.log("Save response:", res);
      setData((d) => ({ ...d }));
    } catch (err) {
      setError("Gagal menyimpan");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Pengaturan Pernikahan</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {loading ? (
          <p>Memuat...</p>
        ) : (
          <form onSubmit={handleSave} className="space-y-3">
            <div>
              <label className="block text-sm font-medium">
                Nama Mempelai Pria
              </label>
              <input
                name="groom_name"
                value={data.groom_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Nama Mempelai Wanita
              </label>
              <input
                name="bride_name"
                value={data.bride_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium">Tanggal</label>
                <input
                  type="date"
                  name="wedding_date"
                  value={data.wedding_date}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Waktu</label>
                <input
                  name="wedding_time"
                  value={data.wedding_time}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Lokasi</label>
              <textarea
                name="location"
                value={data.location}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Map URL</label>
              <input
                name="map_url"
                value={data.map_url}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Ayat / Quote</label>
              <textarea
                name="verse"
                value={data.verse}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Music URL</label>
              <input
                name="music_url"
                value={data.music_url}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Photo URL</label>
              <input
                name="photo_url"
                value={data.photo_url}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex gap-2">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                disabled={saving}
              >
                {saving ? "Menyimpan..." : "Simpan"}
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="max-w-3xl mx-auto mt-6 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-medium mb-3">Ringkasan Data</h3>
        {!data || (!data.groom_name && !data.bride_name && !data.location) ? (
          <p className="text-gray-500">Belum ada data pengaturan.</p>
        ) : (
          <table className="w-full table-auto">
            <tbody>
              <tr>
                <td className="font-medium p-2">Mempelai Pria</td>
                <td className="p-2">{data.groom_name || "-"}</td>
              </tr>
              <tr>
                <td className="font-medium p-2">Mempelai Wanita</td>
                <td className="p-2">{data.bride_name || "-"}</td>
              </tr>
              <tr>
                <td className="font-medium p-2">Tanggal</td>
                <td className="p-2">{data.wedding_date || "-"}</td>
              </tr>
              <tr>
                <td className="font-medium p-2">Waktu</td>
                <td className="p-2">{data.wedding_time || "-"}</td>
              </tr>
              <tr>
                <td className="font-medium p-2">Lokasi</td>
                <td className="p-2">{data.location || "-"}</td>
              </tr>
              <tr>
                <td className="font-medium p-2">Map URL</td>
                <td className="p-2">
                  {data.map_url ? (
                    <a
                      className="text-blue-600"
                      href={data.map_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lihat
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
              <tr>
                <td className="font-medium p-2">Ayat / Quote</td>
                <td className="p-2">{data.verse || "-"}</td>
              </tr>
              <tr>
                <td className="font-medium p-2">Music URL</td>
                <td className="p-2">
                  {data.music_url ? (
                    <a
                      className="text-blue-600"
                      href={data.music_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Play
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
              <tr>
                <td className="font-medium p-2">Photo URL</td>
                <td className="p-2">
                  {data.photo_url ? (
                    <a
                      className="text-blue-600"
                      href={data.photo_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lihat
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
