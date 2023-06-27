const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.createProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProduct = (req, res) => {
  res.json(users);
};

exports.getProduct = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const user = users.find((p) => p.id == id);
  res.json(product);
};

exports.replceProducts = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id == id);
  users.splice(userIndex, id, { ...req.body, id: id });
  res.status(201).json(userIndex);
};

exports.updateProducts = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id == id);
  const user = users[userIndex];
  users.splice(userIndex, id, { ...product, ...req.body });
  res.json(userIndex);
};

exports.deleteProducts = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id == id);
  const product = users[userIndex];
  users.splice(userIndex, id);
  res.json(userIndex);
};
