class Livro {
  constructor(titulo, paginas) {
    this.titulo = titulo;
    this.paginas = paginas;
  }
}

const livros = [
  new Livro("Diario de um banana", 265),
  new Livro("Guerra e Paz", 1225),
  new Livro("A formula Magica", 976),
  new Livro("Racionais", 134),
  new Livro("Abel Ferreira", 624),

];

const livrosComMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);
console.log(livrosComMaisDe300Paginas);