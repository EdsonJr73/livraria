import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  async obterLivros(): Promise<Array<Livro>> {
    try {
      const response = await fetch(baseURL, { method: 'GET' });
      const data: LivroMongo[] = await response.json();
      return data.map((livroMongo) => ({
        codigo: livroMongo._id,
        codEditora: livroMongo.codEditora,
        titulo: livroMongo.titulo,
        resumo: livroMongo.resumo,
        autores: livroMongo.autores,
      }));
    } catch (error) {
      console.error('Erro ao obter livros:', error);
      return [];
    }
  }

  async incluir(livro: Livro): Promise<void> {
    try {
      const livroMongo: Omit<LivroMongo, '_id'> = {
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores,
      };
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livroMongo),
      });
      if (response.ok) {
        console.log('Livro adicionado com sucesso.');
      } else {
        console.error('Erro ao adicionar o livro:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao adicionar o livro:', error);
    }
  }

  async excluir(codigo: string): Promise<void> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Livro excluído com sucesso.');
      } else {
        console.error('Erro ao excluir o livro:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
    }
  }
}
