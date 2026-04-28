import { Link } from "react-router-dom";

export default function ErrorPage({ code, message, image }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F9FB] px-4">
      <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">

        <img src={image} alt="error" className="w-40 mx-auto mb-6" />

        <h1 className="text-5xl font-extrabold text-red-500 mb-2">
          {code}
        </h1>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {message}
        </h2>

        <Link
          to="/"
          className="inline-block mt-4 bg-green-500 text-white px-6 py-2 rounded-lg"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}