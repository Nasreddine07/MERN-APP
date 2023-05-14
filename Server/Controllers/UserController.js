const { validationResult } = require('express-validator')
const User = require('../Models/UserModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Register = async(req,res)=>{
    try {
       const errors = validationResult(req) 
       if(!errors.isEmpty()){
        return res.status(402).json({errors: errors.mapped()})
       }
       const {name,age,email,password,Role} = req.body;
     
       const found = await User.findOne({email})
       if(found){
        return res.status(401).json({message:'You have already registered!'})
       }
       const salt = bcrypt.genSaltSync(10);
       const hashedPassword = await bcrypt.hash(password, salt);
       const newUser = await User.create({name,age,email,password:hashedPassword,Role})
       res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
const login = async(req,res)=>{
    try {
        const errors = validationResult(req) 
       if(!errors.isEmpty()){
        return res.status(402).json({errors: errors.mapped()})
       }
       const {email,password} = req.body;
       const isfound = await User.findOne({email})
       if(!isfound){
        return res.status(402).json({message:'You have to register before'})
       }
       const isMatch = await bcrypt.compare(password, isfound.password);
       if(!isMatch){
        return res.status(403).json({message:'Wrong password'})
       }
       const token = await jwt.sign({id: isfound._id},process.env.SECRET, { expiresIn: '30d' });
       res.status(200).json({isfound,token})
    } catch (error) {
        res.status(500).json({message: error})  
    }
}
const getAllDataUSers = async(req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error})
    }
}







module.exports = {Register,login,getAllDataUSers}