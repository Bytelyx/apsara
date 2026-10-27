import React from 'react';
import { ShieldCheck, RefreshCw, Undo2, Award, Truck, Eye } from 'lucide-react';

const PROMISES = [
  {
    icon: Award,
    title: "100% Certified Jewellery",
    desc: "Every diamond and gemstone is certified by SGL, IGI, or GIA; gold hallmarked by BIS."
  },
  {
    icon: Undo2,
    title: "30 Days Money Back",
    desc: "100% full refund on any stock piece within 30 days of receipt, no questions asked."
  },
  {
    icon: RefreshCw,
    title: "Lifetime Exchange & Buyback",
    desc: "Upgrade or liquidate your BlueStone jewellery anytime at prevailing gold and diamond rates."
  },
  {
    icon: Eye,
    title: "100% Transparency",
    desc: "Zero hidden charges. Complete breakdown of gold weight, diamond carat, and making charges."
  },
  {
    icon: Truck,
    title: "Free Insured Shipping",
    desc: "Doorstep delivery across 19,000+ Indian pincodes with 100% transit insurance."
  },
  {
    icon: ShieldCheck,
    title: "200+ Stores in 125+ Cities",
    desc: "Nationwide retail network offering Try-at-Home, personalized sizing, and cleaning."
  }
];

export default function BlueStonePromiseSection() {
  return (
    <section className="py-16 bg-[#FBF9F6] border-t border-b border-gray-200/80">
      <div className="container-fluid">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-bluestone-gold">
            Peace Of Mind Guaranteed
          </span>
          <h2 className="font-serif text-3xl font-bold text-bluestone-navy mt-1">
            The Apsara Promise
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            A decade of building India's most trusted omnichannel jewellery destination.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PROMISES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-200/70 shadow-xs hover:shadow-md hover:border-bluestone-navy transition-all duration-300 text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-50 group-hover:bg-bluestone-navy text-bluestone-navy group-hover:text-amber-400 flex items-center justify-center transition-colors mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xs font-bold text-gray-900 group-hover:text-bluestone-navy">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-500 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
