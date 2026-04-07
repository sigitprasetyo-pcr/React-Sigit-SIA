import React from 'react';
import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-10 flex flex-col items-center gap-8 bg-[#f8fafc] min-h-screen font-sans">
      {/* Header Estetik */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Explore <span className="text-blue-600">Frameworks</span>
        </h1>
        <p className="text-slate-500 mt-2">Curated list of the best modern web technologies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {frameworkData.map((item) => (
          <div 
            key={item.id} 
            className="group relative border border-slate-200 p-8 rounded-[2rem] shadow-sm bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-100"
          >
            {/* Dekorasi Background Glow (Muncul saat Hover) */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Tombol Menu Dot Estetik */}
            <button className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-slate-100 hover:text-slate-600">
              <span className="text-xl leading-none mb-2">...</span>
            </button>

            {/* Konten Utama */}
            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                {item.name}
              </h2>
              
              <p className="text-slate-500 text-sm mt-3 leading-relaxed min-h-[40px]">
                {item.description}
              </p>
              
              {/* Info Pengembang dengan Layout Grid Kecil */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-100">
                  {item.details.developer.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-slate-400 leading-none">Developed by</p>
                  <p className="text-sm font-semibold text-slate-700">{item.details.developer} <span className="font-normal text-slate-400">({item.details.releaseYear})</span></p>
                </div>
              </div>

              {/* Action Link dengan Animasi Panah */}
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

              {/* Tag Modern dengan Gradasi Tipis */}
              <div className="flex flex-wrap mt-8 gap-2">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-50 text-slate-600 px-4 py-1.5 text-[10px] font-bold rounded-lg border border-slate-100 transition-all duration-300 group-hover:bg-white group-hover:border-blue-100 group-hover:text-blue-500"
                  >
                    #{tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}