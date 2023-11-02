//This is using the es modules syntax. This is the same as const express = require('express'); To use this syntax, we need to add "type": "module" to the package.json file. Look on line 5 in package.json. 
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
//connectDB is the function that connects to the MongoDB database, located in the config file
import connectDB from './config/db.js';
//import the routes from productRoutes.js
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 8000;
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

//call this function from 'config/db.js' to connect to the MongoDB database.
//to know this is working, we will see the console.log() message in the terminal that says MongoDB Connected when the server is running
connectDB();

//initialize express
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

//this is a route that will get all products from the database. This route is in the productRoutes.js file
// because /api/products is here it will be added to the beginning of the route in productRoutes.js automatically
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));