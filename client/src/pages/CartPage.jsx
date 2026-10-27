
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
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
  ChevronRight,
  MapPin,
  User,
  Phone,
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
    totalItemsCount,
  } = useCart();

  const { isLoggedIn, openAuth } = useAuth();

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderReference, setOrderReference] = useState('');

  // Delivery details
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [addressError, setAddressError] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();

    const code = couponCode.trim().toUpperCase();

    if (code === 'BLUESTONE50' || code === 'GOLDMINE10') {
      setCouponApplied(true);
      setAppliedCoupon(code);
      setCouponError('');
    } else {
      setCouponApplied(false);
      setAppliedCoupon('');
      setCouponError(
        'Invalid coupon code. Try BLUESTONE50 or GOLDMINE10.'
      );
    }
  };

  const removeCoupon = () => {
    setCouponApplied(false);
    setAppliedCoupon('');
    setCouponCode('');
    setCouponError('');
  };

  const discountAmount = couponApplied
    ? Math.min(1500, total)
    : 0;

  const finalTotal = Math.max(0, total - discountAmount);

  const validateAddress = () => {
    if (
      !customerName.trim() ||
      !contactNumber.trim() ||
      !deliveryAddress.trim() ||
      !city.trim() ||
      !state.trim() ||
      !pincode.trim()
    ) {
      setAddressError('ദയവായി എല്ലാ delivery details-ഉം പൂരിപ്പിക്കുക.');
      return false;
    }

    const phone = contactNumber.replace(/[\s-]/g, '');

    if (!/^(?:\+91)?[6-9]\d{9}$/.test(phone)) {
      setAddressError(
        'ശരിയായ 10 digit mobile number നൽകുക.'
      );
      return false;
    }

    if (!/^\d{6}$/.test(pincode.trim())) {
      setAddressError('ശരിയായ 6 digit PIN code നൽകുക.');
      return false;
    }

    setAddressError('');
    return true;
  };

  const handlePlaceOrder = () => {
    // Validate delivery details before proceeding to login.
    if (!validateAddress()) {
      return;
    }

    // Keep the user on the Cart page.
    // The authentication modal can open without losing form values.
    if (!isLoggedIn) {
      openAuth('login');
      return;
    }

    // Place the order only for an authenticated user.
    const reference =
      'BS-ORD-' +
      Math.floor(100000 + Math.random() * 900000);

    setOrderReference(reference);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-16 px-4 flex items-center justify-center">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-md w-full text-center space-y-4 border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Order Successfully Placed!
          </h2>

          <p className="text-xs text-gray-500 leading-relaxed">
            Thank you, {customerName}!
            <br />
            Order Reference:{' '}
            <strong>{orderReference}</strong>
            <br />
            Your order details have been recorded for this
            checkout session.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 text-left space-y-2 text-xs">
            <p className="font-bold text-gray-900">
              Delivery Details
            </p>
            <p className="text-gray-600">
              {customerName}
            </p>
            <p className="text-gray-600">
              {contactNumber}
            </p>
            <p className="text-gray-600">
              {deliveryAddress}, {city}, {state} - {pincode}
            </p>
          </div>

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
      <div className="min-h-screen bg-[#FAF8F5] py-16 px-4 flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-sm max-w-md w-full text-center space-y-4 border border-gray-200">
          <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mx-auto">
            <ShoppingBag className="w-10 h-10" />
          </div>

          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Your Shopping Bag is Empty
          </h2>

          <p className="text-xs text-gray-500 leading-relaxed">
            Discover exquisite jewellery crafted in 18Kt &amp;
            22Kt gold and certified diamonds.
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
      <div className="container-fluid px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-bluestone-navy">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-800">
            Shopping Cart
          </span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-bluestone-navy mb-8">
          Shopping Cart ({totalItemsCount} items)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div
                  key={item.cartKey}
                  className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-5"
                >
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
                          type="button"
                          onClick={() =>
                            removeFromCart(item.cartKey)
                          }
                          className="text-gray-400 hover:text-rose-500 p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-gray-500 mt-1">
                        Metal:{' '}
                        <span className="font-semibold text-gray-800">
                          {item.metal} ({item.purity})
                        </span>
                        {' '}• Size:{' '}
                        <span className="font-semibold text-gray-800">
                          {item.size}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 gap-3">
                      <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.cartKey,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-200 disabled:opacity-40"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>

                        <span className="px-3 text-xs font-bold text-gray-900">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.cartKey,
                              item.quantity + 1
                            )
                          }
                          className="px-3 py-2 text-gray-600 hover:bg-gray-200"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-bluestone-navy">
                          ₹
                          {(
                            item.price * item.quantity
                          ).toLocaleString('en-IN')}
                        </div>

                        {item.originalPrice > item.price && (
                          <div className="text-xs text-gray-400 line-through">
                            ₹
                            {(
                              item.originalPrice *
                              item.quantity
                            ).toLocaleString('en-IN')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantees */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-bluestone-gold flex-shrink-0" />
                100% Certified BIS Hallmark
              </span>

              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                30-Day Money Back Guarantee
              </span>
            </div>

            {/* Delivery Details */}
            <div
              id="delivery-details"
              className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-bluestone-gold flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold text-bluestone-navy">
                    Delivery Details
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Enter your details for order delivery.
                  </p>
                </div>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handlePlaceOrder();
                }}
              >
                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-xs font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>

                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                    <input
                      id="customerName"
                      type="text"
                      autoComplete="name"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        setAddressError('');
                      }}
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-bluestone-navy focus:ring-1 focus:ring-bluestone-navy"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-xs font-semibold text-gray-700 mb-2"
                  >
                    Contact Number *
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                    <input
                      id="contactNumber"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={contactNumber}
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                        setAddressError('');
                      }}
                      placeholder="Enter your mobile number"
                      className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-bluestone-navy focus:ring-1 focus:ring-bluestone-navy"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="deliveryAddress"
                    className="block text-xs font-semibold text-gray-700 mb-2"
                  >
                    House / Street Address *
                  </label>

                  <textarea
                    id="deliveryAddress"
                    autoComplete="street-address"
                    value={deliveryAddress}
                    onChange={(e) => {
                      setDeliveryAddress(e.target.value);
                      setAddressError('');
                    }}
                    placeholder="House number, street, area, landmark"
                    rows={3}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none resize-y focus:border-bluestone-navy focus:ring-1 focus:ring-bluestone-navy"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-xs font-semibold text-gray-700 mb-2"
                    >
                      City *
                    </label>

                    <input
                      id="city"
                      type="text"
                      autoComplete="address-level2"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        setAddressError('');
                      }}
                      placeholder="Enter city"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-bluestone-navy focus:ring-1 focus:ring-bluestone-navy"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-xs font-semibold text-gray-700 mb-2"
                    >
                      State *
                    </label>

                    <input
                      id="state"
                      type="text"
                      autoComplete="address-level1"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                        setAddressError('');
                      }}
                      placeholder="Enter state"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-bluestone-navy focus:ring-1 focus:ring-bluestone-navy"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-xs font-semibold text-gray-700 mb-2"
                  >
                    PIN Code *
                  </label>

                  <input
                    id="pincode"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => {
                      setPincode(
                        e.target.value.replace(/\D/g, '')
                      );
                      setAddressError('');
                    }}
                    placeholder="6-digit PIN code"
                    className="w-full sm:max-w-xs border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-bluestone-navy focus:ring-1 focus:ring-bluestone-navy"
                    required
                  />
                </div>

                {addressError && (
                  <div
                    role="alert"
                    className="bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-3 text-xs"
                  >
                    {addressError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-bluestone-navy hover:bg-bluestone-dark text-white font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <span>
                    {isLoggedIn
                      ? 'Place Order Securely'
                      : 'Login & Continue'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {!isLoggedIn && (
                  <p className="text-center text-xs text-gray-500">
                    After logging in, you don’t need to enter your delivery details again.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 space-y-4">
            {/* Coupon */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 block">
                <Tag className="w-3.5 h-3.5 text-bluestone-gold inline mr-1.5" />
                Promotional Coupon Code
              </span>

              {couponApplied ? (
                <div className="flex items-center justify-between gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 p-3 rounded-xl text-xs font-semibold">
                  <span>
                    {appliedCoupon} applied (-₹
                    {discountAmount.toLocaleString('en-IN')})
                  </span>

                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-rose-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleApplyCoupon}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value);
                      setCouponError('');
                    }}
                    placeholder="Enter coupon code"
                    className="min-w-0 flex-1 text-xs border border-gray-300 rounded-xl px-3 py-3 uppercase tracking-wider outline-none focus:border-bluestone-navy"
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
            <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm space-y-4 text-xs">
              <h3 className="font-serif text-base font-bold text-bluestone-navy pb-3 border-b border-gray-100">
                Order Summary
              </h3>

              <div className="flex justify-between gap-3 text-gray-600">
                <span>Subtotal ({totalItemsCount} items)</span>
                <span className="font-medium">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              {savings > 0 && (
                <div className="flex justify-between gap-3 text-emerald-700 font-semibold">
                  <span>Product Discounts</span>
                  <span>
                    -₹{savings.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              {couponApplied && (
                <div className="flex justify-between gap-3 text-emerald-700 font-semibold">
                  <span>Coupon Discount</span>
                  <span>
                    -₹{discountAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div className="flex justify-between gap-3 text-gray-600">
                <span>Delivery Charges</span>
                <span className="text-emerald-700 font-bold text-right">
                  FREE
                </span>
              </div>

              <div className="flex justify-between gap-3 text-gray-600">
                <span>Estimated GST (3% Included)</span>
                <span>Included</span>
              </div>

              <div className="pt-4 border-t border-gray-200 flex justify-between items-center gap-3 text-base font-bold text-gray-900">
                <span>Total Payable</span>
                <span className="text-xl text-bluestone-navy whitespace-nowrap">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById('delivery-details')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                }}
                className="w-full mt-2 bg-bluestone-navy hover:bg-bluestone-dark text-white font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Continue to Delivery Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
