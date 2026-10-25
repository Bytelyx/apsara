import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { PRODUCTS, CATEGORIES } from '../../data/productsData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FeaturedProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase()).slice(0, 8);

  const filterTabs = ['All', 'Rings', 'Earrings', 'Solitaires', 'Mangalsutras', 'Bangles'];

  return (
    <section className="py-16 bg-white">
      <div className="container-fluid">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-bluestone-gold" />
              <span>Iconic Designs</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-bluestone-navy">
              Curated Fine Jewellery
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Handpicked everyday brilliance sculpted in 18Kt &amp; 22Kt hallmarked gold.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === tab
                    ? 'bg-bluestone-navy text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Explore All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/jewellery"
            className="inline-flex items-center gap-2 bg-white hover:bg-bluestone-navy text-bluestone-navy hover:text-white border-2 border-bluestone-navy font-bold text-xs sm:text-sm px-8 py-3 rounded-xl shadow-xs transition-all"
          >
            <span>View All 8,000+ Jewellery Designs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
