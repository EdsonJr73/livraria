import React, { useState, useEffect } from "react";
import { LinhaLivro } from "../componentes/LinhaLivro";
import { Livro } from "../classes/modelo/Livro";
import { ControleLivro } from "../classes/controle/ControleLivros";
import { Menu } from "../componentes/Menu";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const controleLivros = new ControleLivro();

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const fetchLivros = async () => {
      if (!carregado) {
        controleLivros.obterLivros().then((resultado) => {
          setLivros(resultado);
          setCarregado(true);
        });
      }
    };
    fetchLivros();
  }, [carregado]);

  const excluir = async (codigo: string) => {
    controleLivros.excluir(codigo).then(() => {
      setCarregado(false);
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo de Livros</title>
      </Head>
      <Menu />
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
              <LinhaLivro
                key={index}
                livro={livro}
                excluir={() => excluir(livro.codigo || "")}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
