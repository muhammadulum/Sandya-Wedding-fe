import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

const emptyForm = { guest_id: "", attending: "", message: "" };

const RSVPPage = () => {
  const [rsvps, setRsvps] = useState([]);
  const [guests, setGuests] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGuests = async () => {
    try {
      const res = await axiosClient.get("/guests");
      setGuests(res.data);
    } catch (err) {
      // ignore
    }
  };

  const fetchRsvps = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get("/rsvp");
      setRsvps(res.data);
    } catch (err) {
      setError("Gagal memuat RSVP");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuests();
    fetchRsvps();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (editingId) {
        const res = await axiosClient.put(`/rsvp/${editingId}`, {
          guest_id: form.guest_id,
          attending:
            form.attending === "true"
              ? true
              : form.attending === "false"
                ? false
                : null,
          message: form.message,
        });
        setRsvps((r) => r.map((it) => (it.id === editingId ? res.data : it)));
        setEditingId(null);
      } else {
        const res = await axiosClient.post(`/rsvp`, {
          guest_id: form.guest_id,
          attending:
            form.attending === "true"
              ? true
              : form.attending === "false"
                ? false
                : null,
          message: form.message,
        });
        // server returns message + rsvp
        setRsvps((r) => [res.data.rsvp, ...r]);
      }
      setForm(emptyForm);
    } catch (err) {
      setError("Gagal menyimpan RSVP");
    }
  };

  const handleEdit = (r) => {
    setForm({
      guest_id: r.guest_id,
      attending: String(r.attending),
      message: r.message || "",
    });
    setEditingId(r.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Hapus RSVP ini?")) return;
    try {
      await axiosClient.delete(`/rsvp/${id}`);
      setRsvps((r) => r.filter((it) => it.id !== id));
    } catch (err) {
      setError("Gagal menghapus RSVP");
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">RSVP</h2>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="font-medium mb-2">
            {editingId ? "Edit RSVP" : "Tambah RSVP"}
          </h3>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
            <select
              name="guest_id"
              value={form.guest_id}
              onChange={handleChange}
              required
              className="border p-2 rounded"
            >
              <option value="">-- Pilih Tamu --</option>
              {guests.map((g) => (
                <option key={g.slug} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>

            <select
              name="attending"
              value={form.attending}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="">-- Kehadiran --</option>
              <option value="true">Hadir</option>
              <option value="false">Tidak hadir</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Pesan"
              className="border p-2 rounded"
            />

            <div className="flex gap-2">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                type="submit"
              >
                {editingId ? "Update" : "Tambah"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm(emptyForm);
                  setEditingId(null);
                }}
                className="px-4 py-2 rounded border"
              >
                Batal
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-2">Daftar RSVP</h3>
          {loading ? (
            <p>Memuat...</p>
          ) : (
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left">
                  <th className="p-2">Tamu</th>
                  <th className="p-2">Kehadiran</th>
                  <th className="p-2">Pesan</th>
                  <th className="p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {rsvps.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="p-2 align-top">
                      {r.Guest ? r.Guest.name : r.guest_id}
                    </td>
                    <td className="p-2 align-top">
                      {r.attending === null
                        ? "-"
                        : r.attending
                          ? "Hadir"
                          : "Tidak"}
                    </td>
                    <td className="p-2 align-top">{r.message}</td>
                    <td className="p-2 align-top">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(r)}
                          className="px-2 py-1 bg-blue-600 text-white rounded text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(r.id)}
                          className="px-2 py-1 bg-red-600 text-white rounded text-sm"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVPPage;
