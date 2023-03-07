const mongoose = require("mongoose");
const schema = mongoose.Schema;


const serviceSchema = new schema({
    name: String,
    product: String,
    img: String,
    description: String,
    prix: String,
}
);
const Service = mongoose.model("Service", serviceSchema);
module.exports = Service; 