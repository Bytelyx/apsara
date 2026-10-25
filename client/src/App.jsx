import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider, useWishlist } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';

import SiteHeader from './components/header/SiteHeader';
import MobileNavigation from './components/header/MobileNavigation';
import SiteFooter from './components/footer/SiteFooter';
import CartDrawer from './components/common/CartDrawer';
import AuthModal from './components/common/AuthModal';

import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import StoreLocatorPage from './pages/StoreLocatorPage';
import GoldMinePage from './pages/GoldMinePage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on every route transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Global Toast for Wishlist / Cart Actions
function GlobalToast() {
  const { toastMessage } = useWishlist();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#011E38] text-white text-xs font-semibold px-5 py-3 rounded-full shadow-2xl border border-white/20 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {toastMessage}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#011E38] selection:text-white">
              
              {/* Header (Desktop + Mobile) */}
              <SiteHeader />
              <MobileNavigation />

              {/* Main Page Route View */}
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/jewellery" element={<ProductListingPage />} />
                  <Route path="/product/:slug" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/stores" element={<StoreLocatorPage />} />
                  <Route path="/goldmine" element={<GoldMinePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>

              {/* Site Footer */}
              <SiteFooter />

              {/* Interactive Overlays */}
              <CartDrawer />
              <AuthModal />
              <GlobalToast />
            </div>
          </Router>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}
