// SRC/PAGES/ORDERSDETAIL.JSX

import { useParams } from "react-router-dom";
import { orders } from "../data/Orders";
import { FaReceipt, FaCalendarAlt, FaUser, FaWallet } from "react-icons/fa";

export default function OrdersDetail() {
  const { id } = useParams();
  const data = orders.find((o) => o.id === parseInt(id));

  if (!data) return <div className="p-10 text-center text-slate-500">Data Pesanan tidak ditemukan.</div>;

  // Use the derived index to match the customer photo
  const imageIndex = (data.id % 12) + 1;
  const avatarUrl = `https://prahara.pages.dev/api/customer/${imageIndex}.jpg`;

  return (
    <div className="p-8 bg-[#FAFBFC] min-h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* KIRI: ICON STATUS */}
        <div className="md:w-1/2 bg-emerald-50/50 flex flex-col items-center justify-center p-12 border-r border-slate-50">
          {/* Replaced generic icon with the customer photo */}
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-sm overflow-hidden mb-6 flex-shrink-0">
            <img 
              src={avatarUrl}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
            data.status === 'Completed' ? 'bg-emerald-500 text-white' : 'bg-orange-400 text-white'
          }`}>
            {data.status}
          </span>
        </div>

        {/* KANAN: INFO ORDER */}
        <div className="md:w-1/2 p-12">
          <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[2px] mb-2">Detail Transaksi</p>
          <h1 className="text-2xl font-bold text-slate-800 mb-6">{data.orderCode}</h1>

          <div className="grid grid-cols-1 gap-6 mb-10">
            <div className="flex items-center gap-4 border-b border-slate-50 pb-4">
              <FaUser className="text-slate-300" />
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Pembeli</p>
                <p className="text-slate-700 font-medium text-sm">{data.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-slate-50 pb-4">
              <FaCalendarAlt className="text-slate-300" />
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Tanggal</p>
                <p className="text-slate-700 font-medium text-sm">{data.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaWallet className="text-slate-300" />
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Total Bayar</p>
                <p className="text-xl font-bold text-slate-800">Rp {data.amount.toLocaleString('id-ID')}</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-lg">
            Cetak Struk
          </button>
        </div>
      </div>
    </div>
  );
}