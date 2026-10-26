
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

import { PRODUCTS } from '../../data/productsData';

export default function SearchBar({ onSearchSelect }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
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

  // Filter matching products
  useEffect(() => {
    const searchText = query.trim().toLowerCase();

    if (searchText.length > 1) {
      const matched = PRODUCTS.filter((product) => {
        return (
          product.name?.toLowerCase().includes(searchText) ||
          product.category?.toLowerCase().includes(searchText) ||
          product.metal?.toLowerCase().includes(searchText)
        );
      }).slice(0, 6);

      setSuggestions(matched);
      setIsOpen(true);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );

      document.removeEventListener(
        'touchstart',
        handleClickOutside
      );
    };
  }, []);

  // Submit search
  const handleSubmit = (event) => {
    event.preventDefault();

    const searchQuery = query.trim();

    if (!searchQuery) {
      inputRef.current?.focus();
      return;
    }

    setIsOpen(false);

    navigate(
      `/jewellery?search=${encodeURIComponent(searchQuery)}`
    );

    onSearchSelect?.();
  };

  // Select a product suggestion
  const handleSelectSuggestion = (product) => {
    setQuery(product.name);
    setIsOpen(false);

    navigate(`/product/${product.slug}`);

    onSearchSelect?.();
  };

  // Select a trending search
  const handleSelectTrending = (text) => {
    setQuery(text);
    setIsOpen(false);

    navigate(
      `/jewellery?search=${encodeURIComponent(text)}`
    );

    onSearchSelect?.();
  };

  // Clear search
  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    setIsOpen(true);
    inputRef.current?.focus();
  };

  return (
    <div
      ref={wrapperRef}
      className="relative z-[41] mx-auto w-full min-w-0 max-w-2xl"
    >
      {/* Search Input */}
      <form
        onSubmit={handleSubmit}
        role="search"
        className="
          flex h-11 w-full min-w-0 items-center
          overflow-hidden rounded-lg border
          border-[#011E38]/20 bg-white shadow-sm
          transition-colors
          hover:border-[#011E38]
          focus-within:border-[#011E38]
          focus-within:ring-1
          focus-within:ring-[#011E38]/10
          sm:h-[46px]
          lg:h-[50px]
          lg:rounded-xl
        "
      >
        <button
          type="submit"
          className="
            flex h-full shrink-0 items-center
            justify-center pl-3 pr-1
            text-gray-400 hover:text-[#011E38]
            sm:pl-4
          "
          aria-label="Submit search"
        >
          <Search
            className="h-[18px] w-[18px]"
            aria-hidden="true"
          />
        </button>

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsOpen(true)}
          className="
            h-full min-w-0 flex-1
            border-0 bg-transparent
            px-2 text-sm text-[#111827]
            outline-none ring-0
            placeholder:text-gray-400
            focus:outline-none focus:ring-0
            [&::-webkit-search-cancel-button]:hidden
          "
          placeholder="Search for jewellery..."
          aria-label="Search for jewellery"
          aria-expanded={isOpen}
          autoComplete="off"
          enterKeyHint="search"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="
              flex h-full shrink-0 items-center
              justify-center px-3
              text-gray-400 transition-colors
              hover:text-gray-700
            "
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {/* Search Suggestions Dropdown */}
      {isOpen && (
        <div
          className="
            absolute left-0 right-0 top-full z-[60]
            mt-2 max-h-[min(420px,65vh)]
            overflow-x-hidden overflow-y-auto
            rounded-xl border border-gray-100
            bg-white py-2 shadow-2xl
          "
        >
          {query.trim().length > 1 ? (
            <div>
              <div
                className="
                  px-3 py-2 text-[11px]
                  font-semibold uppercase
                  tracking-wider text-gray-400
                  sm:px-4 sm:text-xs
                "
              >
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
                      className="
                        flex w-full min-w-0
                        cursor-pointer items-center
                        gap-3 px-3 py-3 text-left
                        transition-colors
                        hover:bg-gray-50
                        active:bg-gray-100
                        sm:px-4
                      "
                    >
                      <div
                        className="
                          flex h-11 w-11 shrink-0
                          items-center justify-center
                          overflow-hidden rounded-md
                          bg-[#fbfbfb]
                        "
                      >
                        {product.images?.[0] ? (
                          <img
                            src={product.images[0]}
                            alt={product.name || 'Jewellery'}
                            loading="lazy"
                            className="
                              h-full w-full
                              object-contain p-1
                            "
                          />
                        ) : (
                          <Search
                            className="h-5 w-5 text-gray-300"
                          />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div
                          className="
                            truncate text-sm
                            font-medium text-gray-900
                          "
                        >
                          {product.name}
                        </div>

                        <div
                          className="
                            mt-1 flex min-w-0
                            flex-wrap items-center
                            gap-x-1.5 gap-y-1
                            text-[11px] text-gray-500
                            sm:text-xs
                          "
                        >
                          {product.category && (
                            <span>{product.category}</span>
                          )}

                          {product.category && product.metal && (
                            <span aria-hidden="true">•</span>
                          )}

                          {product.metal && (
                            <span>{product.metal}</span>
                          )}

                          <span
                            className="
                              font-semibold text-[#011E38]
                            "
                          >
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
                <div
                  className="
                    px-4 py-6 text-center
                    text-sm text-gray-500
                  "
                >
                  No matching jewellery found.
                  <p className="mt-1 text-xs text-gray-400">
                    Try searching for Rings or Diamonds.
                  </p>
                </div>
              )}

              {suggestions.length > 0 && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="
                    w-full border-t border-gray-100
                    px-4 py-3 text-center
                    text-sm font-medium
                    text-[#011E38] hover:bg-gray-50
                  "
                >
                  View all results for "{query.trim()}"
                </button>
              )}
            </div>
          ) : (
            <div>
              <div
                className="
                  flex items-center gap-2
                  px-3 py-2 text-[11px]
                  font-semibold uppercase
                  tracking-wider text-gray-400
                  sm:px-4 sm:text-xs
                "
              >
                <TrendingUp
                  className="h-4 w-4 shrink-0 text-[#C9A45C]"
                />
                <span>Trending Searches</span>
              </div>

              <div
                className="
                  flex flex-wrap gap-2 p-3
                  sm:p-4
                "
              >
                {trendingSearches.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSelectTrending(item)}
                    className="
                      inline-flex max-w-full
                      items-center gap-1.5
                      rounded-full bg-gray-100
                      px-3 py-2 text-xs
                      font-medium text-gray-700
                      transition-colors
                      hover:bg-[#011E38]
                      hover:text-white
                      active:bg-[#011E38]
                      active:text-white
                    "
                  >
                    <Sparkles
                      className="
                        h-3 w-3 shrink-0
                        text-[#C9A45C]
                      "
                    />

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
