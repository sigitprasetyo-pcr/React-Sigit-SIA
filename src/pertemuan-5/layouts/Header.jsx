import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#F8F9FB] px-6 py-4 border-b">

      {/* Search */}
      <div className="relative w-[420px]">
        <input
          type="text"
          placeholder="Search here"
          className="w-full pl-4 pr-10 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none"
        />
        <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Right */}
     <div className="flex items-center gap-3 ml-2">
  <span className="text-sm text-gray-600">
    Hello, <b className="text-gray-800">Sigit</b>
  </span>

  <img
    src="/img/image.png"
    alt="avatar"
    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
  />

  <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-gray-800 transition">
    
  </div>
</div>
    </div>
  );
}