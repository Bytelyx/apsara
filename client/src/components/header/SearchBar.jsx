
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, TrendingUp, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/productsData';

export default function SearchBar({ onSearchSelect }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const trendingSearches = [
    'Solitaire Rings',
    'Diamond Earrings',
    '18Kt Mangalsutra',
    'Gold Coins',
    'Rose Gold Bangles',
    'Watch Jewellery',
    'Adjustable Rings',
  ];

  useEffect(() => {
    if (query.trim().length > 1) {
      const q = query.toLowerCase();

      const matched = PRODUCTS.filter(
        (product) =>
          product.name?.toLowerCase().includes(q) ||
          product.category?.toLowerCase().includes(q) ||
          product.metal?.toLowerCase().includes(q)
      ).slice(0, 6);

      setSuggestions(matched);
      setIsOpen(true);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchQuery = query.trim();

    if (!searchQuery) return;

    setIsOpen(false);

    navigate(
      `/jewellery?search=${encodeURIComponent(searchQuery)}`
    );

    onSearchSelect?.();
  };

  const handleSelectSuggestion = (product) => {
    setQuery(product.name);
    setIsOpen(false);

    navigate(`/product/${product.slug}`);

    onSearchSelect?.();
  };

  const handleSelectTrending = (text) => {
    setQuery(text);
    setIsOpen(false);

    navigate(`/jewellery?search=${encodeURIComponent(text)}`);

    onSearchSelect?.();
  };

  return (
    <div
      ref={wrapperRef}
      className="relative z-[41] mx-auto w-full min-w-0 max-w-2xl"
    >
      {/* Search Input */}
      <form
        onSubmit={handleSubmit}
        className="flex h-[50px] items-center gap-0 overflow-hidden rounded-xl border border-[#011E38]/20 bg-white shadow-sm transition-all hover:border-[#011E38] focus-within:border-[#011E38]"
      >
        <button
          type="submit"
          className="flex shrink-0 items-center pl-4 pr-1 text-left text-gray-400 hover:text-[#011E38]"
          aria-label="Submit search"
        >
          <Search className="h-[18px] w-[18px] text-[#9ca3af]" />
        </button>

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsOpen(true)}
          className="h-full min-w-0 flex-1 rounded-none border-0 bg-transparent pl-2 pr-4 text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
          placeholder="Search for jewellery..."
          aria-label="Search for jewellery"
          autoComplete="off"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSuggestions([]);
              setIsOpen(true);
            }}
            className="pr-3 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {/* Search Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 max-h-[420px] w-full overflow-y-auto overflow-hidden rounded-xl border border-gray-100 bg-white py-3 shadow-2xl">
          {query.trim().length > 1 ? (
            <div>
              <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Matching Products
              </div>

              {suggestions.length > 0 ? (
                <div className="divide-y divide-gray-50">
                  {suggestions.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() =>
                        handleSelectSuggestion(product)
                      }
                      className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-gray-50"
                    >
                      <img
                        src={product.images?.[0]}
                        alt={product.name}
                        className="h-11 w-11 rounded bg-[#fbfbfb] object-contain p-1"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium text-gray-900">
                          {product.name}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                          <span>{product.category}</span>
                          <span aria-hidden="true">•</span>
                          <span>{product.metal}</span>
                          <span aria-hidden="true">•</span>

                          <span className="font-semibold text-[#011E38]">
                            ₹
                            {Number(
                              product.price || 0
                            ).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-6 text-center text-sm text-gray-500">
                  No matching jewellery found. Try searching for
                  "Rings" or "Diamonds".
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <TrendingUp className="h-3.5 w-3.5 text-[#C9A45C]" />
                <span>Trending Searches</span>
              </div>

              <div className="flex flex-wrap gap-2 p-3">
                {trendingSearches.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSelectTrending(item)}
                    className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:bg-[#011E38] hover:text-white"
                  >
                    <Sparkles className="h-3 w-3 text-[#C9A45C]" />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
