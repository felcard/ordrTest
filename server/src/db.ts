import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/config/.env.${process.env.NODE_ENV}` });

export const connectDB = async () => {
  try {
    const db_url = process.env.DB_STRING;
    if (!db_url) {
      throw new Error('db_url must be defined');
    }
    const conn = await mongoose.connect(db_url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
