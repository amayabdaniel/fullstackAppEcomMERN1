const express = require('express')
const router = express.Router();

const { getProducts, createProduct } = require('../controllers/productController.js')


router.route('/products').get(getProducts);


router.route('/products/new').post(createProduct);


module.exports = router;