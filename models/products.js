const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    
    title:String,
    category:String,
    description:String,
    image:String,
    quantity:Number,
    price:Number

},{
     timestamps:true,
})

const ProductModel = mongoose.model('product', ProductSchema)
module.exports = ProductModel