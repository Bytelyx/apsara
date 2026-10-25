import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { STORES, CITIES } from '../../data/storesData';

export default function StoreSection() {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const navigate = useNavigate();

  const filteredStores = selectedCity === 'All Cities'
    ? STORES.slice(0, 3)
    : STORES.filter(s => s.city === selectedCity).slice(0, 3);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-fluid">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-bluestone-gold" />
              <span>Omnichannel Experience</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-bluestone-navy">
              Drop into a BlueStone Store Near You
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Experience the luxury of touch and try across 200+ experiential stores in 125+ cities.
            </p>
          </div>

          {/* City Selector */}
          <div className="flex items-center gap-3">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="text-xs font-semibold bg-gray-50 border border-gray-300 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:border-bluestone-navy"
            >
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <Link
              to="/stores"
              className="inline-flex items-center gap-1.5 bg-bluestone-navy text-white hover:bg-bluestone-dark text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <span>View All 200+ Stores</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="p-6 rounded-2xl border border-gray-200 hover:border-bluestone-navy hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-bluestone-gold bg-amber-50 px-2 py-0.5 rounded">
                    {store.city}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-gray-900">
                  {store.name}
                </h3>
                
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {store.address}
                </p>

                <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{store.timings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    <span>{store.phone}</span>
                  </div>
                </div>

                {/* Amenities pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {store.features.map((f, fIdx) => (
                    <span key={fIdx} className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-bluestone-navy hover:underline"
                >
                  Get Directions &rarr;
                </a>
                <Link
                  to="/stores"
                  className="text-xs font-bold text-bluestone-gold hover:text-amber-600"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
