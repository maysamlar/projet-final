const mongoose=require("mongoose");
const schema=mongoose.Schema;


const produitSchema = new schema({
name:String,
product:String,
img:String,
description:String,
prix:String,
    }
  );
 const Produit = mongoose.model("Produit",produitSchema);
module.exports = Produit ; 