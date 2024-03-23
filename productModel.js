const mongoose=require('mongoose')

//Schema to be used for the model
const productSchema = new mongoose.Schema(
    {
        product_id:
        {
            type:Number,
            required : true,
            unique: true //Product ID is unique
        },
        name: 
        {
            type:String,
            required: true
        },
        category:
        {
            type:String,
            required: true,
            enum: ['Women','Men','Kids']
        },
        new_price:
        {
            type:Number,
            required: true
        },
        old_price:
        {
            type:Number,
            required: true
        }
    }
)

// create model
const Product = mongoose.model('Product',productSchema,'Products')
module.exports=Product;