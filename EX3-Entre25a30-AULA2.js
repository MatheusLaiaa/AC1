class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const usuarios = [
  new Usuario("Matheus", 19),
  new Usuario("Ricardo", 38),
  new Usuario("Sheila", 42),
  new Usuario("Isabelle", 11),
  new Usuario("Joao", 25),

];

const usuarioComIdadeEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);
console.log(usuarioComIdadeEntre25e30);