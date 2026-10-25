import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchStores } from '../services/api';
import { CITIES } from '../data/storesData';
import { MapPin, Phone, Clock, Search, ShieldCheck, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export default function StoreLocatorPage() {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [searchQuery, setSearchQuery] = useState('');
  const [stores, setStores] = useState([]);
  const [appointmentModal, setAppointmentModal] = useState(null);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);

  useEffect(() => {
    fetchStores(selectedCity).then((data) => {
      setStores(data);
    });
  }, [selectedCity]);

  const filteredStores = stores.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.address.toLowerCase().includes(q) ||
      s.city.toLowerCase().includes(q)
    );
  });

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setAppointmentSuccess(true);
    setTimeout(() => {
      setAppointmentSuccess(false);
      setAppointmentModal(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8">
      <div className="container-fluid">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-bluestone-navy">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-800">Store Locator</span>
        </div>

        {/* Hero Header */}
        <div className="bg-[#011E38] text-white rounded-3xl p-8 md:p-12 mb-10 shadow-lg relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-bluestone-gold bg-white/10 px-3 py-1 rounded-full">
              Omnichannel Network
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-3 leading-tight">
              Visit Our 200+ Stores Across India
            </h1>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              Step into an immersive sanctuary of fine craftsmanship. Enjoy complimentary diamond cleaning, expert ring sizing, and personal solitaire styling.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg relative z-10">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, area or street..."
                className="w-full text-xs pl-10 pr-4 py-3 bg-white text-gray-900 rounded-xl focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 mb-8">
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCity === city
                  ? 'bg-bluestone-navy text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-bluestone-navy bg-blue-50 px-2.5 py-0.5 rounded">
                    {store.city}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
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
                    <a href={`tel:${store.phone}`} className="hover:text-bluestone-navy font-medium">
                      {store.phone}
                    </a>
                  </div>
                </div>

                {/* Amenities pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {store.features.map((f, i) => (
                    <span key={i} className="text-[10px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200">
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
                  className="text-xs font-semibold text-bluestone-navy hover:underline flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5 text-bluestone-gold" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={() => setAppointmentModal(store)}
                  className="bg-amber-400 hover:bg-amber-300 text-bluestone-navy font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-xs transition-colors flex items-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Appointment Booking Modal */}
      {appointmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setAppointmentModal(null)}
          />
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 z-10 animate-in zoom-in-95">
            <h3 className="font-serif text-lg font-bold text-bluestone-navy mb-1">
              Book VIP In-Store Visit
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              At {appointmentModal.name}
            </p>

            {appointmentSuccess ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-gray-900">Appointment Confirmed!</h4>
                <p className="text-xs text-gray-500">
                  Our jewellery concierge will reserve a private styling lounge for you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full text-xs p-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-bluestone-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full text-xs p-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-bluestone-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="w-full text-xs p-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-bluestone-navy"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-3 bg-bluestone-navy text-white text-xs font-bold py-3 rounded-xl hover:bg-bluestone-dark transition-colors"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
