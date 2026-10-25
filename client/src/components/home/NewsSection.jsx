import React from 'react';
import { ExternalLink, Newspaper } from 'lucide-react';
import { HOME_SECTIONS } from '../../data/homeSectionsData';

export default function NewsSection() {
  const sectionConfig = HOME_SECTIONS.find(s => s.key === 'infoCardSection') || {};
  const items = sectionConfig.value?.items || [
    {
      title: "Grazia",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/news-1.png",
      snippet: "BlueStone unveils revolutionary lightweight festive curations celebrating contemporary luxury."
    },
    {
      title: "Brand Equity",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/news-2.png",
      snippet: "BlueStone infuses festive campaign with heart-eyed nostalgia and digital-first storytelling."
    },
    {
      title: "Indian Retailer",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/news-3.png",
      snippet: "Innovate, Adorn, Transcend: How BlueStone disrupted India's fine jewellery landscape."
    },
    {
      title: "Indulge Express",
      imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/news-4.png",
      snippet: "Iconic collaborations and modern design language establish BlueStone as a youthful powerhouse."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-fluid">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-bluestone-navy text-xs font-semibold uppercase tracking-wider mb-2">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Press &amp; Media</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-bluestone-navy">
            We're Making News
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Read what leading financial and lifestyle media say about BlueStone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((news, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-200/80 hover:border-bluestone-navy shadow-xs hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="h-10 mb-4 flex items-center">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="max-h-8 max-w-[120px] object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <h3 className="font-serif text-sm font-bold text-gray-900 mb-2">
                  {news.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {news.snippet}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-[11px] font-semibold text-bluestone-navy hover:underline">
                <span>Read Full Coverage</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
