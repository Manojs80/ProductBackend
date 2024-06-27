
const Joi = require('joi');

const ProductJoi = Joi.object(

{
    title: Joi.string()  
            .required() ,
     
    category:Joi.string()  
            .required() ,

    description:Joi.string()  
              .required() ,

    image:Joi.string(),  
           

    quantity:Joi.number().integer(),


    price:Joi.number()  
            .required() ,
    
}

)

module.exports =ProductJoi ;



