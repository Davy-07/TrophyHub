const express = require('express');
const router = express.Router();
const authController = require("../middleware/auth");
const {getCart,createCart,deleteCartItem} = require("../controllers/cart");

router.get('/',authController,getCart);
router.post('/create',authController,createCart);
router.delete('/delete',authController,deleteCartItem);
module.exports = router;
