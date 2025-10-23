import Header from '@/components/marketplace/Header';
import HeroSection from '@/components/marketplace/HeroSection';
import CategorySidebar from '@/components/marketplace/CategorySidebar';
import ProductGrid from '@/components/marketplace/ProductGrid';
import Footer from '@/components/marketplace/Footer';

export const dynamic = 'force-dynamic';

export default function MarketplaceHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <div className="container-custom py-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <CategorySidebar />
            <ProductGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}