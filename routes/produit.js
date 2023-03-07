const express=require ("express") ;
const Produit= require("../models/Produit");
const produitRouter=express.Router();

//add product
produitRouter.post("/add", async(req,res)=>{
    try {
        let newproduit= new Produit(req.body) ;
        let result=await newproduit.save();
        res.send({Produit:result ,msg:"produit is added"});
    } catch (error) {
        console.log(error)
    }
})

// //get all product

produitRouter.get("/", async(req,res)=>{
    try {
      
         let result=await Produit.find();
       res.send({produits:result ,msg:"all produits "});
   } catch (error) {
       console.log(error)
   }
 })

// //get product by id

produitRouter.get("/:id", async(req,res)=>{
    try {
      
        let result=await Produit.findById(req.params.id);
        res.send({produit:result ,msg:" one product "});
    } catch (error) {
        console.log(error)
    }
})
// //delete product

produitRouter.delete("/:id", async(req,res)=>{
    try {
      
        let result=await Produit.findByIdAndDelete(req.params.id);
        res.send({ msg:" produit is  deleted "});
    } catch (error) {
        console.log(error)
    }
})
// //update

produitRouter.put("/:id", async(req,res)=>{
    try {
      
        let result=await Produit.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({  produit: "result" ,msg:" produit is  updated "});
    } catch (error) {
        console.log(error)
    }
})




module.exports=produitRouter;