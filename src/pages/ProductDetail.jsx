import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="p-8 bg-[#FAFBFC] min-h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* SISI KIRI: TEMPAT GAMBAR */}
        <div className="md:w-1/2 bg-slate-50 flex items-center justify-center p-8 border-r border-slate-50">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-auto object-contain mix-blend-multiply transition-transform hover:scale-105 duration-300"
          />
        </div>

        {/* SISI KANAN: DETAIL PRODUK */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[2px] mb-2">
            Detail Produk
          </p>
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            {product.title}
          </h1>

          <div className="space-y-4 mb-8">
            <div>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Kategori</p>
              <p className="text-slate-600 text-sm">{product.category}</p>
            </div>
            <div>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Brand</p>
              <p className="text-slate-600 text-sm">{product.brand}</p>
            </div>
            <div>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Harga</p>
              <p className="text-2xl font-bold text-slate-800">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </div>
          </div>

          <button className="w-full bg-[#00B67A] hover:bg-[#00A36D] text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-emerald-100">
            Beli Sekarang
          </button>
        </div>

      </div>
    </div>
  );
}