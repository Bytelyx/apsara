import { PRODUCTS } from '../data/productsData';
import { STORES } from '../data/storesData';

const BASE_URL = '/api';

export const fetchProducts = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${BASE_URL}/products?${query}`);
    if (!res.ok) throw new Error('Network response was not ok');
    const json = await res.json();
    return json.data;
  } catch {
    // Fallback to client dataset
    let result = [...PRODUCTS];
    if (params.category && params.category !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === params.category.toLowerCase());
    }
    if (params.metal && params.metal !== 'All Metals') {
      result = result.filter(p => p.metal.toLowerCase().includes(params.metal.toLowerCase()));
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.metal.toLowerCase().includes(q)
      );
    }
    return result;
  }
};

export const fetchProductBySlug = async (slug) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${slug}`);
    if (!res.ok) throw new Error('Not found');
    const json = await res.json();
    return json.data;
  } catch {
    return PRODUCTS.find(p => p.slug === slug || p.id === slug) || PRODUCTS[0];
  }
};

export const fetchStores = async (city = 'All Cities') => {
  try {
    const query = city && city !== 'All Cities' ? `?city=${encodeURIComponent(city)}` : '';
    const res = await fetch(`${BASE_URL}/stores${query}`);
    if (!res.ok) throw new Error('Failed');
    const json = await res.json();
    return json.data;
  } catch {
    if (city && city !== 'All Cities') {
      return STORES.filter(s => s.city.toLowerCase() === city.toLowerCase());
    }
    return STORES;
  }
};
