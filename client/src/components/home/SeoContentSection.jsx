import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';

const SEO_CARDS = [
  {
    title: "A Stellar Omnichannel Presence",
    icon: ShieldCheck,
    desc: "With 200+ state-of-the-art boutiques across 125+ Indian cities, BlueStone bridges the physical and digital world. Enjoy Try-At-Home convenience with real fine jewellery consultants."
  },
  {
    icon: ShoppingBag,
    title: "Redefining Jewellery Shopping",
    desc: "Experience 100% certified 18Kt and 22Kt gold, certified GIA & IGI solitaire diamonds, 30 days money-back guarantee, and lifetime exchange policies with zero hidden deductions."
  },
  {
    icon: Sparkles,
    title: "8,000+ Certified Designs",
    desc: "Explore India's largest curated catalog across rings, earrings, pendants, solitaires, mangalsutras, bangles, and watch jewellery, handcrafted to perfection."
  }
];

export default function SeoContentSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-14 bg-gray-50 border-t border-gray-200">
      <div className="container-fluid max-w-5xl">
        
        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {SEO_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="p-5 rounded-xl bg-white border border-gray-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-bluestone-gold flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-sm font-bold text-bluestone-navy mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Collapsible SEO Content */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between cursor-pointer"
          >
            <h3 className="font-serif text-base font-bold text-bluestone-navy">
              Online Jewellery Shopping in India — The BlueStone Advantage
            </h3>
            <button className="text-gray-500 hover:text-bluestone-navy p-1">
              <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {isOpen && (
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-600 space-y-4 leading-relaxed animate-in fade-in duration-300">
              <div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Buy Gold &amp; Diamond Jewellery Online with Complete Trust</h4>
                <p>
                  Buying fine jewellery is an emotional celebration of life's proudest moments. At BlueStone, we ensure that your purchase is as precious as your memories. Every piece of gold jewellery is stamped with the Bureau of Indian Standards (BIS) Hallmark, certifying exact 14Kt, 18Kt, or 22Kt purity.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">GIA &amp; IGI Certified Solitaire Diamonds</h4>
                <p>
                  Our diamonds are ethically sourced, conflict-free, and independently graded by world-renowned gemological laboratories including SGL, IGI, and GIA. Each solitaire comes with its unique laser inscription matching the certificate report.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">The Gold Mine 10+1 Monthly Savings Plan</h4>
                <p>
                  Start your monthly jewellery savings with the Gold Mine 10+1 scheme. By investing for 10 months, you receive a full 100% bonus on your 11th installment sponsored by BlueStone, allowing you to maximize your festive and wedding purchases.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
