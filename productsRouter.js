const express=require('express')
const productsController=require('./productsController.js')
const route=express.Router()

route.get("/getAll",productsController.getAllProducts)
route.get("/Women",productsController.getWomenProducts)
route.get("/Men",productsController.getMenProducts)
route.get("/Kids",productsController.getKidsProducts)
route.post("/addProduct",productsController.addProduct)

module.exports=route;