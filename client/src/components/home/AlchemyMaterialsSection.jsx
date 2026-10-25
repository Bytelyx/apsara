import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Award, Sparkles, ArrowRight } from 'lucide-react';

const MATERIALS = [
  {
    name: 'Yellow Gold',
    purity: '18Kt & 22Kt',
    desc: 'Timeless Indian warmth hallmarked by BIS for assured purity.',
    bg: 'from-amber-100 to-amber-50',
    border: 'border-amber-200',
    color: '#D4AF37',
    link: '/jewellery?metal=Yellow+Gold',
    image: 'https://kinclimg4.bluestone.com/f_png,w_600/giproduct/BIPO0630U284_RAA18DIG6XXXXXXXX_ABCD00-PICS-00000-1024-51656.png'
  },
  {
    name: 'Rose Gold',
    purity: '18Kt',
    desc: 'Soft blush tone forged with copper alloy for subtle modern romance.',
    bg: 'from-rose-100 to-rose-50',
    border: 'border-rose-200',
    color: '#B76E79',
    link: '/jewellery?metal=Rose+Gold',
    image: 'https://kinclimg0.bluestone.com/f_png,w_600/giproduct/BIJP0686U20_RAA18SYRUXXXXXXXX_ABCD00-PICS-00000-1024-51411.png'
  },
  {
    name: 'White Gold',
    purity: '18Kt',
    desc: 'Rhodium-finished pristine sheen designed to intensify diamond fire.',
    bg: 'from-slate-100 to-slate-50',
    border: 'border-slate-200',
    color: '#E5E4E2',
    link: '/jewellery?metal=White+Gold',
    image: 'https://kinclimg1.bluestone.com/f_png,w_600/giproduct/BIPM0001R26_WAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-17777.png'
  },
  {
    name: '950 Platinum',
    purity: 'Pt 950',
    desc: '95% pure noble metal, 30 times rarer than gold and naturally white.',
    bg: 'from-blue-50 to-indigo-50/50',
    border: 'border-indigo-100',
    color: '#011E38',
    link: '/jewellery?metal=950+Platinum',
    image: 'https://kinclimg6.bluestone.com/f_png,w_600/giproduct/BIPM0017R02_WAA18DIG6DIG6XXXX_ABCD00-PICS-00003-1024-14079.png'
  }
];

export default function AlchemyMaterialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-fluid">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-bluestone-gold" />
            <span>Materiality &amp; Metals</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-bluestone-navy">
            The Alchemy of Materials
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Every precious alloy at BlueStone is refined to strict international metallurgical standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MATERIALS.map((mat, idx) => (
            <Link
              key={idx}
              to={mat.link}
              className={`p-6 rounded-2xl bg-gradient-to-br ${mat.bg} border ${mat.border} hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white shadow-xs text-gray-700">
                    {mat.purity}
                  </span>
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner"
                    style={{ backgroundColor: mat.color }}
                  />
                </div>

                <div className="h-32 flex items-center justify-center my-2">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-serif text-lg font-bold text-gray-900 mt-2">
                  {mat.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {mat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-bluestone-navy group-hover:translate-x-1 transition-transform">
                <span>View Designs</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
