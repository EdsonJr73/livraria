import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "DELETE") {
      const { codigo } = req.query;
      controleLivro.excluir(Number(codigo));
      res.status(200).json({ message: "Livro excluído com sucesso!" });
    } else {
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).end(`Método ${req.method} Não Permitido`);
    }
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};
