const joi=require("joi");

module.exports.listingSchema=joi.object({
 
      list: joi.object({
        title: joi.string().max(50).required(),
        description: joi.string().max(500).required(),
        location: joi.string().max(50).required(),
        country: joi.string().max(50).required(),
        price: joi.number().min(0).required(),
        image: joi.string().allow("", null)
    }).required()
    
        
})

module.exports.ReviewSchema=joi.object({
    review:joi.object({
        rating:joi.number().min(1).max(5).required(),
        comment:joi.string().max(200).min(1).required(),
       
    }).required()
})