import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";

export default function Components() {
  const headers = [
    "No",
    "Nama Produk",
    "Kategori",
    "Harga",
    "Aksi",
  ];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">
        Components
      </h1>

      <p className="text-gray-500 mb-2">
        Dashboard / Components
      </p>

      <p className="text-gray-700 mb-8">
        Ini Halaman Components
      </p>

      {/* 1. BASIC COMPONENT */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          1. Basic Component
        </h2>

        <div className="border-l-4 border-gray-300 pl-5 mb-5">
          <p className="italic text-gray-700 leading-relaxed">
            <b>Basic Component</b> adalah component kecil dan sederhana yang sering digunakan berulang di banyak halaman.
            Component jenis ini biasanya tidak terlalu besar, tetapi sangat sering dipakai.
          </p>
        </div>

        <p className="mb-6">
          Contoh: Button, Badge, Avatar
        </p>

        <h3 className="text-xl font-bold mb-4">
          Button
        </h3>

        <h4 className="text-lg font-bold mb-3">
          Tanpa component
        </h4>

        <div className="flex gap-3 mb-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            Simpan
          </button>

          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
            Edit
          </button>

          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
            Hapus
          </button>
        </div>

        <h4 className="text-lg font-bold mb-3">
          Cara menggunakan Button
        </h4>

        <div className="flex gap-3 mb-8">
          <Button type="success">Simpan</Button>
          <Button type="danger">Hapus</Button>
        </div>

        <h3 className="text-xl font-bold mb-4">
          Badge
        </h3>

        <p className="mb-4">
          Badge digunakan untuk menampilkan label kecil, misalnya status data seperti Aktif, Pending, Selesai, Baru.
        </p>

        <div className="flex gap-3 mb-8">
          <Badge type="success">Aktif</Badge>
          <Badge type="warning">Pending</Badge>
          <Badge type="primary">Baru</Badge>
        </div>

        <h3 className="text-xl font-bold mb-4">
          Avatar
        </h3>

        <p className="mb-4">
          Avatar digunakan untuk menampilkan foto profil atau inisial pengguna.
        </p>

        <div className="flex gap-3">
          <Avatar name="Budi" />
          <Avatar name="Siti" />
        </div>
      </section>

      {/* 2. LAYOUT COMPONENT */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          2. Layout Component
        </h2>

        <div className="border-l-4 border-gray-300 pl-5 mb-5">
          <p className="italic text-gray-700 leading-relaxed">
            <b>Layout Component</b> digunakan untuk menyusun struktur besar halaman.
            Jika basic component merupakan bagian kecil, maka layout component merupakan kerangka halaman.
          </p>
        </div>

        <p className="mb-6">
          Contoh: Container, Navbar, Header, Sidebar, Footer
        </p>

        <h3 className="text-xl font-bold mb-4">
          Container
        </h3>

        <p className="mb-4">
          Container digunakan untuk menjadi pembungkus terluar dari suatu halaman.
        </p>

        <Container className="bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">
            Daftar Produk
          </h1>

          <p className="text-gray-600">
            Berikut adalah daftar produk terbaru.
          </p>
        </Container>

        <h3 className="text-xl font-bold mt-8 mb-4">
          Footer
        </h3>

        <p className="mb-4">
          Footer menjadi komponen yang berada dibagian bawah sebagai penutup halaman.
        </p>

        <Footer />
      </section>

      {/* 3. DATA DISPLAY COMPONENT */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          3. Data Display Component
        </h2>

        <div className="border-l-4 border-gray-300 pl-5 mb-5">
          <p className="italic text-gray-700 leading-relaxed">
            <b>Data Display Component</b> digunakan untuk menampilkan informasi atau data kepada pengguna.
          </p>
        </div>

        <p className="mb-6">
          Contohnya: Card, ProductCard, Table
        </p>

        <h3 className="text-xl font-bold mb-4">
          Card
        </h3>

        <p className="mb-4">
          Card digunakan sebagai pembungkus informasi.
        </p>

        <Card>
          <h2 className="text-xl font-bold">
            Judul Card
          </h2>

          <p className="text-gray-600">
            Ini adalah isi dari card.
          </p>
        </Card>

        <h3 className="text-xl font-bold mt-8 mb-4">
          ProductCard
        </h3>

        <p className="mb-4">
          ProductCard digunakan untuk menampilkan informasi produk.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ProductCard
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            title="Sepatu Sport"
            category="Fashion"
            price="Rp 450.000"
            description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            title="Smartphone"
            category="Elektronik"
            price="Rp 4.500.000"
            description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
          />
        </div>

        <h3 className="text-xl font-bold mb-4">
          Table
        </h3>

        <p className="mb-4">
          Table digunakan untuk menampilkan data dalam bentuk tabel.
        </p>

        <Table headers={headers}>
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border px-4 py-3">
                {index + 1}
              </td>

              <td className="border px-4 py-3">
                {product.name}
              </td>

              <td className="border px-4 py-3">
                {product.category}
              </td>

              <td className="border px-4 py-3">
                {product.price}
              </td>

              <td className="border px-4 py-3">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </section>

      {/* 4. FORM COMPONENT */}
      <section className="mb-10 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">
          4. Form Component
        </h2>

        <div className="border-l-4 border-gray-300 pl-5 mb-5">
          <p className="italic text-gray-700 leading-relaxed">
            <b>Form Component</b> digunakan untuk menerima input dari pengguna.
          </p>
        </div>

        <p>
          Contohnya: InputField, TextArea, SelectField
        </p>
      </section>

      {/* 5. FEEDBACK COMPONENT */}
      <section className="mb-10 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">
          5. Feedback Component
        </h2>

        <div className="border-l-4 border-gray-300 pl-5 mb-5">
          <p className="italic text-gray-700 leading-relaxed">
            <b>Feedback Component</b> digunakan untuk memberikan respon kepada pengguna setelah terjadi suatu aksi.
          </p>
        </div>

        <p>
          Contohnya: Alert, Modal, Loading
        </p>
      </section>

      {/* 6. SECTION COMPONENT */}
      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">
          6. Section Component
        </h2>

        <div className="border-l-4 border-gray-300 pl-5 mb-5">
          <p className="italic text-gray-700 leading-relaxed">
            <b>Section Component</b> adalah component yang mewakili satu bagian besar dalam halaman.
            Jenis component ini sering digunakan pada landing page.
          </p>
        </div>

        <p>
          Contoh: HeroSection, FeatureSection, ProductSection
        </p>
      </section>
    </div>
  );
}