import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

const emptyForm = {
  name: "",
  phone: "",
  address: "",
  invitation_sent: false,
  is_attending: null,
  note: "",
};

const GuestsPage = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingSlug, setEditingSlug] = useState(null);
  const [error, setError] = useState("");

  const fetchGuests = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get("/guests");
      setGuests(res.data);
    } catch (err) {
      setError("Gagal memuat tamu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (editingSlug) {
        const res = await axiosClient.put(`/guests/${editingSlug}`, form);
        setGuests((g) =>
          g.map((it) => (it.slug === editingSlug ? res.data : it)),
        );
        setEditingSlug(null);
      } else {
        const res = await axiosClient.post(`/guests`, form);
        setGuests((g) => [res.data, ...g]);
      }
      setForm(emptyForm);
    } catch (err) {
      setError("Gagal menyimpan tamu");
    }
  };

  const handleEdit = (guest) => {
    setForm({
      name: guest.name || "",
      phone: guest.phone || "",
      address: guest.address || "",
      invitation_sent: !!guest.invitation_sent,
      is_attending: guest.is_attending,
      note: guest.note || "",
    });
    setEditingSlug(guest.slug);
  };

  const handleDelete = async (slug) => {
    if (!window.confirm("Hapus tamu ini?")) return;
    try {
      await axiosClient.delete(`/guests/${slug}`);
      setGuests((g) => g.filter((it) => it.slug !== slug));
    } catch (err) {
      setError("Gagal menghapus tamu");
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Tamu Undangan</h2>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h3 className="font-medium mb-2">
            {editingSlug ? "Edit Tamu" : "Tambah Tamu"}
          </h3>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Nama"
              className="border p-2 rounded"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Telepon"
              className="border p-2 rounded"
            />
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Alamat"
              className="border p-2 rounded"
            />

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="invitation_sent"
                  checked={form.invitation_sent}
                  onChange={handleChange}
                />
                Undangan terkirim
              </label>

              <label className="flex items-center gap-2">
                <select
                  name="is_attending"
                  value={form.is_attending ?? ""}
                  onChange={handleChange}
                >
                  <option value="">-- Kehadiran --</option>
                  <option value={true}>Hadir</option>
                  <option value={false}>Tidak hadir</option>
                </select>
              </label>
            </div>

            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Catatan"
              className="border p-2 rounded"
            />

            <div className="flex gap-2">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                type="submit"
              >
                {editingSlug ? "Update" : "Tambah"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm(emptyForm);
                  setEditingSlug(null);
                }}
                className="px-4 py-2 rounded border"
              >
                Batal
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-2">Daftar Tamu</h3>
          {loading ? (
            <p>Memuat...</p>
          ) : (
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left">
                  <th className="p-2">Nama</th>
                  <th className="p-2">Telepon</th>
                  <th className="p-2">Undangan</th>
                  <th className="p-2">Kehadiran</th>
                  <th className="p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((g) => (
                  <tr key={g.slug} className="border-t">
                    <td className="p-2 align-top">{g.name}</td>
                    <td className="p-2 align-top">{g.phone}</td>
                    <td className="p-2 align-top">
                      {g.invitation_sent ? "Ya" : "Tidak"}
                    </td>
                    <td className="p-2 align-top">
                      {g.is_attending === null
                        ? "-"
                        : g.is_attending
                          ? "Hadir"
                          : "Tidak"}
                    </td>
                    <td className="p-2 align-top">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(g)}
                          className="px-2 py-1 bg-blue-600 text-white rounded text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(g.slug)}
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

export default GuestsPage;
