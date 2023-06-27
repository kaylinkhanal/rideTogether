const mongoose= require('mongoose')

const vehicleSchema =  new mongoose.Schema({
  vehicleType: {type: String}, 
  maxSeats:  {type: Number}, 
  perKmPrice: {type: Number}, 
  vehicleImage: {type: String}
  });
  const Vehicle = mongoose.model('Vehicle', vehicleSchema);

  
module.exports = Vehicle