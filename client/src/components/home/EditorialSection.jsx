import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles } from 'lucide-react';
import { HOME_SECTIONS } from '../../data/homeSectionsData';

export default function EditorialSection() {
  const sectionConfig = HOME_SECTIONS.find(s => s.key === 'editorialSection') || {};
  const items = sectionConfig.value?.items || [
    {
      title: "Editorial Coverage for Bluestone in Elle",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/e1_v2.jpg",
      link: "/jewellery"
    },
    {
      title: "The Humaira Slider Ring in Vogue",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/e2_v2.png",
      link: "/product/the-humaira-slider-ring"
    },
    {
      title: "The Aubade Stackable Ring in Harper's Bazaar",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/e3.png",
      link: "/product/the-aubade-stackable-ring"
    },
    {
      title: "The Triadic Front Back Earrings in Grazia",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/e4_v2.jpg",
      link: "/jewellery?category=Earrings"
    },
    {
      title: "The Mizuki Mangalsutra Feature",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/e5.png",
      link: "/product/the-mizuki-mangalsutra"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-fluid">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-bluestone-gold" />
            <span>High Fashion Features</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-bluestone-navy">
            Editorial Spotlight
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            BlueStone as highlighted in leading international luxury publications.
          </p>
        </div>

        {/* 5 Card Grid / Scroll */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.slice(0, 5).map((item, idx) => (
            <Link
              key={idx}
              to={item.link || '/jewellery'}
              className="group rounded-xl overflow-hidden border border-gray-200/80 hover:border-bluestone-navy shadow-xs hover:shadow-lg transition-all duration-300 bg-white flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-3 bg-gray-50/50 flex-1 flex flex-col justify-between border-t border-gray-100">
                <p className="text-[11px] font-semibold text-gray-800 group-hover:text-bluestone-navy line-clamp-2 leading-snug">
                  {item.title}
                </p>
                <span className="text-[10px] text-bluestone-gold font-bold mt-2 inline-flex items-center gap-1">
                  Read Editorial <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
