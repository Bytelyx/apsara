import Store from '../models/Store.js';
import { getDbStatus } from '../config/db.js';

const defaultStores = [
  {
    id: "ST-BLR-01",
    city: "Bengaluru",
    name: "BlueStone Store - Indiranagar",
    address: "100 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
    phone: "1800-419-0066",
    timings: "11:00 AM - 9:00 PM",
    features: ["Try At Home Support", "Custom Ring Sizing", "Gold Exchange Center", "Solitaire Lounge"],
    lat: 12.9716,
    lng: 77.6412
  },
  {
    id: "ST-MUM-01",
    city: "Mumbai",
    name: "BlueStone Store - Bandra Linking Road",
    address: "Plot No. 498, 14th Road Corner, Linking Road, Bandra West, Mumbai 400050",
    phone: "1800-419-0066",
    timings: "11:00 AM - 9:30 PM",
    features: ["Flagship Boutique", "Solitaire Lounge", "Gold Exchange Center", "Bridal Consultation"],
    lat: 19.0657,
    lng: 72.8340
  },
  {
    id: "ST-DEL-01",
    city: "Delhi NCR",
    name: "BlueStone Store - South Extension Part 1",
    address: "G-19, Main Market, South Extension I, New Delhi 110049",
    phone: "1800-419-0066",
    timings: "11:00 AM - 9:00 PM",
    features: ["Flagship Experience", "Gold Exchange Center", "Solitaire Lounge"],
    lat: 28.5694,
    lng: 77.2215
  }
];

export const getStores = async (req, res, next) => {
  try {
    const { city } = req.query;
    if (getDbStatus()) {
      const query = city && city !== 'All Cities' ? { city: new RegExp(`^${city}$`, 'i') } : {};
      const stores = await Store.find(query);
      return res.json({ success: true, data: stores.length ? stores : defaultStores });
    }
    let filtered = defaultStores;
    if (city && city !== 'All Cities') {
      filtered = defaultStores.filter(s => s.city.toLowerCase() === city.toLowerCase());
    }
    res.json({ success: true, data: filtered });
  } catch (error) {
    next(error);
  }
};
