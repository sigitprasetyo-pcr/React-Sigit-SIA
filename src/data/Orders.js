export const orders = Array.from({ length: 30 }, (_, i) => ({
  id: `ORD-${i + 1}`,
  name: `Customer ${i + 1}`,
  status: ["Pending", "Completed", "Cancelled"][i % 3],
  price: 10000 + i * 5000,
  date: `2026-04-${(i % 30) + 1}`,
}));