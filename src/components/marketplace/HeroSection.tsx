'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroItems = [
    {
      image: '/generated/chair.png',
      alt: 'Modern chair'
    },
    {
      image: '/generated/books-stack.png',
      alt: 'Stack of books'
    },
    {
      image: '/generated/jacket.png',
      alt: 'Denim jacket'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] leading-tight">
                Discover Pre-loved &<br />New Treasures
              </h1>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-md">
                Buy and sell quality items in your community. Find great deals on everything you need.
              </p>
            </div>
            <Link href="#products">
              <button className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white px-8 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right Content - Product Images */}
          <div className="relative h-80 md:h-96">
            <div className="flex items-center justify-center gap-4 h-full">
              {heroItems.map((item, index) => (
                <div
                  key={index}
                  className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {heroItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-[hsl(var(--accent))] w-6'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
