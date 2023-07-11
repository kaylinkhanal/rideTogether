const express=require('express')
const app=express.Router()
const RideController = require('../controller/rides')
app.get('/rides', RideController.getAllRides)



module.exports=app;