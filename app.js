
require('dotenv').config();
const express = require('express')
const app = new express();

require('./db')
const morgan = require('morgan')
 const routes = require('./routers')
const cors = require('cors')

 const PORT = process.env.PORT || 4528;

 app.use(cors({
    orgin: '*'
 }))
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use('/uploads', express.static('uploads'));

app.use(morgan('dev'))
app.use('/',routes)

app.listen(PORT,()=>{
    console.log('serving on port' + PORT)
})