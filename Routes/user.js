const express = require("express");

const router = express.Router();

const userController = require("../Controller/users");

router
  .post("/", userController.createProduct)
  .get("/", userController.getAllProduct)
  .get("/:id", userController.getProduct)
  .put("/:id", userController.replceProducts)
  .patch("/:id", userController.updateProducts)
  .delete("/:id", userController.deleteProducts);

exports.router = router;
