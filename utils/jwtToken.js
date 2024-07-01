
var jwt = require('jsonwebtoken');

const  secretkey = process.env.jwtScretkey

const jwtToken = async(user,password)=>{
    let token = await jwt.sign({user,password},secretkey) 
    return token;
}

module.exports = {jwtToken};