import { Link } from "react-router-dom";
import { products } from "../data/Products";
import { FaBox, FaChevronRight } from "react-icons/fa";

export default function Product() {
  return (
    <div className="p-8 bg-[#FAFBFC] min-h-screen font-sans">
      {/* Header dengan warna teks yang lebih soft (Slate/Gray) */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-700 tracking-tight">
            Inventory <span className="text-emerald-500/80">Stock</span>
          </h2>
          <p className="text-slate-400 text-xs mt-1">Monitor your restaurant inventory activity</p>
        </div>
        <button className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 border border-emerald-100">
          <FaBox className="text-xs opacity-70" /> Add Product
        </button>
      </div>

      {/* Kontainer Tabel dengan Shadow yang sangat tipis */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Product Title</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Code</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Category</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50">Brand</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50 text-right">Price</th>
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider font-semibold text-slate-400 border-b border-slate-50 text-center">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {products.map((item) => (
              <tr 
                key={item.id} 
                className="group hover:bg-slate-50/50 transition-colors duration-150"
              >
                <td className="px-6 py-4">
                  <Link 
                    to={`/products/${item.id}`} 
                    className="text-slate-600 font-medium hover:text-emerald-500 transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="px-6 py-4 text-xs font-mono text-slate-400">
                  {item.code}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-medium border ${
                    item.category === "Makanan" 
                    ? "bg-orange-50/50 text-orange-400 border-orange-100/50" 
                    : "bg-blue-50/50 text-blue-400 border-blue-100/50"
                  }`}>
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400 text-sm font-light">{item.brand}</td>
                <td className="px-6 py-4 text-right font-medium text-slate-600 text-sm">
                  Rp {item.price.toLocaleString('id-ID')}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-medium text-slate-500 bg-slate-100/50 px-2 py-0.5 rounded">
                    {item.stock}
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