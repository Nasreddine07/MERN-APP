const express = require('express')
const router = express.Router()
const { AuthMiddleWare } = require('../MiddleWares/AuthMiddleWare')
const { GetAllDataProducts, deletedDataProduct, UpdateDataProduct,GetProduct } = require('../Controllers/ProductController');
const ProductController = require('../Controllers/ProductController')


router.post('/',AuthMiddleWare,ProductController.AddProduct)
router.get('/',GetAllDataProducts )
router.delete('/:id',deletedDataProduct )
router.put('/:id',UpdateDataProduct )
router.get('/:id',GetProduct )



module.exports = router