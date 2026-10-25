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
    'Adjustable Rings'
  ];

  useEffect(() => {
    if (query.trim().length > 1) {
      const q = query.toLowerCase();
      const matched = PRODUCTS.filter(
        p => p.name.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.metal.toLowerCase().includes(q)
      ).slice(0, 6);
      setSuggestions(matched);
      setIsOpen(true);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      navigate(`/jewellery?search=${encodeURIComponent(query.trim())}`);
      if (onSearchSelect) onSearchSelect();
    }
  };

  const handleSelectSuggestion = (product) => {
    setQuery(product.name);
    setIsOpen(false);
    navigate(`/product/${product.slug}`);
    if (onSearchSelect) onSearchSelect();
  };

  const handleSelectTrending = (text) => {
    setQuery(text);
    setIsOpen(false);
    navigate(`/jewellery?search=${encodeURIComponent(text)}`);
    if (onSearchSelect) onSearchSelect();
  };

  return (
    <div ref={wrapperRef} className="relative z-[41] flex-1 max-w-2xl min-w-0">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-0 overflow-hidden rounded-xl border border-[#011E38]/20 hover:border-[#011E38] focus-within:border-[#011E38] bg-white shadow-sm transition-all"
      >
        <button
          type="submit"
          className="flex shrink-0 items-center pl-4 pr-1 text-left text-gray-400 hover:text-bluestone-navy"
          aria-label="Submit search"
        >
          <Search className="h-[18px] w-[18px] text-[#9ca3af]" />
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="h-11 flex-1 rounded-none border-0 bg-transparent pl-2 pr-4 text-sm text-[#111827] placeholder:text-[#9ca3af] focus:outline-none"
          placeholder="Search for jewellery..."
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="pr-3 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Autocomplete / Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 overflow-hidden max-h-[420px] overflow-y-auto">
          {query.trim().length > 1 ? (
            <div>
              <div className="px-4 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Matching Products
              </div>
              {suggestions.length > 0 ? (
                <div className="divide-y divide-gray-50">
                  {suggestions.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectSuggestion(p)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-11 h-11 object-contain rounded bg-[#fbfbfb] p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {p.name}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <span>{p.category}</span>
                          <span>&bull;</span>
                          <span>{p.metal}</span>
                          <span>&bull;</span>
                          <span className="font-semibold text-bluestone-navy">
                            ₹{p.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-6 text-center text-sm text-gray-500">
                  No matching jewellery found. Try searching for "Rings" or "Diamonds".
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="px-4 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-bluestone-coral" />
                <span>Trending Searches</span>
              </div>
              <div className="p-3 flex flex-wrap gap-2">
                {trendingSearches.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectTrending(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 hover:bg-bluestone-navy hover:text-white transition-all text-gray-700"
                  >
                    <Sparkles className="w-3 h-3 text-bluestone-gold" />
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
