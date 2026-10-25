
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Video,
  MapPin,
  Heart,
  ShoppingBag,
  User,
  MoreVertical,
  ChevronDown,
} from 'lucide-react';

// import AnnouncementBar from './AnnouncementBar';
import SearchBar from './SearchBar';
import MegaMenu from './MegaMenu';

import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { label: '10+1 Monthly Plans', url: '/goldmine' },
  { label: 'Watch Jewellery', url: '/jewellery?category=Watch+Jewellery' },
  { label: 'Rings', url: '/jewellery?category=Rings' },
  { label: 'Earrings', url: '/jewellery?category=Earrings' },
  { label: 'Pendants', url: '/jewellery?category=Pendants' },
  { label: 'Solitaires', url: '/jewellery?category=Solitaires' },
  { label: 'All Jewellery', url: '/jewellery' },
];

const rightNavItems = [
  { label: 'Gifts', url: '/jewellery' },
  { label: 'Coins', url: '/jewellery?category=Coins' },
  { label: 'Offers', url: '/jewellery' },
];

const GOLD = '#C9A45C';
const NAVY = '#011E38';

function BrandLogo({ compact = false }) {
  return (
    <Link
      to="/"
      aria-label="APSARA Jewellery Home"
      className={`inline-flex shrink-0 items-center ${
        compact ? 'gap-2' : 'gap-3'
      }`}
    >
      <span
        aria-hidden="true"
        className={`flex items-center justify-center rounded-full border border-[#C9A45C] font-serif font-semibold text-[#C9A45C] ${
          compact ? 'h-8 w-8 text-lg' : 'h-11 w-11 text-2xl'
        }`}
      >
        A
      </span>

      <span
        className={`font-serif font-semibold tracking-[0.16em] text-[#011E38] ${
          compact ? 'text-xl' : 'text-2xl md:text-3xl'
        }`}
      >
        APSARA
        {!compact && (
          <span className="mt-0.5 block text-[8px] font-medium tracking-[0.34em] text-[#A88745] md:text-[9px]">
            FINE JEWELLERY
          </span>
        )}
      </span>
    </Link>
  );
}

function HeaderAction({ to, icon: Icon, label, count, onClick }) {
  const content = (
    <>
      <span className="relative inline-flex">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
        {count > 0 && (
          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C9A45C] px-1 text-[9px] font-bold text-white">
            {count}
          </span>
        )}
      </span>
      <span className="whitespace-nowrap text-[10px] font-medium md:text-[11px]">
        {label}
      </span>
    </>
  );

  const className =
    'flex shrink-0 flex-col items-center justify-center gap-1 px-2 py-1 text-[#011E38] transition-colors hover:text-[#A88745]';

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={className}
        aria-label={label}
      >
        {content}
      </button>
    );
  }

  return (
    <Link to={to} className={className} aria-label={label}>
      {content}
    </Link>
  );
}

export default function SiteHeader() {
  const { totalItemsCount, setIsDrawerOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isLoggedIn, openAuth } = useAuth();

  const [activeMenu, setActiveMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuEnter = (label) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }

    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }

    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const allItems = [...navItems, ...rightNavItems];

  return (
    <header className="relative z-40 w-full overflow-visible bg-white shadow-sm">
      {/* Announcement bar */}
      {/* <AnnouncementBar /> */}

      {/* Main desktop header */}
      <div className="hdr-desktop border-b border-gray-200/70 bg-white">
        <div className="container-fluid px-4">
          <div className="flex min-h-[70px] items-center justify-between gap-4 py-3">
            {/* APSARA brand logo */}
            <BrandLogo />

            {/* Search */}
            <div className="min-w-0 flex-1">
              <SearchBar />
            </div>

            {/* Header actions */}
            <div className="flex shrink-0 items-center justify-end">
              <HeaderAction
                to="/jewellery"
                icon={Clock}
                label="Recently viewed"
              />

              <span className="mx-1 h-7 w-px bg-gray-200" />

              {/* <HeaderAction
                to="/stores"
                icon={Video}
                label="Video call"
              /> */}

              {/* <span className="mx-1 h-7 w-px bg-gray-200" /> */}

              <HeaderAction
                to="/stores"
                icon={MapPin}
                label="Find a Store"
              />

              <span className="mx-1 h-7 w-px bg-gray-200" />

              <HeaderAction
                to="/wishlist"
                icon={Heart}
                label="Wishlist"
                count={wishlistCount}
              />

              <span className="mx-1 h-7 w-px bg-gray-200" />

              <HeaderAction
                icon={ShoppingBag}
                label="Cart"
                count={totalItemsCount}
                onClick={() => setIsDrawerOpen(true)}
              />

              <span className="mx-1 h-7 w-px bg-gray-200" />

              <button
                type="button"
                onClick={() => openAuth('login')}
                className="flex shrink-0 flex-col items-center gap-1 px-2 py-1 text-[#011E38] transition-colors hover:text-[#A88745]"
                aria-label="Profile"
              >
                <User className="h-5 w-5" strokeWidth={1.6} />
                <span className="max-w-20 truncate text-[10px] font-medium md:text-[11px]">
                  {isLoggedIn
                    ? user?.name?.split(' ')[0] || 'Profile'
                    : 'Profile'}
                </span>
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsMoreOpen((previous) => !previous)}
                  className="flex flex-col items-center gap-1 px-2 py-1 text-[#011E38] hover:text-[#A88745]"
                  aria-label="More options"
                  aria-expanded={isMoreOpen}
                >
                  <MoreVertical className="h-5 w-5" />
                  <span className="text-[10px] font-medium md:text-[11px]">
                    More
                  </span>
                </button>

                {isMoreOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-52 rounded-lg border border-gray-100 bg-white py-2 text-xs shadow-xl">
                    <Link
                      to="/goldmine"
                      onClick={() => setIsMoreOpen(false)}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50"
                    >
                      10+1 Monthly Plan
                    </Link>

                    <Link
                      to="/stores"
                      onClick={() => setIsMoreOpen(false)}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50"
                    >
                      Store Locator
                    </Link>

                    <Link
                      to="/jewellery"
                      onClick={() => setIsMoreOpen(false)}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50"
                    >
                      Old Gold Exchange
                    </Link>

                    <Link
                      to="/jewellery"
                      onClick={() => setIsMoreOpen(false)}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50"
                    >
                      Customer Reviews
                    </Link>

                    <div className="my-1 border-t border-gray-100" />

                    <a
                      href="tel:18004190066"
                      className="block px-4 py-2.5 font-semibold text-[#011E38] hover:bg-gray-50"
                    >
                      Helpline: 1800-419-0066
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navigation: no duplicate floating logo */}
      <nav
        className={`relative z-40 w-full ${
          isSticky ? 'sticky top-0 shadow-lg' : ''
        }`}
        style={{ backgroundColor: NAVY }}
        onMouseLeave={handleMenuLeave}
      >
        <div className="container-fluid px-4">
          <div className="flex min-h-12 items-center justify-between gap-3">
            <ul className="flex min-w-0 flex-1 items-center justify-start gap-1 xl:gap-2">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="flex h-12 shrink-0 items-center"
                  onMouseEnter={() => handleMenuEnter(item.label)}
                >
                  <Link
                    to={item.url}
                    className={`flex h-full items-center gap-1 whitespace-nowrap border-b-2 px-2 text-[11px] font-semibold tracking-wide transition-colors xl:text-xs ${
                      activeMenu === item.label
                        ? 'border-[#C9A45C] text-[#C9A45C]'
                        : 'border-transparent text-white hover:text-[#C9A45C]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform ${
                        activeMenu === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex shrink-0 items-center gap-1 xl:gap-2">
              {rightNavItems.map((item) => (
                <li
                  key={item.label}
                  className="flex h-12 shrink-0 items-center"
                  onMouseEnter={() => handleMenuEnter(item.label)}
                >
                  <Link
                    to={item.url}
                    className={`flex h-full items-center gap-1 whitespace-nowrap border-b-2 px-2 text-[11px] font-semibold tracking-wide transition-colors xl:text-xs ${
                      activeMenu === item.label
                        ? 'border-[#C9A45C] text-[#C9A45C]'
                        : 'border-transparent text-white hover:text-[#C9A45C]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform ${
                        activeMenu === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <MegaMenu
          activeItem={activeMenu}
          onClose={() => setActiveMenu(null)}
        />
      </nav>
    </header>
  );
}
