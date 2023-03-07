
console.clear();
const express=require("express") ;
const cors=require("cors")
const db_connect=require("./config/dbConnect") ;
require('dotenv').config()
db_connect() ;

const app=express() ;


//routes
app.use(express.json())
app.use(cors())
app.use("/user",require("./routes/user"))
 app.use("/product",require("./routes/product"))
 app.use("/commande",require("./routes/commande"))
 app.use("/service",require("./routes/service"))
 app.use("/produit",require("./routes/produit"))
const PORT = process.env.PORT;

app.listen(PORT,(err) => 
err?  console.log(err) : console.log(`server is running on ${PORT}` )) ;
