import Category from '../models/Category.js';
import { getDbStatus } from '../config/db.js';

const defaultCategories = [
  { name: "Rings", slug: "rings", itemCount: 1420 },
  { name: "Earrings", slug: "earrings", itemCount: 1850 },
  { name: "Pendants", slug: "pendants", itemCount: 980 },
  { name: "Solitaires", slug: "solitaires", itemCount: 430 },
  { name: "Mangalsutras", slug: "mangalsutras", itemCount: 320 },
  { name: "Bangles", slug: "bangles", itemCount: 610 },
  { name: "Watch Jewellery", slug: "watch-jewellery", itemCount: 140 },
  { name: "Coins", slug: "coins", itemCount: 45 },
];

export const getCategories = async (req, res, next) => {
  try {
    if (getDbStatus()) {
      const categories = await Category.find();
      return res.json({ success: true, data: categories.length ? categories : defaultCategories });
    }
    res.json({ success: true, data: defaultCategories });
  } catch (error) {
    next(error);
  }
};
