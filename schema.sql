-- ==========================================
-- PERHATIAN: MENJALANKAN SCRIPT INI AKAN MENGHAPUS DATA LAMA DI TABEL INI
-- (Sangat aman untuk tahap development/awal)
-- ==========================================

DROP TABLE IF EXISTS public.orders CASCADE;
DROP TABLE IF EXISTS public.products CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

DROP TYPE IF EXISTS user_role CASCADE;
DROP TYPE IF EXISTS member_tier CASCADE;
DROP TYPE IF EXISTS order_status CASCADE;

-- 1. Membuat Tipe Data Custom (Enum)
CREATE TYPE user_role AS ENUM ('admin', 'member', 'guest');
CREATE TYPE member_tier AS ENUM ('bronze', 'silver', 'gold', 'platinum');
CREATE TYPE order_status AS ENUM ('pending', 'delivered', 'canceled');

-- 2. Membuat Tabel
-- Tabel A: profiles
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name VARCHAR NOT NULL,
    role user_role DEFAULT 'member',
    tier member_tier DEFAULT 'bronze',
    points INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabel B: products
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
    price NUMERIC NOT NULL,
    stock INT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabel C: orders
CREATE TABLE public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    total_amount NUMERIC NOT NULL,
    discount_applied NUMERIC DEFAULT 0,
    net_amount NUMERIC NOT NULL,
    status order_status DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Mengaktifkan Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 4. Membuat Fungsi Pengecekan Admin (SECURITY DEFINER)
-- Fungsi ini digunakan untuk mencegah "Infinite Recursion" saat mengecek role Admin di tabel profiles
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 5. Membuat Kebijakan RLS (Policies)

-- Kebijakan Tabel `profiles`
-- Admin: Akses penuh menggunakan fungsi is_admin() untuk menghindari infinite recursion
CREATE POLICY "Admin dapat melakukan apa saja pada profiles" ON public.profiles
FOR ALL USING (
    public.is_admin()
);
-- Member: Baca dan update profil sendiri
CREATE POLICY "Pengguna dapat melihat profil mereka sendiri" ON public.profiles
FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Pengguna dapat memperbarui profil mereka sendiri" ON public.profiles
FOR UPDATE USING (auth.uid() = id);

-- Kebijakan Tabel `products`
-- Admin: Akses penuh
CREATE POLICY "Admin dapat melakukan apa saja pada products" ON public.products
FOR ALL USING (
    public.is_admin()
);
-- Member & Guest: Hanya baca
CREATE POLICY "Semua orang dapat melihat products" ON public.products
FOR SELECT USING (true);

-- Kebijakan Tabel `orders`
-- Admin: Akses penuh
CREATE POLICY "Admin dapat melakukan apa saja pada orders" ON public.orders
FOR ALL USING (
    public.is_admin()
);
-- Member: Baca dan tambah order milik sendiri
CREATE POLICY "Member dapat melihat pesanan mereka sendiri" ON public.orders
FOR SELECT USING (auth.uid() = member_id);
CREATE POLICY "Member dapat membuat pesanan mereka sendiri" ON public.orders
FOR INSERT WITH CHECK (auth.uid() = member_id);
