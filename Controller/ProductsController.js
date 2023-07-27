const model = require("../model/ProductModel");

const Products = model.Products;
// const index = fs.readFileSync("index.html", "utf-8");

exports.createProduct = async (req, res) => {
  var result = await Products.insertMany(req.body);
  res.send(result);

  Products(result).then((err, doc) => {
    if (err) {
      console.log(err);
    }
    res.json(doc);
    console.log("INserted successfully!!");
  });
};

exports.getAllProduct = async (req, res) => {
  const result = await Products.find({});
  res.send(JSON.stringify(result));
};
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log({ id });
  const product = await Products.findById(id);
  res.json(product);
};

exports.replaceProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Products.findOneAndReplace({ _id: id }, req.body);
    console.log(result);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.json(400).json(err);
  }
};

exports.updateProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Products.findOneAndUpdate({ _id: id }, req.body);
    console.log(result);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.json(400).json(err);
  }
};

exports.deleteProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Products.findOneAndDelete({ _id: id }, req.body);
    console.log(result);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.json(400).json(err);
  }
};
