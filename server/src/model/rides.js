const mongoose= require('mongoose')

const ridesSchema =  new mongoose.Schema({
  pickupCoord: {type: Object}, 
  dropCoord:  {type: Object}, 
  pickupAddress:  {type: String}, 
  dropAddress:  {type: String}, 
  userVehicleType: {type: Object},
  userListId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },{
    timestamps: true
  });
  const Rides = mongoose.model('Rides', ridesSchema);
  
module.exports = Rides