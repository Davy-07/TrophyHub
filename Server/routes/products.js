const express = require('express');
const router = express.Router();
const {getAllProducts,getProductsBySubCategory,getProductsByCategory,getProductsByName,sortByPriceandSize} = require('../controllers/products');


router.get('/',getAllProducts);
router.get('/subcategory',getProductsBySubCategory);
router.get('/category',getProductsByCategory);
router.get('/name',getProductsByName);
router.get('/sortBy',sortByPriceandSize);
module.exports = router;

