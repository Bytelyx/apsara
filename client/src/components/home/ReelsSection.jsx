import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ChevronLeft, ChevronRight, Sparkles, ShoppingBag } from 'lucide-react';

const REELS = [
  {
    id: 1,
    tag: '#OOTD',
    title: 'Daily Diamond Glam',
    video: 'https://kinvid1.bluestone.com/output/mp4/1_v0.mp4/1_v0.mp4',
    poster: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/1_p.png',
    productName: 'The Bonny Ring',
    price: '₹34,850',
    link: '/product/the-bonny-ring'
  },
  {
    id: 2,
    tag: '#StyleInspo',
    title: 'Modern Mangalsutra Styling',
    video: 'https://kinvid1.bluestone.com/output/mp4/2_v0.mp4/2_v0.mp4',
    poster: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/2_p.png',
    productName: 'The Mizuki Mangalsutra',
    price: '₹49,800',
    link: '/product/the-mizuki-mangalsutra'
  },
  {
    id: 3,
    tag: '#StackItUp',
    title: 'Stackable Bands in White Gold',
    video: 'https://kinvid1.bluestone.com/output/mp4/3_v0.mp4/3_v0.mp4',
    poster: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/3_p.png',
    productName: 'The Aubade Stackable Ring',
    price: '₹36,200',
    link: '/product/the-aubade-stackable-ring'
  },
  {
    id: 4,
    tag: '#MakeBoldMoves',
    title: 'Serpent Curves & Pavé',
    video: 'https://kinvid1.bluestone.com/output/mp4/4_v0.mp4/4_v0.mp4',
    poster: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/4_p.png',
    productName: 'The Snakelet Ring',
    price: '₹52,400',
    link: '/product/the-snakelet-ring'
  },
  {
    id: 5,
    tag: '#StylingTip',
    title: 'Ear Cuffs & Studs',
    video: 'https://kinvid1.bluestone.com/output/mp4/5_v0.mp4/5_v0.mp4',
    poster: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/5_p.png',
    productName: 'The Aneira Stud Earrings',
    price: '₹43,500',
    link: '/product/the-aneira-stud-earrings'
  },
  {
    id: 6,
    tag: '#ArmCandy',
    title: 'Wristwear Perfection',
    video: 'https://kinvid1.bluestone.com/output/mp4/6_v0.mp4/6_v0.mp4',
    poster: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/6_p.png',
    productName: 'The Adaliyah Toggle Bangle',
    price: '₹1,18,500',
    link: '/product/the-adaliyah-toggle-bangle'
  }
];

export default function ReelsSection() {
  const scrollRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      const dist = dir === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: dist, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#FFF9F5] overflow-hidden border-t border-b border-rose-100">
      <div className="container-fluid">
        
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9D7792]/10 text-[#9D7792] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Watch &amp; Shop</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-bluestone-navy">
              Jewellery In Motion
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Real jewellery on real people. Tap any reel to shop the look instantly.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#9D7792] text-gray-700 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous reels"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#9D7792] text-gray-700 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next reels"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reels Horizontal Row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
        >
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[220px] sm:w-[260px] rounded-2xl overflow-hidden shadow-md relative group bg-black aspect-[9/16] border-2 border-[#9D7792]"
            >
              <video
                src={reel.video}
                poster={reel.poster}
                playsInline
                loop
                muted
                autoPlay
                className="w-full h-full object-cover"
              />

              {/* Tag pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-[#9D7792]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  {reel.tag}
                </span>
              </div>

              {/* Overlay bottom product card */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white z-10 flex flex-col justify-end">
                <div className="text-xs font-medium text-gray-200 mb-1">{reel.title}</div>
                <Link
                  to={reel.link}
                  className="bg-white/95 hover:bg-white text-bluestone-navy p-2 rounded-xl flex items-center justify-between text-xs font-semibold shadow-lg transition-transform group-hover:scale-105"
                >
                  <div className="truncate pr-2">
                    <div className="truncate font-bold text-gray-900">{reel.productName}</div>
                    <div className="text-[11px] text-bluestone-navy">{reel.price}</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#011E38] text-white flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
