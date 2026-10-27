import React from 'react';
import {
  ShieldCheck,
  RefreshCw,
  Undo2,
  Award,
  Truck,
  Eye,
  Sparkles,
} from 'lucide-react';

const PROMISES = [
  {
    icon: Award,
    title: 'Certified Jewellery',
    desc: 'Jewellery with trusted quality standards and applicable purity certification.',
  },
  {
    icon: Undo2,
    title: 'Easy Returns',
    desc: 'A simple, transparent return experience, subject to our return policy.',
  },
  {
    icon: RefreshCw,
    title: 'Exchange Support',
    desc: 'Explore exchange options for your jewellery, as per our exchange policy.',
  },
  {
    icon: Eye,
    title: 'Transparent Pricing',
    desc: 'Clear product details and pricing, so you can shop with confidence.',
  },
  {
    icon: Truck,
    title: 'Secure Delivery',
    desc: 'Carefully packed jewellery delivered safely to your doorstep.',
  },
  {
    icon: ShieldCheck,
    title: 'Customer Care',
    desc: 'Dedicated assistance to help you with your jewellery shopping journey.',
  },
];

export default function ApsaraPromiseSection() {
  return (
    <section className="border-y border-[#E9E1D5] bg-[#FBF9F6] py-14 sm:py-20 lg:py-24">
      <div className="container-fluid">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

          <div className="mb-4 inline-flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#B89A62]" />

            <Sparkles
              className="h-4 w-4 text-[#B89A62]"
              strokeWidth={1.5}
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927448] sm:text-xs">
              The Apsara Difference
            </span>

            <span className="h-px w-8 bg-[#B89A62]" />
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-bluestone-navy sm:text-4xl lg:text-5xl">
            The Apsara{' '}
            <span className="font-normal italic text-[#A78954]">
              Promise
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
            Beautiful jewellery deserves a beautiful experience.
            Thoughtful details, transparent service, and care at every step.
          </p>
        </div>

        {/* Promise Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {PROMISES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#E9E1D5] bg-white px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C8AD7C] hover:shadow-[0_12px_32px_rgba(90,70,35,0.07)] sm:rounded-3xl sm:px-4 sm:py-7"
              >
                {/* Fine Gold Top Accent */}
                <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#B89A62] transition-all duration-300 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#E9DDC7] bg-[#FBF7EF] text-[#A78954] transition-all duration-300 group-hover:border-[#B89A62] group-hover:bg-bluestone-navy group-hover:text-[#E6CC91] sm:h-14 sm:w-14">
                  <Icon
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Small Decorative Detail */}
                <span className="mb-3 h-px w-7 bg-[#D9C6A0] transition-all duration-300 group-hover:w-12" />

                {/* Title */}
                <h3 className="font-serif text-xs font-semibold leading-5 text-bluestone-navy sm:text-sm">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[10px] leading-[1.8] text-gray-500 sm:text-xs sm:leading-6">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Brand Detail */}
        <div className="mt-9 flex items-center justify-center gap-3 sm:mt-12">
          <span className="h-px w-8 bg-[#D8C7A5] sm:w-12" />

          <p className="text-center text-[9px] font-medium uppercase tracking-[0.18em] text-[#927448] sm:text-xs sm:tracking-[0.22em]">
            Every Detail. Every Promise. Every Apsara Moment.
          </p>

          <span className="h-px w-8 bg-[#D8C7A5] sm:w-12" />
        </div>

      </div>
    </section>
  );
}