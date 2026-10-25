import Cart from '../models/Cart.js';
import { getDbStatus } from '../config/db.js';

const inMemoryCarts = {};

export const getCart = async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'default-session';
    if (getDbStatus()) {
      let cart = await Cart.findOne({ sessionId });
      if (!cart) cart = await Cart.create({ sessionId, items: [] });
      return res.json({ success: true, data: cart });
    }
    if (!inMemoryCarts[sessionId]) inMemoryCarts[sessionId] = { sessionId, items: [] };
    res.json({ success: true, data: inMemoryCarts[sessionId] });
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'default-session';
    const { productId, quantity = 1, selectedSize, selectedMetal, price } = req.body;

    if (!productId || price === undefined) {
      return res.status(400).json({ success: false, message: 'ProductId and price are required' });
    }

    if (getDbStatus()) {
      let cart = await Cart.findOne({ sessionId });
      if (!cart) cart = new Cart({ sessionId, items: [] });

      const existingIndex = cart.items.findIndex(
        i => i.productId === productId && i.selectedSize === selectedSize
      );

      if (existingIndex > -1) {
        cart.items[existingIndex].quantity += Number(quantity);
      } else {
        cart.items.push({ productId, quantity: Number(quantity), selectedSize, selectedMetal, price });
      }

      await cart.save();
      return res.json({ success: true, data: cart });
    }

    if (!inMemoryCarts[sessionId]) inMemoryCarts[sessionId] = { sessionId, items: [] };
    const cart = inMemoryCarts[sessionId];
    const existingIndex = cart.items.findIndex(
      i => i.productId === productId && i.selectedSize === selectedSize
    );

    if (existingIndex > -1) {
      cart.items[existingIndex].quantity += Number(quantity);
    } else {
      cart.items.push({ productId, quantity: Number(quantity), selectedSize, selectedMetal, price });
    }

    res.json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
};

export const removeFromCart = async (req, res, next) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'default-session';
    const { productId } = req.params;

    if (getDbStatus()) {
      let cart = await Cart.findOne({ sessionId });
      if (cart) {
        cart.items = cart.items.filter(i => i.productId !== productId);
        await cart.save();
      }
      return res.json({ success: true, data: cart });
    }

    if (inMemoryCarts[sessionId]) {
      inMemoryCarts[sessionId].items = inMemoryCarts[sessionId].items.filter(
        i => i.productId !== productId
      );
    }
    res.json({ success: true, data: inMemoryCarts[sessionId] });
  } catch (error) {
    next(error);
  }
};
