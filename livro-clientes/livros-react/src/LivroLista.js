import React, { useState, useEffect } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);
  return (
    <tr>
      <td>
        <div>{props.livro.titulo}</div>
        <button
          onClick={() => props.excluir(props.livro.codigo)}
          className="btn btn-danger mt-2"
        >
          Excluir
        </button>
      </td>
      <td>{props.livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {props.livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const fetchLivros = async () => {
      if (!carregado) {
        controleLivro.obterLivros().then((resultado) => {
          setLivros(resultado);
          setCarregado(true);
        });
      }
    };
    fetchLivros();
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo).then(() => {
      setCarregado(false);
    });
  };

  return (
    <main className="container mt-4">
      <h1>Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="bg-dark text-white">Título</th>
            <th className="bg-dark text-white">Resumo</th>
            <th className="bg-dark text-white">Editora</th>
            <th className="bg-dark text-white">Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
