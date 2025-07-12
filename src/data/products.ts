
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16-inch',
    price: 2499.99,
    image: '/placeholder.svg',
    category: 'Laptops',
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.',
    features: [
      'Apple M1 Pro chip',
      '16-inch Liquid Retina XDR display',
      '16GB unified memory',
      '512GB SSD storage',
      'Up to 21 hours battery life'
    ]
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 999.99,
    image: '/placeholder.svg',
    category: 'Smartphones',
    rating: 4.7,
    reviews: 892,
    inStock: true,
    description: 'iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action Button, and the most powerful iPhone camera system ever.',
    features: [
      'A17 Pro chip',
      'Pro camera system',
      'Titanium design',
      'Action Button',
      'USB-C connector'
    ]
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199.99,
    image: '/placeholder.svg',
    category: 'Smartphones',
    rating: 4.6,
    reviews: 634,
    inStock: false,
    description: 'Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with the new embedded S Pen, nightography camera and the most powerful Snapdragon processor yet.',
    features: [
      'Snapdragon 8 Gen 3',
      '200MP camera system',
      'Built-in S Pen',
      '6.8" Dynamic AMOLED display',
      '5000mAh battery'
    ]
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    price: 399.99,
    image: '/placeholder.svg',
    category: 'Audio',
    rating: 4.9,
    reviews: 2156,
    inStock: true,
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, for the ultimate listening experience.',
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Multipoint connection',
      'Quick Charge (3 min for 3 hours)',
      'Premium comfort and design'
    ]
  },
  {
    id: '5',
    name: 'iPad Pro 12.9-inch',
    price: 1099.99,
    image: '/placeholder.svg',
    category: 'Tablets',
    rating: 4.8,
    reviews: 756,
    inStock: true,
    description: 'The ultimate iPad experience with the most advanced technology. Featuring the M2 chip, Liquid Retina XDR display, and all-day battery life.',
    features: [
      'M2 chip',
      '12.9-inch Liquid Retina XDR display',
      'Face ID',
      'USB-C with Thunderbolt',
      'Apple Pencil support'
    ]
  },
  {
    id: '6',
    name: 'Apple Watch Series 9',
    price: 429.99,
    image: '/placeholder.svg',
    category: 'Wearables',
    rating: 4.7,
    reviews: 1892,
    inStock: true,
    description: 'Your essential companion for a healthy life is now even more powerful. Advanced health features help keep you connected, active, healthy, and safe.',
    features: [
      'S9 SiP chip',
      'Always-On Retina display',
      'Blood Oxygen monitoring',
      'ECG capability',
      'Water resistant to 50 meters'
    ]
  },
  {
    id: '7',
    name: 'Dell XPS 13',
    price: 1299.99,
    image: '/placeholder.svg',
    category: 'Laptops',
    rating: 4.5,
    reviews: 423,
    inStock: true,
    description: 'The Dell XPS 13 laptop is a study in luxurious simplicity. Meticulously crafted with premium materials, it\'s designed for those who demand excellence.',
    features: [
      '12th Gen Intel Core processors',
      '13.4" InfinityEdge display',
      'Premium aluminum construction',
      'All-day battery life',
      'Compact and lightweight'
    ]
  },
  {
    id: '8',
    name: 'Nintendo Switch OLED',
    price: 349.99,
    image: '/placeholder.svg',
    category: 'Gaming',
    rating: 4.8,
    reviews: 3241,
    inStock: true,
    description: 'Meet the newest member of the Nintendo Switch family. Play at home or on the go with a vibrant 7-inch OLED screen that makes colors pop.',
    features: [
      '7-inch OLED screen',
      'Enhanced audio',
      '64GB internal storage',
      'Wide adjustable stand',
      'Dock with wired LAN port'
    ]
  }
];

export const categories = [
  'All',
  'Laptops',
  'Smartphones',
  'Audio',
  'Tablets',
  'Wearables',
  'Gaming'
];
