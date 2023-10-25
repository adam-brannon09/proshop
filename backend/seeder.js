import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js'; // import the data
import products from './data/products.js'; // import the data
import User from './models/userModel.js'; // import the model
import Product from './models/productModel.js'; // import the model
import Order from './models/orderModel.js'; // import the model
import connectDB from './config/db.js'; // import the db

dotenv.config(); // to use the .env file

connectDB(); // connect to the database

const importData = async () => {
    try {
        await Order.deleteMany(); // delete all the orders
        await Product.deleteMany(); // delete all the products
        await User.deleteMany(); // delete all the users

        const createdUsers = await User.insertMany(users); // insert the users

        const adminUser = createdUsers[0]._id; // get the admin user

        const sampleProducts = products.map((product) => { // add the admin user to the product
            return { ...product, user: adminUser }
        });

        await Product.insertMany(sampleProducts); // insert the products

        console.log('Data Imported!'.green.inverse); // .green.inverse uses the colors package to make the text green and inverse

        process.exit(); // exit the process

    } catch (error) {
        console.error(`${error}`.red.inverse); // .red.inverse uses the colors package to make the text red and inverse
        process.exit(1); // exit with failure

    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany(); // delete all the orders
        await Product.deleteMany(); // delete all the products
        await User.deleteMany(); // delete all the users

        console.log('Data Destroyed!'.red.inverse); // .red.inverse uses the colors package to make the text red and inverse
        process.exit(); // exit the process
    } catch (error) {
        console.error(`${error}`.red.inverse); // .red.inverse uses the colors package to make the text red and inverse
        process.exit(1); // exit with failure
    }
}


if (process.argv[2] === '-d') {
    destroyData(); // destroy the data
} else {
    importData(); // import the data
}