import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) return;

    setIsSubscribed(true);
    setNewsletterEmail('');
  };

  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { label: 'Our Story', to: '/stores' },
        { label: 'All Jewellery', to: '/jewellery' },
        { label: 'Rings', to: '/jewellery/rings' },
        { label: 'Earrings', to: '/jewellery/earrings' },
        { label: 'Necklaces', to: '/jewellery/necklaces' },
        { label: 'Store Locator', to: '/stores' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { label: 'Contact Us', to: '/stores' },
        { label: 'Track Your Order', to: '/cart' },
        { label: 'Book an Appointment', to: '/stores' },
        { label: 'Gold Savings Plan', to: '/goldmine' },
        { label: 'Jewellery Care', to: '/jewellery' },
        { label: 'FAQs & Support', to: '/stores' },
      ],
    },
    {
      title: 'Popular Collections',
      links: [
        { label: 'Gold Jewellery', to: '/jewellery' },
        { label: 'Diamond Jewellery', to: '/jewellery' },
        { label: 'Mangalsutras', to: '/jewellery/mangalsutras' },
        { label: 'Bangles', to: '/jewellery/bangles' },
        { label: 'Pendants', to: '/jewellery/pendants' },
        { label: 'Solitaires', to: '/jewellery/solitaires' },
      ],
    },
  ];

  return (
    <footer className="bg-[#101C2C] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-7 md:py-9">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 text-[#D8B779] mb-2">
                <Sparkles size={14} strokeWidth={1.5} />

                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                  A Little Something Special
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl leading-tight">
                Beautiful things,
                <span className="text-[#D8B779] italic ml-2">
                  delivered to you.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-5">
                Discover new collections, timeless designs and exclusive
                offers from Apsara Jewellery.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              {isSubscribed ? (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-xs text-emerald-200"
                >
                  <CheckCircle2 size={18} />
                  <span>
                    Thank you! You are on our mailing list.
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsSubscribed(false)}
                    className="ml-auto underline"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) =>
                      setNewsletterEmail(e.target.value)
                    }
                    placeholder="Your email address"
                    className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#D8B779]"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D8B779] px-5 py-3 text-xs font-semibold text-[#101C2C] transition-colors hover:bg-[#E7CC98]"
                  >
                    Subscribe
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}

              <p className="mt-2 text-[10px] text-gray-500">
                Exclusive updates, new arrivals and special offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-7 lg:gap-6">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" aria-label="Apsara Jewellery home" className="inline-block">
              <span className="font-serif text-3xl tracking-wide">
                Apsara
              </span>

              <span className="block mt-0.5 text-[9px] uppercase tracking-[0.38em] text-[#D8B779]">
                JEWELLERY
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-xs leading-6 text-gray-400">
              Jewellery for every story, every celebration and every
              beautiful moment. Find the piece that feels uniquely yours.
            </p>

            <div className="mt-4 space-y-2.5 text-xs text-gray-400">
              <a
                href="tel:18004190066"
                className="flex items-center gap-2.5 transition-colors hover:text-[#D8B779]"
              >
                <Phone size={14} className="text-[#D8B779]" />
                <span>1800-419-0066</span>
              </a>

              <a
                href="mailto:cs@bluestone.com"
                className="flex items-center gap-2.5 transition-colors hover:text-[#D8B779]"
              >
                <Mail size={14} className="text-[#D8B779]" />
                <span>Customer Support</span>
              </a>

              <Link
                to="/stores"
                className="flex items-center gap-2.5 transition-colors hover:text-[#D8B779]"
              >
                <MapPin size={14} className="text-[#D8B779]" />
                <span>Find a Store</span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all hover:border-[#D8B779] hover:text-[#D8B779]"
              >
                <Instagram size={15} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all hover:border-[#D8B779] hover:text-[#D8B779]"
              >
                <Facebook size={15} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all hover:border-[#D8B779] hover:text-[#D8B779]"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Footer Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D8B779]">
                {section.title}
              </h3>

              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs leading-5 text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand Promise */}
        <div className="mt-7 border-y border-white/10 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center">
            <span className="text-[9px] uppercase tracking-[0.13em] text-gray-400">
              Crafted with care
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#D8B779] sm:block" />

            <span className="text-[9px] uppercase tracking-[0.13em] text-gray-400">
              Made for your moments
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#D8B779] sm:block" />

            <span className="text-[9px] uppercase tracking-[0.13em] text-gray-400">
              Designed to be treasured
            </span>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col items-center justify-between gap-3 pt-5 text-center md:flex-row md:text-left">
          <p className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} Apsara Jewellery. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-gray-500">
            <Link
              to="/jewellery"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/jewellery"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              to="/stores"
              className="transition-colors hover:text-white"
            >
              Store Directory
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}