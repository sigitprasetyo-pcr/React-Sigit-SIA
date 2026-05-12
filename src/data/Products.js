export const products = Array.from({ length: 30 }, (_, i) => {
  const id = i + 1;
  // Kita gunakan koleksi gambar makanan dari Unsplash agar terlihat nyata
  const imageUrl = `https://prahara.pages.dev/api/makanan/${(i % 10) + 1}.jpg`; 

  return {
    id: id,
    title: `Menu Sedap ${id}`,
    code: `FD-${100 + i}`,
    category: i % 2 === 0 ? "Makanan" : "Minuman",
    brand: "Sedap Resto",
    price: 15000 + (i * 1000),
    stock: 10 + i,
    thumbnail: imageUrl // Properti ini penting agar sinkron dengan ProductDetail
  };
});