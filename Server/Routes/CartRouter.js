const express = require('express');
const router = express.Router();
const { addItemToCart,removeItemFromCart } = require('../Controllers/CartController');



router.post('/:id',addItemToCart);
router.delete('/:id',removeItemFromCart);


module.exports = router