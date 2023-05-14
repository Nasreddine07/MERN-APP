const Product = require('../Models/ProductModel')
const cloudinary = require('../Config/cloudinary')




const AddProduct =  async(req,res)=>{
    try {
        const {title, Des } = req.body
        const savedImage = await cloudinary.uploader.upload(req.files.Image.tempFilePath)
        const newProduct = await Product.create({title,Des,owner:req.userId,Image:{public_id:savedImage.public_id,imgUrl:savedImage.url }})
        res.json({newProduct,msg:'Product has been added successfully!'})
    } catch (error) {
        res.status(501).json({message: error })
    }
}



const GetAllDataProducts = async(req,res)=>{
    try {
        const Products = await Product.find({}).populate({path:'owner', select:'-password -__v'})
        res.json(Products)
    } catch (error) {
        res.status(501).json({message: error })
    }
}



const deletedDataProduct = async(req,res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.json({msg:'Product has been deleted successfully !!',deletedProduct})
    } catch (error) {
        console.log(error)
    }
}


const UpdateDataProduct = async(req,res)=>{
    try {
        console.log(req)
        const UpdatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(UpdatedProduct)
    } catch (error) {
        console.log(error)
    }
}

const GetProduct = async(req,res)=>{
    try {
        const Showproduct = await Product.findById(req.params.id);
        res.json({Showproduct,msg :'Product has been showed successfully !!'});
    } catch (error) {
        res.status(404).json({ message: 'Product not found' });
    }
}

module.exports = {AddProduct,GetAllDataProducts,deletedDataProduct,UpdateDataProduct,GetProduct}