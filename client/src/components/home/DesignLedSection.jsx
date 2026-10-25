import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function DesignLedSection() {
  return (
    <section className="py-16 bg-[#0B1E33] text-white overflow-hidden relative">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Design-Led Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Where Precision Meets Pure Poetry
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              We design fine jewellery for the modern icon. Every contour is engineered with parametric modeling and hand-finished with meticulous perfection.
            </p>

            <div className="pt-2">
              <Link
                to="/jewellery"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-bluestone-navy font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <span>Explore The Design Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://kinclimg5.bluestone.com/f_webp/static/hp/m/designled_p.jpg"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://kinvid1.bluestone.com/output/mp4/designled_v0.mp4/designled_v0.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
