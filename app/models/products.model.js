const mongoose = require('mongoose');
const Products = mongoose.Schema({
    product_name: String,
    sku: String,
    url: String,
    price: String
},{
    timestamps: true
})


module.exports = mongoose.model('Products', Products);
