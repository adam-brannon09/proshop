//This is using the es modules syntax. This is the same as const express = require('express'); To use this syntax, we need to add "type": "module" to the package.json file. Look on line 5 in package.json. 
import express from 'express';
import products from './data/products.js';
const port = 5001;
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});



app.listen(port, () => console.log(`Server running on port ${port}`));