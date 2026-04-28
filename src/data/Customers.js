export const customers = Array.from({ length: 30 }, (_, i) => ({
  id: `CUS-${i + 1}`,
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@gmail.com`,
  phone: `08123${String(i + 1).padStart(3, "0")}`,
  loyalty: ["Bronze", "Silver", "Gold"][i % 3],
}));