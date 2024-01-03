const mongoose=require("mongoose")

const Product=mongoose.model("Product",new mongoose.Schema({
    images:String,
    name:String,
    desci:String
}))

module.exports= {Product}