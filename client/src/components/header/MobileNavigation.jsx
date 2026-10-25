
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  ChevronRight,
  ChevronDown,
  User,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react';

import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

const categories = [
  {
    name: '10+1 Monthly Plans',
    url: '/goldmine',
    sub: ['How Gold Mine Works', 'Calculate Maturity', 'Enrol Online'],
  },
  {
    name: 'Watch Jewellery',
    url: '/jewellery?category=Watch+Jewellery',
    sub: ['Watch Charms', 'Diamond Watch Pins', 'Gemstone Charms'],
  },
  {
    name: 'Rings',
    url: '/jewellery?category=Rings',
    sub: [
      'Engagement Rings',
      'Daily Wear Rings',
      'Cocktail Rings',
      'Couple Bands',
      'Solitaires',
      'Adjustable Rings',
    ],
  },
  {
    name: 'Earrings',
    url: '/jewellery?category=Earrings',
    sub: ['Studs', 'Drops & Danglers', 'Jhumkas', 'Hoops', 'Suidhaga'],
  },
  {
    name: 'Pendants',
    url: '/jewellery?category=Pendants',
    sub: ['Daily Wear', 'Heart Motifs', 'Alphabet Charms', 'Spiritual', 'Chains'],
  },
  {
    name: 'Solitaires',
    url: '/jewellery?category=Solitaires',
    sub: ['Solitaire Rings', 'Solitaire Pendants', 'Solitaire Earrings', '4Cs Guide'],
  },
  {
    name: 'Mangalsutras',
    url: '/jewellery?category=Mangalsutras',
    sub: ['Modern Mangalsutras', 'Traditional Chains', 'Mangalsutra Bracelets'],
  },
  {
    name: 'Bangles & Bracelets',
    url: '/jewellery?category=Bangles',
    sub: ['Gold Bangles', 'Diamond Cuff Bangles', 'Chain Bracelets', 'Kadas'],
  },
  {
    name: 'Gold Coins',
    url: '/jewellery?category=Coins',
    sub: ['1g 24Kt Coin', '2g 24Kt Coin', '5g Lakshmi Ganesh', '10g 24Kt Coin'],
  },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const navigate = useNavigate();

  const { totalItemsCount, setIsDrawerOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isLoggedIn, openAuth } = useAuth();

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedCategory(null);
  };

  const toggleCategory = (index) => {
    setExpandedCategory((previous) => (
      previous === index ? null : index
    ));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    setIsSearchOpen(false);
    navigate(`/jewellery?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="mobile-navigation sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm lg:hidden">
      {/* Mobile header */}
      <div className="flex min-h-[60px] items-center justify-between gap-3 px-4 py-2">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="shrink-0 p-1 text-[#011E38]"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* APARA brand logo */}

          <Link
            to="/"
            onClick={closeMenu}
            aria-label="APARA Jewellery Home"
            className="flex shrink-0 items-center gap-2"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C9A45C] font-serif text-lg font-medium leading-none text-[#C9A45C]">
              A
            </span>

            <span className="block font-serif text-[22px] font-medium leading-none tracking-[0.16em] text-[#011E38]">
              APARA
            </span>
          </Link>

        </div>

        {/* Mobile actions */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setIsSearchOpen((previous) => !previous)}
            className="p-1 text-[#011E38]"
            aria-label="Toggle search"
            aria-expanded={isSearchOpen}
          >
            {isSearchOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </button>

          <Link
            to="/wishlist"
            className="relative p-1 text-[#011E38]"
            aria-label={`Wishlist, ${wishlistCount} items`}
          >
            <Heart className="h-5 w-5" strokeWidth={1.7} />

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C9A45C] px-1 text-[9px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="relative p-1 text-[#011E38]"
            aria-label={`Cart, ${totalItemsCount} items`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.7} />

            {totalItemsCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#011E38] px-1 text-[9px] font-bold text-white">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search panel */}
      {isSearchOpen && (
        <div className="border-t border-gray-100 bg-gray-50 p-3">
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 overflow-hidden rounded-lg border border-gray-200 bg-white px-3 py-2"
          >
            <Search className="h-4 w-4 shrink-0 text-gray-400" />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search rings, diamonds, gold..."
              className="w-full bg-transparent text-sm text-gray-800 outline-none"
              autoFocus
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-gray-400"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <button
              type="submit"
              className="text-sm font-semibold text-[#011E38]"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex">
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/50"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          {/* Sidebar */}
          <aside className="relative z-10 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl">
            {/* Drawer header */}
            <div className="flex items-center justify-between bg-[#011E38] p-4 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A45C] font-serif text-2xl text-[#C9A45C]">
                  A
                </span>

                <div>
                  <div className="font-serif text-lg font-semibold tracking-[0.12em]">
                    APARA
                  </div>

                  <div className="text-[10px] tracking-[0.16em] text-gray-300">
                    FINE JEWELLERY
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                className="p-1 text-white/80 hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Login area */}
            <div className="flex items-center gap-3 border-b border-gray-100 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F2E7] text-[#011E38]">
                <User className="h-5 w-5" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">
                  Welcome to APARA
                </p>

                {isLoggedIn ? (
                  <p className="truncate text-sm font-semibold text-[#011E38]">
                    {user?.name || 'My Account'}
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      closeMenu();
                      openAuth('login');
                    }}
                    className="text-sm font-semibold text-[#A88745] underline"
                  >
                    Login / Sign Up →
                  </button>
                )}
              </div>
            </div>

            {/* Gold Mine promotion */}
            <div className="flex items-center justify-between border-b border-[#F0D8AA] bg-[#FFF7E9] p-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#A88745]" />

                <div>
                  <p className="text-xs font-bold text-[#011E38]">
                    Gold Mine 10+1 Plan
                  </p>
                  <p className="text-[10px] text-gray-600">
                    Get the 11th installment bonus
                  </p>
                </div>
              </div>

              <Link
                to="/goldmine"
                onClick={closeMenu}
                className="rounded bg-white px-3 py-1.5 text-xs font-semibold text-[#011E38] shadow-sm"
              >
                Explore
              </Link>
            </div>

            {/* Categories */}
            <div className="flex-1 divide-y divide-gray-100 overflow-y-auto">
              {categories.map((category, index) => (
                <div key={category.name}>
                  <button
                    type="button"
                    onClick={() => toggleCategory(index)}
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium text-gray-800 hover:bg-gray-50"
                    aria-expanded={expandedCategory === index}
                  >
                    <span>{category.name}</span>

                    {expandedCategory === index ? (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    )}
                  </button>

                  {expandedCategory === index && (
                    <div className="space-y-1 border-t border-gray-100 bg-gray-50 px-6 py-2">
                      <Link
                        to={category.url}
                        onClick={closeMenu}
                        className="block py-2 text-xs font-semibold text-[#011E38]"
                      >
                        View All {category.name} →
                      </Link>

                      {category.sub.map((subItem) => (
                        <Link
                          key={subItem}
                          to={category.url}
                          onClick={closeMenu}
                          className="block py-2 text-xs text-gray-600 hover:text-[#A88745]"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/wishlist"
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3.5 text-sm text-gray-800 hover:bg-gray-50"
              >
                Wishlist
                <Heart className="h-4 w-4" />
              </Link>

              <Link
                to="/jewellery"
                onClick={closeMenu}
                className="block px-4 py-3.5 text-sm text-gray-800 hover:bg-gray-50"
              >
                Offers & New Arrivals
              </Link>
            </div>

            {/* Drawer footer */}
            <div className="space-y-3 border-t border-gray-200 bg-gray-50 p-4 text-xs text-gray-600">
              <Link
                to="/stores"
                onClick={closeMenu}
                className="flex items-center gap-2 hover:text-[#011E38]"
              >
                <MapPin className="h-4 w-4 text-[#A88745]" />
                Locate Our Stores
              </Link>

              <a
                href="tel:18004190066"
                className="flex items-center gap-2 hover:text-[#011E38]"
              >
                <Phone className="h-4 w-4 text-[#A88745]" />
                Customer Support: 1800-419-0066
              </a>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
