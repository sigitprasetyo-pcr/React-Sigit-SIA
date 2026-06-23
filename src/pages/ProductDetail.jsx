import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profile, refreshProfile } = useAuth();
  const [product, setProduct] = useState(null);
  const [loadingOrder, setLoadingOrder] = useState(false);

  useEffect(() => {
    // Di sini kita fetch produk dari tabel 'products' Supabase
    // Namun jika database produk masih kosong, pastikan kita populate atau gunakan data lokal sementara
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
      
      if (data) {
        setProduct(data);
      } else {
        console.error("Gagal ambil produk:", error);
      }
    };
    fetchProduct();
  }, [id]);

  // Kalkulasi diskon berdasarkan Tier Member
  const getDiscountPercentage = (tier) => {
    switch (tier) {
      case 'bronze': return 0.05; // 5%
      case 'silver': return 0.10; // 10%
      case 'gold': return 0.15; // 15%
      case 'platinum': return 0.20; // 20%
      default: return 0;
    }
  };

  const handleCheckout = async () => {
    if (!profile) {
      alert("Silakan login sebagai member terlebih dahulu!");
      return navigate('/login');
    }

    if (profile.role !== 'member') {
      alert("Hanya member yang bisa melakukan pesanan (bukan admin).");
      return;
    }

    setLoadingOrder(true);
    try {
      const discountRatio = getDiscountPercentage(profile.tier);
      const originalPrice = product.price;
      const discountApplied = originalPrice * discountRatio;
      const netAmount = originalPrice - discountApplied;

      // Insert order ke tabel orders
      const { error: orderError } = await supabase
        .from('orders')
        .insert([{
          member_id: profile.id,
          total_amount: originalPrice,
          discount_applied: discountApplied,
          net_amount: netAmount,
          status: 'pending'
        }]);

      if (orderError) throw orderError;

      // Update points dan evaluasi tier
      const earnedPoints = Math.floor(netAmount / 10000);
      const newTotalPoints = (profile.points || 0) + earnedPoints;
      
      let newTier = profile.tier;
      if (newTotalPoints >= 1000) newTier = 'platinum';
      else if (newTotalPoints >= 500) newTier = 'gold';
      else if (newTotalPoints >= 100) newTier = 'silver';
      else newTier = 'bronze';

      const { error: profileError } = await supabase
        .from('profiles')
        .update({ points: newTotalPoints, tier: newTier })
        .eq('id', profile.id);

      if (profileError) throw profileError;

      // Refresh session state untuk menampilkan poin terbaru
      await refreshProfile();
      alert(`Pesanan Berhasil! Anda mendapat diskon Rp ${discountApplied.toLocaleString('id-ID')} dan mendapatkan ${earnedPoints} poin baru.`);
      navigate('/orders'); // Redirect ke riwayat pesanan (Orders)
    } catch (err) {
      alert("Terjadi kesalahan saat membuat pesanan: " + err.message);
    } finally {
      setLoadingOrder(false);
    }
  };

  if (!product) return (
    <div className="p-10 text-center min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="p-8 bg-slate-50/50 min-h-screen flex justify-center items-center font-sans">
      <div className="w-full max-w-5xl">
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold text-sm mb-6 transition-colors">
          <FaArrowLeft /> Kembali ke Daftar Produk
        </Link>
        
        <div className="bg-white w-full rounded-[2rem] shadow-md shadow-slate-100/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          {/* SISI KIRI: TEMPAT GAMBAR */}
          <div className="md:w-1/2 bg-slate-50/50 flex items-center justify-center p-12 relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            <img 
              src={product.image_url || product.thumbnail || "https://placehold.co/600x400/png"} 
              alt={product.name || product.title} 
              className="w-full h-auto object-cover aspect-square rounded-2xl shadow-xl shadow-slate-200/50 relative z-10 transition-transform hover:scale-[1.03] duration-500"
            />
          </div>

          {/* SISI KANAN: DETAIL PRODUK */}
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-slate-800 mb-2 leading-tight">
              {product.name || product.title}
            </h1>
            
            <div className="space-y-6 mb-10 mt-6">
              <div>
                <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1">Harga Normal</p>
                <p className="text-4xl font-extrabold text-emerald-600">
                  Rp {(product.price || 0).toLocaleString('id-ID')}
                </p>
              </div>

              {profile && profile.role === 'member' && (
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                  <p className="text-emerald-700 text-sm font-bold mb-1">
                    Diskon Tier {profile.tier.charAt(0).toUpperCase() + profile.tier.slice(1)} ({getDiscountPercentage(profile.tier) * 100}%)
                  </p>
                  <p className="text-emerald-900 font-semibold">
                    Hemat: Rp {(product.price * getDiscountPercentage(profile.tier)).toLocaleString('id-ID')}
                  </p>
                </div>
              )}
            </div>

            <button 
              onClick={handleCheckout}
              disabled={loadingOrder}
              className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] disabled:opacity-70 text-white py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-xl shadow-emerald-500/30 flex justify-center items-center gap-2"
            >
              {loadingOrder ? "Memproses..." : "Beli Sekarang"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}