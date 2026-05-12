import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { customers as initialData } from "../data/Customers";
import { FaUserPlus, FaEnvelope, FaPhone, FaTimes } from "react-icons/fa";

export default function Customers() {
  const [data, setData] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ rank: 'Bronze' });

  const handleSubmit = () => {
    if (!form.name || !form.email) return alert("Please fill Name and Email");
    setData([form, ...data]);
    setShowForm(false);
    setForm({ rank: 'Bronze' });
  };

  return (
    <div className="p-8 bg-[#FAFBFC] min-h-screen">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customer List"]}>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm border ${
            showForm 
              ? "bg-slate-100 text-slate-600 border-slate-200" 
              : "bg-blue-500/10 text-blue-600 border-blue-100 hover:bg-blue-500/20"
          }`}
        >
          {showForm ? <FaTimes /> : <FaUserPlus />}
          {showForm ? "Cancel" : "Add Customer"}
        </button>
      </PageHeader>

      {/* ✅ FORM - Soft Design */}
      {showForm && (
        <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm mb-8 animate-in fade-in slide-in-from-top-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Register New Customer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <input 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-200 text-sm" 
              placeholder="Customer ID (CUS-01)"
              onChange={(e) => setForm({ ...form, customerCode: e.target.value, id: Date.now() })} 
            />
            <input 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-200 text-sm" 
              placeholder="Full Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
            />
            <input 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-200 text-sm" 
              placeholder="Email Address"
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
            />
            <input 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-200 text-sm" 
              placeholder="Phone Number"
              onChange={(e) => setForm({ ...form, phone: e.target.value })} 
            />
            <select 
              className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-200 text-sm text-slate-500"
              onChange={(e) => setForm({ ...form, rank: e.target.value, loyalty: e.target.value })}
            >
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </select>
            <button 
              className="md:col-span-2 lg:col-span-5 bg-blue-500 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100" 
              onClick={handleSubmit}
            >
              Confirm Membership
            </button>
          </div>
        </div>
      )}

      {/* ✅ TABLE - Soft Design */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">ID</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Name</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Email</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Phone</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50 text-center">Rank</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((c, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-xs font-mono text-slate-400">{c.customerCode || c.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-600">{c.name}</td>
                <td className="px-6 py-4 text-sm text-slate-400">{c.email}</td>
                <td className="px-6 py-4 text-sm text-slate-400">{c.phone}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-medium border ${
                    (c.rank || c.loyalty) === "Gold" ? "bg-yellow-50 text-yellow-600 border-yellow-100" :
                    (c.rank || c.loyalty) === "Silver" ? "bg-slate-100 text-slate-600 border-slate-200" :
                    "bg-orange-50 text-orange-600 border-orange-100"
                  }`}>
                    {c.rank || c.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}