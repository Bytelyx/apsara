import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rings from '../../assets/Rings.png';
import earings from '../../assets/earings.png';
import pendants from '../../assets/pendants.png';
import chains from '../../assets/chains.png';
import watchAccessories from '../../assets/watch.png';
import necklaces from '../../assets/necklace.png';
import goldcoins from '../../assets/goldcoins.png';
import bangles from '../../assets/bangles.png';
import kadas from '../../assets/kadas.png';
import anklets from '../../assets/anklets.png';
import kidsJewellery from '../../assets/kidsjewellery.png';
import nosepins from '../../assets/nodepins.png';
import mangalsutras from '../../assets/mangalsutras.png';
import bracelets from '../../assets/bracelets.png';
import mensJewellery from '../../assets/mensjewellery.png';
import solitaires from '../../assets/solitaires.png';

const categories = [
  {
    name: 'Rings',
    className: 'cat-rings',
    path: '/jewellery/rings',
    image: rings,
  },
  {
    name: 'Earrings',
    className: 'cat-earrings',
    path: '/jewellery/earrings',
    image: earings,
  },
  {
    name: 'Pendants',
    className: 'cat-pendants',
    path: '/jewellery/pendants',
    image: pendants,
  },
  {
    name: 'Chains',
    className: 'cat-chains',
    path: '/jewellery/chains',
    image: chains,
  },
  {
    name: 'Watch Accessories',
    className: 'cat-water',
    path: '/jewellery/accessories',
    image: watchAccessories,
  },
  {
    name: 'Necklaces',
    className: 'cat-necklaces',
    path: '/jewellery/necklaces',
    image: necklaces,
  },
  {
    name: 'Gold Coins',
    className: 'cat-coins',
    path: '/gold-coins',
    image: goldcoins,
  },
  {
    name: 'Bangles',
    className: 'cat-bangles',
    path: '/jewellery/bangles',
    image: bangles,
  },
  {
    name: 'Kadas',
    className: 'cat-kadas',
    path: '/jewellery/kadas',
    image: kadas,
  },
  {
    name: 'Anklets',
    className: 'cat-anklets',
    path: '/jewellery/anklets',
    image: anklets,
  },
  {
    name: 'Kids Jewellery',
    className: 'cat-kids',
    path: '/jewellery/kids',
    image: kidsJewellery,
  },
  {
    name: 'Nose Pins',
    className: 'cat-nosepins',
    path: '/jewellery/nose-pins',
    image: nosepins,
  },
  {
    name: 'Mangalsutras',
    className: 'cat-mangalsutras',
    path: '/jewellery/mangalsutras',
    image: mangalsutras,
  },
  {
    name: 'Bracelets',
    className: 'cat-bracelets',
    path: '/jewellery/bracelets',
    image: bracelets,
  },
  {
    name: "Men's Jewellery",
    className: 'cat-mens',
    path: '/jewellery/mens',
    image: mensJewellery,
  },
  {
    name: 'Solitaires',
    className: 'cat-solitaires',
    path: '/jewellery/solitaires',
    image: solitaires,
  },
];

export default function HeroBanner() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="bluestone-home">
      <style>{`
        .bluestone-home,
        .bluestone-home * {
          box-sizing: border-box;
        }

        .bluestone-home {
          width: 100%;
          overflow: hidden;
          background: #f3e0dc;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
        }

        /* =========================
           HERO VIDEO
        ========================= */

        .hero-video-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #7d3038;
        }

        .hero-video-frame {
          position: relative;
          width: 100%;
          max-width: 1920px;
          height: min(36vw, 590px);
          min-height: 0;
          margin: 0 auto;
          overflow: hidden;
          background: #7d3038;
        }

        .hero-video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity 700ms ease;
        }

        .hero-video-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.08) 0%,
            transparent 48%,
            rgba(76, 24, 30, 0.2) 72%,
            #7d3038 100%
          );
        }

        /* =========================
           SHOP BY CATEGORY SECTION
        ========================= */

        .shop-category-section {
          position: relative;
          width: 100%;
          margin-top: -1px;
          padding: 4px 0 32px;
          background: linear-gradient(
            180deg,
            #7d3038 0%,
            #a45d64 16%,
            #d4a6a6 48%,
            #f3e0dc 100%
          );
        }

        .shop-category-title {
          margin: 0 auto 24px;
          padding: 0 20px;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 3vw, 42px);
          font-style: italic;
          font-weight: 500;
          line-height: 1.2;
          text-align: center;
        }

        /* =========================
           CATEGORY GRID
        ========================= */

        .shop-category-grid {
          display: grid;
          width: 86%;
          max-width: 1600px;
          margin: 0 auto;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          grid-auto-rows: clamp(180px, 18vw, 294px);
          grid-auto-flow: row;
          gap: 6px;
        }

        /* =========================
           CATEGORY CARD
        ========================= */

        .shop-category-card {
          position: relative;
          display: block;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            #7d3038,
            #d4a6a6
          );
          box-shadow: 0 7px 15px rgba(0, 0, 0, 0.22);
          text-decoration: none;
          isolation: isolate;
          transform: scale(1);
          z-index: 1;

          transition:
            transform 450ms ease,
            box-shadow 450ms ease;
        }

        /* Full card zoom */
        .shop-category-card:hover {
          transform: scale(1.035);
          box-shadow: 0 14px 28px rgba(65, 20, 27, 0.35);
          z-index: 5;
        }

        /* Keyboard accessibility */
        .shop-category-card:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 3px;
          z-index: 6;
        }

        /* =========================
           CATEGORY IMAGE
        ========================= */

        .shop-category-image {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;

          transition:
            transform 600ms cubic-bezier(0.2, 0.7, 0.3, 1),
            filter 450ms ease;
        }

        .shop-category-card:hover .shop-category-image {
          transform: scale(1.08);
          filter: brightness(0.88) saturate(1.08);
        }

        /* =========================
           GRADIENT OVERLAY
        ========================= */

        .shop-category-card::after {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(55, 15, 24, 0.82) 0%,
            rgba(125, 48, 56, 0.30) 35%,
            rgba(212, 166, 166, 0.05) 70%,
            transparent 100%
          );
          content: '';
          pointer-events: none;
          transition: background 450ms ease;
        }

        .shop-category-card:hover::after {
          background: linear-gradient(
            135deg,
            rgba(125, 48, 56, 0.30) 0%,
            rgba(125, 48, 56, 0.05) 35%,
            rgba(55, 15, 24, 0.88) 100%
          );
        }

        /* =========================
           CATEGORY TITLE
        ========================= */

        .shop-category-name {
          position: absolute;
          right: 16px;
          bottom: 17px;
          left: 16px;
          z-index: 2;
          margin: 0;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(17px, 1.35vw, 24px);
          font-weight: 600;
          line-height: 1.2;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.55);

          transition:
            transform 450ms ease,
            text-shadow 450ms ease;
        }

        .shop-category-card:hover .shop-category-name {
          transform: translateY(-4px);
          text-shadow: 0 3px 12px rgba(0, 0, 0, 0.7);
        }

        /* =========================
           DESKTOP CATEGORY POSITIONS
        ========================= */

        .cat-rings {
          grid-column: 1;
          grid-row: 1 / span 2;
        }

        .cat-earrings {
          grid-column: 2 / span 2;
          grid-row: 1;
        }

        .cat-pendants {
          grid-column: 4;
          grid-row: 1;
        }

        .cat-chains {
          grid-column: 5;
          grid-row: 1;
        }

        .cat-water {
          grid-column: 2;
          grid-row: 2;
        }

        .cat-necklaces {
          grid-column: 3 / span 2;
          grid-row: 2 / span 2;
        }

        .cat-coins {
          grid-column: 5;
          grid-row: 2;
        }

        .cat-bangles {
          grid-column: 1 / span 2;
          grid-row: 3;
        }

        .cat-kadas {
          grid-column: 5;
          grid-row: 3;
        }

        .cat-anklets {
          grid-column: 1;
          grid-row: 4;
        }

        .cat-kids {
          grid-column: 2;
          grid-row: 4;
        }

        .cat-nosepins {
          grid-column: 3;
          grid-row: 4;
        }

        .cat-mangalsutras {
          grid-column: 1;
          grid-row: 5;
        }

        .cat-bracelets {
          grid-column: 2;
          grid-row: 5;
        }

        .cat-mens {
          grid-column: 3;
          grid-row: 5;
        }

        .cat-solitaires {
          grid-column: 4 / span 2;
          grid-row: 4 / span 2;
        }

        /* =========================
           TABLET
        ========================= */

        @media (min-width: 601px) and (max-width: 1000px) {
          .hero-video-frame {
            height: auto;
            min-height: 0;
            aspect-ratio: 16 / 9;
          }

          .shop-category-grid {
            width: 92%;
            grid-auto-rows: clamp(130px, 20vw, 205px);
            gap: 5px;
          }

          .shop-category-card {
            border-radius: 13px;
          }

          .shop-category-name {
            right: 10px;
            bottom: 12px;
            left: 10px;
            font-size: 17px;
          }

          .shop-category-card:hover {
            transform: scale(1.02);
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .hero-video-frame {
            width: 100%;
            height: auto;
            min-height: 0;
            aspect-ratio: 4 / 3;
          }

          .hero-video {
            object-position: center;
          }

          .shop-category-section {
            padding: 8px 0 24px;
            background: linear-gradient(
              180deg,
              #7d3038 0%,
              #d4a6a6 30%,
              #f3e0dc 100%
            );
          }

          .shop-category-title {
            margin-bottom: 18px;
            font-size: 29px;
          }

          .shop-category-grid {
            width: 94%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 150px;
            gap: 8px;
          }

          .shop-category-card {
            grid-column: auto;
            grid-row: auto;
            border-radius: 12px;
          }

          .shop-category-name {
            right: 10px;
            bottom: 11px;
            left: 10px;
            font-size: 17px;
          }

          .cat-rings {
            grid-column: auto;
            grid-row: span 2;
          }

          .cat-earrings,
          .cat-bangles {
            grid-column: span 2;
            grid-row: auto;
          }

          .cat-necklaces {
            grid-column: span 2;
            grid-row: span 2;
          }

          .cat-solitaires {
            grid-column: span 2;
            grid-row: span 2;
          }

          /* Avoid excessive zoom on narrow screens */
          .shop-category-card:hover {
            transform: scale(1.015);
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .shop-category-card,
          .shop-category-image,
          .shop-category-card::after,
          .shop-category-name,
          .hero-video {
            transition: none;
          }

          .shop-category-card:hover {
            transform: none;
          }

          .shop-category-card:hover .shop-category-image {
            transform: none;
          }
        }
      `}</style>

      {/* HERO VIDEO */}
      <section className="hero-video-section">
        <div className="hero-video-frame">
          <video
            className="hero-video"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            onLoadedData={() => setIsVideoLoaded(true)}
            poster="https://kinclimg2.bluestone.com/static/hp/d/v25_poster.jpg"
            style={{
              opacity: isVideoLoaded ? 1 : 0.9,
            }}
          >
            <source
              src="https://kinvid1.bluestone.com/output/mp4/VL_VIDEO_1.mp4/VL_VIDEO_1.mp4"
              type="video/mp4"
            />
            <source
              src="/videos/VL_VIDEO_1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="hero-video-overlay" />
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section
        className="shop-category-section"
        aria-labelledby="shop-category-heading"
      >
        <h2
          id="shop-category-heading"
          className="shop-category-title"
        >
          Shop By Category
        </h2>

        <div className="shop-category-grid">
          {categories.map((category) => (
            <Link
              key={category.className}
              to={category.path}
              className={`shop-category-card ${category.className}`}
              aria-label={`Shop ${category.name}`}
            >
              <img
                className="shop-category-image"
                src={category.image}
                alt={category.name}
                loading="lazy"
              />

              <h3 className="shop-category-name">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}