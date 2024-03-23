const Product = require("./productModel")

module.exports={
    getAllProducts: async(request,response) =>
    {
        try {
            const arrayOfProducts = await Product.find({});// This will be an array of documents
            
            if (!arrayOfProducts) 
            {
                response.status(404).json({
                message: "No Products Found",
              }); 
            }
            else 
            {
                //console.log(arrayOfProducts); 
                response.status(200).json(
                    {
                        arrayOfProducts:arrayOfProducts
                    }
                )
            }
        } 
        catch (err) {
            console.error(err);
            response.status(500).json({ message: "Server Error", error: err });
        }
        

    },

    getWomenProducts: async(request,response) =>
    {
        try {
            const arrayOfProducts = await Product.find({category:"Women"});// This will be an array of documents
            
            if (!arrayOfProducts) 
            {
                response.status(404).json({
                message: "No Products Found",
              }); 
            }
            else 
            {
                //console.log(arrayOfProducts); 
                response.status(200).json(
                    {
                        arrayOfProducts:arrayOfProducts
                    }
                )
            }
        } 
        catch (err) {
            console.error(err);
            response.status(500).json({ message: "Server Error", error: err });
        }
        

    },

    getMenProducts: async(request,response) =>
    {
        try {
            const arrayOfProducts = await Product.find({category:"Men"});// This will be an array of documents
            
            if (!arrayOfProducts) 
            {
                response.status(404).json({
                message: "No Products Found",
              }); 
            }
            else 
            {
                //console.log(arrayOfProducts); 
                response.status(200).json(
                    {
                        arrayOfProducts:arrayOfProducts
                    }
                )
            }
        } 
        catch (err) {
            console.error(err);
            response.status(500).json({ message: "Server Error", error: err });
        }
        

    },
    
    getKidsProducts: async(request,response) =>
    {
        try {
            const arrayOfProducts = await Product.find({category:"Kids"});// This will be an array of documents
            
            if (!arrayOfProducts) 
            {
                response.status(404).json({
                message: "No Products Found",
              }); 
            }
            else 
            {
                //console.log(arrayOfProducts); 
                response.status(200).json(
                    {
                        arrayOfProducts:arrayOfProducts
                    }
                )
            }
        } 
        catch (err) {
            console.error(err);
            response.status(500).json({ message: "Server Error", error: err });
        }
        

    },
    
    addProduct: async(request,response) =>
    {
        console.log('New Product to add : ',request.body)
        const {product_id,name,category,new_price,old_price} = request.body
        if (!product_id || !name || !category || !new_price || !old_price)
        {
            return response.status(400).json({message:"Please provide all atributes"})
        }
        try {
            const product =await Product.findOne({product_id})
            if (product) throw Error("Product Already Exists")
            const newProduct = new Product({
                product_id,
                name,
                category,
                new_price,
                old_price
            })
            const savedProduct = await newProduct.save()
            if (!savedProduct) throw Error("Something went wrong saving the new product")
        
            response.status(200).json({message:"New Product succesfully saved in the database"})
        }
        catch(error)
        {
            console.log(error)
            response.status(400).json({message: error.message})
        }

    }
}