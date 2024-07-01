const asyncHandler = (fn) => async (req,res,next)=>{
    try {
        console.log('asyn',req.body);
        await fn(req,res,next)
    } catch (err) {
        console.log(err);
        if(err.isJoi) err.status = 422;
       
        res.status(err.status||500).send({status:false,error:err.message})
        
        
    }
}
 module.exports = asyncHandler


 /*  try {
        // Async code that might throw an error
        await someAsyncOperation();
    } catch (err) {
        // Error handling
        if (err.isJoi) {
            err.status = 422;
            // Handle Joi validation error
        } else {
            // Handle other types of errors
        }
    }   */