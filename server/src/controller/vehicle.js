const Vehicle = require('../model/vehicle')
const path = require('path');
const fs = require('fs')
 const addNewVehicle=  async (req,res)=>{
  console.log(req.file.filename)
  req.body.vehicleImage = req.file.filename
    const data = await Vehicle.create(req.body)
    if(data) {
      res.json({
        msg: "product add success"
      })
    }
  }



 const getAllVehicles=  async (req,res)=>{
    const data = await Vehicle.find()
    if(data) {
      res.json({
        vehicleList: data,
        msg: "product add success"
      })
    }
  }

  const getVechicleTypeImage = async (req,res)=>{
    try{
      const data = await Vehicle.findById(req.params.id)
      const imagePath = path.join(__dirname,'../../uploads/vehicle',data.vehicleImage)
      const defaultPath = path.join(__dirname,'../../uploads/vehicle','defaultVehicle.jpeg')
   
     if(fs.existsSync(imagePath) && data.vehicleImage){
       res.sendFile(imagePath)
     }else{
       res.sendFile(defaultPath)
     }
    }catch(err){
      console.log(err)
    }
  
 
  }

  module.exports = {addNewVehicle, getAllVehicles,getVechicleTypeImage}