import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    total,
    subtotal,
    savings,
    totalItemsCount,
  } = useCart();

  const navigate = useNavigate();

  if (!isDrawerOpen) return null;

  const handleCheckout = () => {
    setIsDrawerOpen(false);
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#011E38] text-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="font-serif text-lg font-bold">Shopping Cart ({totalItemsCount})</h2>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Alert */}
          <div className="bg-emerald-50 px-5 py-2.5 border-b border-emerald-100 flex items-center gap-2 text-xs text-emerald-800">
            <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Free Insured Express Delivery</strong> unlocked for this order!</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-gray-100">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-800">Your cart is empty</h3>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs">
                    Explore our curated collection of rings, earrings, pendants, and solitaires to fill it up.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    navigate('/jewellery');
                  }}
                  className="bg-bluestone-navy hover:bg-bluestone-dark text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.cartKey} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                  <div className="w-20 h-20 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={() => setIsDrawerOpen(false)}
                          className="font-serif text-xs font-bold text-gray-900 hover:text-bluestone-navy line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.cartKey)}
                          className="text-gray-400 hover:text-rose-500 p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-gray-500 mt-0.5">
                        {item.purity} &bull; Size: {item.size}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="font-bold text-sm text-bluestone-navy">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </div>
                        {item.originalPrice > item.price && (
                          <div className="text-[10px] text-gray-400 line-through">
                            ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-200 bg-gray-50/70 space-y-3">
              {savings > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold bg-emerald-100/60 p-2 rounded-lg">
                  <span>Your Total Savings</span>
                  <span>₹{savings.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>Subtotal ({totalItemsCount} items)</span>
                <span className="text-base text-bluestone-navy">₹{total.toLocaleString('en-IN')}</span>
              </div>

              <div className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-bluestone-gold" />
                <span>100% Certified Jewellery &bull; 30 Days Money Back</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-bluestone-navy hover:bg-bluestone-dark text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Proceed To Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
