const express=require ("express") ;
const Service= require("../models/Service");
const serviceRouter=express.Router();

//add product
serviceRouter.post("/add", async(req,res)=>{
    try {
        let newservice= new Service(req.body) ;
        let result=await newservice.save();
        res.send({Service:result ,msg:"service is added"});
    } catch (error) {
        console.log(error)
    }
})

// //get all product

serviceRouter.get("/", async(req,res)=>{
    try {
      
         let result=await Service.find();
       res.send({service:result ,msg:"all service "});
   } catch (error) {
       console.log(error)
   }
 })

// //get product by id

serviceRouter.get("/:id", async(req,res)=>{
    try {
      
        let result=await Service.findById(req.params.id);
        res.send({service:result ,msg:" one service "});
    } catch (error) {
        console.log(error)
    }
})
// //delete product

serviceRouter.delete("/:id", async(req,res)=>{
    try {
      
        let result=await Service.findByIdAndDelete(req.params.id);
        res.send({ msg:" service is  deleted "});
    } catch (error) {
        console.log(error)
    }
})
// //update

serviceRouter.put("/:id", async(req,res)=>{
    try {
      
        let result=await Service.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({  service: "result" ,msg:" service  is  updated "});
    } catch (error) {
        console.log(error)
    }
})




module.exports=serviceRouter;