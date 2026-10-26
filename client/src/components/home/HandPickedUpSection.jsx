
import React from 'react';
import { Link } from 'react-router-dom';

import hand1 from '../../assets/hand1.png';
import hand2 from '../../assets/hand2.png';
import hand3 from '../../assets/hand3.png';
import hand4 from '../../assets/hand4.png';
import hand5 from '../../assets/hand5.png';
import hand6 from '../../assets/hand6.png';
import hand7 from '../../assets/hand7.png';
import hand8 from '../../assets/hand8.png';
import hand9 from '../../assets/hand9.png';

const firstRow = [
  { id: 1, image: hand1, alt: 'BlueStone Man collection', category: 'Watch Accessories' },
  { id: 2, image: hand2, alt: 'Dainty Dreams jewellery', category: 'Rings' },
  { id: 3, image: hand3, alt: 'Evil Eye collection', category: 'Bracelets' },
  { id: 4, image: hand4, alt: 'View all collection', category: 'All' },
];

const secondRow = [
  { id: 5, image: hand5, alt: 'Whispers of Motion collection', category: 'Rings' },
  { id: 6, image: hand6, alt: 'Wired collection', category: 'Earrings' },
  { id: 7, image: hand7, alt: 'Barbie jewellery collection', category: 'Pendants' },
  { id: 8, image: hand8, alt: 'Whispers of Motion ring', category: 'Rings' },
  { id: 9, image: hand9, alt: 'The Curve collection', category: 'Necklaces' },
];

const HandPickedUpSection = () => {
  // Duplicate cards for a seamless continuous animation.
  const movingBanners = [...secondRow, ...secondRow];

  const getListingUrl = (category) => {
    if (category === 'All') {
      return '/jewellery';
    }

    return `/jewellery?category=${encodeURIComponent(category)}`;
  };

  const renderCard = (item, className = '') => (
    <Link
      to={getListingUrl(item.category)}
      className={`handpicked-card ${className}`}
      key={item.id}
      aria-label={`Explore ${item.alt}`}
    >
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        draggable="false"
      />
    </Link>
  );

  return (
    <section className="handpicked-section">
      <h2 className="handpicked-title">Handpicked For You</h2>

      <div className="handpicked-container">
        {/* First row: Four large cards */}
        <div className="handpicked-grid">
          {firstRow.map((item) => renderCard(item))}
        </div>

        {/* Second row: Continuously moving cards */}
        <div className="handpicked-carousel">
          <div className="handpicked-track">
            {movingBanners.map((item, index) => (
              <Link
                to={getListingUrl(item.category)}
                className="handpicked-card handpicked-slide"
                key={`${item.id}-${index}`}
                aria-label={`Explore ${item.alt}`}
                tabIndex={index >= secondRow.length ? -1 : 0}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  draggable="false"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .handpicked-section {
          width: 100%;
          padding: 2px 0 28px;
          background: #fff;
          overflow: hidden;
          box-sizing: border-box;
        }

        .handpicked-title {
          margin: 0 0 18px;
          text-align: center;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 34px;
          font-weight: 400;
          line-height: 1.2;
          color: #111;
        }

        .handpicked-container {
          width: 88%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .handpicked-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
          width: 100%;
        }

        .handpicked-card {
          display: block;
          min-width: 0;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 5px;
          background: #f5f3f2;
          text-decoration: none;
          box-sizing: border-box;
        }

        .handpicked-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.35s ease;
        }

        .handpicked-card:hover img {
          transform: scale(1.025);
        }

        .handpicked-card:focus-visible {
          outline: 2px solid #011e38;
          outline-offset: 3px;
        }

        .handpicked-carousel {
          width: 100%;
          overflow: hidden;
          margin-top: 8px;
        }

        .handpicked-track {
          display: flex;
          gap: 8px;
          width: max-content;
          animation: handpickedSlide 24s linear infinite;
          will-change: transform;
        }

        .handpicked-slide {
          width: calc((min(88vw, 1600px) - 24px) / 4);
          flex: 0 0 calc((min(88vw, 1600px) - 24px) / 4);
        }

        /* Animation intentionally keeps running on hover. */

        @keyframes handpickedSlide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 4px));
          }
        }

        @media (max-width: 900px) {
          .handpicked-container {
            width: 94%;
          }

          .handpicked-title {
            font-size: 29px;
            margin-bottom: 14px;
          }

          .handpicked-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .handpicked-slide {
            width: calc((94vw - 24px) / 2);
            flex-basis: calc((94vw - 24px) / 2);
          }
        }

        @media (max-width: 480px) {
          .handpicked-title {
            font-size: 25px;
          }

          .handpicked-grid {
            gap: 6px;
          }

          .handpicked-carousel {
            margin-top: 6px;
          }

          .handpicked-track {
            gap: 6px;
            animation-duration: 20s;
          }

          .handpicked-slide {
            width: 68vw;
            flex-basis: 68vw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .handpicked-track {
            animation: none;
          }

          .handpicked-card img {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HandPickedUpSection;
