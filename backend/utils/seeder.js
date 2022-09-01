const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products.json');

//setting dotenv file

dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();	
        console.log('Products are Deleted');
        await Product.insertMany(products);
        console.log('Products are Added');
        process.exit();
        
    } catch (error) {
        console.log(error);
        process.exit();       
    }
}

seedProducts();