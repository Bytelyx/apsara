import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB, getDbStatus } from './config/db.js';
import Product from './models/Product.js';
import { seedProducts } from './data/seedData.js';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to Database
  const connected = await connectDB();

  // If MongoDB connected, seed initial data if collection is empty
  if (connected) {
    try {
      const count = await Product.countDocuments();
      if (count === 0) {
        console.log('[MongoDB] Seeding default BlueStone products...');
        await Product.insertMany(seedProducts);
        console.log(`[MongoDB] Successfully seeded ${seedProducts.length} products.`);
      }
    } catch (err) {
      console.warn('[MongoDB] Seeding check warning:', err.message);
    }
  }

  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(` BlueStone API Server running on port ${PORT}`);
    console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(` MongoDB Connected: ${getDbStatus()}`);
    console.log(`===============================================`);
  });
};

startServer();
