const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);

//por lo general se llama app
//aqui configuro el servidor.
module.exports = server;
