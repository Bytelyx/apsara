import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Truck, Sparkles } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlisted = isWishlisted(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id, product.name);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, { quantity: 1 });
  };

  return (
    <div className="group relative rounded-2xl border border-gray-100 hover:border-gray-200 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Media Area */}
      <div className="relative aspect-square overflow-hidden bg-[#FAF8F5] p-3 flex items-center justify-center">
        
        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            wishlisted
              ? 'bg-rose-50 text-rose-600 shadow'
              : 'bg-white/80 hover:bg-white text-gray-400 hover:text-rose-500 shadow-xs'
          }`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
          {product.isBestseller && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-bluestone-navy text-white px-2 py-0.5 rounded shadow-xs">
              Bestseller
            </span>
          )}
          {product.makingChargeDiscount && (
            <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-400 text-bluestone-navy px-1.5 py-0.5 rounded shadow-xs">
              {product.makingChargeDiscount}
            </span>
          )}
        </div>

        {/* Product Image */}
        <Link to={`/product/${product.slug}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-108 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Quick Add To Cart Button on hover */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-3 inset-x-3 z-10 bg-bluestone-navy/95 hover:bg-bluestone-navy text-white text-xs font-semibold py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Quick Add</span>
        </button>
      </div>

      {/* Card Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Rating & Ships In */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-gray-800">{product.rating || '4.8'}</span>
              <span>({product.reviewCount || 42})</span>
            </div>
            {product.readyToShip && (
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <Truck className="w-3 h-3" />
                <span>Ships in 24h</span>
              </span>
            )}
          </div>

          {/* Product Name */}
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-serif text-sm font-bold text-gray-900 group-hover:text-bluestone-navy line-clamp-1 transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Metal Purity */}
          <p className="text-[11px] text-gray-500 mt-0.5">
            {product.purity} {product.metal} &bull; {product.category}
          </p>
        </div>

        {/* Price & Discounts */}
        <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-base text-bluestone-navy">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {product.discountPercentage > 0 && (
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
