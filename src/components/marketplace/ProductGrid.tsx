'use client';

import ProductCard from './ProductCard';

// Mock data matching the design reference
const products = [
  {
    id: '1',
    name: 'BeComplete',
    price: 899.99,
    condition: 'New' as const,
    image: '/generated/monitor.png',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Marchare Use',
    price: 250.00,
    condition: 'Used' as const,
    image: '/generated/armchair.png',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Tailed sites',
    price: 45.00,
    condition: 'Used' as const,
    image: '/generated/books.png',
    isFeatured: true
  },
  {
    id: '4',
    name: 'Mose formed Use',
    price: 15.00,
    condition: 'Used' as const,
    image: '/generated/vase.png'
  },
  {
    id: '5',
    name: 'Prior Solid',
    price: 120.00,
    condition: 'New' as const,
    image: '/generated/shoes.png'
  },
  {
    id: '6',
    name: 'Go Read Use',
    price: 180.00,
    condition: 'Used' as const,
    image: '/generated/record-player.png',
    isFeatured: true
  }
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-medium rounded-lg hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-all">
            Load More Items
          </button>
        </div>
      </div>
    </section>
  );
}
