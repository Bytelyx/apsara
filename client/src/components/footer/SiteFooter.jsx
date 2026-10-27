
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
        { label: 'Our Story' },
        { label: 'All Jewellery', to: '/jewellery' },
        { label: 'Rings', to: '/jewellery/rings' },
        { label: 'Earrings', to: '/jewellery/earrings' },
        { label: 'Necklaces', to: '/jewellery/necklaces' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { label: 'Contact Us' },
        { label: 'Track Your Order', to: '/cart' },
        { label: 'Gold Savings Plan' },
        { label: 'Jewellery Care', to: '/jewellery' },
        { label: 'FAQs & Support' },
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
    <footer className="w-full max-w-full min-w-0 overflow-x-clip bg-[#101C2C] text-white">

      {/* Newsletter Section */}
      <section
        aria-label="Newsletter subscription"
        className="w-full min-w-0 border-b border-white/10"
      >
        <div className="mx-auto w-full max-w-7xl min-w-0 px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
          <div className="flex w-full min-w-0 flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

            {/* Newsletter Text */}
            <div className="w-full min-w-0 lg:max-w-lg">
              <div className="mb-3 flex min-w-0 items-center gap-2 text-[#D8B779]">
                <Sparkles
                  size={15}
                  strokeWidth={1.5}
                  className="shrink-0"
                />

                <span className="min-w-0 break-words text-[10px] font-medium uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.2em]">
                  A Little Something Special
                </span>
              </div>

              <h2 className="w-full min-w-0 max-w-full break-words font-serif text-2xl leading-tight sm:text-2xl md:text-3xl">
                Beautiful things,
                <span className="mt-1 block break-words text-[#D8B779] italic sm:mt-0 sm:ml-2 sm:inline">
                  delivered to you.
                </span>
              </h2>

              <p className="mt-3 w-full min-w-0 max-w-md break-words text-sm leading-6 text-gray-400">
                Discover new collections, timeless designs and exclusive
                offers from Apsara Jewellery.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full min-w-0 lg:max-w-md">
              {isSubscribed ? (
                <div
                  role="status"
                  className="flex w-full min-w-0 items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200"
                >
                  <CheckCircle2 size={18} className="shrink-0" />

                  <span className="min-w-0 flex-1 break-words">
                    Thank you! You are on our mailing list.
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsSubscribed(false)}
                    className="shrink-0 underline underline-offset-2"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex w-full min-w-0 flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="footer-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="h-12 w-full min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#D8B779] focus:ring-1 focus:ring-[#D8B779]"
                  />

                  <button
                    type="submit"
                    className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#D8B779] px-5 text-sm font-semibold text-[#101C2C] transition-colors duration-200 hover:bg-[#E7CC98] sm:w-auto"
                  >
                    Subscribe
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}

              <p className="mt-3 break-words text-xs leading-5 text-gray-500">
                Exclusive updates, new arrivals and special offers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid w-full min-w-0 grid-cols-1 gap-y-8 min-[420px]:grid-cols-2 min-[420px]:gap-x-5 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-5 lg:gap-6">

          {/* Brand Information */}
          <div className="col-span-1 w-full min-w-0 min-[420px]:col-span-2 lg:col-span-2">
            <Link
              to="/"
              aria-label="Apsara Jewellery home"
              className="inline-flex max-w-full flex-col items-start"
            >
              <span className="font-serif text-4xl leading-tight tracking-wide sm:text-5xl">
                Apsara
              </span>

              <span className="mt-1 block pl-1 text-[10px] uppercase leading-4 tracking-[0.38em] text-[#D8B779]">
                JEWELLERY
              </span>
            </Link>

            <p className="mt-4 w-full max-w-sm break-words text-sm leading-6 text-gray-400">
              Jewellery for every story, every celebration and every
              beautiful moment. Find the piece that feels uniquely yours.
            </p>

            {/* Contact Details */}
            <div className="mt-5 flex min-w-0 flex-col gap-4 text-sm text-gray-400">

              <a
                href="tel:18004190066"
                className="flex min-w-0 items-start gap-3 transition-colors hover:text-[#D8B779]"
              >
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D8B779]"
                />

                <span className="min-w-0 break-words">
                  1800-419-0066
                </span>
              </a>

              <a
                href="mailto:cs@bluestone.com"
                className="flex min-w-0 items-start gap-3 transition-colors hover:text-[#D8B779]"
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D8B779]"
                />

                <span className="min-w-0 break-words">
                  Customer Support
                </span>
              </a>

              <Link
                // to="/stores"
                className="flex min-w-0 items-start gap-3 transition-colors hover:text-[#D8B779]"
              >
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D8B779]"
                />

                <span className="min-w-0 break-words">
                  Find a Store
                </span>
              </Link>

            </div>

            {/* Social Media */}
            <div className="mt-6 flex flex-wrap items-center gap-3">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all duration-200 hover:border-[#D8B779] hover:text-[#D8B779]"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all duration-200 hover:border-[#D8B779] hover:text-[#D8B779]"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-all duration-200 hover:border-[#D8B779] hover:text-[#D8B779]"
              >
                <Youtube size={18} />
              </a>

            </div>
          </div>

          {/* Footer Link Columns */}
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="w-full min-w-0"
            >
              <h3 className="mb-4 break-words text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#D8B779] sm:text-xs sm:tracking-[0.14em]">
                {section.title}
              </h3>

              <ul className="flex min-w-0 flex-col gap-3">
                {section.links.map((link) => (
                  <li
                    key={link.label}
                    className="w-full min-w-0"
                  >
                    <Link
                      to={link.to}
                      className="block w-full min-w-0 break-words text-xs leading-5 text-gray-400 transition-colors duration-200 hover:text-white sm:text-sm"
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
        <div className="mt-9 border-y border-white/10 py-5 sm:mt-10 sm:py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center sm:gap-x-5">

            <span className="text-[9px] uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.13em]">
              Crafted with care
            </span>

            <span className="hidden h-1 w-1 shrink-0 rounded-full bg-[#D8B779] sm:block" />

            <span className="text-[9px] uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.13em]">
              Made for your moments
            </span>

            <span className="hidden h-1 w-1 shrink-0 rounded-full bg-[#D8B779] sm:block" />

            <span className="text-[9px] uppercase tracking-[0.1em] text-gray-400 sm:text-[10px] sm:tracking-[0.13em]">
              Designed to be treasured
            </span>

          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex w-full min-w-0 flex-col items-center gap-4 pt-5 text-center md:flex-row md:justify-between md:gap-6 md:text-left">

          <p className="max-w-full break-words text-xs leading-5 text-gray-500">
            © {new Date().getFullYear()} Apsara Jewellery. All rights reserved.
          </p>

          <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs text-gray-500 md:w-auto md:justify-end">

            <Link
              // to="/jewellery"
              className="break-words transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              // to="/jewellery"
              className="break-words transition-colors hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              // to="/stores"
              className="break-words transition-colors hover:text-white"
            >
              Store Directory
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}
