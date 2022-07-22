const express = require("express");
const router = express.Router();

const { products , home }  = require("../controllers");
 
router.get("/", home.index);
router.get("/products", products.list);
router.get("/product/new", products.newProduct)
router.post("/product/create", products.createProduct)
router.get("/detail/:id", products.detailProduct)
router.post("/product/:id/delete", products.deleteProduct)


module.exports = router;