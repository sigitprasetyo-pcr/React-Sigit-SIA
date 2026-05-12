import { NavLink } from "react-router-dom";
import { FaThLarge, FaList, FaHeadphones, FaUtensils } from "react-icons/fa"; // Tambah FaUtensils

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
          <li>
            <NavLink to="/" end className={menuClass}>
              <FaThLarge className="mr-4 text-xl" /> Dashboard
            </NavLink>
          </li>
          {/* Menu Products Baru */}
          <li>
            <NavLink to="/products" className={menuClass}>
              <FaUtensils className="mr-4 text-xl" /> Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaList className="mr-4 text-xl" /> Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaHeadphones className="mr-4 text-xl" /> Customers
            </NavLink>
          </li>
        </ul>
      </div>
      {/* ... bagian footer sidebar tetap sama ... */}
    </div>
  );
}