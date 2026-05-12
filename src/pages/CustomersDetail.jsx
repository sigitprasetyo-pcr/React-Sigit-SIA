// SRC/PAGES/CUSTOMERSDETAIL.JSX

import { useParams } from "react-router-dom";
import { customers } from "../data/Customers";
import { FaUserCircle, FaEnvelope, FaMapMarkerAlt, FaCrown } from "react-icons/fa";

export default function CustomersDetail() {
  const { id } = useParams();
  const data = customers.find((c) => c.id === parseInt(id));

  if (!data) return <div className="p-10 text-center text-slate-500">Data Pelanggan tidak ditemukan.</div>;

  // Derive an image index from the ID for consistency
  const imageIndex = (data.id % 12) + 1;
  const avatarUrl = `https://prahara.pages.dev/api/customer/${imageIndex}.jpg`;

  return (
    <div className="p-8 bg-[#FAFBFC] min-h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* KIRI: AVATAR */}
        <div className="md:w-1/2 bg-blue-50/50 flex flex-col items-center justify-center p-12 border-r border-slate-50">
          <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border-4 border-white overflow-hidden">
            <img 
              src={avatarUrl} 
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-blue-100 shadow-sm">
            <FaCrown className="text-yellow-500 text-xs" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{data.loyalty} Member</span>
          </div>
        </div>

        {/* KANAN: DETAIL */}
        <div className="md:w-1/2 p-12">
          <p className="text-blue-500 text-[10px] font-black uppercase tracking-[2px] mb-2">Informasi Pelanggan</p>
          <h1 className="text-3xl font-bold text-slate-800 mb-8">{data.name}</h1>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-slate-300" />
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Email</p>
                <p className="text-slate-600 text-sm">{data.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-slate-300" />
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Alamat</p>
                <p className="text-slate-600 text-sm">{data.address}</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm transition-all">
            Hubungi Pelanggan
          </button>
        </div>
      </div>
    </div>
  );
}