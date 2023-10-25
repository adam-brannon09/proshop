//This is using the es modules syntax. This is the same as const express = require('express'); To use this syntax, we need to add "type": "module" to the package.json file. Look on line 5 in package.json. 
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);




app.listen(port, () => console.log(`Server running on port ${port}`));