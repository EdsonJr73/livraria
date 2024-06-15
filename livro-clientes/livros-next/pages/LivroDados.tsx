import React, { useState } from "react";
import { useRouter } from "next/router";
import { ControleLivro } from "../classes/controle/ControleLivros";
import { ControleEditora } from "../classes/controle/ControleEditora";
import { Livro } from "../classes/modelo/Livro";
import { Menu } from "../componentes/Menu";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const controleLivros = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados: React.FC = () => {
  const router = useRouter();

  const opcoes = controleEditora
    .getEditoras()
    .map((editora) => ({ value: editora.codEditora, text: editora.nome }));
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const novoLivro: Livro = {
      codigo: "",
      codEditora,
      titulo,
      resumo,
      autores: autores.split("\n"),
    };
    controleLivros.incluir(novoLivro).then(() => {
      router.push("/LivroLista");
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dados do Livro</title>
      </Head>
      <Menu />
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
    </div>
  );
};

export default LivroDados;
