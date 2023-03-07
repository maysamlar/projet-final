const mongoose=require("mongoose");
const schema=mongoose.Schema;


const productSchema = new schema({
name:String,
product:String,
img:String,
description:String,
prix:Number
    }
  );
 const Product = mongoose.model("Product",productSchema);
module.exports = Product ; 