const express=require('express')
const app=express.Router()
const multer  = require('multer')
const VehicleController = require('../controller/vehicle')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/vehicle')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
 const upload = multer({ storage: storage })

app.post('/add-vehicle', upload.single('imageImage'), VehicleController.addNewVehicle)
app.get('/vehicles', VehicleController.getAllVehicles)  
app.get('/getVechicleTypeImage/:id', VehicleController.getVechicleTypeImage)
module.exports=app;