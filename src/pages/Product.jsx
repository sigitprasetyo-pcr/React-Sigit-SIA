import { Link } from "react-router-dom";
import { products } from "../data/Products";
import { FaBox, FaSearch, FaFilter, FaEllipsisV, FaPlus } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Product() {
  return (
    <div>
      <PageHeader title="Products Inventory" breadcrumb="Dashboard / Products">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2 active:scale-95">
          <FaPlus /> Add Product
        </button>
      </PageHeader>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mt-2">
        {/* Table Toolbar */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all w-72 shadow-sm font-medium text-slate-700 placeholder-slate-400"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors shadow-sm">
              <FaFilter className="text-slate-400" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-colors shadow-sm">
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100">Product Name</th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100">Category</th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100">Code</th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100 text-right">Price</th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100 text-center">Status</th>
                <th className="px-6 py-5 text-[11px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/80">
              {products.map((item) => (
                <tr 
                  key={item.id} 
                  className="group hover:bg-slate-50/50 transition-colors duration-200 cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm relative group-hover:shadow-md transition-shadow">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=10b981&color=fff&bold=true`;
                          }}
                        />
                      </div>
                      
                      <div>
                        <Link 
                          to={`/products/${item.id}`} 
                          className="text-slate-800 font-bold hover:text-emerald-500 transition-colors text-sm"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs font-semibold text-slate-400 mt-0.5">{item.brand}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide border ${
                      item.category === "Makanan"
                      ? "bg-amber-50 text-amber-600 border-amber-200/50" 
                      : "bg-blue-50 text-blue-600 border-blue-200/50"
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                       <span className="text-xs font-mono font-bold text-slate-500">{item.code}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <span className="font-extrabold text-slate-700 text-sm">
                      Rp {item.price.toLocaleString('id-ID')}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className={`flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-lg border ${
                        item.stock < 15 
                        ? "text-rose-600 bg-rose-50 border-rose-100" 
                        : "text-emerald-600 bg-emerald-50 border-emerald-100"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${item.stock < 15 ? 'bg-rose-500' : 'bg-emerald-500'}`}></div>
                        {item.stock} in stock
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button className="p-2.5 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-xl transition-colors">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-6 border-t border-slate-100 flex justify-between items-center bg-slate-50/30">
          <p className="text-xs font-bold text-slate-400 tracking-wide">Showing <span className="text-slate-700">1</span> to <span className="text-slate-700">{products.length}</span> of <span className="text-slate-700">{products.length}</span> results</p>
          <div className="flex gap-1.5">
            <button className="px-4 py-2 text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-emerald-600 transition-colors shadow-sm">Prev</button>
            <button className="px-4 py-2 text-xs font-bold text-white bg-emerald-500 border border-emerald-500 rounded-xl shadow-md shadow-emerald-500/20">1</button>
            <button className="px-4 py-2 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-emerald-600 transition-colors shadow-sm">2</button>
            <button className="px-4 py-2 text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-emerald-600 transition-colors shadow-sm">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
}