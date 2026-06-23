export const products = Array.from({ length: 30 }, (_, i) => {
  const id = i + 1;
  const isMakanan = i % 2 === 0;
  
  // Real high-quality images from Unsplash
  const makananImages = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80", // Salad
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80", // Pizza
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80", // Pasta
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80", // Burger
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80", // Ribs/BBQ
  ];
  
  const minumanImages = [
    "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80", // Iced Coffee
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=80", // Latte Art
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80", // Cocktail/Juice
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=80", // Iced tea
    "https://images.unsplash.com/photo-1587834515598-c1a7f0e75522?auto=format&fit=crop&w=500&q=80", // Matcha
  ];

  const imageUrl = isMakanan 
    ? makananImages[Math.floor(i / 2) % makananImages.length] 
    : minumanImages[Math.floor(i / 2) % minumanImages.length];

  const titlesMakanan = ["Salad Buah Premium", "Pizza Margherita", "Spaghetti Bolognese", "Classic Beef Burger", "Steak Sapi BBQ"];
  const titlesMinuman = ["Kopi Susu Gula Aren", "Cafe Latte Art", "Fresh Orange Juice", "Es Teh Lemon", "Matcha Latte Cold"];

  const title = isMakanan 
    ? titlesMakanan[Math.floor(i / 2) % titlesMakanan.length]
    : titlesMinuman[Math.floor(i / 2) % titlesMinuman.length];

  return {
    id: id,
    title: `${title} - ${id}`,
    code: `SDP-${1000 + i}`,
    category: isMakanan ? "Makanan" : "Minuman",
    brand: "Sedap Resto",
    price: isMakanan ? 35000 + (i * 2000) : 15000 + (i * 1000),
    stock: i === 3 ? 8 : (15 + i * 2), // Make one of them < 15 to show the red low stock badge
    thumbnail: imageUrl
  };
});