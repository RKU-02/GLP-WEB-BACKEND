const express = require("express");

const router = express.Router();

const productController = require("../Controller/Product");

router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replceProducts)
  .patch("/:id", productController.updateProducts)
  .delete("/:id", productController.deleteProducts);

exports.router = router;
