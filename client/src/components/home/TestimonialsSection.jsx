import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';

const REVIEWS = [
  {
    name: "Akanksha Khanna, 27",
    city: "Mumbai",
    product: "The Yana Ring",
    rating: 5,
    text: "The finish on the 18Kt yellow gold is simply unmatched! I ordered for my engagement anniversary and it arrived within 24 hours with complete BIS hallmarking and certificate.",
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm1.png"
  },
  {
    name: "Diksha Singh, 29",
    city: "Bengaluru",
    product: "The Culaan Ring",
    rating: 5,
    text: "BlueStone's Try-at-Home service was what converted me. The consultant brought 5 different rings to my doorstep. Unbelievable convenience and transparency!",
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm2.png"
  },
  {
    name: "Nutan Mishra, 33",
    city: "Delhi NCR",
    product: "The Infant Bracelet",
    rating: 5,
    text: "Gifted this for my niece's naming ceremony. Lightweight yet sturdy, beautifully packaged, and the gold purity certificate gives absolute peace of mind.",
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm3.png"
  },
  {
    name: "Divya Mishra, 26",
    city: "Pune",
    product: "The Love Peace Fidget Pendant",
    rating: 5,
    text: "I was skeptical about buying diamonds online, but BlueStone exceeded all expectations. The sparkle of the stones is surreal and the design is truly unique.",
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm4.png"
  },
  {
    name: "Anuska Ananya, 24",
    city: "Hyderabad",
    product: "The Culaan Ring",
    rating: 5,
    text: "Enrolled in the Gold Mine 10+1 plan last year and redeemed it for my birthday ring! Getting that 11th installment free felt like an absolute blessing.",
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm5.png"
  }
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      const dist = dir === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: dist, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#FDFBF7]">
      <div className="container-fluid">
        
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Real Customer Stories</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-bluestone-navy">
              #BlueStoneAndMe
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Read how over 1 Million happy patrons celebrate their special milestones with us.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-bluestone-navy text-gray-700 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-bluestone-navy text-gray-700 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
        >
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[300px] sm:w-[360px] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-200" />
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{review.name}</h4>
                  <div className="text-[11px] text-gray-500">
                    {review.city} &bull; <span className="text-bluestone-navy font-medium">{review.product}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
