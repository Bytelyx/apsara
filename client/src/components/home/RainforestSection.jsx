import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function RainforestSection() {
  return (
    <section className="py-16 bg-[#162B23] text-white overflow-hidden relative">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-emerald-900/40 aspect-video relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://kinclimg5.bluestone.com/f_webp/static/hp/m/rf-p.png"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://kinvid1.bluestone.com/output/mp4/rainforest_v0.mp4/rainforest_v0.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Theme Collection</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              The Rainforest Collection
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              Dappled sunlight, exotic canopy leaves, and dew-kissed blossoms reimagined in 18Kt gold, emerald accents, and scintillating diamonds.
            </p>

            <div className="pt-2">
              <Link
                to="/jewellery"
                className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <span>Shop The Rainforest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
