import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProductBySlug } from '../services/api';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import {
  Star,
  Heart,
  Truck,
  ShieldCheck,
  RefreshCw,
  Award,
  ChevronRight,
  ShoppingBag,
  MapPin,
  CheckCircle2,
  Info
} from 'lucide-react';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('12');
  const [selectedMetal, setSelectedMetal] = useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    let isMounted = true;
    fetchProductBySlug(slug).then((data) => {
      if (isMounted && data) {
        setProduct(data);
        setSelectedMetal(data.metal);
      }
    });
    return () => { isMounted = false; };
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-bluestone-navy border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, {
      size: selectedSize,
      metal: selectedMetal,
      quantity: 1,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, {
      size: selectedSize,
      metal: selectedMetal,
      quantity: 1,
    });
    navigate('/cart');
  };

  const checkPincode = (e) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus({
        valid: true,
        message: 'Delivery by tomorrow, 5:00 PM • Cash on Delivery Available',
      });
    } else {
      setPincodeStatus({
        valid: false,
        message: 'Please enter a valid 6-digit Indian postal code',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container-fluid">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-8">
          <Link to="/" className="hover:text-bluestone-navy">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/jewellery" className="hover:text-bluestone-navy">Jewellery</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to={`/jewellery?category=${encodeURIComponent(product.category)}`} className="hover:text-bluestone-navy">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-800 truncate max-w-xs">{product.name}</span>
        </div>

        {/* Product Showcase: Left Gallery + Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Gallery (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnail vertical list */}
            {product.images.length > 1 && (
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 p-1 bg-[#FAF8F5] flex-shrink-0 transition-all ${
                      idx === activeImageIndex
                        ? 'border-bluestone-navy shadow-sm'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Stage Image */}
            <div className="flex-1 aspect-square rounded-2xl bg-[#FAF8F5] border border-gray-100 flex items-center justify-center p-8 relative overflow-hidden group">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 filter drop-shadow-md"
              />

              {/* Wishlist Floating Button */}
              <button
                type="button"
                onClick={() => toggleWishlist(product.id, product.name)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${
                  wishlisted
                    ? 'bg-rose-50 text-rose-600'
                    : 'bg-white hover:bg-gray-50 text-gray-400 hover:text-rose-500'
                }`}
                aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-current' : ''}`} />
              </button>

              {product.makingChargeDiscount && (
                <div className="absolute top-4 left-4 bg-amber-400 text-bluestone-navy text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.makingChargeDiscount}
                </div>
              )}
            </div>

          </div>

          {/* Right Product Details & Actions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & Reviews */}
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span>SKU: {product.id}</span>
                <span>&bull;</span>
                <span className="font-semibold text-emerald-700">In Stock</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-900 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-xs text-gray-500">
                  {product.reviewCount} Verified Buyer Reviews
                </span>
              </div>
            </div>

            {/* Price Row */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-baseline justify-between">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-bluestone-navy">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-base text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-gray-500 mt-1">
                  Price inclusive of all taxes. Free transit insurance included.
                </div>
              </div>

              {product.discountPercentage > 0 && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  Save {product.discountPercentage}%
                </span>
              )}
            </div>

            {/* Gold Mine Monthly Plan Benefit */}
            {product.goldMineEligible && (
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-amber-900 block">Gold Mine 10+1 Eligible</span>
                  <span className="text-gray-600">Pay monthly &amp; get 11th installment sponsored by BlueStone.</span>
                </div>
                <Link to="/goldmine" className="text-bluestone-navy font-bold underline whitespace-nowrap ml-2">
                  Learn More
                </Link>
              </div>
            )}

            {/* Size Selector */}
            {product.category === 'Rings' && (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-gray-700 mb-2">
                  <span>Select Ring Size (Indian Standard)</span>
                  <button className="text-bluestone-gold hover:underline flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    <span>Ring Size Guide</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['8', '10', '12', '14', '16', '18', '20'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`w-11 h-10 rounded-xl text-xs font-bold transition-all border ${
                        selectedSize === sz
                          ? 'border-bluestone-navy bg-bluestone-navy text-white shadow-xs'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Metal Variant Options */}
            <div>
              <span className="block text-xs font-semibold text-gray-700 mb-2">
                Available Metals
              </span>
              <div className="flex flex-wrap gap-2">
                {['Yellow Gold', 'Rose Gold', 'White Gold'].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSelectedMetal(m)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      selectedMetal === m
                        ? 'border-bluestone-navy bg-white text-bluestone-navy shadow-xs ring-1 ring-bluestone-navy'
                        : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-white'
                    }`}
                  >
                    18Kt {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-gray-700 mb-1.5">
                Check Delivery &amp; Store Availability
              </span>
              <form onSubmit={checkPincode} className="flex gap-2 max-w-sm">
                <div className="relative flex-1">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter 6-digit Pincode"
                    className="w-full text-xs pl-9 pr-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-bluestone-navy"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gray-100 hover:bg-bluestone-navy hover:text-white text-gray-800 text-xs font-bold px-4 rounded-xl border border-gray-300 transition-colors"
                >
                  Verify
                </button>
              </form>

              {pincodeStatus && (
                <div className={`mt-2 text-xs flex items-center gap-1.5 ${
                  pincodeStatus.valid ? 'text-emerald-700 font-semibold' : 'text-rose-600'
                }`}>
                  {pincodeStatus.valid && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                  <span>{pincodeStatus.message}</span>
                </div>
              )}
            </div>

            {/* Main Action CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-white hover:bg-gray-50 text-bluestone-navy border-2 border-bluestone-navy font-bold py-3.5 px-6 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Cart</span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="flex-1 bg-bluestone-navy hover:bg-bluestone-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Buy Now</span>
              </button>
            </div>

            {/* Assurance Badges */}
            <div className="pt-6 border-t border-gray-200 grid grid-cols-3 gap-2 text-center text-[10px] text-gray-600">
              <div className="p-2 rounded-lg bg-gray-50 flex flex-col items-center">
                <Award className="w-4 h-4 text-bluestone-gold mb-1" />
                <span>100% Certified BIS Hallmark</span>
              </div>
              <div className="p-2 rounded-lg bg-gray-50 flex flex-col items-center">
                <RefreshCw className="w-4 h-4 text-bluestone-accent mb-1" />
                <span>Lifetime Exchange &amp; Buyback</span>
              </div>
              <div className="p-2 rounded-lg bg-gray-50 flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-bluestone-coral mb-1" />
                <span>30-Day Money Back</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabbed Technical Specifications & Product Description */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex border-b border-gray-200 gap-8 text-sm font-bold">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3 transition-colors ${
                activeTab === 'details'
                  ? 'border-b-2 border-bluestone-navy text-bluestone-navy'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Specifications &amp; Purity
            </button>
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-3 transition-colors ${
                activeTab === 'description'
                  ? 'border-b-2 border-bluestone-navy text-bluestone-navy'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Description &amp; Story
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={`pb-3 transition-colors ${
                activeTab === 'policies'
                  ? 'border-b-2 border-bluestone-navy text-bluestone-navy'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Certification &amp; Exchange Policy
            </button>
          </div>

          <div className="py-6 text-xs sm:text-sm text-gray-700">
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex justify-between py-1.5 border-b border-gray-200/60">
                  <span className="text-gray-500 font-medium">Precious Metal</span>
                  <span className="font-bold text-gray-900">{product.metal}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-200/60">
                  <span className="text-gray-500 font-medium">Gold Purity</span>
                  <span className="font-bold text-gray-900">{product.purity}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-200/60">
                  <span className="text-gray-500 font-medium">Approx. Gold Weight</span>
                  <span className="font-bold text-gray-900">{product.goldWeight}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-200/60">
                  <span className="text-gray-500 font-medium">Total Diamond Weight</span>
                  <span className="font-bold text-gray-900">{product.diamondWeight || 'N/A'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-200/60">
                  <span className="text-gray-500 font-medium">Diamond Clarity / Colour</span>
                  <span className="font-bold text-gray-900">{product.diamondClarity} / {product.diamondColor}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-200/60">
                  <span className="text-gray-500 font-medium">Certification</span>
                  <span className="font-bold text-gray-900">{product.details?.purityCertification || 'BIS Hallmark & SGL Certified'}</span>
                </div>
              </div>
            )}

            {activeTab === 'description' && (
              <div className="max-w-2xl leading-relaxed space-y-3">
                <p>{product.description}</p>
                <p>
                  Every piece crafted at BlueStone undergoes 24 strict quality audits before being stamped with official BIS hallmarking. Designed to be lightweight and comfortable for daily wear without compromising on opulence.
                </p>
              </div>
            )}

            {activeTab === 'policies' && (
              <div className="max-w-2xl space-y-3 leading-relaxed">
                <h4 className="font-bold text-gray-900">Lifetime Exchange &amp; Buyback Guarantee</h4>
                <p>
                  We offer 100% value on gold and diamond weights based on prevailing market rates at the time of exchange across any of our 200+ physical stores or via our doorstep insured pickup.
                </p>
                <h4 className="font-bold text-gray-900 pt-2">30-Day No-Questions-Asked Returns</h4>
                <p>
                  If you are not completely enchanted by your jewellery, return it within 30 days for a 100% full money-back refund to your original payment method.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
