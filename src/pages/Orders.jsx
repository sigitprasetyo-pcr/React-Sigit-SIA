import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { orders as initialData } from "../data/Orders";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Orders() {
  const [data, setData] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ status: 'Pending' });

  const handleSubmit = () => {
    if (!form.name) return alert("Fill customer name");
    setData([form, ...data]);
    setShowForm(false);
  };

  return (
    <div className="p-8 bg-[#FAFBFC] min-h-screen">
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Order List"]}>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-100">
          {showForm ? <FaTimes /> : <FaPlus />} {showForm ? "Cancel" : "New Order"}
        </button>
      </PageHeader>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-[11px] uppercase font-semibold text-slate-400">Order ID</th>
              <th className="px-6 py-4 text-[11px] uppercase font-semibold text-slate-400">Avatar</th>
              <th className="px-6 py-4 text-[11px] uppercase font-semibold text-slate-400">Customer</th>
              <th className="px-6 py-4 text-[11px] uppercase font-semibold text-slate-400">Status</th>
              <th className="px-6 py-4 text-[11px] uppercase font-semibold text-slate-400 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((o, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4 text-xs font-mono text-slate-400">{o.orderCode || `#ORD-${o.id}`}</td>
                <td className="px-6 py-4">
                  <div className="w-10 h-10 rounded-full border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${o.name || o.customerName}`} 
                      alt="avatar" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <Link to={`/orders/${o.id}`} className="text-slate-600 hover:text-emerald-500">{o.name || o.customerName}</Link>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-medium border ${o.status === "Completed" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-blue-50 text-blue-600 border-blue-100"}`}>{o.status}</span>
                </td>
                <td className="px-6 py-4 text-right font-medium">Rp {o.amount?.toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}