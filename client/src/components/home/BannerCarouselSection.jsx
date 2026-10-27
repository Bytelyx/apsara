import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';

export default function BannerCarouselSection() {
  const banners = [
    {
      title: 'Apsara Fancy Jewellery',
      imageUrl: banner1,
      link: '/jewellery',
    },
    {
      title: 'October Making Charge Offer',
      imageUrl: banner2,
      link: '/jewellery',
    },
    {
      title: 'October PreSet Solitaire Offer',
      imageUrl: banner3,
      link: '/jewellery',
    },
    {
      title: 'Gold Reserve Plan',
      imageUrl: banner4,
      link: '/jewellery',
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
          box-sizing: border-box;
        }

        .banner-carousel {
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .banner-carousel-viewport {
          width: 100%;
          overflow: hidden;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .banner-carousel-track {
          --side-space: 16px;
          --card-width: 46vw;
          --card-gap: 8px;

          display: flex;
          align-items: stretch;
          gap: var(--card-gap);
          width: max-content;

          transform: translateX(
            calc(
              var(--side-space) -
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
          box-sizing: border-box;
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
          background: rgba(20, 30, 50, 0.45);
          backdrop-filter: blur(5px);
          cursor: pointer;
          transform: translateY(-50%);
          transition: background 150ms ease;
        }

        .banner-carousel-arrow:hover {
          background: rgba(255, 255, 255, 0.85);
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

          .banner-carousel-viewport {
            padding: 0 12px;
          }

          .banner-carousel-track {
            --side-space: 12px;
            --card-width: calc(100vw - 24px);
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
            left: 16px;
          }

          .banner-carousel-next {
            right: 16px;
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
                  to={banner.link}
                  className="banner-carousel-card"
                  aria-label={banner.title}
                >
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
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