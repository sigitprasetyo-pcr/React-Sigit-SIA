import React, { useState } from "react";
import frameworkData from "./framework.json";

// --- Komponen Internal (Responsive Section) ---

function ResponsiveText() {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm mb-6">
      <h2 className="text-xl font-bold mb-3 text-slate-800">1. Responsive Text</h2>
      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 text-blue-600 font-medium">
        Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.<br/>
        Coba hapus class yang menggunakan prefix breakpoint (md:xxx, lg:xxx, xl:xxx) dan lihat perbedaannya!
      </p>
    </div>
  );
}

function ResponsiveWidth() {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm mb-6 text-slate-600">
      <h2 className="text-xl font-bold mb-3 text-slate-800">2. Responsive Width</h2>
      <p className="mb-4">
        Coba lakukan <strong>zoom in/zoom out</strong> atau ubah ukuran layar. Perhatikan bagaimana posisi kolom akan menyesuaikan secara responsif:
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="bg-red-400 text-white w-full md:w-1/2 p-4 rounded-xl font-bold text-center">
          Kolom 1 (w-full / md:w-1/2)
        </div>
        <div className="bg-blue-400 text-white w-full md:w-1/2 p-4 rounded-xl font-bold text-center">
          Kolom 2 (w-full / md:w-1/2)
        </div>
      </div>
    </div>
  );
}

function ResponsiveLayout() {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm mb-10 text-slate-600">
      <h2 className="text-xl font-bold mb-3 text-slate-800">3. Grid Layout</h2>
      <p className="mb-4">
        Jumlah kolom akan menyesuaikan dengan ukuran layar (1 → 2 → 3 → 4 kolom):
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">Box 1</div>
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">Box 2</div>
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">Box 3</div>
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">Box 4</div>
      </div>
    </div>
  );
}

// --- Komponen Utama ---

export default function FrameworkListSearchFilter() {
  /* --- Inisialisasi DataForm --- */
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  /* --- Inisialisasi Handle perubahan nilai input form --- */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /** --- Logic Search & Filter --- **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag 
      ? framework.tags.includes(dataForm.selectedTag) 
      : true;

    return matchesSearch && matchesTag;
  });

  /** --- Deklarasi pengambilan unique tags untuk dropdown --- **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-10 flex flex-col items-center bg-[#f8fafc] min-h-screen font-sans">
      
      {/* Header Framework List (Sekarang di Paling Atas) */}
      <div className="text-center mb-8 w-full max-w-4xl mt-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Explore <span className="text-blue-600">Frameworks</span>
        </h1>
        <p className="text-slate-500 mt-2">Daftar teknologi web modern untuk proyek ambisius.</p>
      </div>

      {/* Kontainer Input & Filter (Sekarang di Paling Atas) */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          name="searchTerm"
          value={dataForm.searchTerm}
          placeholder="Search framework..."
          className="flex-1 p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all"
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          value={dataForm.selectedTag}
          className="p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm text-slate-600 cursor-pointer"
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {/* Grid Card Framework (Sekarang di Paling Atas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-10">
        {filteredFrameworks.map((item) => (
          <div 
            key={item.id} 
            className="group relative border border-slate-200 p-8 rounded-[2rem] shadow-sm bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-100"
          >
            {/* Dekorasi Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Tombol Menu Dot */}
            <button className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-100 hover:text-slate-600">
              <span className="text-xl leading-none mb-2">...</span>
            </button>

            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                {item.name}
              </h2>
              
              <p className="text-slate-500 text-sm mt-3 leading-relaxed min-h-[40px]">
                {item.description}
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-100">
                  {item.details.developer.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-slate-400 leading-none">Developed by</p>
                  <p className="text-sm font-semibold text-slate-700">
                    {item.details.developer} <span className="font-normal text-slate-400">({item.details.releaseYear})</span>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href={item.details.officialWebsite} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 group/link"
                >
                  Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Tags tanpa simbol # */}
              <div className="flex flex-wrap mt-8 gap-2">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-50 text-slate-600 px-4 py-1.5 text-[10px] font-bold rounded-lg border border-slate-100 transition-all duration-300 group-hover:bg-white group-hover:border-blue-100 group-hover:text-blue-500 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredFrameworks.length === 0 && (
        <div className="text-center py-20 text-slate-400 italic bg-white w-full max-w-4xl rounded-[2rem] border-2 border-dashed border-slate-200 shadow-sm mb-10">
          Framework "{dataForm.searchTerm}" tidak ditemukan...
        </div>
      )}

      {/* Garis Pemisah */}
      <hr className="w-full max-w-4xl border-slate-200 mb-10 mt-10" />

      {/* Bagian Demo Responsif (Sekarang di Bagian Bawah Halaman) */}
      <ResponsiveText />
      <ResponsiveWidth />
      <ResponsiveLayout />

    </div>
  );
}