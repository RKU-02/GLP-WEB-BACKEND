const express = require("express");
const mongoose = require("mongoose");

const server = express();
server.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Test1");
  console.log("database connected");
}

const productRouter = require("./Routes/ProductRoutes");
// const userRouter = require("./Routes/UserRoutes");

// server.use(morgan("default"));
server.use("/products", productRouter.router);
// server.use("/users", userRouter.router);

server.listen(8080, () => {
  console.log("server started");
});
