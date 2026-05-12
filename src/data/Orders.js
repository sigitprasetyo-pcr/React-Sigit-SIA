export const orders = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  orderCode: `ORD-${100 + i}`,
  customerName: `Customer ${i + 1}`,
  status: i % 3 === 0 ? "Completed" : i % 2 === 0 ? "Pending" : "Cancelled",
  amount: 5000 * (i + 1),
  date: `2026-04-${(i % 30) + 1 < 10 ? '0' + ((i % 30) + 1) : (i % 30) + 1}`
}));