import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function GoldMineStrip() {
  return (
    <section className="bg-gradient-to-r from-[#011E38] via-[#0B2E52] to-[#011E38] text-white py-4 px-4 border-y border-bluestone-gold/30">
      <div className="container-fluid flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="hidden sm:flex w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 items-center justify-center text-white shadow-lg flex-shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-amber-300">
                Gold Mine 10 + 1
              </span>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-amber-400/30">
                Monthly Plan
              </span>
            </div>
            <p className="text-xs text-gray-300 mt-0.5 max-w-xl">
              Pay 10 monthly installments and get the 11th installment 100% on us! Redeem across gold, diamond, and solitaire designs.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-gray-300 pr-3 border-r border-white/20">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Guaranteed Returns</span>
          </div>

          <Link
            to="/goldmine"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-bluestone-navy font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-md transition-all transform hover:scale-105"
          >
            <span>Calculate Benefits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
