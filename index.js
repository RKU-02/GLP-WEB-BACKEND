const express = require("express");

const server = express();

const morgan = require("morgan");

const productRouter = require("./Routes/Product");
const userRouter = require("./Routes/user");

//body parser
server.use(express.json());

server.use(morgan("default"));
server.use("/Products", productRouter.router);
server.use("/users", userRouter.router);

//Api-Routes-Endpoints

//API_ROOT ,base URL ,example Googl.com/api/v2/

//create api ==> Create Post /Products

server.listen(5000, () => {
  console.log("server started");
});
