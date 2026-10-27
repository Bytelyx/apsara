import React, { useRef } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Heart,
  Sparkles,
} from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ananya Sharma',
    city: 'Kozhikode',
    product: 'The Yana Ring',
    rating: 5,
    text: 'The ring looks even prettier in person. Loved the finish and the packaging was beautiful too.',
    image: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm1.png',
  },
  {
    name: 'Meera Kapoor',
    city: 'Kannur',
    product: 'The Culaan Ring',
    rating: 5,
    text: "I was a little unsure about ordering jewellery online, but the ring turned out lovely. Really happy with my purchase!",
    image: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm2.png',
  },
  {
    name: 'Ishita Verma',
    city: 'Kozhikode',
    product: 'The Gold Bracelet',
    rating: 5,
    text: 'Bought this as a gift for my mom and she absolutely loved it. Simple, elegant, and perfect for everyday wear.',
    image: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm3.png',
  },
  {
    name: 'Rhea Malhotra',
    city: 'Kozhikode',
    product: 'The Diamond Pendant',
    rating: 5,
    text: "Such a pretty and delicate piece. I've worn it several times already and keep getting compliments!",
    image: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm4.png',
  },
  {
    name: 'Saanvi Reddy',
    city: 'Hyderabad',
    product: 'The Everyday Gold Ring',
    rating: 5,
    text: 'Exactly what I was looking for. The design is minimal, comfortable to wear, and goes with almost everything.',
    image: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/bm5.png',
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector('[data-review-card]');
    const cardWidth = card
      ? card.getBoundingClientRect().width
      : 340;

    const gap = window.innerWidth < 640 ? 16 : 24;

    container.scrollBy({
      left:
        direction === 'left'
          ? -(cardWidth + gap)
          : cardWidth + gap,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-[#FDFBF7] py-14 sm:py-20 lg:py-24">
      <div className="container-fluid">

        {/* Section Heading */}
        <div className="mb-9 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-7 bg-[#B89A62]" />

              <Sparkles
                className="h-4 w-4 text-[#B89A62]"
                strokeWidth={1.5}
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#927448] sm:text-xs">
                The Apsara Experience
              </span>

              <span className="h-px w-7 bg-[#B89A62]" />
            </div>

            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-bluestone-navy sm:text-4xl lg:text-5xl">
              Loved by You.
              <br className="sm:hidden" />{' '}
              <span className="font-normal italic text-[#A78954]">
                Cherished by Apsara.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Every jewel holds a story. Discover the special moments,
              meaningful gifts, and little joys our customers celebrate
              with Apsara.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 sm:text-xs">
              Stories that sparkle
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DCCB] bg-white text-bluestone-navy transition-all duration-300 hover:border-[#B89A62] hover:bg-bluestone-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A62] focus-visible:ring-offset-2 sm:h-12 sm:w-12"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('right')}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DCCB] bg-white text-bluestone-navy transition-all duration-300 hover:border-[#B89A62] hover:bg-bluestone-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89A62] focus-visible:ring-offset-2 sm:h-12 sm:w-12"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 sm:gap-6"
          aria-label="Customer testimonials"
        >
          {REVIEWS.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              data-review-card
              className="group relative flex w-[285px] flex-shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-[#EDE5D8] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6C29D] hover:shadow-[0_16px_40px_rgba(90,70,35,0.08)] sm:w-[340px] sm:rounded-3xl sm:p-7"
            >
              {/* Elegant Gold Accent */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#B89A62] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Rating and Quote */}
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="flex items-center gap-1"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#C4A568] text-[#C4A568]"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <Quote
                    className="h-7 w-7 text-[#D8C7A5]"
                    strokeWidth={1.2}
                  />
                </div>

                {/* Review Text */}
                <p className="min-h-[112px] text-[13px] leading-7 text-gray-600 sm:min-h-[112px] sm:text-sm">
                  “{review.text}”
                </p>
              </div>

              {/* Customer Details */}
              <div className="mt-6 border-t border-[#F0EBE2] pt-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <img
                      src={review.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full rounded-full border border-[#E8DFD0] object-cover"
                    />

                    <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#B89A62]">
                      <Heart
                        className="h-2 w-2 fill-white text-white"
                        strokeWidth={2}
                      />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold tracking-wide text-bluestone-navy">
                      {review.name}
                    </h3>

                    {/* <p className="mt-1 text-xs text-gray-500">
                      {review.city}
                    </p> */}
                  </div>
                </div>

                {/* Product Label */}
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#FAF7F1] px-3 py-2.5">
                  <Sparkles
                    className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#A78954]"
                    strokeWidth={1.5}
                  />

                  <p className="text-[11px] leading-5 text-[#776344]">
                    <span className="font-semibold">Loved:</span>{' '}
                    {review.product}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Brand Note */}
        <div className="mt-5 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-8 bg-[#D8C7A5]" />

          <p className="text-[10px] uppercase tracking-[0.16em] text-[#927448] sm:text-xs sm:tracking-[0.2em]">
            Made for your moments. Treasured for a lifetime.
          </p>

          <span className="h-px w-8 bg-[#D8C7A5]" />
        </div>

      </div>
    </section>
  );
}