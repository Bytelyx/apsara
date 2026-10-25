# BlueStone Official Website Recreation 💎

A pixel-perfect, reference-driven e-commerce recreation of the official **BlueStone** fine jewellery website ([www.bluestone.com](https://www.bluestone.com/)), engineered strictly according to the reference DOM architecture, design systems, assets, typography, colors, animations, and backend specifications.

---

## 🌟 Key Highlights & Engineering Features

### 1. Hero Video Integration (`VL_VIDEO_1.mp4`)
- Implemented with the exact requested video asset:
  ```html
  <video autoPlay muted playsInline loop poster="https://kinclimg2.bluestone.com/static/hp/d/v25_poster.jpg">
    <source src="https://kinvid1.bluestone.com/output/mp4/VL_VIDEO_1.mp4/VL_VIDEO_1.mp4" type="video/mp4" />
    <source src="/videos/VL_VIDEO_1.mp4" type="video/mp4" />
  </video>
  ```
- Seamlessly fits across responsive viewports without black bars, layout shifts, or unintended controls. Includes ambient unmute/mute audio control.

### 2. Header & Hallmark Circular Emblem
- **Official BlueStone SVG Logo**: Vector precision extracted directly from official website resources (`viewBox="0 0 174 32"`).
- **Floating Overlapping Circular Emblem Badge**: Overlaps the white header row and signature navy menu bar (`#011E38`), with smooth CSS transform transition into a compact sticky emblem upon scroll.
- **Top Utility Controls**: Search bar with live autocomplete, Recently Viewed, Video Call Cart, Store Locator, Wishlist with live counter, Shopping Cart Drawer trigger with live badge, Profile login modal, and More dropdown.
- **Rich Mega Menu**: Categorized columns for 10+1 Monthly Plans, Watch Jewellery, Rings, Earrings, Pendants, Solitaires, All Jewellery, Gifts, Coins, and Offers with image highlights and CTAs.
- **Mobile Responsive Drawer**: Hamburger menu with complete category accordion, gold mine promotions, and store finder.

### 3. Faithful Homepage Section Order (Reverse-Engineered 1:1)
1. **Hero Banner (`bgBannerSection`)**: Featuring exact `VL_VIDEO_1.mp4` video with Valentine Curation showcase.
2. **Category Menu Section (`squareMenuSection`)**: 16 circular pill categories with official BlueStone image assets.
3. **Gold Mine Strip Section (`stripSection`)**: Signature 10+1 Monthly Savings strip.
4. **Banner Carousel Section (`carouselSection`)**: High-impact promotional banner carousel.
5. **Curated Fine Jewellery Section**: Bestsellers in 18Kt gold, diamonds, and solitaires with instant Quick-Add.
6. **Latest Collections Section (`collectionSection`)**: Whispers of Motion, Curve, Gemphony, Raw Reverie, and Clay Whispers collections.
7. **Craftsmanship Video Showcase (`videoSection`)**: Interactive `#StrokesofGenius` video player with audio and play/pause controls.
8. **Trendspotting Section (`trendingSection`)**: Layered Necklaces, Coveted Styles, and BlueStone Man.
9. **Watch & Shop Reels (`reelsSection`)**: Vertical video reels (`#OOTD`, `#StyleInspo`, `#StackItUp`, `#ArmCandy`, etc.) with mauve border `#9D7792` and instant shop links.
10. **Alchemy of Materials (`roundMenuSection`)**: Yellow Gold, Rose Gold, White Gold, and 950 Platinum.
11. **Design-Led Section (`roundMenuImageSection`)**: Fluid architectural jewellery design narrative.
12. **Rainforest Collection (`fadedBannerSection`)**: Theme collection video and curation.
13. **Omnichannel Store Section (`staticBannerSection`)**: 200+ physical stores with live city selector and VIP appointment booking.
14. **Customer Testimonials (`clipCardsSection`)**: `#BlueStoneAndMe` customer photo reviews.
15. **Editorial Spotlight (`editorialSection`)**: Features in *Elle*, *Vogue*, *Harper's Bazaar*, and *Grazia*.
16. **BlueStone Promise (`roundIconSection`)**: 100% Certified, 30 Days Money Back, Lifetime Exchange & Buyback, 100% Transparency, Free Insured Shipping.
17. **News & Press Coverage (`infoCardSection`)**: Articles from Brand Equity, Indian Retailer, and Indulge.
18. **SEO & Knowledge Base (`homeSeoContentSection`)**: BIS Hallmark education and diamond grading breakdown.

### 4. Interactive E-Commerce & Full-Stack Capabilities
- **Product Listing Page (`/jewellery`)**: Category filters, precious metal filters, price range, sorting, and live search.
- **Product Detail Page (`/product/:slug`)**: Multi-angle zoomable thumbnail gallery, ring size selector with size guide, 18Kt metal variants, live 6-digit postal code delivery estimator, and technical specifications.
- **Shopping Cart & Checkout (`/cart`)**: Slide-out drawer + dedicated checkout page with coupon codes (`BLUESTONE50`), free shipping progress, price breakdown, and order placement simulation.
- **Wishlist (`/wishlist`)**: Persistent local storage wishlist with 1-click Move-to-Cart.
- **Store Directory (`/stores`)**: Filter 200+ retail boutiques across Mumbai, Bengaluru, Delhi NCR, Hyderabad, Chennai, Pune, Kolkata with timings, phone numbers, and maps links.
- **Gold Mine 10+1 Calculator (`/goldmine`)**: Interactive slider calculator computing customer investment, BlueStone 11th installment bonus, and total maturity value.

---

## 🛠️ Mandatory Technology Stack

- **JavaScript Only**: 100% pure JavaScript (`.js`, `.jsx`). Strictly **NO TypeScript**.
- **Frontend**:
  - React.js 18
  - Vite 5
  - Tailwind CSS 3
  - GSAP & Framer Motion for transitions and scroll interactions
  - Lucide React for supplementary utility icons
- **Backend**:
  - Node.js & Express.js REST API
  - MongoDB & Mongoose schemas (with seamless in-memory fallback mode)
  - CORS, Dotenv, Morgan

---

## 📂 Project Directory Structure

```
bluestone-recreation/
├── client/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── public/
│   │   └── videos/
│   │       ├── VL_VIDEO_1.mp4      # Local cached copy of exact video
│   │       └── v25_poster.jpg      # Local cached copy of poster
│   └── src/
│       ├── components/
│       │   ├── header/             # SiteHeader, AnnouncementBar, SearchBar, MegaMenu, MobileNav
│       │   ├── home/               # All 18 BlueStone homepage sections
│       │   ├── product/            # ProductCard, ProductGrid
│       │   ├── common/             # CartDrawer, AuthModal
│       │   └── footer/             # SiteFooter
│       ├── context/                # CartContext, WishlistContext, AuthContext
│       ├── data/                   # Reverse-engineered navigation, sections, products, stores
│       ├── pages/                  # HomePage, ProductListing, ProductDetail, Cart, Wishlist, Stores, GoldMine
│       ├── services/               # API client with fallback resilience
│       ├── styles/                 # Tailwind & typography CSS
│       ├── App.jsx
│       └── main.jsx
├── server/
│   ├── config/                     # MongoDB connection with graceful memory fallback
│   ├── controllers/                # Product, Category, Cart, Wishlist, Store controllers
│   ├── models/                     # Mongoose schemas
│   ├── routes/                     # Express REST routes
│   ├── data/                       # Seed dataset
│   ├── middleware/                 # Error handling
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Setup & Execution Instructions

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (Node Package Manager)
- Optional: MongoDB running locally on port 27017 (If MongoDB is not running, the server automatically operates in in-memory mode so you can test immediately with zero setup required).

### 1. Install Dependencies

To install both client and server dependencies:

```bash
# In project root
npm run install:all
```

Or install individually:

```bash
# Client
cd client
npm install

# Server
cd ../server
npm install
```

### 2. Start the Backend API Server

```bash
cd server
npm run dev
```

The Express API server starts on **`http://localhost:5000`**.
Health check endpoint: `http://localhost:5000/api/health`

### 3. Start the Frontend Development Server

In a separate terminal window:

```bash
cd client
npm run dev
```

The Vite development server will be accessible at:
👉 **`http://localhost:5173`**

### 4. Build for Production

```bash
cd client
npm run build
```

This compiles a production bundle into `client/dist`.

---

## 🎨 Color Palette & Typography

- **Midnight Navy**: `#011E38` (Primary brand color)
- **Deep Navy**: `#002855` / `#15366F`
- **Gold & Champagne Accent**: `#C59A4E` / `#D4AF37` / `#FBF6EE`
- **Reel Accent Mauve**: `#9D7792`
- **Coral & Tangerine Accent**: `#F15D47` / `#F05D4D`
- **Headings Font**: `Domine` (Serif: 400, 500, 600, 700)
- **Body Font**: `Mulish` (Sans-serif: 300, 400, 500, 600, 700)
