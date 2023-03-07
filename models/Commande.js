const mongoose=require("mongoose");
const schema=mongoose.Schema;


const commandeSchema = new schema({
nameclient:String,
nameproduct:String,

img:String,
date:String,
price:Number,
status:String
    }
  );
 const Commande = mongoose.model("Commande",commandeSchema);
module.exports = Commande ; 