import type { Product } from '../types';

export const SAMPLE_PRODUCTS: Product[] = [
  // Electronics Category
  {
    id: 'e1',
    name: 'Premium Gaming Laptop',
    description: 'High-performance gaming laptop with RTX 4080, 32GB RAM and 1TB SSD',
    price: 25999999,
    image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80',
    category_id: 'electronics',
    stock: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'e2',
    name: 'Professional Monitor',
    description: '32-inch 4K HDR Professional Display for Content Creation',
    price: 8999999,
    image_url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80',
    category_id: 'electronics',
    stock: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'e3',
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with Cherry MX Blue switches',
    price: 1899999,
    image_url: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80',
    category_id: 'electronics',
    stock: 30,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'e4',
    name: 'Wireless Mouse',
    description: 'Ultra-precise wireless gaming mouse with 25K DPI',
    price: 999999,
    image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80',
    category_id: 'electronics',
    stock: 40,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'e5',
    name: 'Webcam Pro',
    description: '4K webcam with AI-powered auto-focus and background blur',
    price: 1299999,
    image_url: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80',
    category_id: 'electronics',
    stock: 25,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Mobile Category
  {
    id: 'm1',
    name: 'Flagship Smartphone',
    description: 'Latest 5G smartphone with 108MP camera system',
    price: 12999999,
    image_url: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80',
    category_id: 'mobile',
    stock: 25,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'm2',
    name: 'Wireless Earbuds Pro',
    description: 'Premium wireless earbuds with active noise cancellation',
    price: 2499999,
    image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80',
    category_id: 'mobile',
    stock: 40,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'm3',
    name: 'Tablet Ultra',
    description: '12.9-inch tablet with M2 chip and mini-LED display',
    price: 15999999,
    image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80',
    category_id: 'mobile',
    stock: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'm4',
    name: 'Smart Watch',
    description: 'Advanced fitness tracking with ECG and blood oxygen monitoring',
    price: 4999999,
    image_url: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&q=80',
    category_id: 'mobile',
    stock: 30,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'm5',
    name: 'Mobile Power Bank',
    description: '26800mAh power bank with 100W fast charging',
    price: 899999,
    image_url: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80',
    category_id: 'mobile',
    stock: 50,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Cameras Category
  {
    id: 'c1',
    name: 'Professional DSLR',
    description: 'Full-frame DSLR with 45MP sensor and 8K video',
    price: 34999999,
    image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80',
    category_id: 'cameras',
    stock: 10,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'c2',
    name: 'Mirrorless Camera',
    description: 'Compact mirrorless camera with 24MP APS-C sensor',
    price: 12999999,
    image_url: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&q=80',
    category_id: 'cameras',
    stock: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'c3',
    name: 'Camera Lens',
    description: 'Professional 70-200mm f/2.8 telephoto zoom lens',
    price: 21999999,
    image_url: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80',
    category_id: 'cameras',
    stock: 8,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'c4',
    name: 'Camera Tripod',
    description: 'Professional carbon fiber tripod with ball head',
    price: 2999999,
    image_url: 'https://images.unsplash.com/photo-1582994254571-52c62d96ebab?auto=format&fit=crop&q=80',
    category_id: 'cameras',
    stock: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'c5',
    name: 'Camera Backpack',
    description: 'Weather-resistant backpack for camera gear',
    price: 1499999,
    image_url: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80',
    category_id: 'cameras',
    stock: 25,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Audio Category
  {
    id: 'a1',
    name: 'Premium Headphones',
    description: 'Wireless over-ear headphones with noise cancellation',
    price: 4999999,
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80',
    category_id: 'audio',
    stock: 30,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'a2',
    name: 'Wireless Speaker',
    description: 'Portable Bluetooth speaker with 360° sound',
    price: 2999999,
    image_url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80',
    category_id: 'audio',
    stock: 35,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'a3',
    name: 'Studio Microphone',
    description: 'Professional condenser microphone for recording',
    price: 1999999,
    image_url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80',
    category_id: 'audio',
    stock: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'a4',
    name: 'Audio Interface',
    description: '2-channel USB audio interface for recording',
    price: 2499999,
    image_url: 'https://images.unsplash.com/photo-1653408646626-ae6b4d4f24e5?auto=format&fit=crop&q=80',
    category_id: 'audio',
    stock: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'a5',
    name: 'Studio Monitors',
    description: 'Professional powered studio monitor speakers',
    price: 5999999,
    image_url: 'https://images.unsplash.com/photo-1545518514-ce8448f542e4?auto=format&fit=crop&q=80',
    category_id: 'audio',
    stock: 12,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Office Category
  {
    id: 'o1',
    name: 'Office Desk',
    description: 'Adjustable standing desk with electric motor',
    price: 7999999,
    image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80',
    category_id: 'office',
    stock: 10,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'o2',
    name: 'Ergonomic Chair',
    description: 'Premium ergonomic office chair with lumbar support',
    price: 4999999,
    image_url: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
    category_id: 'office',
    stock: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'o3',
    name: 'Document Scanner',
    description: 'High-speed document scanner with auto feeder',
    price: 3999999,
    image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80',
    category_id: 'office',
    stock: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'o4',
    name: 'Laser Printer',
    description: 'Color laser printer with wireless networking',
    price: 5999999,
    image_url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80',
    category_id: 'office',
    stock: 12,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'o5',
    name: 'Filing Cabinet',
    description: 'Metal filing cabinet with lock system',
    price: 1999999,
    image_url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80',
    category_id: 'office',
    stock: 18,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Accessories Category
  {
    id: 'acc1',
    name: 'Laptop Sleeve',
    description: 'Premium leather laptop sleeve with extra pockets',
    price: 599999,
    image_url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80',
    category_id: 'accessories',
    stock: 50,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'acc2',
    name: 'Phone Case',
    description: 'Rugged protective phone case with card holder',
    price: 299999,
    image_url: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?auto=format&fit=crop&q=80',
    category_id: 'accessories',
    stock: 100,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'acc3',
    name: 'USB Hub',
    description: '7-port USB 3.0 hub with power adapter',
    price: 399999,
    image_url: 'https://images.unsplash.com/photo-1619506147154-01717498fc26?auto=format&fit=crop&q=80',
    category_id: 'accessories',
    stock: 40,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'acc4',
    name: 'Screen Protector',
    description: 'Tempered glass screen protector with oleophobic coating',
    price: 199999,
    image_url: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&q=80',
    category_id: 'accessories',
    stock: 200,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'acc5',
    name: 'Cable Organizer',
    description: 'Leather cable organizer with snap closure',
    price: 149999,
    image_url: 'https://images.unsplash.com/photo-1572533306030-c0e328619c5b?auto=format&fit=crop&q=80',
    category_id: 'accessories',
    stock: 75,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];