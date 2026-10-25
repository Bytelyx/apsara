import Product from '../models/Product.js';
import { seedProducts } from '../data/seedData.js';
import { getDbStatus } from '../config/db.js';

let inMemoryProducts = [...seedProducts];

export const getProducts = async (req, res, next) => {
  try {
    const { category, search, metal, minPrice, maxPrice, sort, page = 1, limit = 20 } = req.query;

    if (getDbStatus()) {
      const filter = {};
      if (category && category !== 'All') {
        filter.category = new RegExp(`^${category}$`, 'i');
      }
      if (metal && metal !== 'All Metals') {
        filter.metal = new RegExp(metal, 'i');
      }
      if (search) {
        filter.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { category: { $regex: search, $options: 'i' } },
        ];
      }
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
      }

      let sortOptions = {};
      if (sort === 'price_asc') sortOptions = { price: 1 };
      else if (sort === 'price_desc') sortOptions = { price: -1 };
      else if (sort === 'popular') sortOptions = { reviewCount: -1 };
      else if (sort === 'newest') sortOptions = { createdAt: -1 };

      const skip = (Number(page) - 1) * Number(limit);
      const total = await Product.countDocuments(filter);
      const products = await Product.find(filter).sort(sortOptions).skip(skip).limit(Number(limit));

      return res.json({
        success: true,
        count: products.length,
        total,
        page: Number(page),
        pages: Math.ceil(total / Number(limit)),
        data: products,
      });
    }

    // In-memory fallback
    let result = [...inMemoryProducts];
    if (category && category !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (metal && metal !== 'All Metals') {
      result = result.filter(p => p.metal.toLowerCase().includes(metal.toLowerCase()));
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             (p.description && p.description.toLowerCase().includes(q))
      );
    }
    if (minPrice) result = result.filter(p => p.price >= Number(minPrice));
    if (maxPrice) result = result.filter(p => p.price <= Number(maxPrice));

    if (sort === 'price_asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);
    else if (sort === 'popular') result.sort((a, b) => b.reviewCount - a.reviewCount);

    const total = result.length;
    const skip = (Number(page) - 1) * Number(limit);
    const paginated = result.slice(skip, skip + Number(limit));

    res.json({
      success: true,
      count: paginated.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: paginated,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    if (getDbStatus()) {
      const product = await Product.findOne({ $or: [{ slug }, { id: slug }] });
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      return res.json({ success: true, data: product });
    }

    const product = inMemoryProducts.find(p => p.slug === slug || p.id === slug);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};
