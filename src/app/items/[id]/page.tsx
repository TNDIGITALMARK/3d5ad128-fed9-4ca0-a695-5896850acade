'use client';

import Header from '@/components/marketplace/Header';
import Footer from '@/components/marketplace/Footer';
import Image from 'next/image';
import { Heart, MapPin, Eye, MessageCircle, Share2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

// Mock data for demo
const itemDetails = {
  id: '1',
  name: 'Vintage Leather Jacket',
  price: 85.00,
  condition: 'Used',
  description: 'Beautiful vintage leather jacket in excellent condition. Genuine leather with warm lining. Perfect for fall and winter. Gently worn with no major signs of wear. Classic style that never goes out of fashion.',
  images: [
    '/generated/jacket.png',
    '/generated/jacket.png',
    '/generated/jacket.png'
  ],
  seller: {
    name: 'Mike Vintage Finds',
    rating: 4.8,
    verified: true,
    totalSales: 127,
    joinedDate: 'Member since Jan 2023'
  },
  location: 'Within 15 miles',
  views: 43,
  favorites: 12,
  postedDate: '2 days ago',
  category: 'Apparel',
  specifications: [
    { label: 'Size', value: 'Large' },
    { label: 'Color', value: 'Brown' },
    { label: 'Material', value: 'Genuine Leather' },
    { label: 'Brand', value: 'Classic Vintage' }
  ]
};

export default function ItemListingPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden shadow-card">
                <Image
                  src={itemDetails.images[selectedImage]}
                  alt={itemDetails.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-4">
                {itemDetails.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer ${
                      selectedImage === index
                        ? 'ring-2 ring-[hsl(var(--accent))]'
                        : 'hover:ring-2 hover:ring-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${itemDetails.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Title and Price */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h1 className="text-3xl font-bold text-[hsl(var(--foreground))]">
                    {itemDetails.name}
                  </h1>
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isFavorited
                          ? 'fill-[hsl(var(--accent))] text-[hsl(var(--accent))]'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-4xl font-bold text-[hsl(var(--color-price))] mb-2">
                  ${itemDetails.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {itemDetails.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {itemDetails.favorites} favorites
                  </span>
                  <span>{itemDetails.postedDate}</span>
                </div>
              </div>

              {/* Condition Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-1 bg-gray-100 text-[hsl(var(--foreground))] font-medium text-sm rounded-lg">
                  {itemDetails.condition}
                </span>
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  {itemDetails.category}
                </span>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {itemDetails.description}
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-lg font-semibold mb-3">Specifications</h2>
                <div className="space-y-2">
                  {itemDetails.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-[hsl(var(--border))]">
                      <span className="text-[hsl(var(--muted-foreground))]">{spec.label}</span>
                      <span className="font-medium text-[hsl(var(--foreground))]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
                <MapPin className="w-5 h-5" />
                <span>{itemDetails.location}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white py-4 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contact Seller
                </button>
                <button className="w-full border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] text-[hsl(var(--foreground))] py-4 rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Seller Information */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h2 className="text-lg font-semibold">Seller Information</h2>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-[hsl(var(--foreground))]">
                          {itemDetails.seller.name}
                        </p>
                        {itemDetails.seller.verified && (
                          <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent))]" />
                        )}
                      </div>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        {itemDetails.seller.joinedDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[hsl(var(--foreground))]">
                        {itemDetails.seller.rating} ★
                      </p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        {itemDetails.seller.totalSales} sales
                      </p>
                    </div>
                  </div>
                  <Link href={`/sellers/${itemDetails.seller.name}`}>
                    <button className="w-full py-2 border border-[hsl(var(--border))] rounded-lg hover:bg-white transition-colors text-sm font-medium">
                      View Seller Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Items Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Placeholder for similar items - would use ProductCard component */}
              <p className="text-[hsl(var(--muted-foreground))] col-span-full text-center py-8">
                Similar items would appear here
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
