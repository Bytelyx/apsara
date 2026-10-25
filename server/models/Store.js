import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String },
    timings: { type: String },
    features: [{ type: String }],
    lat: Number,
    lng: Number,
  },
  { timestamps: true }
);

export const Store = mongoose.models.Store || mongoose.model('Store', storeSchema);
export default Store;
