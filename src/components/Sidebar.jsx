import { NavLink, useNavigate } from "react-router-dom";
import {
  FaThLarge,
  FaList,
  FaHeadphones,
  FaUtensils,
  FaStickyNote,
  FaCube,
  FaLayerGroup,
  FaSignOutAlt
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const menuClass = ({ isActive }) =>
    `group flex items-center px-4 py-3.5 mb-1.5 rounded-2xl font-semibold transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
        : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
    }`;

  const iconClass = "mr-4 text-xl transition-transform duration-300 ease-in-out group-hover:scale-110";

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="w-72 min-h-screen bg-white border-r border-slate-100 flex flex-col justify-between px-6 py-8 shadow-sm relative z-10">
      <div>
        {/* Logo Section */}
        <div className="mb-10 px-2 flex items-center">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mr-3 shadow-sm shadow-emerald-500/30">
            <FaUtensils className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
              Sedap<span className="text-emerald-500">.</span>
            </h1>
            <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-widest">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <ul className="space-y-1">
          <li>
            <NavLink to="/" end className={menuClass}>
              <FaThLarge className={iconClass} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaList className={iconClass} />
              <span>Orders</span>
            </NavLink>
          </li>
          
          {/* Admin Only Menus */}
          {(!profile || profile?.role === 'admin') && (
            <li>
              <NavLink to="/customers" className={menuClass}>
                <FaHeadphones className={iconClass} />
                <span>Customers</span>
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to="/products" className={menuClass}>
              <FaUtensils className={iconClass} />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" className={menuClass}>
              <FaStickyNote className={iconClass} />
              <span>Notes</span>
            </NavLink>
          </li>
          
          <div className="pt-5 pb-2 px-4">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lainnya</p>
          </div>

          <li>
            <NavLink to="/components" className={menuClass}>
              <FaLayerGroup className={iconClass} />
              <span>Components</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/fitur-xyz" className={menuClass}>
              <FaCube className={iconClass} />
              <span>Fitur Xyz</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* User Profile & Logout */}
      <div className="mt-auto pt-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 text-center transition-colors duration-300">
          <div className="relative z-10">
            <h4 className="text-sm font-bold text-slate-800 mb-1 capitalize">{profile?.full_name || user?.email || 'Guest'}</h4>
            <p className="text-xs text-emerald-600 mb-4 font-bold uppercase tracking-widest">
              {profile?.role || 'User'}
            </p>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-rose-600 text-white text-sm font-bold py-2.5 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30 active:scale-95"
            >
               <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}