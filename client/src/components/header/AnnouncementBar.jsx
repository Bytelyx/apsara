import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, MapPin, Phone } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Special Offers" className="bg-[#011E38] text-white text-[11px] font-medium tracking-wide border-b border-white/10 hidden md:block">
      <div className="container-fluid flex items-center justify-between py-1.5 px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-bluestone-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold text-white">GOLD MINE 10+1 PLAN:</span>
            <span className="text-gray-200">Pay for 10 months &amp; get 100% off on 11th installment!</span>
            <Link to="/goldmine" className="text-bluestone-gold underline hover:text-white ml-1 font-semibold">
              Explore Plan &rarr;
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-300">
          <Link to="/stores" className="flex items-center gap-1 hover:text-white transition-colors">
            <MapPin className="w-3 h-3 text-bluestone-gold" />
            <span>200+ Stores Across India</span>
          </Link>
          <span className="text-white/30">|</span>
          <a href="tel:18004190066" className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-bluestone-gold" />
            <span>1800-419-0066 (24x7 Support)</span>
          </a>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-400 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
