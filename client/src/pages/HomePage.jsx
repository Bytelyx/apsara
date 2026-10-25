import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryMenuSection from '../components/home/CategoryMenuSection';
import GoldMineStrip from '../components/home/GoldMineStrip';
import BannerCarouselSection from '../components/home/BannerCarouselSection';
import FeaturedProductsSection from '../components/home/FeaturedProductsSection';
import CollectionSection from '../components/home/CollectionSection';
import VideoSection from '../components/home/VideoSection';
import TrendingSection from '../components/home/TrendingSection';
import ReelsSection from '../components/home/ReelsSection';
import AlchemyMaterialsSection from '../components/home/AlchemyMaterialsSection';
import DesignLedSection from '../components/home/DesignLedSection';
import RainforestSection from '../components/home/RainforestSection';
import StoreSection from '../components/home/StoreSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import EditorialSection from '../components/home/EditorialSection';
import BlueStonePromiseSection from '../components/home/BlueStonePromiseSection';
import NewsSection from '../components/home/NewsSection';
import SeoContentSection from '../components/home/SeoContentSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Banner with Exact VL_VIDEO_1.mp4 */}
      <HeroBanner />

      {/* 2. Category Circles Menu */}
      <CategoryMenuSection />

      {/* 3. Gold Mine 10+1 Strip Banner */}
      <GoldMineStrip />

      {/* 4. Banner Carousel */}
      <BannerCarouselSection />

      {/* 5. Featured Curated Jewellery */}
      <FeaturedProductsSection />

      {/* 6. Designer Collections */}
      <CollectionSection />

      {/* 7. Craftsmanship Video Showcase */}
      <VideoSection />

      {/* 8. Trendspotting Direction */}
      <TrendingSection />

      {/* 9. Watch & Shop Reels */}
      <ReelsSection />

      {/* 10. Alchemy of Materials */}
      <AlchemyMaterialsSection />

      {/* 11. Design-Led Philosophy */}
      <DesignLedSection />

      {/* 12. Rainforest Theme Collection */}
      <RainforestSection />

      {/* 13. Omnichannel Stores Section */}
      <StoreSection />

      {/* 14. Customer Testimonials */}
      <TestimonialsSection />

      {/* 15. Editorial Spotlight */}
      <EditorialSection />

      {/* 16. The BlueStone Promise */}
      <BlueStonePromiseSection />

      {/* 17. News & Media Coverage */}
      <NewsSection />

      {/* 18. SEO & Knowledge Base Content */}
      <SeoContentSection />
    </main>
  );
}
