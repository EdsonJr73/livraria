export class Livro {
  codigo: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: '',
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}
