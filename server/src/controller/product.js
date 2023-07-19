const Product = require('../model/product')

const getAllProducts = async (req,res)=>{
    const data = await Product.find()
    res.json({productList:data})
  }

 const addNewProduct=  async (req,res)=>{
  try{
    const data = await Product.create(req.body)
    if(data) {
      res.json({
        msg: "product add success"
      })
    }
  }catch(err){
    console.log(err)
  }
  }
  module.exports = {getAllProducts, addNewProduct}