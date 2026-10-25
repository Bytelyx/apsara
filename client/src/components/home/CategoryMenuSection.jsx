import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HOME_SECTIONS } from '../../data/homeSectionsData';

export default function CategoryMenuSection() {
  const scrollRef = useRef(null);
  const sectionConfig = HOME_SECTIONS.find(s => s.key === 'squareMenuSection') || {};
  const items = sectionConfig.value?.items || [
    { title: "Watch Jewellery", imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/watch-jewellery.png", link: "/jewellery?category=Watch+Jewellery" },
    { title: "Solitaires", imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/solitaires.png", link: "/jewellery?category=Solitaires" },
    { title: "Mangalsutras", imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/mangalsutras.png", link: "/jewellery?category=Mangalsutras" },
    { title: "Men's Jewellery", imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/mens-jewellery.png", link: "/jewellery?category=Rings" },
    { title: "Kids Jewellery", imageUrl: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/m-kids_v1.png", link: "/jewellery?category=Earrings" },
    { title: "Couple Bands", imageUrl: "https://kinclimg1.bluestone.com/f_png,w_120/static/resources/themes/bluestone/mobileimages/couple-bands-rings.png", link: "/jewellery?category=Rings" },
    { title: "Rings", imageUrl: "https://kinclimg4.bluestone.com/f_png,w_120/giproduct/BIPO0630U284_RAA18DIG6XXXXXXXX_ABCD00-PICS-00000-1024-51656.png", link: "/jewellery?category=Rings" },
    { title: "Earrings", imageUrl: "https://kinclimg5.bluestone.com/f_png,w_120/giproduct/BENS0737R13_RAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-53550.png", link: "/jewellery?category=Earrings" },
    { title: "Pendants", imageUrl: "https://kinclimg0.bluestone.com/f_png,w_120/giproduct/BIJP0686U20_RAA18SYRUXXXXXXXX_ABCD00-PICS-00000-1024-51411.png", link: "/jewellery?category=Pendants" },
    { title: "Bangles", imageUrl: "https://kinclimg1.bluestone.com/f_png,w_120/giproduct/BIAB0617R09_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-53890.png", link: "/jewellery?category=Bangles" },
    { title: "Gold Coins", imageUrl: "https://kinclimg1.bluestone.com/f_png,w_120/giproduct/BIPO0718R04_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-54082.png", link: "/jewellery?category=Coins" },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container-fluid relative group">
        
        {/* Navigation Arrows */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-bluestone-navy hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-bluestone-navy hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable Category Row */}
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto hide-scrollbar px-2 py-1 scroll-smooth"
        >
          {items.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link || `/jewellery?category=${encodeURIComponent(cat.title)}`}
              className="flex flex-col items-center flex-shrink-0 group/item cursor-pointer w-[92px] sm:w-[104px]"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FAF8F5] border border-gray-200/80 p-2.5 flex items-center justify-center shadow-xs group-hover/item:shadow-md group-hover/item:border-bluestone-navy group-hover/item:scale-105 transition-all duration-300">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover/item:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="mt-2.5 text-center text-[11px] sm:text-xs font-semibold text-gray-800 tracking-tight leading-tight group-hover/item:text-bluestone-navy group-hover/item:underline">
                {cat.title}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
