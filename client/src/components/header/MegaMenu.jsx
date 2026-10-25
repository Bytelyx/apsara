import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Gem, ShieldCheck } from 'lucide-react';

const MENU_CONTENT = {
  '10+1 Monthly Plans': {
    title: 'Gold Mine 10+1 Monthly Plan',
    description: 'Pay 10 monthly installments and get the 11th installment sponsored 100% by BlueStone.',
    columns: [
      {
        heading: 'Plan Highlights',
        links: [
          { label: 'How Gold Mine Works', url: '/goldmine' },
          { label: 'Calculate Your Maturity Value', url: '/goldmine#calculator' },
          { label: 'Enrol in Monthly Plan', url: '/goldmine' },
          { label: 'Manage Existing Plan', url: '/goldmine' },
          { label: 'Plan FAQs & Terms', url: '/goldmine#faqs' },
        ],
      },
      {
        heading: 'Exclusive Benefits',
        links: [
          { label: '100% Bonus on 11th Month', url: '/goldmine' },
          { label: 'Zero Making Charge Perks', url: '/goldmine' },
          { label: 'Redeem across 8,000+ Designs', url: '/jewellery' },
          { label: 'Redeem Online or at 200+ Stores', url: '/stores' },
        ],
      },
    ],
    banner: {
      title: 'Double the Joy of Jewellery',
      subtitle: 'Start with just ₹1,000/month',
      image: 'https://kinclimg6.bluestone.com/static/hp/m/mhome_grp_v3.jpg',
      cta: 'Start Saving Now',
      url: '/goldmine',
    },
  },

  'Watch Jewellery': {
    title: 'Fine Watch Jewellery',
    description: 'Adorn your timepiece with handcrafted gold and diamond watch charms.',
    columns: [
      {
        heading: 'By Style',
        links: [
          { label: 'Watch Charms', url: '/jewellery?category=Watch+Jewellery' },
          { label: 'Diamond Watch Pins', url: '/jewellery?category=Watch+Jewellery' },
          { label: 'Gemstone Charms', url: '/jewellery?category=Watch+Jewellery' },
          { label: 'Initials & Alphabet Charms', url: '/jewellery?category=Watch+Jewellery' },
        ],
      },
      {
        heading: 'Metal Purity',
        links: [
          { label: '18Kt Yellow Gold', url: '/jewellery?category=Watch+Jewellery&metal=Yellow+Gold' },
          { label: '18Kt Rose Gold', url: '/jewellery?category=Watch+Jewellery&metal=Rose+Gold' },
          { label: '18Kt White Gold', url: '/jewellery?category=Watch+Jewellery&metal=White+Gold' },
        ],
      },
    ],
    banner: {
      title: 'Make Your Watch Iconic',
      subtitle: 'Charms starting from ₹15,900',
      image: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/watch-jewellery.png',
      cta: 'Explore Watch Charms',
      url: '/jewellery?category=Watch+Jewellery',
    },
  },

  'Rings': {
    title: 'Exquisite Rings Collection',
    description: 'From daily wear bands to dramatic cocktail statements.',
    columns: [
      {
        heading: 'By Style',
        links: [
          { label: 'Engagement Rings', url: '/jewellery?category=Rings' },
          { label: 'Casual & Daily Wear', url: '/jewellery?category=Rings' },
          { label: 'Cocktail Rings', url: '/jewellery?category=Rings' },
          { label: 'Couple Bands', url: '/jewellery?category=Rings' },
          { label: 'Stackable Rings', url: '/jewellery?category=Rings' },
          { label: 'Adjustable Slider Rings', url: '/jewellery?category=Rings' },
        ],
      },
      {
        heading: 'By Metal & Stone',
        links: [
          { label: 'Diamond Rings', url: '/jewellery?category=Rings' },
          { label: 'Solitaire Rings', url: '/jewellery?category=Solitaires' },
          { label: 'Yellow Gold Rings', url: '/jewellery?category=Rings&metal=Yellow+Gold' },
          { label: 'Rose Gold Rings', url: '/jewellery?category=Rings&metal=Rose+Gold' },
          { label: 'Platinum Bands', url: '/jewellery?category=Rings&metal=950+Platinum' },
        ],
      },
      {
        heading: 'Special Collections',
        links: [
          { label: 'The Bonny Ring', url: '/product/the-bonny-ring' },
          { label: 'The Snakelet Ring', url: '/product/the-snakelet-ring' },
          { label: 'The Humaira Slider Ring', url: '/product/the-humaira-slider-ring' },
          { label: 'Whispers of Motion', url: '/jewellery?category=Rings' },
        ],
      },
    ],
    banner: {
      title: 'The Engagement Edit',
      subtitle: 'Flat 50% off Making Charges',
      image: 'https://kinclimg4.bluestone.com/f_png,w_600/giproduct/BIPO0630U284_RAA18DIG6XXXXXXXX_ABCD00-PICS-00000-1024-51656.png',
      cta: 'Shop All Rings',
      url: '/jewellery?category=Rings',
    },
  },

  'Earrings': {
    title: 'Designer Earrings',
    description: 'Subtle studs, sweeping danglers, and festive chandbalis.',
    columns: [
      {
        heading: 'By Style',
        links: [
          { label: 'Studs & Solitaires', url: '/jewellery?category=Earrings' },
          { label: 'Drops & Danglers', url: '/jewellery?category=Earrings' },
          { label: 'Jhumkas & Chandbalis', url: '/jewellery?category=Earrings' },
          { label: 'Hoops & Huggies', url: '/jewellery?category=Earrings' },
          { label: 'Suidhaga Ear Threads', url: '/jewellery?category=Earrings' },
          { label: 'Ear Cuffs', url: '/jewellery?category=Earrings' },
        ],
      },
      {
        heading: 'By Price',
        links: [
          { label: 'Under ₹20,000', url: '/jewellery?category=Earrings&maxPrice=20000' },
          { label: '₹20,000 - ₹50,000', url: '/jewellery?category=Earrings&minPrice=20000&maxPrice=50000' },
          { label: 'Above ₹50,000', url: '/jewellery?category=Earrings&minPrice=50000' },
        ],
      },
    ],
    banner: {
      title: 'Effortless Radiance',
      subtitle: 'Over 1,800+ Certified Designs',
      image: 'https://kinclimg5.bluestone.com/f_png,w_600/giproduct/BENS0737R13_RAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-53550.png',
      cta: 'Shop Earrings',
      url: '/jewellery?category=Earrings',
    },
  },

  'Pendants': {
    title: 'Pendants & Necklaces',
    description: 'Meaningful charms and luminous diamond accents.',
    columns: [
      {
        heading: 'Popular Pendants',
        links: [
          { label: 'Daily Wear Pendants', url: '/jewellery?category=Pendants' },
          { label: 'Heart & Floral Motifs', url: '/jewellery?category=Pendants' },
          { label: 'Alphabet & Initials', url: '/jewellery?category=Pendants' },
          { label: 'Spiritual & Religious', url: '/jewellery?category=Pendants' },
          { label: 'Solitaire Pendants', url: '/jewellery?category=Pendants' },
        ],
      },
      {
        heading: 'Chains & Sets',
        links: [
          { label: 'Gold Chains', url: '/jewellery?category=Pendants' },
          { label: 'Pendant with Chains', url: '/jewellery?category=Pendants' },
          { label: 'Necklace Sets', url: '/jewellery?category=Pendants' },
        ],
      },
    ],
    banner: {
      title: 'Layered Elegance',
      subtitle: 'Lightweight everyday luxury',
      image: 'https://kinclimg0.bluestone.com/f_png,w_120/giproduct/BIJP0686U20_RAA18SYRUXXXXXXXX_ABCD00-PICS-00000-1024-51411.png',
      cta: 'View Pendants',
      url: '/jewellery?category=Pendants',
    },
  },

  'Solitaires': {
    title: 'The Solitaire Boutique',
    description: 'Certified GIA & IGI solitaire diamonds of unrivaled brilliance.',
    columns: [
      {
        heading: 'Solitaire Categories',
        links: [
          { label: 'Solitaire Rings', url: '/jewellery?category=Solitaires' },
          { label: 'Solitaire Pendants', url: '/jewellery?category=Solitaires' },
          { label: 'Solitaire Earrings', url: '/jewellery?category=Solitaires' },
          { label: 'Men’s Solitaires', url: '/jewellery?category=Solitaires' },
        ],
      },
      {
        heading: 'The 4Cs Guide',
        links: [
          { label: 'Understand Diamond Carat', url: '/jewellery?category=Solitaires' },
          { label: 'Cut, Clarity & Colour', url: '/jewellery?category=Solitaires' },
          { label: '100% Solitaire Buyback Guarantee', url: '/jewellery?category=Solitaires' },
          { label: 'GIA & IGI Certifications', url: '/jewellery?category=Solitaires' },
        ],
      },
    ],
    banner: {
      title: 'Preset Solitaires',
      subtitle: 'Flat 10% Off on Preset Solitaires',
      image: 'https://kinclimg6.bluestone.com/f_png,w_600/giproduct/BIPM0017R02_WAA18DIG6DIG6XXXX_ABCD00-PICS-00003-1024-14079.png',
      cta: 'Explore Solitaires',
      url: '/jewellery?category=Solitaires',
    },
  },

  'All Jewellery': {
    title: 'Complete Jewellery Showcase',
    description: 'Explore the vast spectrum of fine jewellery craftsmanship.',
    columns: [
      {
        heading: 'Wristwear & Neckwear',
        links: [
          { label: 'Bangles & Kadas', url: '/jewellery?category=Bangles' },
          { label: 'Chain Bracelets', url: '/jewellery?category=Bangles' },
          { label: 'Mangalsutras', url: '/jewellery?category=Mangalsutras' },
          { label: 'Necklaces & Collars', url: '/jewellery?category=Pendants' },
        ],
      },
      {
        heading: 'Curated Categories',
        links: [
          { label: 'Men’s Jewellery', url: '/jewellery?category=Rings' },
          { label: 'Kids Jewellery', url: '/jewellery?category=Earrings' },
          { label: 'Nose Pins', url: '/jewellery?category=Earrings' },
          { label: 'Gold Coins', url: '/jewellery?category=Coins' },
        ],
      },
    ],
    banner: {
      title: '7,000+ Unique Designs',
      subtitle: 'BIS Hallmarked & 30-Day Money Back',
      image: 'https://kinclimg1.bluestone.com/f_png,w_600/giproduct/BIAB0617R09_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-53890.png',
      cta: 'Discover All',
      url: '/jewellery',
    },
  },

  'Gifts': {
    title: 'Gifts That Last A Lifetime',
    description: 'Delight your loved ones with memorable fine jewellery.',
    columns: [
      {
        heading: 'Gifts By Occasion',
        links: [
          { label: 'Anniversary Special', url: '/jewellery?category=Rings' },
          { label: 'Birthday Radiance', url: '/jewellery?category=Earrings' },
          { label: 'Wedding & Bridal', url: '/jewellery?category=Pendants' },
          { label: 'Romantic Valentine Gifts', url: '/jewellery?category=Rings' },
        ],
      },
      {
        heading: 'Gifts By Recipient',
        links: [
          { label: 'Gifts for Her', url: '/jewellery' },
          { label: 'Gifts for Him', url: '/jewellery' },
          { label: 'Gifts for Kids', url: '/jewellery' },
          { label: 'BlueStone E-Gift Cards', url: '/jewellery' },
        ],
      },
    ],
    banner: {
      title: 'Gift of Choice',
      subtitle: 'Instant Delivery via SMS & Email',
      image: 'https://kinclimg5.bluestone.com/f_webp/static/hp/m/m-kids_v1.png',
      cta: 'Explore Gift Guide',
      url: '/jewellery',
    },
  },

  'Coins': {
    title: '24Kt Pure Gold & Silver Coins',
    description: 'Investment grade 999 purity gold coins with tamper-proof packaging.',
    columns: [
      {
        heading: 'Gold Coin Weights',
        links: [
          { label: '1 Gram 24Kt Gold Coin', url: '/jewellery?category=Coins' },
          { label: '2 Gram 24Kt Gold Coin', url: '/jewellery?category=Coins' },
          { label: '5 Gram 24Kt Gold Coin', url: '/product/24kt-lakshmi-ganesh-gold-coin-5g' },
          { label: '10 Gram 24Kt Gold Coin', url: '/jewellery?category=Coins' },
          { label: '20 Gram 24Kt Gold Coin', url: '/jewellery?category=Coins' },
        ],
      },
      {
        heading: 'Motifs & Deities',
        links: [
          { label: 'Lakshmi Ganesh Coins', url: '/product/24kt-lakshmi-ganesh-gold-coin-5g' },
          { label: 'Om & Swastik Coins', url: '/jewellery?category=Coins' },
          { label: 'Balaji & Sai Baba Coins', url: '/jewellery?category=Coins' },
          { label: 'Pure Silver Coins', url: '/jewellery?category=Coins' },
        ],
      },
    ],
    banner: {
      title: 'Purest 999 24Kt Gold',
      subtitle: 'Zero Making Charges Guaranteed',
      image: 'https://kinclimg1.bluestone.com/f_png,w_600/giproduct/BIPO0718R04_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-54082.png',
      cta: 'Shop Gold Coins',
      url: '/jewellery?category=Coins',
    },
  },

  'Offers': {
    title: 'Ongoing Offers & Privileges',
    description: 'Exclusive seasonal savings and special discounts.',
    columns: [
      {
        heading: 'Active Promotions',
        links: [
          { label: 'Up to 100% Off on Making Charges', url: '/jewellery' },
          { label: 'Flat 10% Off on Preset Solitaires', url: '/jewellery?category=Solitaires' },
          { label: 'Gold Mine 10+1 Benefit', url: '/goldmine' },
          { label: 'Old Gold Exchange - 0% Deduction', url: '/stores' },
        ],
      },
    ],
    banner: {
      title: 'Festive Privileges',
      subtitle: 'Limited Time Opportunities',
      image: 'https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1791393400801-BS-MC-Offer---Mobile-Home-Page-Banner---1128-x-830.jpg',
      cta: 'View All Offers',
      url: '/jewellery',
    },
  },
};

export default function MegaMenu({ activeItem, onClose }) {
  if (!activeItem) return null;
  const data = MENU_CONTENT[activeItem];
  if (!data) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute left-0 top-full w-full bg-white text-gray-900 shadow-2xl border-t border-gray-100 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
    >
      <div className="container-fluid py-8 px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Columns */}
          <div className="col-span-8 grid grid-cols-3 gap-6">
            {data.columns.map((col, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-bluestone-navy border-b border-gray-100 pb-2">
                  {col.heading}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.url}
                        onClick={onClose}
                        className="text-xs text-gray-600 hover:text-bluestone-navy hover:font-semibold hover:translate-x-1 inline-block transition-all"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quick Guarantees Box */}
            <div className="col-span-3 mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-bluestone-gold" />
                100% Certified BIS Hallmark
              </span>
              <span className="flex items-center gap-1">
                <Gem className="w-3.5 h-3.5 text-bluestone-accent" />
                Lifetime Exchange &amp; Buyback
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-bluestone-coral" />
                30 Days Money Back
              </span>
            </div>
          </div>

          {/* Promotional Banner Card */}
          {data.banner && (
            <div className="col-span-4 bg-gradient-to-br from-[#FFFBF5] to-[#F5EFE6] rounded-xl p-5 border border-[#EADBCC] flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-bluestone-gold bg-white px-2 py-0.5 rounded shadow-sm mb-2">
                  Featured Collection
                </span>
                <h3 className="font-serif text-lg font-bold text-bluestone-navy leading-snug">
                  {data.banner.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  {data.banner.subtitle}
                </p>
              </div>

              <div className="my-3 flex justify-center items-center h-32 overflow-hidden">
                <img
                  src={data.banner.image}
                  alt={data.banner.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <Link
                to={data.banner.url}
                onClick={onClose}
                className="relative z-10 inline-flex items-center justify-between w-full bg-bluestone-navy text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-bluestone-dark transition-colors shadow"
              >
                <span>{data.banner.cta}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
