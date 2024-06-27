
const userModel = require('../models/users');
 
const SignUpJoi = require('../validations/signupjoi');
 
const Signup = async (req,res)=>{

    const data = req.body
    console.log(data);
    await SignUpJoi.validateAsync(data)
    const toSave = new userModel(data)
    await toSave.save()
    res.status(200).send("Added successfully")
 }

 module.exports = {Signup} ;

 const Login = async (req,res)=>{

    const data = req.body
    console.log(data);

    await SignUpJoi.validateAsync(data)
    
    const isExist =  await userModel.findOne({email: req.body.email , password: req.body.password})
    if (!isExist) throw new Error ("user not found")

    res.status(200).send({status:true, message:"Login successfully"})
 }

 module.exports = {Login} ;