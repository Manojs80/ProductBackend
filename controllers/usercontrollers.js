
const userModel = require('../models/users');
const { jwtToken } = require('../utils/jwtToken');

const bcrypt = require('bcrypt');
const saltRounds = 10;
 
const SignUpJoi = require('../validations/signupjoi');

 
const Signup = async (req,res)=>{

     const { email, password } = req.body;
 
    await SignUpJoi.validateAsync({ email, password }) 
    
   await bcrypt.hash( password , saltRounds, (err, hashedPassword) => {
      if (err) {
          console.error('Error while hashing password:', err);
          return;
      }
      console.log('Hashed password:', hashedPassword);
      const toSave = new userModel({
                          email: email,
                          password: hashedPassword
                              })
      toSave.save()
      res.status(200).send("Added successfully")
    });
   
   }


 


 const Login = async (req,res)=>{

    const data = req.body
    console.log('login data @usecontr',data);

    await SignUpJoi.validateAsync(data)
    
    const isExist =  await userModel.findOne({ email: req.body.email })
    if (!isExist) throw new Error ("user not found")
       
      const password = req.body.password ;
       const hashedPassword = isExist.password;
       console.log('bcrcmp', password );
       console.log('hashedPassword', hashedPassword );
       const passwordMatch = await bcrypt.compareSync(password,hashedPassword);
       console.log(passwordMatch);
       console.log(!passwordMatch);
     if (!passwordMatch) throw new Error ("Password not Match")
       
      const token = await jwtToken(req.body.email , req.body.password)
        console.log(token);
    res.status(200).send({status:true , message:"Login successfully" , token : {token}})
 }

 module.exports = { Login , Signup } ;




  
  
    