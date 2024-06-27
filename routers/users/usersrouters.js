const {Signup, Login} = require('../../controllers/usercontrollers')

const asyncHandler = require('../../utils/asyncHandler');

const router = require('express').Router();


router.post('/sign-up',asyncHandler(Signup));
router.post('/login',asyncHandler(Login));


module.exports = router