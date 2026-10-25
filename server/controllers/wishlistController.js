import Wishlist from '../models/Wishlist.js';
import { getDbStatus } from '../config/db.js';

const inMemoryWishlists = {};

export const getWishlist = async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'default-session';
    if (getDbStatus()) {
      let wl = await Wishlist.findOne({ sessionId });
      if (!wl) wl = await Wishlist.create({ sessionId, productIds: [] });
      return res.json({ success: true, data: wl.productIds });
    }
    if (!inMemoryWishlists[sessionId]) inMemoryWishlists[sessionId] = [];
    res.json({ success: true, data: inMemoryWishlists[sessionId] });
  } catch (error) {
    next(error);
  }
};

export const toggleWishlist = async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'default-session';
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ success: false, message: 'ProductId is required' });
    }

    if (getDbStatus()) {
      let wl = await Wishlist.findOne({ sessionId });
      if (!wl) wl = new Wishlist({ sessionId, productIds: [] });

      const index = wl.productIds.indexOf(productId);
      if (index > -1) {
        wl.productIds.splice(index, 1);
      } else {
        wl.productIds.push(productId);
      }
      await wl.save();
      return res.json({ success: true, data: wl.productIds });
    }

    if (!inMemoryWishlists[sessionId]) inMemoryWishlists[sessionId] = [];
    const index = inMemoryWishlists[sessionId].indexOf(productId);
    if (index > -1) {
      inMemoryWishlists[sessionId].splice(index, 1);
    } else {
      inMemoryWishlists[sessionId].push(productId);
    }

    res.json({ success: true, data: inMemoryWishlists[sessionId] });
  } catch (error) {
    next(error);
  }
};
