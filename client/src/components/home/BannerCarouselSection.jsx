import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HOME_SECTIONS } from '../../data/homeSectionsData';

export default function BannerCarouselSection() {
  const sectionConfig =
    HOME_SECTIONS.find(
      (section) => section.key === 'carouselSection'
    ) || {};

  const banners = sectionConfig.value?.items?.length
    ? sectionConfig.value.items
    : [
        {
          title: 'Big Gold Upgrade',
          imageUrl:
            'https://kinclimg5.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1720023543869-Mobilehomepage.jpg',
          link: '/stores',
        },
        {
          title: 'October Making Charge Offer',
          imageUrl:
            'https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1791393400801-BS-MC-Offer---Mobile-Home-Page-Banner---1128-x-830.jpg',
          link: '/jewellery',
        },
        {
          title: 'October PreSet Solitaire Offer',
          imageUrl:
            'https://kinclimg3.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1791393595150-BS-PS-Offer---Mobile-Home-Page-Banner---1128-x-830.jpg',
          link: '/jewellery?category=Solitaires',
        },
        {
          title: 'Gold Reserve Plan',
          imageUrl:
            'https://kinclimg6.bluestone.com/static/hp/m/mhome_grp_v3.jpg',
          link: '/goldmine',
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const moveNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const movePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    if (isPaused || banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, banners.length]);

  return (
    <>
      <style>{`
        .banner-carousel-section {
          width: 100%;
          padding: 24px 0;
          background: #fff;
          overflow: hidden;
        }

        .banner-carousel {
          position: relative;
          width: 100%;
        }

        .banner-carousel-viewport {
          width: 100%;
          overflow: hidden;
        }

        .banner-carousel-track {
          --card-width: min(49vw, 800px);
          --card-gap: 8px;

          display: flex;
          align-items: stretch;
          gap: var(--card-gap);
          width: max-content;

          transform: translateX(
            calc(
              50vw - var(--card-width) / 2 -
              var(--current-index) *
              (var(--card-width) + var(--card-gap))
            )
          );

          transition: transform 400ms ease-in-out;
          will-change: transform;
        }

        .banner-carousel-card {
          display: block;
          flex: 0 0 var(--card-width);
          width: var(--card-width);
          height: clamp(300px, 30vw, 490px);
          overflow: hidden;
          border-radius: 16px;
          background: #f5f5f5;
          text-decoration: none;
        }

        .banner-carousel-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 300ms ease;
        }

        .banner-carousel-card:hover img {
          transform: scale(1.015);
        }

        .banner-carousel-arrow {
          position: absolute;
          top: 50%;
          z-index: 5;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;

          color: #fff;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(5px);

          cursor: pointer;
          opacity: 1;
          transform: translateY(-50%);
          transition: background 150ms ease;
        }

        .banner-carousel-arrow:hover {
          background: rgba(255, 255, 255, 0.8);
          color: #14264f;
        }

        .banner-carousel-prev {
          left: 24px;
        }

        .banner-carousel-next {
          right: 24px;
        }

        @media (max-width: 767px) {
          .banner-carousel-section {
            padding: 14px 0;
          }

          .banner-carousel-track {
            --card-width: 84vw;
            --card-gap: 8px;
          }

          .banner-carousel-card {
            height: 105vw;
            max-height: 420px;
            border-radius: 10px;
          }

          .banner-carousel-arrow {
            width: 34px;
            height: 34px;
          }

          .banner-carousel-prev {
            left: 8px;
          }

          .banner-carousel-next {
            right: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .banner-carousel-track,
          .banner-carousel-card img {
            transition: none;
          }
        }
      `}</style>

      <section className="banner-carousel-section">
        <div
          className="banner-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="banner-carousel-viewport">
            <div
              className="banner-carousel-track"
              style={{
                '--current-index': currentIndex,
              }}
            >
              {banners.map((banner, index) => (
                <Link
                  key={`${banner.title}-${index}`}
                  to={banner.link || '/jewellery'}
                  className="banner-carousel-card"
                  aria-label={banner.title}
                >
                  <img
                    src={banner.imageUrl}
                    alt={banner.title || 'Jewellery offer'}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    draggable="false"
                  />
                </Link>
              ))}
            </div>
          </div>

          {banners.length > 1 && (
            <>
              <button
                type="button"
                onClick={movePrev}
                className="banner-carousel-arrow banner-carousel-prev"
                aria-label="Previous banner"
              >
                <ChevronLeft size={23} />
              </button>

              <button
                type="button"
                onClick={moveNext}
                className="banner-carousel-arrow banner-carousel-next"
                aria-label="Next banner"
              >
                <ChevronRight size={23} />
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}