const express = require("express");

const router = express.Router();

const productController = require("../Controller/ProductsController");

router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getProduct)
  .delete("/:id", productController.deleteProducts)
  .put("/:id", productController.replaceProducts)
  .patch("/:id", productController.updateProducts);

exports.router = router;
