const Product = require('../models/products.model.js');
exports.store =   (req, res) => {
    const product = new Product({
        product_name: req.body.product_name, 
        sku: req.body.sku, 
        url: req.body.url, 
        price: req.body.price, 
    });


// Save Product in the database
product.save().then(data => {
      res.send({ message: 'suce' });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


exports.index = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
           res.status(200).send({message: "Successfully deleted products!"});
  });

};