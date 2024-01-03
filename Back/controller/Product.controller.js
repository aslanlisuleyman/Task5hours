const {Product}=require("../models/Product.model")

const ProductController={
    getAll:async(req,res)=>{
        try{
            const products=await Product.find()
            res.status(200).send(products)
        }
        catch(error){
            res.status(204).send("error getAll")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target=await Product.findById(id)
            res.status(200).send(target)
        }
        catch(error){
            res.status(204).send("error getById")
        }
    },
    delete:async(req,res)=>{
        try{
          const {id}=req.params
          await Product.findByIdAndDelete(id)
          const Products=await Product.find({})
          res.send(Products)
        }
        catch(error){
            res.status(204).send("error getById")
        }
    },
    add:async(req,res)=>{
        try{
            const{images,name,desci}=req.body
            const newProduct=new Product({images,name,desci})
            await newProduct.save()
            res.status(201).send("add new data")
        }
        catch(error){
            res.status(204).send("error getById")
        }
    },
    edit:async(req,res)=>{
        try{
            const{id}=req.params
            const{images,name,desci}=req.body
            await Product.findByIdAndUpdate(id,{images,name,desci})
            res.status(200).send("item updated")
        }
        catch(error){
            res.status(204).send("error getById")
        }
    }
}

module.exports= {ProductController}