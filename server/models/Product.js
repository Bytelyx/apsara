import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    category: { type: String, required: true, index: true },
    subCategory: { type: String },
    metal: { type: String, required: true },
    purity: { type: String, required: true },
    goldWeight: { type: String },
    diamondWeight: { type: String },
    diamondClarity: { type: String },
    diamondColor: { type: String },
    gemstone: { type: String },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    discountPercentage: { type: Number, default: 0 },
    makingChargeDiscount: { type: String },
    inStock: { type: Boolean, default: true },
    readyToShip: { type: Boolean, default: false },
    expressDelivery: { type: Boolean, default: false },
    shipsIn: { type: String, default: '2-4 Days' },
    rating: { type: Number, default: 4.8 },
    reviewCount: { type: Number, default: 0 },
    isBestseller: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    goldMineEligible: { type: Boolean, default: true },
    images: [{ type: String }],
    description: { type: String },
    details: {
      height: String,
      width: String,
      grossWeight: String,
      purityCertification: String,
      exchangePolicy: String,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
