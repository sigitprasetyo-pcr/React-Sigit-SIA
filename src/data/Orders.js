export const orders = Array.from({ length: 30 }, (_, i) => ({
  id: `ORD-${i + 1}`,
  name: `Customer ${i + 1}`,
  status: ["Pending", "Completed", "Cancelled"][i % 3],
  price: (i + 1) * 5000,
  date: `2026-04-${String(i + 1).padStart(2, "0")}`,
}));