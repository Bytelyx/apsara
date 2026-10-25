import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/productsData';
import { Heart, Trash2, ShoppingBag, ArrowRight, ChevronRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlistIds, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const handleMoveToCart = (product) => {
    addToCart(product, { quantity: 1 });
    toggleWishlist(product.id, product.name);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8">
      <div className="container-fluid">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-bluestone-navy">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-800">My Wishlist</span>
        </div>

        <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-bluestone-navy">
              My Wishlist ({wishlistedProducts.length})
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Save your cherished pieces and transfer them to your cart anytime.
            </p>
          </div>

          <Link
            to="/jewellery"
            className="text-xs font-semibold text-bluestone-navy hover:underline hidden sm:inline-block"
          >
            Continue Browsing &rarr;
          </Link>
        </div>

        {wishlistedProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8 space-y-4 max-w-md mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-xl font-bold text-gray-800">Your wishlist is empty</h2>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              Click the heart icon on any jewellery piece to save it to your wishlist.
            </p>
            <div className="pt-2">
              <Link
                to="/jewellery"
                className="bg-bluestone-navy text-white text-xs font-semibold px-6 py-2.5 rounded-xl shadow inline-block"
              >
                Browse Jewellery
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistedProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-square bg-[#FAF8F5] p-4 flex items-center justify-center">
                  <button
                    onClick={() => toggleWishlist(product.id, product.name)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-rose-500 shadow-sm flex items-center justify-center hover:bg-white"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <Link to={`/product/${product.slug}`} className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </Link>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/product/${product.slug}`}>
                      <h3 className="font-serif text-sm font-bold text-gray-900 hover:text-bluestone-navy line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {product.purity} {product.metal}
                    </p>

                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-bold text-base text-bluestone-navy">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleMoveToCart(product)}
                    className="mt-4 w-full bg-bluestone-navy hover:bg-bluestone-dark text-white text-xs font-semibold py-2.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move To Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
