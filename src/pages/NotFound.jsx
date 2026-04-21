import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F9FB] px-4">
      
      <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">
        
        {/* 404 Number */}
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6">
          Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Kembali ke Dashboard
        </Link>

      </div>
    </div>
  );
}

export default NotFound;