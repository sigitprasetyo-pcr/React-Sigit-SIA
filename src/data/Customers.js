export const customers = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  customerCode: `CUS-${100 + i}`,
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@gmail.com`,
  phone: `0812300${i + 1}`,
  rank: i % 3 === 0 ? "Gold" : i % 2 === 0 ? "Silver" : "Bronze"
}));