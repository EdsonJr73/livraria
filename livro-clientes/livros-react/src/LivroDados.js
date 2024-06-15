import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { Livro } from "./modelo/Livro";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();
    const novoLivro = new Livro(
      "",
      codEditora,
      titulo,
      resumo,
      autores.split("\n")
    );
    controleLivro.incluir(novoLivro).then(() => {
      navigate("/");
    });
  };

  return (
    <main className="container mt-4">
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">
            Editora
          </label>
          <select
            className="form-select"
            id="editora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores (1 por linha)
          </label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
