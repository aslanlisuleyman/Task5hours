const express=require("express")
require('dotenv').config()
const mongoose=require("mongoose")
const cors=require("cors")
const ProductRouter=require("./routes/Product.routes")
const app=express()
const PORT=process.env.PORT || 8087
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Suleyman:suleyman123@suleyman.vyltqxp.mongodb.net/start").then(res=>{
    console.log("connected db")
})

app.use("/product",ProductRouter)

app.listen(PORT,()=>{
    console.log("app running") 
})