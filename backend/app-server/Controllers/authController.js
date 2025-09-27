const User = require('../Models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register =  async (req,res)=>{
    try{
        const {username,password,phone_number,role} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({username,password:hashedPassword,phone_number,role});
    await newUser.save()
    res.status(201).json({message:"User Registered Successfully"});
    }catch(e){
        res.status(500).json({message:"User Not Registered"});
        console.log(e);
    }
}

const login =  async (req,res)=>{
    try{
    const {username,phone_number,password} = req.body;
    // console.log(req.body);
    const user = await User.findOne({phone_number});
    // console.log(user);
    if(!user){
        return res.status(500).json({message: `User with username : ${username} not found`});
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(500).json({message: `Invalid Password`});
    }
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY);
    res.status(200).json({message:`Login Successful`,token});
    }
    catch(e){
        res.status(500).json(`Login not successful`);
    }

}

module.exports = {register,login};