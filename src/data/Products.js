export const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Menu Sedap ${i + 1}`,
  code: `FD-${100 + i}`,
  category: i % 2 === 0 ? "Makanan" : "Minuman",
  brand: "Sedap Resto",
  price: 15000 + (i * 1000),
  stock: 10 + i
}));