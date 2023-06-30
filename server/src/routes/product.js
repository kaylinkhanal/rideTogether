const express=require('express')
const app=express.Router()
const ProductController = require('../controller/product')
app.post('/products', ProductController.addNewProduct)


module.exports=app;
