const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
{
    name:String,
    email:{
        type:String,
        requird:true,
        unique:true
   },
    password:String,
    isAdmin:Boolean,

},{
     timestamps:true,
})

const UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel