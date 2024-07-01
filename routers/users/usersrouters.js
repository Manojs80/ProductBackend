const { Login, Signup} = require('../../controllers/usercontrollers')

const asyncHandler = require('../../utils/asyncHandler');

const router = require('express').Router();


router.post('/signup',asyncHandler(Signup));
router.post('/login',asyncHandler(Login));


module.exports = router