import { Link } from "react-router-dom";

export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F9FB]">
      <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-md w-full">

        <img src={image} className="w-32 mx-auto mb-4" />

        <h1 className="text-6xl font-extrabold text-red-500 mb-2">
          {code}
        </h1>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {description}
        </h2>

        <Link
          to="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Kembali ke Dashboard
        </Link>

      </div>
    </div>
  );
}