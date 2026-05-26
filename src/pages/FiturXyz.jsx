import PageHeader from "../components/PageHeader";
import {
  FaRegNewspaper,
  FaCalendarAlt,
  FaEye,
  FaArrowUp,
} from "react-icons/fa";

function BeritaIndonesiaTable() {
  const dataBerita = [
    {
      id: 1,
      judul: "Perkembangan Ekonomi Digital di Indonesia",
      kategori: "Ekonomi",
      tanggal: "24 Mei 2026",
      sumber: "Kompas",
      dilihat: "12.500",
      status: "Trending",
    },
    {
      id: 2,
      judul: "Pemerintah Dorong UMKM Masuk Platform Digital",
      kategori: "Bisnis",
      tanggal: "23 Mei 2026",
      sumber: "Detik",
      dilihat: "10.240",
      status: "Populer",
    },
    {
      id: 3,
      judul: "Teknologi AI Mulai Banyak Digunakan di Pendidikan",
      kategori: "Teknologi",
      tanggal: "22 Mei 2026",
      sumber: "CNN Indonesia",
      dilihat: "9.870",
      status: "Terbaru",
    },
    {
      id: 4,
      judul: "Harga Bahan Pokok Mulai Stabil di Beberapa Daerah",
      kategori: "Nasional",
      tanggal: "21 Mei 2026",
      sumber: "Tempo",
      dilihat: "8.430",
      status: "Populer",
    },
    {
      id: 5,
      judul: "Startup Lokal Indonesia Semakin Berkembang",
      kategori: "Teknologi",
      tanggal: "20 Mei 2026",
      sumber: "Liputan6",
      dilihat: "7.950",
      status: "Trending",
    },
  ];

  const statusClass = (status) => {
    if (status === "Trending") {
      return "bg-green-100 text-green-600";
    }

    if (status === "Populer") {
      return "bg-blue-100 text-blue-600";
    }

    return "bg-yellow-100 text-yellow-600";
  };

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            <FaRegNewspaper className="text-green-500" />
            Berita di Indonesia
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Daftar berita yang sedang ramai dibaca di Indonesia
          </p>
        </div>

        <button className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600">
          Lihat Semua
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-sm text-gray-400">
              <th className="pb-4 font-semibold">No</th>
              <th className="pb-4 font-semibold">Judul Berita</th>
              <th className="pb-4 font-semibold">Kategori</th>
              <th className="pb-4 font-semibold">Tanggal</th>
              <th className="pb-4 font-semibold">Sumber</th>
              <th className="pb-4 font-semibold">Dilihat</th>
              <th className="pb-4 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {dataBerita.map((item) => (
              <tr
                key={item.id}
                className="border-b text-sm text-gray-600 hover:bg-gray-50"
              >
                <td className="py-4 font-semibold text-gray-500">
                  #{item.id}
                </td>

                <td className="py-4">
                  <p className="font-bold text-gray-800">
                    {item.judul}
                  </p>
                </td>

                <td className="py-4">{item.kategori}</td>

                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-green-500" />
                    {item.tanggal}
                  </div>
                </td>

                <td className="py-4">{item.sumber}</td>

                <td className="py-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-800">
                    <FaEye className="text-gray-400" />
                    {item.dilihat}
                    <FaArrowUp className="text-xs text-green-500" />
                  </div>
                </td>

                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function FiturXyz() {
  return (
    <div>
      <PageHeader
        title="Fitur Xyz"
        breadcrumb="Dashboard / Order List"
      />

      <p className="mt-5 text-gray-700">
        Ini Halaman Fitur Xyz
      </p>

      <BeritaIndonesiaTable />
    </div>
  );
}