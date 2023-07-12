const Rides = require('../model/rides')

const getAllRides = async (req,res)=>{
    const data = await Rides.find({rideStatus: 'Pending'})
    res.json({rides:data})
  }

  module.exports = {getAllRides}