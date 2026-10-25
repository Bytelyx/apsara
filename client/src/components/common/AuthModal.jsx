import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AuthModal() {
  const { isAuthModalOpen, closeAuth, authMode, login } = useAuth();
  const [tab, setTab] = useState(authMode || 'login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab === 'register' && !formData.name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setError('Please provide email or phone number');
      return;
    }

    login({
      name: formData.name || 'Priya Sharma',
      email: formData.email || 'priya.sharma@example.com',
      phone: formData.phone || '+91 98765 43210',
    });
  };

  const handleDemoLogin = () => {
    login({
      name: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      phone: '+91 98765 43210',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeAuth}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#011E38] text-white p-6 relative">
          <button
            onClick={closeAuth}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BlueStone Privileges</span>
          </div>

          <h3 className="font-serif text-2xl font-bold">
            {tab === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Unlock wishlist sync, custom ring sizing, and Gold Mine perks.
          </p>

          {/* Tab Switcher */}
          <div className="mt-5 flex bg-white/10 rounded-lg p-1 text-xs font-semibold">
            <button
              onClick={() => { setTab('login'); setError(''); }}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                tab === 'login' ? 'bg-white text-bluestone-navy shadow' : 'text-gray-300 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setTab('register'); setError(''); }}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                tab === 'register' ? 'bg-white text-bluestone-navy shadow' : 'text-gray-300 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {error && (
            <div className="mb-4 text-xs text-rose-600 bg-rose-50 border border-rose-200 p-2.5 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'register' && (
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full text-xs pl-9 pr-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-bluestone-navy"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full text-xs pl-9 pr-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-bluestone-navy"
                />
              </div>
            </div>

            {tab === 'register' && (
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (For OTP / Delivery)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs pl-9 pr-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-bluestone-navy"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full text-xs pl-9 pr-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-bluestone-navy"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-bluestone-navy hover:bg-bluestone-dark text-white font-bold py-3 rounded-xl shadow-md text-xs transition-colors"
            >
              {tab === 'login' ? 'Sign In To Account' : 'Create Account'}
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300/60 font-semibold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-bluestone-gold" />
              <span>1-Click Demo Login (Priya Sharma)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
