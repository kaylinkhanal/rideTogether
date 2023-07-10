const Rides = require('../model/rides')

const getAllRides = async (req,res)=>{
    const data = await Rides.find()
    res.json({rides:data})
  }

  module.exports = {getAllRides}