import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Tag,
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    total,
    savings,
    totalItemsCount
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'BLUESTONE50' || couponCode.trim().toUpperCase() === 'GOLDMINE10') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try BLUESTONE50 or GOLDMINE10');
    }
  };

  const discountAmount = couponApplied ? 1500 : 0;
  const finalTotal = Math.max(0, total - discountAmount);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-16 flex items-center justify-center">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-md w-full text-center space-y-4 border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Order Successfully Placed!
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Order Reference: <strong>BS-ORD-{Math.floor(100000 + Math.random() * 900000)}</strong>
            <br />
            A confirmation receipt has been sent via SMS &amp; Email with full transit insurance tracking details.
          </p>
          <div className="pt-4">
            <Link
              to="/"
              className="inline-block bg-bluestone-navy text-white text-xs font-bold px-8 py-3 rounded-xl shadow-md hover:bg-bluestone-dark transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-16 flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-sm max-w-md w-full text-center space-y-4 border border-gray-200">
          <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mx-auto">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-900">Your Shopping Bag is Empty</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Discover exquisite jewellery crafted in 18Kt &amp; 22Kt gold and certified diamonds.
          </p>
          <div className="pt-2">
            <Link
              to="/jewellery"
              className="inline-block bg-bluestone-navy text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md hover:bg-bluestone-dark transition-colors"
            >
              Explore Curations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8">
      <div className="container-fluid">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-bluestone-navy">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-800">Shopping Cart</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-bluestone-navy mb-8">
          Shopping Cart ({totalItemsCount} items)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Items List (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div key={item.cartKey} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-5">
                  <div className="w-24 h-24 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <Link
                          to={`/product/${item.slug}`}
                          className="font-serif text-base font-bold text-gray-900 hover:text-bluestone-navy"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.cartKey)}
                          className="text-gray-400 hover:text-rose-500 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-gray-500 mt-1">
                        Metal: <span className="font-semibold text-gray-800">{item.metal} ({item.purity})</span>
                        &bull; Size: <span className="font-semibold text-gray-800">{item.size}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                          className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                          className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-lg font-bold text-bluestone-navy">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </div>
                        {item.originalPrice > item.price && (
                          <div className="text-xs text-gray-400 line-through">
                            ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantees Box */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center justify-between text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-bluestone-gold" />
                100% Certified BIS Hallmark
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                30-Day Money Back Guarantee
              </span>
            </div>
          </div>

          {/* Order Summary (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Coupon Box */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2 block flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-bluestone-gold" />
                Promotional Coupon Code
              </span>

              {couponApplied ? (
                <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 border border-emerald-200 p-3 rounded-xl text-xs font-semibold">
                  <span>Coupon BLUESTONE50 applied (-₹1,500)</span>
                  <button onClick={() => setCouponApplied(false)} className="text-rose-600 hover:underline">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter BLUESTONE50"
                    className="flex-1 text-xs border border-gray-300 rounded-xl px-3 py-2 uppercase tracking-wider focus:outline-none focus:border-bluestone-navy"
                  />
                  <button
                    type="submit"
                    className="bg-gray-100 hover:bg-bluestone-navy hover:text-white text-gray-800 text-xs font-bold px-4 rounded-xl border border-gray-300 transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponError && (
                <div className="mt-2 text-[11px] text-rose-600 font-medium">
                  {couponError}
                </div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-3 text-xs">
              <h3 className="font-serif text-base font-bold text-bluestone-navy pb-3 border-b border-gray-100">
                Order Summary
              </h3>

              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({totalItemsCount} items)</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {savings > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Product Discounts</span>
                  <span>-₹{savings.toLocaleString('en-IN')}</span>
                </div>
              )}

              {couponApplied && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Coupon Discount</span>
                  <span>-₹1,500</span>
                </div>
              )}

              <div className="flex justify-between text-gray-600">
                <span>Delivery Charges</span>
                <span className="text-emerald-700 font-bold">FREE (Express Insured)</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Estimated GST (3% Included)</span>
                <span>Included</span>
              </div>

              <div className="pt-3 border-t border-gray-200 flex justify-between text-base font-bold text-gray-900">
                <span>Total Payable</span>
                <span className="text-xl text-bluestone-navy">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full mt-4 bg-bluestone-navy hover:bg-bluestone-dark text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Place Order Securely</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
