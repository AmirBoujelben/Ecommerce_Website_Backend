require('dotenv').config()
const http =require('http')
const express =require('express')
const app =express()
const port =process.env.PORT

//Accept JSON requests
app.use(express.json())

//server creation
const server = http.createServer(app)

//connection to database
const mongoose=require('mongoose')
mongoose.connect(process.env.mongo_uri)
.then(()=>console.log("Connected to Data Base"))
.catch((e)=>console.log(e))

//Products Routes, Endpoints
const productsRouter=require("./productsRouter")
app.use("/products",productsRouter)


server.listen(port, ()=> console.log('Server listenning on '+port))
