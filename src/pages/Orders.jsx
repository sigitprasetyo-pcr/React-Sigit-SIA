import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { orders as initialData } from "../data/Orders";
import { FaPlus, FaCalendarAlt, FaWallet, FaCheckCircle, FaTimes } from "react-icons/fa";

export default function Orders() {
  const [data, setData] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ status: 'Pending' });

  const handleSubmit = () => {
    if (!form.id || !form.name) return alert("Please fill ID and Name");
    setData([form, ...data]);
    setShowForm(false);
    setForm({ status: 'Pending' });
  };

  return (
    <div className="p-8 bg-[#FAFBFC] min-h-screen">
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Order List"]}>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm border ${
            showForm 
              ? "bg-slate-100 text-slate-600 border-slate-200" 
              : "bg-emerald-500/10 text-emerald-600 border-emerald-100 hover:bg-emerald-500/20"
          }`}
        >
          {showForm ? <FaTimes /> : <FaPlus />}
          {showForm ? "Cancel" : "Add New Order"}
        </button>
      </PageHeader>

      {/* ✅ FORM - Soft Design */}
      {showForm && (
        <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm mb-8 animate-in fade-in slide-in-from-top-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            New Order Entry
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <input 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-emerald-200 text-sm" 
              placeholder="Order ID (e.g. ORD-99)"
              onChange={(e) => setForm({ ...form, orderCode: e.target.value, id: Date.now() })} 
            />
            <input 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-emerald-200 text-sm" 
              placeholder="Customer Name"
              onChange={(e) => setForm({ ...form, customerName: e.target.value })} 
            />
            <select 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-emerald-200 text-sm text-slate-500"
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <input 
              type="number"
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-emerald-200 text-sm" 
              placeholder="Price (Rp)"
              onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })} 
            />
            <input 
              type="date" 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-emerald-200 text-sm text-slate-500"
              onChange={(e) => setForm({ ...form, date: e.target.value })} 
            />
            <button 
              className="md:col-span-3 lg:col-span-5 bg-emerald-500 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-100" 
              onClick={handleSubmit}
            >
              Save Transaction
            </button>
          </div>
        </div>
      )}

      {/* ✅ TABLE - Soft Design */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Order ID</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Customer</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Status</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50 text-right">Amount</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50 text-center">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((o, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4 text-xs font-mono text-slate-400">{o.orderCode || o.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-600">{o.customerName || o.name}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-medium border ${
                    o.status === "Completed" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                    o.status === "Pending" ? "bg-blue-50 text-blue-600 border-blue-100" :
                    "bg-red-50 text-red-600 border-red-100"
                  }`}>
                    {o.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium text-slate-600">
                  Rp {Number(o.amount || o.price).toLocaleString('id-ID')}
                </td>
                <td className="px-6 py-4 text-center text-xs text-slate-400 italic">
                  {o.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}