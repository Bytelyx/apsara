
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ProductList.css";

// Demo products — replace with your existing products when ready.
const products = [
  {
    id: 1,
    name: "Classic Gold Ring",
    price: 12500,
    category: "rings",
    image: "/images/gold-ring.png",
  },
  {
    id: 2,
    name: "Diamond Gold Ring",
    price: 18500,
    category: "rings",
    image: "/images/diamond-ring.png",
  },
  {
    id: 3,
    name: "Gold Earrings",
    price: 9500,
    category: "earrings",
    image: "/images/gold-earrings.png",
  },
  {
    id: 4,
    name: "Traditional Earrings",
    price: 14500,
    category: "earrings",
    image: "/images/traditional-earrings.png",
  },
  {
    id: 5,
    name: "Gold Pendant",
    price: 8500,
    category: "pendants",
    image: "/images/gold-pendant.png",
  },
  {
    id: 6,
    name: "Gold Chain",
    price: 22000,
    category: "chains",
    image: "/images/gold-chain.png",
  },
  {
    id: 7,
    name: "Gold Coin 1 Gram",
    price: 7500,
    category: "gold-coins",
    image: "/images/gold-coin.png",
  },
  {
    id: 8,
    name: "Gold Coin 2 Grams",
    price: 15000,
    category: "gold-coins",
    image: "/images/gold-coin.png",
  },
  {
    id: 9,
    name: "Gold Bangles",
    price: 35000,
    category: "bangles",
    image: "/images/gold-bangles.png",
  },
  {
    id: 10,
    name: "Gold Necklace",
    price: 45000,
    category: "necklaces",
    image: "/images/gold-necklace.png",
  },
  {
    id: 11,
    name: "Gold Kada",
    price: 28000,
    category: "kadas",
    image: "/images/gold-kada.png",
  },
  {
    id: 12,
    name: "Gold Anklet",
    price: 12000,
    category: "anklets",
    image: "/images/gold-anklet.png",
  },
  {
    id: 13,
    name: "Kids Gold Jewellery",
    price: 10000,
    category: "kids",
    image: "/images/kids-jewellery.png",
  },
  {
    id: 14,
    name: "Gold Nose Pin",
    price: 3500,
    category: "nose-pins",
    image: "/images/nose-pin.png",
  },
  {
    id: 15,
    name: "Gold Mangalsutra",
    price: 25000,
    category: "mangalsutras",
    image: "/images/mangalsutra.png",
  },
  {
    id: 16,
    name: "Gold Bracelet",
    price: 18000,
    category: "bracelets",
    image: "/images/gold-bracelet.png",
  },
  {
    id: 17,
    name: "Men's Gold Jewellery",
    price: 30000,
    category: "mens",
    image: "/images/mens-jewellery.png",
  },
  {
    id: 18,
    name: "Diamond Solitaire",
    price: 55000,
    category: "solitaires",
    image: "/images/solitaire.png",
  },
  {
    id: 19,
    name: "Watch Accessory",
    price: 15000,
    category: "accessories",
    image: "/images/watch-accessory.png",
  },
];

const categoryNames = {
  rings: "Rings",
  earrings: "Earrings",
  pendants: "Pendants",
  chains: "Chains",
  accessories: "Watch Accessories",
  necklaces: "Necklaces",
  "gold-coins": "Gold Coins",
  bangles: "Bangles",
  kadas: "Kadas",
  anklets: "Anklets",
  kids: "Kids Jewellery",
  "nose-pins": "Nose Pins",
  mangalsutras: "Mangalsutras",
  bracelets: "Bracelets",
  mens: "Men's Jewellery",
  solitaires: "Solitaires",
};

export default function ProductList() {
  const location = useLocation();

  const pathParts = location.pathname
    .split("/")
    .filter(Boolean);

  const selectedCategory =
    pathParts[0] === "jewellery"
      ? pathParts[1] || ""
      : pathParts[0] || "";

  const isAllProducts =
    location.pathname === "/jewellery" ||
    location.pathname === "/jewellery/";

  const title = isAllProducts
    ? "All Jewellery"
    : categoryNames[selectedCategory] || "Products";

  const filteredProducts = isAllProducts
    ? products
    : products.filter(
        (product) =>
          product.category.toLowerCase() ===
          selectedCategory.toLowerCase()
      );

  return (
    <main className="product-list-page">
      <div className="product-list-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/jewellery">Jewellery</Link>

        {!isAllProducts && (
          <>
            <span>/</span>
            <span>{title}</span>
          </>
        )}
      </div>

      <div className="product-list-heading">
        <h1>{title}</h1>
        <p>
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? "product"
            : "products"}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-list-grid">
          {filteredProducts.map((product) => (
            <article
              className="product-card"
              key={product.id}
            >
              <div className="product-card-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="product-card-info">
                <h3>{product.name}</h3>

                <p className="product-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <button
                  type="button"
                  className="product-view-button"
                  onClick={() =>
                    window.alert(
                      `${product.name}\nPrice: ₹${product.price.toLocaleString("en-IN")}`
                    )
                  }
                >
                  View Product
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="product-empty">
          <h2>No products found</h2>
          <p>
            No products are available in the {title} category yet.
          </p>

          <Link to="/jewellery">
            View all jewellery
          </Link>
        </div>
      )}
    </main>
  );
}
