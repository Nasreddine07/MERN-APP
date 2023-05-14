const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/UserController')
const { AuthMiddleWare } = require('../MiddleWares/AuthMiddleWare')
const { DataValidation } = require('../MiddleWares/DataValidation')



router.post('/',DataValidation,UserController.Register )
router.post('/Login',DataValidation,UserController.login )
router.get('/',AuthMiddleWare,UserController.getAllDataUSers )



module.exports = router