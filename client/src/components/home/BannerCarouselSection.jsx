import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HOME_SECTIONS } from '../../data/homeSectionsData';

export default function BannerCarouselSection() {
  const sectionConfig = HOME_SECTIONS.find(s => s.key === 'carouselSection') || {};
  const banners = sectionConfig.value?.items || [
    {
      title: "Big Gold Upgrade",
      imageUrl: "https://kinclimg5.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1720023543869-Mobilehomepage.jpg",
      link: "/stores"
    },
    {
      title: "October Making Charge Offer",
      imageUrl: "https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1791393400801-BS-MC-Offer---Mobile-Home-Page-Banner---1128-x-830.jpg",
      link: "/jewellery"
    },
    {
      title: "October PreSet Solitaire Offer",
      imageUrl: "https://kinclimg3.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1791393595150-BS-PS-Offer---Mobile-Home-Page-Banner---1128-x-830.jpg",
      link: "/jewellery?category=Solitaires"
    },
    {
      title: "Gold Reserve Plan",
      imageUrl: "https://kinclimg6.bluestone.com/static/hp/m/mhome_grp_v3.jpg",
      link: "/goldmine"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="py-8 bg-gray-50/50">
      <div className="container-fluid relative group">
        
        {/* Carousel Image Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] max-h-[460px] bg-white">
          {banners.map((banner, idx) => (
            <Link
              key={idx}
              to={banner.link || '/jewellery'}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-bluestone-navy shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-bluestone-navy shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next banner"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-bluestone-navy'
                    : 'w-2 h-2 bg-gray-400/60 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
