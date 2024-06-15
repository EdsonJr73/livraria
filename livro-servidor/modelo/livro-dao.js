const Livro = require("./livro-schema");

const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    throw error;
  }
};

const incluir = async (livro) => {
  try {
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (error) {
    throw error;
  }
};

const excluir = async (codigo) => {
  try {
    const resultado = await Livro.deleteOne({ _id: codigo });
    return resultado;
  } catch (error) {
    throw error;
  }
};

module.exports = { obterLivros, incluir, excluir };
