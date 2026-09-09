export interface Product {
  id: string;
  name: string;
  category: "power-station" | "solar-panel";
  wattage: number;
  description: string;
  specs: Record<string, string>;
  placeholderImage: string; // swap for real images later
  priceNote?: string;
}

export const products: Product[] = [
  {
    id: "pst-500",
    name: "Marstek 500W Portable Power Station",
    category: "power-station",
    wattage: 500,
    description:
      "Compact and lightweight portable power station for small appliances, camping, and emergency backup.",
    specs: {
      Capacity: "500Wh",
      Output: "500W AC / 1000W Surge",
      Weight: "8.2 kg",
      Dimensions: "28 × 20 × 25 cm",
    },
    placeholderImage: "/images/placeholder-500w.png",
    priceNote: "Inquire for pricing",
  },
  {
    id: "pst-1000",
    name: "Marstek 1000W Portable Power Station",
    category: "power-station",
    wattage: 1000,
    description:
      "Mid-size power station suitable for home office, outdoor events, and medium appliance backup.",
    specs: {
      Capacity: "1000Wh",
      Output: "1000W AC / 2000W Surge",
      Weight: "12.5 kg",
      Dimensions: "35 × 25 × 30 cm",
    },
    placeholderImage: "/images/placeholder-1000w.png",
    priceNote: "Inquire for pricing",
  },
  {
    id: "pst-2000",
    name: "Marstek 2000W Portable Power Station",
    category: "power-station",
    wattage: 2000,
    description:
      "High-capacity unit for full home backup, construction sites, and extended off-grid use.",
    specs: {
      Capacity: "2000Wh",
      Output: "2000W AC / 4000W Surge",
      Weight: "22 kg",
      Dimensions: "42 × 30 × 35 cm",
    },
    placeholderImage: "/images/placeholder-2000w.png",
    priceNote: "Inquire for pricing",
  },
  {
    id: "sol-300",
    name: "Marstek 300W Solar Panel",
    category: "solar-panel",
    wattage: 300,
    description:
      "Foldable monocrystalline solar panel for charging power stations and direct solar applications.",
    specs: {
      Peak: "300W",
      Type: "Monocrystalline",
      Folded: "60 × 40 × 5 cm",
      Weight: "6.8 kg",
    },
    placeholderImage: "/images/placeholder-300w-solar.png",
    priceNote: "Inquire for pricing",
  },
  {
    id: "sol-600",
    name: "Marstek 600W Solar Panel Array",
    category: "solar-panel",
    wattage: 600,
    description:
      "Dual-panel array delivering faster recharge times for larger power stations.",
    specs: {
      Peak: "600W (2 × 300W)",
      Type: "Monocrystalline",
      Folded: "120 × 40 × 10 cm",
      Weight: "14 kg",
    },
    placeholderImage: "/images/placeholder-600w-solar.png",
    priceNote: "Inquire for pricing",
  },
];
