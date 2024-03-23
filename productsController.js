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
        

    }
}