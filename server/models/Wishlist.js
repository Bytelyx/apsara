import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true },
    productIds: [{ type: String }],
  },
  { timestamps: true }
);

export const Wishlist = mongoose.models.Wishlist || mongoose.model('Wishlist', wishlistSchema);
export default Wishlist;
