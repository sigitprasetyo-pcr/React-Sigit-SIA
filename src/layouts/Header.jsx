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
    src="/images/image.png"
    alt="avatar"
    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
  />

  <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-gray-800 transition">
    
  </div>
</div>
    </div>
  );
}
// import { Link } from "react-router-dom";
// import { FaThLarge, FaList, FaHeadphones } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     <div className="w-64 min-h-screen bg-[#F8F9FB] flex flex-col justify-between px-6 py-6">

//       <div>
//         <div className="mb-10">
//           <h1 className="text-4xl font-bold text-gray-800">
//             Sedap<span className="text-green-500">.</span>
//           </h1>
//           <p className="text-sm text-gray-400">Modern Admin Dashboard</p>
//         </div>

//         <ul className="space-y-3 text-gray-600">

//           {/* Dashboard */}
//           <li>
//             <Link
//               to="/"
//               className="flex items-center p-4 rounded-xl font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
//             >
//               <FaThLarge className="mr-4 text-xl" />
//               Dashboard
//             </Link>
//           </li>

//           {/* Orders */}
//           <li>
//             <Link
//               to="/orders"
//               className="flex items-center p-4 rounded-xl font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
//             >
//               <FaList className="mr-4 text-xl" />
//               Orders
//             </Link>
//           </li>

//           {/* Customers */}
//           <li>
//             <Link
//               to="/customers"
//               className="flex items-center p-4 rounded-xl font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
//             >
//               <FaHeadphones className="mr-4 text-xl" />
//               Customers
//             </Link>
//           </li>

//         </ul>
//       </div>

//       <div>
//         <div className="bg-green-500 rounded-2xl p-4 text-white flex justify-between items-center">
//           <div>
//             <p className="text-sm leading-tight">
//               Please organize your menus through button below!
//             </p>
//             <button className="mt-3 bg-white text-green-600 text-sm px-3 py-1 rounded-lg">
//               + Add Menus
//             </button>
//           </div>

//           <img
//             src="https://i.pravatar.cc/60"
//             className="w-14 h-14 rounded-full"
//             alt="profile"
//           />
//         </div>

//         <p className="text-xs text-gray-400 mt-6">
//           Sedap Restaurant Admin Dashboard
//         </p>
//         <p className="text-xs text-gray-300">© 2025 All Right Reserved</p>
//       </div>
//     </div>
//   );
// }
