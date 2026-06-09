import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

import { notesAPI } from "../services/notesAPI";
import GenericTable from "../components/GenericTable";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
  });

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const loadNotes = async () => {
    try {
      setTableLoading(true);
      setError("");

      /*
        Delay ini dibuat agar tampilan loading terlihat seperti pada materi.
        Kalau tidak diberi delay, API Supabase terlalu cepat sehingga loading
        langsung hilang.
      */
      await delay(900);

      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError(`Gagal memuat catatan: ${err.message}`);
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataForm.title.trim() || !dataForm.content.trim()) {
      setError("Judul dan isi catatan wajib diisi");
      setSuccess("");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.createNote({
        title: dataForm.title,
        content: dataForm.content,
      });

      setSuccess("Catatan berhasil ditambahkan!");

      setDataForm({
        title: "",
        content: "",
      });

      await loadNotes();

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);

      setSuccess("Catatan berhasil dihapus!");

      await loadNotes();

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Tambah Catatan Baru
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-60"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            disabled={loading}
            required
            rows="4"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
          >
            {loading ? "Mohon Tunggu..." : "Tambah Data"}
          </button>
        </form>
      </div>

      {/* Notes Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">
            Daftar Catatan ({notes.length})
          </h3>
        </div>

        {tableLoading && <LoadingSpinner text="Memuat catatan..." />}

        {!tableLoading && notes.length === 0 && !error && (
          <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
        )}

        {!tableLoading && notes.length === 0 && error && (
          <EmptyState text="Terjadi kesalahan. Coba lagi nanti." />
        )}

        {!tableLoading && notes.length > 0 && (
          <GenericTable
            columns={["#", "Judul", "Isi Catatan", "Aksi"]}
            data={notes}
            renderRow={(note, index) => (
              <>
                <td className="px-6 py-4 font-medium text-gray-700">
                  {index + 1}.
                </td>

                <td className="px-6 py-4">
                  <div className="font-semibold text-emerald-600">
                    {note.title}
                  </div>
                </td>

                <td className="px-6 py-4 max-w-xs">
                  <div className="truncate text-gray-600">{note.content}</div>
                </td>

                <td className="px-6 py-4">
                  <button
                    type="button"
                    onClick={() => handleDelete(note.id)}
                    disabled={loading}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                  </button>
                </td>
              </>
            )}
          />
        )}
      </div>
    </div>
  );
}