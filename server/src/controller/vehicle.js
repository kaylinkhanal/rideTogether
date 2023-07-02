const Vehicle = require('../model/vehicle')

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
    console.log(req.params)
  }


  module.exports = {addNewVehicle, getAllVehicles, getVechicleTypeImage}