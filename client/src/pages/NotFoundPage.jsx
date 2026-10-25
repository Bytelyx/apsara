import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-6 text-center">
      <div className="max-w-md bg-white p-10 rounded-3xl border border-gray-200 shadow-sm space-y-4">
        <div className="w-16 h-16 rounded-full bg-amber-50 text-bluestone-navy flex items-center justify-center mx-auto">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-4xl font-bold text-bluestone-navy">404</h1>
        <h2 className="font-serif text-xl font-bold text-gray-800">Page Not Found</h2>
        <p className="text-xs text-gray-500">
          The jewellery piece or page you're searching for might have moved or is unavailable.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-bluestone-navy hover:bg-bluestone-dark text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to BlueStone Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
