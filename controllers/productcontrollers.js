


const ProductModel = require('../models/products')
const ProductJoi = require('../validations/productjoi')

const addProduct = async(req,res)=>{
    const data = req.body
   
    data.image = `http://localhost:4528/uploads/${req.file.filename}`
    console.log("back",data)
    await ProductJoi.validateAsync(data)
    const saveData = new ProductModel(data);
    if(!saveData) throw new Error (400,'Insert all data')
    await saveData.save();
    res.status(200).send({message:'data save successfully'})

}

const getallProduct = async(req,res)=>{
    const allData = await ProductModel.find({})
    res.status(200).send({data:allData, message: 'ok' })

}
const getProductById = async(req,res)=>{
    const id = req.params.id
    const data = await ProductModel.findById(id)
    res.status(200).send({data:data, message: 'ok' })

}
const deleteProduct = async(req,res)=>{
    const id = req.params.id
    const data = await ProductModel.findByIdAndDelete(id)
    res.status(200).send({data:data, message: 'ok' })

}
const updateProduct = async(req,res)=>{
    const id = req.params.id
    console.log(id);
    const newData = req.body
  
    console.log('newdatabackend',newData);
     await ProductModel.findByIdAndUpdate(id,newData)
    
    res.status(200).send({message:'data save successfully'})

}





module.exports = {addProduct ,getallProduct , getProductById, deleteProduct ,updateProduct}