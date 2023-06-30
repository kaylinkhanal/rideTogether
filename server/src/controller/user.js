const User = require('../model/user')
const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

 const registerNewUser=  async (req,res)=>{
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashPassword
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "registration success",
        success: true
      })
    }
  }

 
 const loginUser=  async (req,res)=>{
  try{
    // step 1: check if the phonenumber/username/email exists or not
    const data = await User.findOne({phoneNumber: req.body.phoneNumber})
    //step 2: check if the password is matched
    if(data){
      const isMatched = await bcrypt.compare(req.body.password, data.password)
      // getnerate a token for the user
      if(isMatched){
        const token = jwt.sign({ phoneNumber:  req.body.phoneNumber }, process.env.SECRET_KEY);
        console.log(token)
        res.json({
        isLoggedIn: true,
        phoneNumber: data.phoneNumber,
        msg:  "success",
        id: data._id,
        role: data.role,
        token: token
        })
      }else{
        res.json({
          isLoggedIn: false,
          msg: "invalid password"
        })
      }
    }else{
      res.json({
        isLoggedIn: false,
        msg: "user doesnnot exist"
      })
    }
  }catch(err){
    console.log(err)
  }


}


const getAllUser =  async (req,res)=>{
   const data = await User.find()
   if(data){
     res.json({
     userList: data
     })
   }
 }

 const getUserDetailsById = async (req,res)=>{
   const data = await User.findById(req.params.id)
   if(data){
     res.json({
     userList: data
     })
   }
 }

 const changePassword = async (req,res)=>{
  // {
  //   oldPassword: 'hello@123',
  //   newPassword: 'hello@123456'
  // }
  //compare oldPassword with current valid password
//true=> 
//
}
 
  module.exports = {registerNewUser,loginUser,getAllUser,getUserDetailsById,changePassword}