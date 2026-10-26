
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  ChevronDown,
} from 'lucide-react';

const categories = [
  { name: 'Rings', path: '/jewellery?category=Rings' },
  { name: 'Earrings', path: '/jewellery?category=Earrings' },
  { name: 'Necklaces', path: '/jewellery?category=Necklaces' },
  { name: 'Bangles', path: '/jewellery?category=Bangles' },
  { name: 'Mangalsutra', path: '/jewellery?category=Mangalsutra' },
  { name: 'Gold Coins', path: '/jewellery?category=Gold%20Coins' },
];

export default function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    const value = query.trim();
    if (!value) return;

    window.location.href =
      `/jewellery?search=${encodeURIComponent(value)}`;

    setSearchOpen(false);
    setQuery('');
  };

  return (
    <div className="mobile-navigation sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm lg:hidden">
      {/* Main mobile header */}
      <div className="flex h-[60px] w-full items-center gap-3 px-3 sm:px-5">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-8 shrink-0 items-center justify-center text-[#011E38]"
          aria-label="Open menu"
        >
          <Menu size={23} />
        </button>

        <Link
          to="/"
          className="flex min-w-0 flex-1 flex-col items-start justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-[21px] font-medium leading-none tracking-[0.15em] text-[#011E38]">
            APSARA
          </span>
          <span className="mt-1 text-[8px] tracking-[0.28em] text-[#A88745]">
            FINE JEWELLERY
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setSearchOpen((open) => !open)}
          className="flex h-10 w-8 shrink-0 items-center justify-center text-[#011E38]"
          aria-label="Toggle search"
        >
          {searchOpen ? <X size={21} /> : <Search size={21} />}
        </button>

        <Link
          to="/wishlist"
          className="relative flex h-10 w-8 shrink-0 items-center justify-center text-[#011E38]"
          aria-label="Wishlist"
        >
          <Heart size={21} />
        </Link>

        <Link
          to="/cart"
          className="flex h-10 w-8 shrink-0 items-center justify-center text-[#011E38]"
          aria-label="Shopping bag"
        >
          <ShoppingBag size={21} />
        </Link>
      </div>

      {/* Expandable search */}
      {searchOpen && (
        <form
          onSubmit={handleSearch}
          className="border-t border-gray-100 px-3 py-3"
        >
          <div className="flex h-11 items-center rounded-lg border border-gray-300 px-3">
            <Search size={18} className="shrink-0 text-gray-400" />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for jewellery..."
              className="ml-2 h-full min-w-0 flex-1 bg-transparent text-sm outline-none"
              autoFocus
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                <X size={17} className="text-gray-500" />
              </button>
            )}
          </div>
        </form>
      )}

      {/* Side drawer backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/40"
          onClick={() => setMenuOpen(false)}
        >
          <aside
            className="h-full w-[min(320px,85vw)] overflow-y-auto bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
            aria-label="Mobile navigation menu"
          >
            <div className="flex h-[64px] items-center justify-between border-b border-gray-200 px-5">
              <div>
                <div className="font-serif text-xl tracking-[0.12em] text-[#011E38]">
                  APSARA
                </div>
                <div className="mt-1 text-[8px] tracking-[0.25em] text-[#A88745]">
                  FINE JEWELLERY
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-[#011E38]"
              >
                <X size={23} />
              </button>
            </div>

            <nav className="px-5 py-4">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-100 py-4 text-sm font-medium text-[#011E38]"
              >
                Home
              </Link>

              <button
                type="button"
                onClick={() => setCategoriesOpen((open) => !open)}
                className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-left text-sm font-medium text-[#011E38]"
                aria-expanded={categoriesOpen}
              >
                Shop By Category
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    categoriesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {categoriesOpen && (
                <div className="bg-gray-50 px-4">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-gray-100 py-3 text-sm text-gray-600 last:border-0"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/jewellery?search=Offers"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-100 py-4 text-sm font-medium text-[#011E38]"
              >
                Offers
              </Link>

              <Link
                to="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-100 py-4 text-sm font-medium text-[#011E38]"
              >
                My Wishlist
              </Link>

              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-100 py-4 text-sm font-medium text-[#011E38]"
              >
                My Bag
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}
