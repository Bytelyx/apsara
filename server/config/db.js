import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/bluestone_db';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
    });
    isConnected = true;
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB] Could not connect to local MongoDB (${error.message}).`);
    console.warn(`[MongoDB] Operating in seamless in-memory fallback mode.`);
    isConnected = false;
    return false;
  }
};

export const getDbStatus = () => isConnected;
