import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

const __dirname = import.meta.dirname;
config({ path: `${__dirname}/../config.env` });

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';



const app = express();
const port = process.env.PORT;
const DB = process.env.MONGO_URI;

// middlewares
app.use(cors());
app.use(express.json()); 

// routes
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);

// test
app.get('/', (req, res) => {
  res.send('Backend Running ✅');
});


try {
    // MongoDB connection
    await mongoose.connect(DB)
    console.log("Connected to DB successfully!")

    // server
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
} catch (error) {
    console.log('Server startup error: ',error)

    process.exit(1);
}

