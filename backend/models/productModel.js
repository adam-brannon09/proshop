import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({

    user: {
        //this is the user that is writing the review
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //specify which model this id is coming from
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,

    },
    comment: {
        type: String,
        required: true,
    },
}, {
    //this will add the createdAt and updatedAt fields to the database
    timestamps: true,
});

const productSchema = new mongoose.Schema({

    user: {
        //this is the user that is creating the product

        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //specify which model this id is coming from
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    //reviews has its own schema which is pulled in here from above
    reviews: [reviewSchema],

    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },

}, {
    //this will add the createdAt and updatedAt fields to the database
    timestamps: true,
});


const Product = mongoose.model('Product', productSchema);

export default Product;