'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  condition: 'New' | 'Used';
  image: string;
  isFeatured?: boolean;
}

export default function ProductCard({ id, name, price, condition, image, isFeatured }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Link href={`/items/${id}`}>
      <div className="product-card overflow-hidden cursor-pointer group relative">
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorited(!isFavorited);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Add to favorites"
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorited ? 'fill-[hsl(var(--accent))] text-[hsl(var(--accent))]' : 'text-gray-400'
            }`}
          />
        </button>

        {/* Blue badge for featured items */}
        {isFeatured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[hsl(var(--accent))] text-white text-xs font-medium px-2 py-1 rounded">
              Featured
            </span>
          </div>
        )}

        {/* Image */}
        <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-medium text-[hsl(var(--foreground))] line-clamp-2 group-hover:text-[hsl(var(--accent))] transition-colors">
              {name}
            </h3>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-[hsl(var(--color-price))]">
                ${price.toFixed(2)}
              </p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">
                {condition}
              </p>
            </div>
            {condition === 'New' && (
              <span className="bg-[hsl(var(--accent))] text-white text-xs font-medium px-2 py-1 rounded">
                NEW
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
