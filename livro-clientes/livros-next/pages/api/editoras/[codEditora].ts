import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const { codEditora } = req.query;
      const nome = controleEditora.getNomeEditora(Number(codEditora));
      if (nome) {
        res.status(200).json({ nome });
      } else {
        res.status(404).json({ error: "Editora not found" });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
