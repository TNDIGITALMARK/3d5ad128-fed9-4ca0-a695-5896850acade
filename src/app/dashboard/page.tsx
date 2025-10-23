'use client';

import Header from '@/components/marketplace/Header';
import Footer from '@/components/marketplace/Footer';
import { Package, Eye, Heart, MessageCircle, DollarSign, TrendingUp, Plus, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data
const dashboardData = {
  stats: {
    totalListings: 12,
    totalViews: 543,
    totalFavorites: 87,
    totalMessages: 23,
    totalSales: 8,
    revenue: 1240.00
  },
  listings: [
    {
      id: '1',
      name: 'Vintage Leather Jacket',
      price: 85.00,
      condition: 'Used',
      image: '/generated/jacket.png',
      views: 43,
      favorites: 12,
      messages: 5,
      status: 'Active',
      postedDate: '2 days ago'
    },
    {
      id: '2',
      name: 'Modern Monitor',
      price: 899.99,
      condition: 'New',
      image: '/generated/monitor.png',
      views: 128,
      favorites: 34,
      messages: 12,
      status: 'Active',
      postedDate: '1 week ago'
    },
    {
      id: '3',
      name: 'Comfortable Armchair',
      price: 250.00,
      condition: 'Used',
      image: '/generated/armchair.png',
      views: 67,
      favorites: 18,
      messages: 6,
      status: 'Sold',
      postedDate: '2 weeks ago'
    }
  ]
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 bg-gray-50">
        <div className="container-custom">
          {/* Page Title */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[hsl(var(--foreground))]">Seller Dashboard</h1>
              <p className="text-[hsl(var(--muted-foreground))] mt-1">
                Manage your listings and track performance
              </p>
            </div>
            <Link href="/sell">
              <button className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                <Plus className="w-5 h-5" />
                List New Item
              </button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Total Listings */}
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Total Listings</p>
                  <p className="text-3xl font-bold text-[hsl(var(--foreground))]">
                    {dashboardData.stats.totalListings}
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Package className="w-6 h-6 text-[hsl(var(--accent))]" />
                </div>
              </div>
            </div>

            {/* Total Views */}
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Total Views</p>
                  <p className="text-3xl font-bold text-[hsl(var(--foreground))]">
                    {dashboardData.stats.totalViews}
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Total Favorites */}
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Total Favorites</p>
                  <p className="text-3xl font-bold text-[hsl(var(--foreground))]">
                    {dashboardData.stats.totalFavorites}
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Messages</p>
                  <p className="text-3xl font-bold text-[hsl(var(--foreground))]">
                    {dashboardData.stats.totalMessages}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            {/* Total Sales */}
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Total Sales</p>
                  <p className="text-3xl font-bold text-[hsl(var(--foreground))]">
                    {dashboardData.stats.totalSales}
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Revenue */}
            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Revenue</p>
                  <p className="text-3xl font-bold text-[hsl(var(--foreground))]">
                    ${dashboardData.stats.revenue.toFixed(2)}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Listings Table */}
          <div className="bg-white rounded-lg shadow-card overflow-hidden">
            <div className="px-6 py-4 border-b border-[hsl(var(--border))]">
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))]">My Listings</h2>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-[hsl(var(--border))]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      Favorites
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      Messages
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[hsl(var(--border))]">
                  {dashboardData.listings.map((listing) => (
                    <tr key={listing.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={listing.image}
                              alt={listing.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-[hsl(var(--foreground))]">{listing.name}</p>
                            <p className="text-sm text-[hsl(var(--muted-foreground))]">{listing.condition}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-[hsl(var(--foreground))]">
                          ${listing.price.toFixed(2)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            listing.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {listing.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[hsl(var(--foreground))]">{listing.views}</td>
                      <td className="px-6 py-4 text-[hsl(var(--foreground))]">{listing.favorites}</td>
                      <td className="px-6 py-4 text-[hsl(var(--foreground))]">{listing.messages}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4 text-[hsl(var(--accent))]" />
                          </button>
                          <button
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-[hsl(var(--border))]">
              {dashboardData.listings.map((listing) => (
                <div key={listing.id} className="p-4 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={listing.image}
                        alt={listing.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[hsl(var(--foreground))]">{listing.name}</p>
                      <p className="text-lg font-semibold text-[hsl(var(--foreground))]">
                        ${listing.price.toFixed(2)}
                      </p>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          listing.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {listing.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center text-sm">
                    <div>
                      <p className="text-[hsl(var(--muted-foreground))]">Views</p>
                      <p className="font-semibold text-[hsl(var(--foreground))]">{listing.views}</p>
                    </div>
                    <div>
                      <p className="text-[hsl(var(--muted-foreground))]">Favorites</p>
                      <p className="font-semibold text-[hsl(var(--foreground))]">{listing.favorites}</p>
                    </div>
                    <div>
                      <p className="text-[hsl(var(--muted-foreground))]">Messages</p>
                      <p className="font-semibold text-[hsl(var(--foreground))]">{listing.messages}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2 px-4 border border-[hsl(var(--border))] rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex-1 py-2 px-4 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
