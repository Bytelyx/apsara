import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { fetchProducts } from '../services/api';
import { CATEGORIES, METALS } from '../data/productsData';
import { Filter, SlidersHorizontal, ArrowUpDown, X, ChevronRight } from 'lucide-react';

export default function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentCategory = searchParams.get('category') || 'All';
  const currentMetal = searchParams.get('metal') || 'All Metals';
  const searchQuery = searchParams.get('search') || '';
  const currentSort = searchParams.get('sort') || 'popular';

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchProducts({
      category: currentCategory,
      metal: currentMetal,
      search: searchQuery,
      sort: currentSort,
    }).then((data) => {
      if (isMounted) {
        setProducts(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [currentCategory, currentMetal, searchQuery, currentSort]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'All' && value !== 'All Metals') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#FBF9F7] py-8">
      <div className="container-fluid">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-bluestone-navy">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/jewellery" className="hover:text-bluestone-navy">Jewellery</Link>
          {currentCategory !== 'All' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="font-semibold text-gray-800">{currentCategory}</span>
            </>
          )}
          {searchQuery && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="font-semibold text-gray-800">Search: "{searchQuery}"</span>
            </>
          )}
        </div>

        {/* Page Title & Sort Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-bluestone-navy">
              {searchQuery ? `Search Results for "${searchQuery}"` : `${currentCategory} Designs`}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Showing {products.length} certified fine jewellery designs
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-xl text-xs font-semibold text-gray-800 shadow-xs"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-2 rounded-xl text-xs font-semibold text-gray-800 shadow-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-gray-500">Sort By:</span>
              <select
                value={currentSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="bg-transparent text-xs font-bold text-bluestone-navy focus:outline-none cursor-pointer"
              >
                <option value="popular">Popularity</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs h-fit sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="font-serif font-bold text-sm text-bluestone-navy flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-bluestone-gold" />
                Refine Selection
              </span>
              {(currentCategory !== 'All' || currentMetal !== 'All Metals' || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-semibold text-bluestone-coral hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                Categories
              </h4>
              <div className="space-y-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateFilter('category', cat)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      currentCategory.toLowerCase() === cat.toLowerCase()
                        ? 'bg-[#011E38] text-white font-bold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Metal Filter */}
            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                Precious Metals
              </h4>
              <div className="space-y-1.5">
                {METALS.map((metal) => (
                  <button
                    key={metal}
                    onClick={() => updateFilter('metal', metal)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      currentMetal.toLowerCase() === metal.toLowerCase()
                        ? 'bg-[#011E38] text-white font-bold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{metal}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Cards Grid Area */}
          <main className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-80 rounded-2xl bg-white border border-gray-200 animate-pulse p-4 flex flex-col justify-between">
                    <div className="w-full aspect-square bg-gray-100 rounded-xl" />
                    <div className="space-y-2 mt-4">
                      <div className="h-4 bg-gray-100 rounded w-3/4" />
                      <div className="h-3 bg-gray-100 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-bluestone-gold mx-auto">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-800">No matching jewellery found</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try adjusting your filter criteria or search query to explore other designs.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-bluestone-navy text-white text-xs font-semibold px-6 py-2.5 rounded-xl shadow"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>

        </div>

      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 animate-in slide-in-from-left">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
              <span className="font-serif font-bold text-base text-bluestone-navy">Filters</span>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-800 uppercase mb-2">Category</h4>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        updateFilter('category', cat);
                        setIsMobileFilterOpen(false);
                      }}
                      className="block w-full text-left py-1.5 text-xs text-gray-700"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-800 uppercase mb-2">Metal</h4>
                <div className="space-y-1">
                  {METALS.map((metal) => (
                    <button
                      key={metal}
                      onClick={() => {
                        updateFilter('metal', metal);
                        setIsMobileFilterOpen(false);
                      }}
                      className="block w-full text-left py-1.5 text-xs text-gray-700"
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
