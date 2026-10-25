import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('bluestone_wishlist');
      return saved ? JSON.parse(saved) : ['BS-RNG-001', 'BS-EAR-001'];
    } catch {
      return ['BS-RNG-001', 'BS-EAR-001'];
    }
  });

  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('bluestone_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.warn('Could not save wishlist to localStorage', e);
    }
  }, [wishlistIds]);

  const toggleWishlist = (productId, productName = '') => {
    setWishlistIds(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        setToastMessage(`Removed ${productName || 'item'} from your Wishlist`);
        return prev.filter(id => id !== productId);
      } else {
        setToastMessage(`Added ${productName || 'item'} to your Wishlist`);
        return [...prev, productId];
      }
    });

    setTimeout(() => setToastMessage(''), 3000);
  };

  const isWishlisted = (productId) => wishlistIds.includes(productId);

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        toggleWishlist,
        isWishlisted,
        wishlistCount: wishlistIds.length,
        toastMessage,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};
