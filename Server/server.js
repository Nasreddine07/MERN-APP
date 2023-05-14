const express = require('express');
const  mongoose = require('mongoose');
const { ConnectDB } = require('./Config/ConnectDB');
const app = express()
require('dotenv').config()
const UserRouter = require('./Routes/UserRouter')
const ProductRouter = require('./Routes/ProductRouter');
const CartRouter = require('./Routes/CartRouter');
const fileUpload = require('express-fileupload');

app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
}));
app.use('/api/users',UserRouter)
app.use('/api/Products',ProductRouter)
app.use('/api/Cart',CartRouter)


mongoose.set('strictQuery', true)
ConnectDB()

const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`server is running on = ${PORT}...`))