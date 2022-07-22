const mongoose = require("mongoose");
const { Product } = require("../models")


module.exports.list = (req, res, next) => {
    Product.find()
        .then( products => {
            res.render("list-products", { products })
        })
        .catch( error => next(error))
}

module.exports.newProduct = (req, res, next) => {
    res.render("new-product")
}

module.exports.detailProduct = (req, res, next) => {
    Product.findById(req.params.id)
        .then((product) => {
            res.render("detail-product", { product });
        })
        .catch( error => next(error))
};


module.exports.createProduct = (req, res, next) => {
    const product = req.body;

    Product.create(product)
        .then((product) => res.redirect("/products"))
        .catch((error) => {
            if( error instanceof mongoose.Error.ValidationError) {
                console.error(error)
                res.render("new-product", {errors: error.errors, product})
            } else {
                next(error)
            }
        })
}

module.exports.deleteProduct = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
      .then(() => res.redirect("/products"))
      .catch((error) => next(error));
  };