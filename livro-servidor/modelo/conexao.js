const banco = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

banco.connect("mongodb://127.0.0.1:27017/livraria", options);

module.exports = banco;
