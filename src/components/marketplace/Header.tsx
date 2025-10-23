'use client';

import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-[hsl(var(--primary))] text-white sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight uppercase">MARKET.</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl hidden md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for items..."
                className="w-full pl-10 pr-4 py-2 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-4">
            {/* Categories Dropdown */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
              <Menu className="w-5 h-5" />
              Categories
            </button>

            {/* Sell Your Item Button */}
            <Link href="/sell">
              <button className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all">
                Sell Your Item
              </button>
            </Link>

            {/* Cart Icon */}
            <Link href="/cart" className="relative hover:bg-white/10 p-2 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[hsl(var(--accent))] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </Link>

            {/* User Icon */}
            <Link href="/dashboard" className="hover:bg-white/10 p-2 rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden border-t border-white/10 py-3 px-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for items..."
            className="w-full pl-10 pr-4 py-2 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
          />
        </div>
      </div>
    </header>
  );
}
