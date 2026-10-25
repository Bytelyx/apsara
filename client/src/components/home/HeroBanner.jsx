import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';
import rings from '../../assets/Rings.png';

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
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Pendants',
    className: 'cat-pendants',
    path: '/jewellery/pendants',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Chains',
    className: 'cat-chains',
    path: '/jewellery/chains',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Watch Accessories',
    className: 'cat-water',
    path: '/jewellery/accessories',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Necklaces',
    className: 'cat-necklaces',
    path: '/jewellery/necklaces',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Gold Coins',
    className: 'cat-coins',
    path: '/gold-coins',
    image:
      'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Bangles',
    className: 'cat-bangles',
    path: '/jewellery/bangles',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Kadas',
    className: 'cat-kadas',
    path: '/jewellery/kadas',
    image:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Anklets',
    className: 'cat-anklets',
    path: '/jewellery/anklets',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Kids Jewellery',
    className: 'cat-kids',
    path: '/jewellery/kids',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Nose Pins',
    className: 'cat-nosepins',
    path: '/jewellery/nose-pins',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Mangalsutras',
    className: 'cat-mangalsutras',
    path: '/jewellery/mangalsutras',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Bracelets',
    className: 'cat-bracelets',
    path: '/jewellery/bracelets',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: "Men's Jewellery",
    className: 'cat-mens',
    path: '/jewellery/mens',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Solitaires',
    className: 'cat-solitaires',
    path: '/jewellery/solitaires',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85',
  },
];

export default function HeroBanner() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

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

        /* HERO VIDEO */
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
          max-height: 640px;
          aspect-ratio: 2.4 / 1;
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

        .hero-sound-button {
          position: absolute;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.65);
          border-radius: 50%;
          background: rgba(15, 15, 15, 0.45);
          color: white;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 200ms ease;
        }

        .hero-sound-button:hover {
          background: rgba(15, 15, 15, 0.75);
        }

        /* CATEGORY SECTION: seamless video transition */
        .shop-category-section {
          position: relative;
          width: 100%;
          margin-top: -1px;
          padding: 12px 0 32px;
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
          font-weight: 500;
          line-height: 1.2;
          text-align: center;
        }

        /* DESKTOP: 5-column reference layout */
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

        .shop-category-card {
          position: relative;
          display: block;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          border-radius: 18px;
          background: #3b2928;
          box-shadow: 0 7px 15px rgba(0, 0, 0, 0.28);
          text-decoration: none;
          isolation: isolate;
        }

        .shop-category-image {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 450ms ease;
        }

        .shop-category-card:hover .shop-category-image {
          transform: scale(1.045);
        }

        .shop-category-card::after {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.15) 27%,
            transparent 58%
          );
          content: '';
          pointer-events: none;
        }

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
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.35);
        }

        /* Row 1 */
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

        /* Row 2 */
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

        /* Row 3 */
        .cat-bangles {
          grid-column: 1 / span 2;
          grid-row: 3;
        }

        .cat-kadas {
          grid-column: 5;
          grid-row: 3;
        }

        /* Rows 4 and 5 */
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

        /* TABLET */
        @media (min-width: 601px) and (max-width: 1000px) {
          .hero-video-frame {
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
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .hero-video-frame {
            aspect-ratio: 4 / 3;
            max-height: none;
          }

          .hero-video {
            object-position: center;
          }

          .hero-sound-button {
            right: 12px;
            bottom: 12px;
            width: 38px;
            height: 38px;
          }

          .shop-category-section {
            padding: 22px 0 24px;
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
        }
      `}</style>

      {/* HERO VIDEO */}
      <section className="hero-video-section">
        <div className="hero-video-frame">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted={isMuted}
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
            <source src="/videos/VL_VIDEO_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="hero-video-overlay" />

          <button
            type="button"
            className="hero-sound-button"
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Turn sound on' : 'Turn sound off'}
          >
            {isMuted ? (
              <VolumeX size={21} />
            ) : (
              <Volume2 size={21} />
            )}
          </button>
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
