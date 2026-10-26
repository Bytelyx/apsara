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
    path: '/jewellery/gold-coins',
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

const categoryClasses = categories.map(
  (category) => category.className
);

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
          position: relative;
          display: block;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          margin: 0;
          padding: 0;
          color: #fff;
          background: #f3e0dc;
          font-family: Georgia, 'Times New Roman', serif;
          overflow-x: clip;
          isolation: isolate;
        }

        /* HERO VIDEO */

        .bluestone-home .hero-video-section {
          position: relative;
          display: block;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #7d3038;
        }

        .bluestone-home .hero-video-frame {
          position: relative;
          width: 100%;
          max-width: 1920px;
          height: min(36vw, 590px);
          min-height: 0;
          margin: 0 auto;
          overflow: hidden;
          background: #7d3038;
        }

        .bluestone-home .hero-video {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity 700ms ease;
        }

        .bluestone-home .hero-video-overlay {
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

        /* CATEGORY SECTION */

        .bluestone-home .shop-category-section {
          position: relative;
          display: block;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          margin: -1px 0 0;
          padding: 12px 0 32px;
          background: linear-gradient(
            180deg,
            #7d3038 0%,
            #a45d64 16%,
            #d4a6a6 48%,
            #fffefd 100%
          );
        }

        .bluestone-home .shop-category-title {
          display: block;
          width: 100%;
          max-width: 100%;
          margin: 0 auto 24px;
          padding: 0 12px;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 3vw, 42px);
          font-style: italic;
          font-weight: 500;
          line-height: 1.2;
          text-align: center;
          overflow-wrap: anywhere;
        }

        /* DESKTOP GRID */

        .bluestone-home .shop-category-grid {
          display: grid;
          width: 86%;
          max-width: 1600px;
          min-width: 0;
          margin: 0 auto;
          padding: 0;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          grid-auto-rows: clamp(180px, 18vw, 294px);
          grid-auto-flow: row;
          gap: 6px;
        }

        .bluestone-home .shop-category-card {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
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
          z-index: 1;
          transition:
            transform 450ms ease,
            box-shadow 450ms ease;
        }

        .bluestone-home .shop-category-card:hover {
          transform: scale(1.025);
          box-shadow: 0 14px 28px rgba(65, 20, 27, 0.35);
          z-index: 5;
        }

        .bluestone-home .shop-category-card:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 3px;
          z-index: 6;
        }

        .bluestone-home .shop-category-image {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
          object-position: center;
          transition:
            transform 600ms cubic-bezier(0.2, 0.7, 0.3, 1),
            filter 450ms ease;
        }

        .bluestone-home .shop-category-card::after {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(55, 15, 24, 0.82) 0%,
            rgba(125, 48, 56, 0.3) 35%,
            rgba(212, 166, 166, 0.05) 70%,
            transparent 100%
          );
          content: '';
          pointer-events: none;
        }

        .bluestone-home .shop-category-card:hover
          .shop-category-image {
          transform: scale(1.07);
          filter: brightness(0.88) saturate(1.08);
        }

        .bluestone-home .shop-category-name {
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
          overflow-wrap: anywhere;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
          transition: transform 450ms ease;
        }

        .bluestone-home .shop-category-card:hover
          .shop-category-name {
          transform: translateY(-4px);
        }

        /* DESKTOP CATEGORY POSITIONS */

        .bluestone-home .cat-rings {
          grid-column: 1;
          grid-row: 1 / span 2;
        }

        .bluestone-home .cat-earrings {
          grid-column: 2 / span 2;
          grid-row: 1;
        }

        .bluestone-home .cat-pendants {
          grid-column: 4;
          grid-row: 1;
        }

        .bluestone-home .cat-chains {
          grid-column: 5;
          grid-row: 1;
        }

        .bluestone-home .cat-water {
          grid-column: 2;
          grid-row: 2;
        }

        .bluestone-home .cat-necklaces {
          grid-column: 3 / span 2;
          grid-row: 2 / span 2;
        }

        .bluestone-home .cat-coins {
          grid-column: 5;
          grid-row: 2;
        }

        .bluestone-home .cat-bangles {
          grid-column: 1 / span 2;
          grid-row: 3;
        }

        .bluestone-home .cat-kadas {
          grid-column: 5;
          grid-row: 3;
        }

        .bluestone-home .cat-anklets {
          grid-column: 1;
          grid-row: 4;
        }

        .bluestone-home .cat-kids {
          grid-column: 2;
          grid-row: 4;
        }

        .bluestone-home .cat-nosepins {
          grid-column: 3;
          grid-row: 4;
        }

        .bluestone-home .cat-mangalsutras {
          grid-column: 1;
          grid-row: 5;
        }

        .bluestone-home .cat-bracelets {
          grid-column: 2;
          grid-row: 5;
        }

        .bluestone-home .cat-mens {
          grid-column: 3;
          grid-row: 5;
        }

        .bluestone-home .cat-solitaires {
          grid-column: 4 / span 2;
          grid-row: 4 / span 2;
        }

        /* TABLET */

        @media (min-width: 601px) and (max-width: 1000px) {
          .bluestone-home .hero-video-frame {
            height: auto;
            aspect-ratio: 16 / 9;
          }

          .bluestone-home .shop-category-grid {
            width: 94%;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-auto-rows: clamp(145px, 23vw, 220px);
            gap: 6px;
          }

          .bluestone-home .shop-category-card {
            grid-column: auto;
            grid-row: auto;
            border-radius: 12px;
          }

          .bluestone-home .cat-rings,
          .bluestone-home .cat-necklaces,
          .bluestone-home .cat-solitaires {
            grid-column: span 2;
            grid-row: span 2;
          }

          .bluestone-home .cat-earrings,
          .bluestone-home .cat-bangles {
            grid-column: span 2;
          }

          .bluestone-home .shop-category-name {
            right: 10px;
            bottom: 12px;
            left: 10px;
            font-size: clamp(15px, 2vw, 19px);
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .bluestone-home {
            position: relative;
            left: auto;
            right: auto;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            transform: none;
            overflow-x: clip;
          }

          .bluestone-home .hero-video-section {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }

          .bluestone-home .hero-video-frame {
            width: 100%;
            max-width: 100%;
            height: auto;
            min-height: 0;
            aspect-ratio: 4 / 3;
            margin: 0;
            overflow: hidden;
          }

          .bluestone-home .hero-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .bluestone-home .shop-category-section {
            position: relative;
            display: block;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            margin: 0;
            padding: 14px 0 24px;
            overflow: hidden;
            background: linear-gradient(
              180deg,
              #7d3038 0%,
              #b77b80 35%,
              #f3e0dc 100%
            );
          }

          .bluestone-home .shop-category-title {
            display: block;
            width: 100%;
            max-width: 100%;
            margin: 0 auto 14px;
            padding: 0 8px;
            font-size: clamp(22px, 6vw, 28px);
            line-height: 1.25;
            text-align: center;
            overflow-wrap: normal;
          }

          .bluestone-home .shop-category-grid {
            display: grid;
            width: calc(100% - 16px);
            max-width: 480px;
            min-width: 0;
            margin: 0 auto;
            padding: 0;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-template-rows: repeat(9, clamp(85px, 24vw, 112px));
            grid-auto-flow: row;
            gap: 4px;
          }

          .bluestone-home .shop-category-card {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            min-width: 0;
            min-height: 0;
            max-width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
            border-radius: 6px;
            transform: none;
          }

          /* Reset all desktop grid positions */

          ${categoryClasses.map(
            (className) => `
              .bluestone-home .${className} {
                grid-column: auto;
                grid-row: auto;
              }
            `
          ).join('')}

          /* First two rows */

          .bluestone-home .cat-rings {
            grid-column: 1;
            grid-row: 1 / 3;
          }

          .bluestone-home .cat-earrings {
            grid-column: 2 / 4;
            grid-row: 1;
          }

          .bluestone-home .cat-pendants {
            grid-column: 2;
            grid-row: 2;
          }

          .bluestone-home .cat-chains {
            grid-column: 3;
            grid-row: 2;
          }

          /* Third row */

          .bluestone-home .cat-bracelets {
            grid-column: 1;
            grid-row: 3;
          }

          .bluestone-home .cat-bangles {
            grid-column: 2 / 4;
            grid-row: 3;
          }

          /* Large necklace card */

          .bluestone-home .cat-necklaces {
            grid-column: 1 / 3;
            grid-row: 4 / 6;
          }

          .bluestone-home .cat-kadas {
            grid-column: 3;
            grid-row: 4;
          }

          .bluestone-home .cat-water {
            grid-column: 3;
            grid-row: 5;
          }

          /* Sixth row */

          .bluestone-home .cat-coins {
            grid-column: 1;
            grid-row: 6;
          }

          .bluestone-home .cat-anklets {
            grid-column: 2;
            grid-row: 6;
          }

          .bluestone-home .cat-kids {
            grid-column: 3;
            grid-row: 6;
          }

          /* Seventh row */

          .bluestone-home .cat-nosepins {
            grid-column: 1;
            grid-row: 7;
          }

          .bluestone-home .cat-mangalsutras {
            grid-column: 2;
            grid-row: 7;
          }

          .bluestone-home .cat-mens {
            grid-column: 3;
            grid-row: 7;
          }

          /* Final large card */

          .bluestone-home .cat-solitaires {
            grid-column: 1 / 4;
            grid-row: 8 / 10;
          }

          .bluestone-home .shop-category-image {
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            object-fit: cover;
            object-position: center;
          }

          .bluestone-home .shop-category-card::after {
            position: absolute;
            inset: 0;
            z-index: 1;
            content: '';
            pointer-events: none;
            background: linear-gradient(
              to top,
              rgba(55, 15, 24, 0.78) 0%,
              rgba(125, 48, 56, 0.18) 45%,
              transparent 100%
            );
          }

          .bluestone-home .shop-category-name {
            position: absolute;
            right: 5px;
            bottom: 6px;
            left: 5px;
            z-index: 2;
            margin: 0;
            font-size: clamp(10px, 3vw, 14px);
            line-height: 1.2;
            overflow-wrap: anywhere;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
          }

          .bluestone-home .shop-category-card:hover {
            transform: none;
          }

          .bluestone-home .shop-category-card:hover
            .shop-category-image {
            transform: none;
            filter: none;
          }

          .bluestone-home .shop-category-card:hover
            .shop-category-name {
            transform: none;
          }
        }

        /* SMALL PHONES */

        @media (max-width: 360px) {
          .bluestone-home .shop-category-grid {
            width: calc(100% - 12px);
            grid-template-rows: repeat(9, 85px);
            gap: 3px;
          }

          .bluestone-home .shop-category-title {
            font-size: 23px;
          }

          .bluestone-home .shop-category-name {
            font-size: 10px;
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .bluestone-home .hero-video,
          .bluestone-home .shop-category-card,
          .bluestone-home .shop-category-image,
          .bluestone-home .shop-category-name {
            transition: none !important;
          }

          .bluestone-home .shop-category-card:hover,
          .bluestone-home .shop-category-card:hover
            .shop-category-image,
          .bluestone-home .shop-category-card:hover
            .shop-category-name {
            transform: none !important;
          }
        }
      `}</style>

      {/* HERO VIDEO */}

      <section
        className="hero-video-section"
        aria-label="Jewellery collection banner"
      >
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