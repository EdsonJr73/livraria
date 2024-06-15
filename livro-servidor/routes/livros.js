const express = require("express");
const router = express.Router();
const { obterLivros, incluir, excluir } = require("../modelo/livro-dao");

router.get("/", async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const novoLivro = await incluir(req.body);
    res
      .status(201)
      .json({ message: "Livro adicionado com sucesso.", livro: novoLivro });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao adicionar o livro", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const resultado = await excluir(req.params.id);
    if (resultado.deletedCount === 0) {
      res.status(404).send("Livro não encontrado");
    } else {
      res.status(200).send("Livro excluído com sucesso");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
