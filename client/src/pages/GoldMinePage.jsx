import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Gift, ArrowRight, CheckCircle2, ChevronRight, Calculator } from 'lucide-react';

export default function GoldMinePage() {
  const [monthlyAmount, setMonthlyAmount] = useState(5000);

  const totalPaidByCustomer = monthlyAmount * 10;
  const bluestoneBonus = monthlyAmount;
  const totalMaturityValue = totalPaidByCustomer + bluestoneBonus;

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8">
      <div className="container-fluid">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-bluestone-navy">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-800">Gold Mine 10+1 Plan</span>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#011E38] via-[#082D54] to-[#011E38] text-white rounded-3xl p-8 md:p-14 mb-12 shadow-xl border border-amber-500/20 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Jewellery Savings</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Gold Mine 10 + 1 Monthly Plan
            </h1>
            <p className="text-sm text-gray-200 mt-3 leading-relaxed">
              Invest in your favourite gold, diamond, or solitaire jewellery with India's most rewarding monthly scheme. Pay for 10 months and BlueStone sponsors your 11th installment!
            </p>
          </div>
        </div>

        {/* Interactive Calculator Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 mb-14" id="calculator">
          <div className="flex items-center gap-2 mb-6 text-bluestone-navy">
            <Calculator className="w-6 h-6 text-bluestone-gold" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold">
              Gold Mine Maturity Calculator
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                <span>Select Your Monthly Installment</span>
                <span className="text-base text-bluestone-navy font-bold">
                  ₹{monthlyAmount.toLocaleString('en-IN')} / month
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={1000}
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-bluestone-navy"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>Min: ₹1,000</span>
                <span>Max: ₹50,000</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[2000, 5000, 10000, 20000, 30000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setMonthlyAmount(amt)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    monthlyAmount === amt
                      ? 'border-bluestone-navy bg-bluestone-navy text-white shadow-xs'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  ₹{amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            {/* Calculation Output Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-100 text-center">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <span className="text-[11px] font-semibold text-gray-500 uppercase">You Pay (10 Months)</span>
                <div className="text-xl font-bold text-gray-900 mt-1">
                  ₹{totalPaidByCustomer.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="text-[11px] font-bold text-amber-800 uppercase flex items-center justify-center gap-1">
                  <Gift className="w-3.5 h-3.5" />
                  BlueStone Contributes
                </span>
                <div className="text-xl font-bold text-amber-700 mt-1">
                  + ₹{bluestoneBonus.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="text-[11px] font-bold text-emerald-800 uppercase">Total Shopping Value</span>
                <div className="text-xl font-bold text-emerald-700 mt-1">
                  ₹{totalMaturityValue.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                type="button"
                onClick={() => alert(`Enrolled in Gold Mine plan with ₹${monthlyAmount.toLocaleString('en-IN')} monthly installment!`)}
                className="inline-flex items-center gap-2 bg-bluestone-navy hover:bg-bluestone-dark text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <span>Enrol In Gold Mine Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Step Workflow */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-bluestone-navy">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Three simple steps to unlock your dream jewellery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-bluestone-navy font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                Pay 10 Installments
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Deposit a fixed monthly installment online or across any BlueStone store for 10 months.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs text-center">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                Get 11th Month Bonus
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                BlueStone credits 100% of the 11th installment directly to your scheme balance as a celebratory reward.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                Redeem Across 8,000+ Designs
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Shop rings, earrings, bangles, or solitaires online or at 200+ stores with your accumulated savings!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
