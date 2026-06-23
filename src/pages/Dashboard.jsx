import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaPlus, FaChartLine } from "react-icons/fa";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

function Card({ icon, value, label, colorTheme }) {
  const themeStyles = {
    emerald: "bg-emerald-50 text-emerald-500",
    blue: "bg-blue-50 text-blue-500",
    red: "bg-rose-50 text-rose-500",
    amber: "bg-amber-50 text-amber-500",
    teal: "bg-teal-50 text-teal-500"
  }[colorTheme] || "bg-slate-50 text-slate-500";

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-slate-50 opacity-50 group-hover:scale-150 transition-transform duration-500 z-0"></div>
      <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${themeStyles} text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10`}>
        {icon}
      </div>
      <div className="relative z-10">
        <p className="text-3xl font-extrabold text-slate-800 leading-none mb-1.5">{value}</p>
        <p className="text-sm font-semibold text-slate-500">{label}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { profile } = useAuth();
  const [stats, setStats] = useState({
    totalOrders: 0,
    delivered: 0,
    canceled: 0,
    revenue: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      // Mengambil data dari tabel orders
      // Karena RLS aktif, Admin akan mendapatkan semua data, Member hanya miliknya
      const { data, error } = await supabase.from('orders').select('*');
      
      if (!error && data) {
        const total = data.length;
        const delivered = data.filter(o => o.status === 'delivered').length;
        const canceled = data.filter(o => o.status === 'canceled').length;
        const revenue = data.reduce((acc, curr) => acc + Number(curr.net_amount), 0);

        setStats({
          totalOrders: total,
          delivered,
          canceled,
          revenue
        });
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <PageHeader 
        title={profile?.role === 'admin' ? "Admin Dashboard" : "Member Dashboard"} 
        breadcrumb="Dashboard / Overview"
      >
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2 active:scale-95">
          <FaPlus /> Add New
        </button>
      </PageHeader>

      {/* TAMPILAN KHUSUS MEMBER UNTUK POINTS */}
      {profile?.role === 'member' && (
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 mb-6 text-white shadow-lg shadow-emerald-500/20 flex justify-between items-center">
          <div>
            <p className="text-emerald-100 text-sm font-bold tracking-widest uppercase mb-1">Status Member Anda</p>
            <h2 className="text-3xl font-extrabold">Tier {profile.tier.charAt(0).toUpperCase() + profile.tier.slice(1)}</h2>
          </div>
          <div className="text-right">
            <p className="text-emerald-100 text-sm font-bold tracking-widest uppercase mb-1">Total Poin</p>
            <h2 className="text-4xl font-black">{profile.points || 0} <span className="text-lg font-bold">Pts</span></h2>
          </div>
        </div>
      )}

      {/* CARD */}
      <div className="grid grid-cols-4 gap-6 mt-2">
        <Card icon={<FaShoppingCart />} value={stats.totalOrders} label="Total Orders" colorTheme="emerald" />
        <Card icon={<FaTruck />} value={stats.delivered} label="Delivered" colorTheme="blue" />
        <Card icon={<FaBan />} value={stats.canceled} label="Canceled" colorTheme="red" />
        <Card icon={<FaDollarSign />} value={`Rp ${stats.revenue.toLocaleString('id-ID')}`} label="Net Amount" colorTheme="teal" />
      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {/* PIE CHART */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-7 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Pie Chart Summary</h3>
              <p className="text-xs font-medium text-slate-400 mt-1">Analytics for this month</p>
            </div>
            <div className="flex gap-5 text-sm font-semibold text-slate-500 bg-slate-50 p-1.5 rounded-xl">
              <label className="flex items-center gap-2 cursor-pointer hover:text-emerald-500 transition-colors px-3 py-1.5 rounded-lg bg-white shadow-sm text-emerald-600">
                <input type="checkbox" className="accent-emerald-500 w-4 h-4" defaultChecked /> Chart
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-slate-800 transition-colors px-3 py-1.5">
                <input type="checkbox" className="accent-emerald-500 w-4 h-4" defaultChecked /> Show Value
              </label>
            </div>
          </div>

          <div className="flex justify-around items-center pt-4">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg className="w-full h-full -rotate-90 absolute" viewBox="0 0 36 36">
                  <path className="text-emerald-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-emerald-500" strokeWidth="3" strokeDasharray="81, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-extrabold text-slate-800">81%</span>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-600 mt-4 group-hover:text-emerald-500 transition-colors">Total Order</p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-32 h-32 rounded-full bg-teal-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg className="w-full h-full -rotate-90 absolute" viewBox="0 0 36 36">
                  <path className="text-teal-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-teal-500" strokeWidth="3" strokeDasharray="22, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-extrabold text-slate-800">22%</span>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-600 mt-4 group-hover:text-teal-500 transition-colors">Growth</p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg className="w-full h-full -rotate-90 absolute" viewBox="0 0 36 36">
                  <path className="text-blue-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-blue-500" strokeWidth="3" strokeDasharray="62, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-extrabold text-slate-800">62%</span>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-600 mt-4 group-hover:text-blue-500 transition-colors">Revenue</p>
            </div>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-7 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Chart Order</h3>
              <p className="text-xs font-medium text-slate-400 mt-1">Weekly performance</p>
            </div>
            <button className="text-sm font-bold border-2 border-emerald-100 text-emerald-600 px-5 py-2 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-95 flex items-center gap-2">
              <FaChartLine />
              Save Report
            </button>
          </div>

          <div className="h-56 flex items-end justify-between gap-2 px-2 mt-4 relative">
             {/* Background lines */}
             <div className="absolute inset-0 flex flex-col justify-between z-0 pb-8">
                <div className="w-full border-b border-dashed border-slate-200 h-0"></div>
                <div className="w-full border-b border-dashed border-slate-200 h-0"></div>
                <div className="w-full border-b border-dashed border-slate-200 h-0"></div>
                <div className="w-full border-b border-dashed border-slate-200 h-0"></div>
             </div>
            
             <div className="w-full h-full flex items-end justify-between gap-4 z-10 px-4">
                {[
                  { height: '30%', day: 'Mon', color: 'bg-emerald-200' },
                  { height: '60%', day: 'Tue', color: 'bg-emerald-300' },
                  { height: '40%', day: 'Wed', color: 'bg-emerald-400' },
                  { height: '80%', day: 'Thu', color: 'bg-emerald-500' },
                  { height: '50%', day: 'Fri', color: 'bg-emerald-300' },
                  { height: '70%', day: 'Sat', color: 'bg-emerald-400' },
                  { height: '100%', day: 'Sun', color: 'bg-emerald-600' },
                ].map((bar, i) => (
                   <div key={i} className="flex flex-col items-center justify-end h-full w-full group cursor-pointer pt-6">
                      <div className="w-full flex-1 flex items-end justify-center">
                        <div className={`w-full max-w-[2.5rem] rounded-t-xl transition-all duration-300 ${bar.color} relative group-hover:brightness-110 group-hover:scale-y-[1.03] origin-bottom`} style={{ height: bar.height }}>
                          {/* Tooltip Keren */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold py-1.5 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2 pointer-events-none whitespace-nowrap shadow-md z-20">
                            {bar.height}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-500 transition-colors mt-3 mb-1">{bar.day}</span>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}