import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HOME_SECTIONS } from '../../data/homeSectionsData';

export default function CollectionSection() {
  const scrollRef = useRef(null);
  const sectionConfig = HOME_SECTIONS.find(s => s.key === 'collectionSection') || {};
  const collections = sectionConfig.value?.items || [
    {
      title: "Whispers of Motion Collection",
      imageUrl: "https://kinclimg2.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1790081348184-1128x830.jpg",
      link: "/jewellery"
    },
    {
      title: "Curve Collection",
      imageUrl: "https://kinclimg4.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1784571529454-1128-x-830.jpg",
      link: "/jewellery"
    },
    {
      title: "Gemphony Collection",
      imageUrl: "https://kinclimg2.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1780647024948-Mobile_Home_page1128x830.jpg",
      link: "/jewellery"
    },
    {
      title: "Raw Reverie Collection",
      imageUrl: "https://kinclimg7.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1776095048318-1128X830-Mobile_Homepage.jpg",
      link: "/jewellery"
    },
    {
      title: "Clay Whispers Collection",
      imageUrl: "https://kinclimg2.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1773144956484-Mobile_Homepage_copy_2_1.jpg",
      link: "/jewellery"
    }
  ];

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      const distance = dir === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container-fluid">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-bluestone-gold">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-bluestone-navy mt-1">
              Browse Latest Jewellery Collections
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-bluestone-navy hover:text-bluestone-navy flex items-center justify-center transition-colors"
              aria-label="Previous collections"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-bluestone-navy hover:text-bluestone-navy flex items-center justify-center transition-colors"
              aria-label="Next collections"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Collections Cards Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
        >
          {collections.map((item, idx) => (
            <Link
              key={idx}
              to={item.link || '/jewellery'}
              className="group flex-shrink-0 w-[280px] sm:w-[360px] rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-gray-900 group-hover:text-bluestone-navy transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-500 mt-0.5 inline-block">
                    Explore curated styles &rarr;
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-bluestone-navy group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
