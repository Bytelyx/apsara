import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, Heart, Play } from 'lucide-react';

import { fetchProducts } from '../../services/api';
import { CATEGORIES } from '../../data/productsData';
import ProductCard from '../product/ProductCard';

import rings from '../../assets/Rings.png';
import earrings from '../../assets/earings.png';
import pendants from '../../assets/pendants.png';
import chains from '../../assets/chains.png';
import necklaces from '../../assets/necklace.png';
import watches from '../../assets/watch.png';

const categoryImages = {
  Rings: rings,
  Earrings: earrings,
  Pendants: pendants,
  Chains: chains,
  Necklaces: necklaces,
  Bangles: rings,
  Bracelets: chains,
  Mangalsutra: necklaces,
  Mangalsutras: necklaces,
  'Nose Pins': pendants,
  Solitaires: rings,
  "Kids' Jewellery": earrings,
  'Kids Jewellery': earrings,
  Kada: rings,
  Kadas: rings,
  "Men's Jewellery": chains,
  'Watch Accessories': watches,
  Anklets: chains,
  'Gold Coins': pendants,
};

const categoryNames = [
  'Rings',
  'Earrings',
  'Pendants',
  'Chains',
  'Necklaces',
  'Bangles',
  'Bracelets',
  'Mangalsutra',
  'Nose Pins',
  'Solitaires',
  "Kids' Jewellery",
  'Kada',
  "Men's Jewellery",
  'Watch Accessories',
  'Anklets',
];

export default function RecommendedForYou() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      setLoading(true);

      try {
        const data = await fetchProducts({
          category: 'All',
          metal: 'All Metals',
          search: '',
          sort: 'popular',
        });

        if (isMounted) {
          setProducts(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error(
          'Failed to load recommended products:',
          error
        );

        if (isMounted) {
          setProducts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const getListingUrl = (category) => {
    if (!category || category === 'All' || category === 'Filters') {
      return '/jewellery';
    }

    return `/jewellery?category=${encodeURIComponent(category)}`;
  };

  const displayedProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => {
          const productCategory =
            product.category ||
            product.categoryName ||
            product.productCategory ||
            '';

          return (
            productCategory.toLowerCase() ===
            activeCategory.toLowerCase()
          );
        });

  const toggleCategory = (category) => {
    setSelectedCategories((previous) =>
      previous.includes(category)
        ? previous.filter((item) => item !== category)
        : [...previous, category]
    );
  };

  const applyFilters = () => {
    if (selectedCategories.length === 1) {
      setActiveCategory(selectedCategories[0]);
    } else {
      setActiveCategory('All');
    }

    setShowFilters(false);
  };

  return (
    <section className="recommended-section">
      <h2 className="recommended-title">
        Recommended for you
      </h2>

      {/* Category icons */}
      <div className="recommended-categories">
        <div className="recommended-category">
          <button
            type="button"
            className="recommended-category-button filter-button"
            onClick={() => setShowFilters((previous) => !previous)}
            aria-label="Open category filters"
          >
            <SlidersHorizontal size={25} strokeWidth={1.6} />
          </button>

          <span className="recommended-category-name">
            Filters
          </span>
        </div>

        <div className="recommended-category">
          <button
            type="button"
            className={`recommended-category-button all-button ${
              activeCategory === 'All' ? 'active' : ''
            }`}
            onClick={() => setActiveCategory('All')}
            aria-label="Show all jewellery"
          >
            <span className="all-grid-icon">
              <i />
              <i />
              <i />
              <i />
            </span>
          </button>

          <span className="recommended-category-name">
            All
          </span>
        </div>

        {categoryNames.map((category) => (
          <Link
            key={category}
            to={getListingUrl(category)}
            className="recommended-category"
            onClick={(event) => {
              event.preventDefault();
              setActiveCategory(category);
            }}
          >
            <span
              className={`recommended-category-button ${
                activeCategory === category ? 'active' : ''
              }`}
            >
              <img
                src={categoryImages[category] || rings}
                alt=""
                loading="lazy"
              />
            </span>

            <span className="recommended-category-name">
              {category}
            </span>
          </Link>
        ))}
      </div>

      {/* Filter panel */}
      {showFilters && (
        <div className="recommended-filter-panel">
          <div className="recommended-filter-heading">
            <span>Choose categories</span>

            <button
              type="button"
              onClick={() => {
                setSelectedCategories([]);
                setActiveCategory('All');
              }}
            >
              Clear
            </button>
          </div>

          <div className="recommended-filter-options">
            {CATEGORIES.filter(
              (category) =>
                category.toLowerCase() !== 'all'
            ).map((category) => (
              <label
                key={category}
                className="recommended-filter-option"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />

                <span>{category}</span>
              </label>
            ))}
          </div>

          <button
            type="button"
            className="recommended-apply-button"
            onClick={applyFilters}
          >
            Apply filters
          </button>
        </div>
      )}

      {/* Actual products from the API */}
      <div className="recommended-products">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="recommended-skeleton"
            >
              <div className="recommended-skeleton-image" />
              <div className="recommended-skeleton-line" />
              <div className="recommended-skeleton-line short" />
            </div>
          ))
        ) : displayedProducts.length > 0 ? (
          displayedProducts.slice(0, 4).map((product) => (
            <div
              className="recommended-product-card"
              key={product.id || product._id}
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="recommended-empty">
            <p>No products available in this category.</p>

            <button
              type="button"
              onClick={() => setActiveCategory('All')}
            >
              Show all jewellery
            </button>
          </div>
        )}
      </div>

      <style>{`
        .recommended-section {
          width: 100%;
          padding: 38px 0 30px;
          background: #fff;
          color: #101010;
          overflow: hidden;
          box-sizing: border-box;
        }

        .recommended-title {
          margin: 0 0 18px;
          text-align: center;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 34px;
          font-weight: 400;
          line-height: 1.2;
        }

        .recommended-categories {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          padding: 0 30px;
          margin-bottom: 42px;
          box-sizing: border-box;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .recommended-categories::-webkit-scrollbar {
          display: none;
        }

        .recommended-category {
          flex: 0 0 64px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }

        .recommended-category-button {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          border: 1px solid transparent;
          border-radius: 50%;
          overflow: hidden;
          background: #f5f2f0;
          cursor: pointer;
          box-sizing: border-box;
          text-decoration: none;
          color: #0c203a;
        }

        .recommended-category-button img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transition: transform 0.25s ease;
        }

        .recommended-category:hover img {
          transform: scale(1.06);
        }

        .recommended-category-button.active {
          border-color: #ef6675;
          box-shadow: 0 0 0 1px #ef6675;
        }

        .filter-button {
          background: #fff;
          border: 1px solid #e5e5e5;
        }

        .all-button {
          border: 1px solid #ef6675;
          background: #fff;
        }

        .all-grid-icon {
          display: grid;
          grid-template-columns: repeat(2, 10px);
          gap: 3px;
        }

        .all-grid-icon i {
          width: 10px;
          height: 10px;
          background: #eaa09a;
          border-radius: 3px;
        }

        .all-grid-icon i:nth-child(2),
        .all-grid-icon i:nth-child(3) {
          background: #f5c4ad;
        }

        .recommended-category-name {
          max-width: 80px;
          min-height: 28px;
          color: #555768;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.35;
          overflow-wrap: anywhere;
        }

        .recommended-filter-panel {
          margin: -22px 26px 22px;
          padding: 16px;
          background: #f8f6f5;
          border-radius: 6px;
        }

        .recommended-filter-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          font-size: 14px;
          font-weight: 600;
        }

        .recommended-filter-heading button {
          background: transparent;
          border: 0;
          text-decoration: underline;
          cursor: pointer;
        }

        .recommended-filter-options {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .recommended-filter-option {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          cursor: pointer;
        }

        .recommended-apply-button {
          margin-top: 16px;
          padding: 10px 18px;
          background: #011e38;
          color: #fff;
          border: 0;
          border-radius: 5px;
          font-size: 12px;
          cursor: pointer;
        }

        .recommended-products {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          padding: 0 26px;
          box-sizing: border-box;
          align-items: start;
        }

        .recommended-product-card {
          min-width: 0;
          width: 100%;
        }

        .recommended-product-card > * {
          min-width: 0;
          max-width: 100%;
        }

        .recommended-skeleton {
          min-width: 0;
          padding: 10px;
          border-radius: 8px;
          background: #f8f6f6;
        }

        .recommended-skeleton-image {
          width: 100%;
          aspect-ratio: 1 / 1.05;
          border-radius: 6px;
          background: #eae7e7;
          animation: recommendedPulse 1.4s ease-in-out infinite;
        }

        .recommended-skeleton-line {
          height: 12px;
          width: 75%;
          margin-top: 12px;
          border-radius: 4px;
          background: #eae7e7;
        }

        .recommended-skeleton-line.short {
          width: 45%;
          margin-top: 8px;
        }

        .recommended-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 30px 10px;
          color: #666;
        }

        .recommended-empty button {
          margin-top: 10px;
          padding: 10px 18px;
          color: #fff;
          background: #011e38;
          border: 0;
          border-radius: 5px;
          cursor: pointer;
        }

        @keyframes recommendedPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 1100px) {
          .recommended-categories {
            justify-content: flex-start;
            gap: 16px;
            padding: 0 22px 5px;
          }

          .recommended-products {
            gap: 10px;
            padding: 0 18px;
          }
        }

        @media (max-width: 768px) {
          .recommended-section {
            padding: 28px 0 22px;
          }

          .recommended-title {
            font-size: 28px;
            margin-bottom: 20px;
          }

          .recommended-categories {
            gap: 14px;
            margin-bottom: 25px;
            padding: 0 14px 4px;
          }

          .recommended-category {
            flex-basis: 60px;
          }

          .recommended-category-button {
            width: 54px;
            height: 54px;
          }

          .recommended-category-name {
            font-size: 11px;
            max-width: 65px;
          }

          .recommended-products {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            padding: 0 12px;
          }

          .recommended-filter-options {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 480px) {
          .recommended-section {
            padding-top: 24px;
          }

          .recommended-title {
            font-size: 25px;
          }

          .recommended-categories {
            gap: 12px;
            padding-left: 12px;
            padding-right: 12px;
          }

          .recommended-category {
            flex-basis: 56px;
          }

          .recommended-category-button {
            width: 50px;
            height: 50px;
          }

          .recommended-category-name {
            font-size: 10px;
            line-height: 1.3;
          }

          .recommended-products {
            gap: 8px;
            padding: 0 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .recommended-skeleton-image {
            animation: none;
          }

          .recommended-category-button img {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}