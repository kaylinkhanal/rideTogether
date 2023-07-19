const mongoose= require('mongoose')

const ridesSchema =  new mongoose.Schema({
  pickupCoord: {type: Object}, 
  dropCoord:  {type: Object}, 
  pickupAddress:  {type: String}, 
  dropAddress:  {type: String}, 
  userVehicleType: {type: Object},
  idDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rideStatus:    {type: String, default:'Pending'}, 
  riderIDReadyToProceed:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  requestedId: {type: String},

  },{
    timestamps: true
  });
  const Rides = mongoose.model('Rides', ridesSchema);
  
module.exports = Rides