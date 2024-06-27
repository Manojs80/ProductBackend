const router = require('express').Router();

const productRoutes = require('./products/productRouters')
const usersroutes = require('./users/usersrouters')



router.use('/products',productRoutes)
router.use('/users',usersroutes)


module.exports = router