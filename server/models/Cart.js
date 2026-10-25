import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1, min: 1 },
  selectedSize: { type: String },
  selectedMetal: { type: String },
  price: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true },
    items: [cartItemSchema],
  },
  { timestamps: true }
);

export const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);
export default Cart;
