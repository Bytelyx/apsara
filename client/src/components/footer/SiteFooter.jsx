import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#011E38] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container-fluid">
        
        {/* Newsletter & Club Row */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 mb-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-bluestone-gold bg-white/10 px-2.5 py-1 rounded-full">
              Join The BlueStone Club
            </span>
            <h3 className="font-serif text-2xl font-bold mt-2 text-white">
              Be The First To Discover New Curations
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Receive secret preview access, seasonal private sale invitations, and curated style edits.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {isSubscribed ? (
              <div className="flex items-center gap-2 bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 px-5 py-3 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing! Welcome to the BlueStone family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md w-full gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-amber-400 flex-1 min-w-[240px]"
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-300 text-bluestone-navy font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs">
          
          {/* Col 1: About Us */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              About BlueStone
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/stores" className="hover:text-white transition-colors">Our Story &amp; Heritage</Link></li>
              <li><Link to="/stores" className="hover:text-white transition-colors">200+ Stores Nationwide</Link></li>
              <li><Link to="/jewellery" className="hover:text-white transition-colors">Design Studio &amp; Artistry</Link></li>
              <li><Link to="/goldmine" className="hover:text-white transition-colors">Leadership &amp; Investors</Link></li>
              <li><Link to="/stores" className="hover:text-white transition-colors">Careers at BlueStone</Link></li>
              <li><Link to="/jewellery" className="hover:text-white transition-colors">CSR &amp; Ethical Sourcing</Link></li>
            </ul>
          </div>

          {/* Col 2: The BlueStone Advantage */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              BlueStone Advantage
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/goldmine" className="hover:text-white transition-colors">Gold Mine 10+1 Monthly Plan</Link></li>
              <li><Link to="/stores" className="hover:text-white transition-colors">Try At Home Support</Link></li>
              <li><Link to="/jewellery" className="hover:text-white transition-colors">100% Certified BIS Hallmark</Link></li>
              <li><Link to="/jewellery" className="hover:text-white transition-colors">30-Day Money Back Guarantee</Link></li>
              <li><Link to="/jewellery" className="hover:text-white transition-colors">Lifetime Exchange &amp; Buyback</Link></li>
              <li><Link to="/stores" className="hover:text-white transition-colors">Old Gold Exchange with 0% Deduction</Link></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              Customer Delight
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="tel:18004190066" className="hover:text-white font-semibold text-amber-300">24x7 Helpline: 1800-419-0066</a></li>
              <li><a href="mailto:cs@bluestone.com" className="hover:text-white">Email: cs@bluestone.com</a></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link to="/stores" className="hover:text-white transition-colors">Book an In-Store Appointment</Link></li>
              <li><Link to="/jewellery" className="hover:text-white transition-colors">Free Ring Sizer Guide</Link></li>
              <li><Link to="/jewellery" className="hover:text-white transition-colors">Jewellery Care &amp; Cleaning</Link></li>
            </ul>
          </div>

          {/* Col 4: Popular Searches */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              Popular Searches
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/jewellery?category=Rings" className="hover:text-white transition-colors">Engagement &amp; Solitaire Rings</Link></li>
              <li><Link to="/jewellery?category=Earrings" className="hover:text-white transition-colors">Daily Wear Diamond Earrings</Link></li>
              <li><Link to="/jewellery?category=Mangalsutras" className="hover:text-white transition-colors">Modern 18Kt Mangalsutra Designs</Link></li>
              <li><Link to="/jewellery?category=Watch+Jewellery" className="hover:text-white transition-colors">Gold &amp; Diamond Watch Charms</Link></li>
              <li><Link to="/jewellery?category=Coins" className="hover:text-white transition-colors">24Kt 999 Purity Gold Coins</Link></li>
              <li><Link to="/jewellery?category=Bangles" className="hover:text-white transition-colors">Bridal Bangles &amp; Kadas</Link></li>
            </ul>
          </div>

        </div>

        {/* Trust Badges & Certifications Row */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>BIS 916 / 750 Hallmarked Gold</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>SGL &bull; IGI &bull; GIA Certified Diamonds</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              <span>100% Conflict-Free Natural Diamonds</span>
            </div>
          </div>

          <div className="text-gray-400 text-xs">
            Safe &amp; Encrypted 256-Bit SSL Checkout
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 text-center md:text-left">
          <p>
            &copy; 2025 BlueStone Jewellery and Lifestyle Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/jewellery" className="hover:text-white">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/jewellery" className="hover:text-white">Terms of Service</Link>
            <span>&bull;</span>
            <Link to="/stores" className="hover:text-white">Store Directory</Link>
            <span>&bull;</span>
            <Link to="/goldmine" className="hover:text-white">Gold Mine Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
