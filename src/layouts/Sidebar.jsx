import { NavLink } from "react-router-dom";
import { FaThLarge, FaList, FaHeadphones } from "react-icons/fa";

export default function Sidebar() {

  const menuClass = ({ isActive }) =>
    `flex items-center p-4 rounded-xl font-medium transition-all ${
      isActive
        ? "bg-green-200 text-green-600 font-extrabold"
        : "text-gray-600 hover:bg-green-200 hover:text-green-600 hover:font-extrabold"
    }`;

  return (
    <div className="w-64 min-h-screen bg-[#F8F9FB] flex flex-col justify-between px-6 py-6">

      <div>
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Sedap<span className="text-green-500">.</span>
          </h1>
          <p className="text-sm text-gray-400">Modern Admin Dashboard</p>
        </div>

        <ul className="space-y-3 text-gray-600">

          {/* Dashboard */}
          <li>
            <NavLink to="/" end className={menuClass}>
              <FaThLarge className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>

          {/* Orders */}
          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaList className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>

          {/* Customers */}
          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaHeadphones className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>

          {/* 🔥 ERROR MENU */}
          <div className="pt-6 pb-2 text-xs font-bold text-gray-400 uppercase">
            Errors
          </div>

          <li>
            <NavLink to="/error/400" className={menuClass}>
              Error 400
            </NavLink>
          </li>

          <li>
            <NavLink to="/error/401" className={menuClass}>
              Error 401
            </NavLink>
          </li>

          <li>
            <NavLink to="/error/403" className={menuClass}>
              Error 403
            </NavLink>
          </li>

        </ul>
      </div>

      <div>
        <div className="bg-green-500 rounded-2xl p-4 text-white flex justify-between items-center">
          <div>
            <p className="text-sm leading-tight">
              Please organize your menus through button below!
            </p>
            <button className="mt-3 bg-white text-green-600 text-sm px-3 py-1 rounded-lg">
              + Add Menus
            </button>
          </div>

          <img
            src="https://i.pravatar.cc/60"
            className="w-14 h-14 rounded-full"
            alt="profile"
          />
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Sedap Restaurant Admin Dashboard
        </p>
        <p className="text-xs text-gray-300">© 2025 All Right Reserved</p>
      </div>
    </div>
  );
}