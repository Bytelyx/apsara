import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HOME_SECTIONS } from '../../data/homeSectionsData';

export default function TrendingSection() {
  const sectionConfig = HOME_SECTIONS.find(s => s.key === 'trendingSection') || {};
  const items = sectionConfig.value?.items || [
    {
      title: "Layered Necklaces",
      imageUrl: "https://kinclimg5.bluestone.com/f_auto/static/hp/m/layered-necklaces.gif",
      link: "/jewellery?category=Pendants"
    },
    {
      title: "Coveted Styles",
      imageUrl: "https://kinclimg5.bluestone.com/f_auto/static/hp/m/ts.gif",
      link: "/jewellery"
    },
    {
      title: "BlueStone Man",
      imageUrl: "https://kinclimg5.bluestone.com/f_auto/static/hp/m/bluestone-man.gif",
      link: "/jewellery?category=Rings"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-fluid">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-bluestone-gold" />
            <span>Style Direction</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-bluestone-navy">
            Trendspotting
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Fresh aesthetic interpretations capturing what's currently in vogue.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.link || '/jewellery'}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 aspect-[4/5] bg-gray-100 flex flex-col justify-end p-6 border border-gray-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="relative z-10 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                  Trend #{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1 text-white">
                  {item.title}
                </h3>
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white/90 group-hover:text-amber-300 transition-colors">
                  <span>Explore Trend</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
