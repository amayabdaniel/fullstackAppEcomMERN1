const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the product name'],
        trim: true,
        maxlength: [100, 'Product name can not be more than 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter the product price'],
        maxlength: [5, 'Product name can not be more than 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter the product description']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter the product category'],
        enum: {
            values: ['Electronics', 'Cameras', 'Laptops', 'Accesories', 'Headphones', 'Food', 'Books', 'Clothes/shoes', 'Beauty/Health', 'Sports', 'Outdoor', 'Home'
            ],
            message: 'Please enter a valid category'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter the product seller'],
    },
    stock: {
        type: Number,
        required: [true, 'Please enter the product stock'],
        maxLength: [5, 'Product stock can not be more than 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Product', productsSchema);