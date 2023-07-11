const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const Rides = require('./model/rides')
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
  origin:"*"
  }
});
const cors =require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())

const connectDb = require('./dbConnect/connection')
const productRoute=require('./routes/product')
const userRoute=require('./routes/user')
const vehicleRoute=require('./routes/vehicles')
const rideRoute = require('./routes/rides')



io.on('connection', (socket) => {
  
  

  socket.on('rideRequest',async(rideDetails)=> {
    const res= await Rides.create(rideDetails)
    const rides = await Rides.find().populate('userListId')
    console.log(rides)
    io.emit('rideRequest',rides)
  })


});


connectDb()
app.use("/",productRoute)
app.use("/", userRoute)
app.use("/", vehicleRoute)
app.use("/", rideRoute)


server.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

