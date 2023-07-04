const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors =require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())

const connectDb = require('./dbConnect/connection')
const productRoute=require('./routes/product')
const userRoute=require('./routes/user')
const vehicleRoute=require('./routes/vehicles')


io.on('connection', (socket) => {
  console.log('a user connected');
});


connectDb()
app.use("/",productRoute)
app.use("/", userRoute)
app.use("/", vehicleRoute)


server.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

