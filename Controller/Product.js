const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const Products = data.products;

exports.createProduct = (req, res) => {
  console.log(req.body);
  Products.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProduct = (req, res) => {
  res.json(Products);
};

exports.getProduct = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const product = Products.find((p) => p.id == id);
  res.json(product);
};

exports.replceProducts = (req, res) => {
  const id = +req.params.id;
  const ProductIndex = Products.findIndex((p) => p.id == id);
  Products.splice(ProductIndex, id, { ...req.body, id: id });
  res.status(201).json(ProductIndex);
};

exports.updateProducts = (req, res) => {
  const id = +req.params.id;
  const ProductIndex = Products.findIndex((p) => p.id == id);
  const product = Products[ProductIndex];
  Products.splice(ProductIndex, id, { ...product, ...req.body });
  res.json(ProductIndex);
};

exports.deleteProducts = (req, res) => {
  const id = +req.params.id;
  const ProductIndex = Products.findIndex((p) => p.id == id);
  const product = Products[ProductIndex];
  Products.splice(ProductIndex, id);
  res.json(ProductIndex);
};
