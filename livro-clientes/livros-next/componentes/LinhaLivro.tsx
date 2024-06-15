import React from "react";
import { ControleEditora } from "../classes/controle/ControleEditora";
import { Livro } from "../classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  return (
    <tr>
      <td>
        <div>{livro.titulo}</div>
        <button onClick={excluir} className="btn btn-danger mt-2">
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
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

export default LinhaLivro;
