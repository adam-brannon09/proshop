import express from 'express';
const router = express.Router();
//import the functions that the two routes below will use from the controller
import { getProducts, getProductById } from '../controllers/productController.js';

//this is a route that will get all products from the database.because app.use('/api/products', productRoutes) on line 22 in server.js we do not need to enter /api/products here in this route. It will be added automatically
//getProducts is a function from '../controllers/productController.js'
//router.route path .get request getProducts functionality from product controller
router.route('/').get(getProducts);
//this is a route that will get a single product from the database. because app.use('/api/products', productRoutes) on line 22 in server.js we do not need to enter /api/products here in this route. It will be added automatically
//getProductById is a function from '../controllers/productController.js'
router.route('/:id').get(getProductById);



export default router;