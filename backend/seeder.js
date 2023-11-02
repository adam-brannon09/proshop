import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js'; // import the users data
import products from './data/products.js'; // import the products data
import User from './models/userModel.js'; // import the user model
import Product from './models/productModel.js'; // import the product model
import Order from './models/orderModel.js'; // import the order model
import connectDB from './config/db.js'; // import the db

dotenv.config(); // to use the .env file

connectDB(); // connect to the database

const importData = async () => {
    try {
        //Before importing the data, we need to delete all the data that is already in the database. This is because we don't want to duplicate the data.
        await Order.deleteMany(); // delete all the orders
        await Product.deleteMany(); // delete all the products
        await User.deleteMany(); // delete all the users
        // after deleting the data, we can import the data
        // createdUsers is an array of the users that were created
        const createdUsers = await User.insertMany(users); // insert the users
        // get the admin user
        const adminUser = createdUsers[0]._id; // get the admin user
        // add the admin user to the product
        const sampleProducts = products.map((product) => { // map through the products
            return { ...product, user: adminUser } // return the product and add the admin user to the product
        });

        await Product.insertMany(sampleProducts); // insert the products into the database


        console.log('Data Imported!'.green.inverse); // .green.inverse uses the colors package to give the text a green background

        process.exit(); // exit the process

        // if there is an error, catch the error
    } catch (error) {
        console.error(`${error}`.red.inverse); // .red.inverse uses the colors package to make the background red
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

// console.log(process.argv);

//^^^^^^^To Explain lines 61-65^^^^^^^
//if you add a console.log(process.argv) with the input of node backend/seeder -d in the terminal it will return:
// adambrannon@Adams-MacBook-Pro proshop-v2 % node backend/seeder -d
// [
//   '/Users/adambrannon/.nvm/versions/node/v16.20.1/bin/node',
//   '/Users/adambrannon/Desktop/udemy/traversy_courses/mern/proshop-v2/backend/seeder',
//   '-d'
// ]
// The 2nd or [2] index in the array is '-d'. This is the argument that we are passing in on line 61. So if we pass the -d into the command line, it will run the destroyData() function. If we don't pass in the -d, it will run the importData() function.