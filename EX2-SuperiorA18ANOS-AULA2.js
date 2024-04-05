

class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

// Create an array of Usuario objects
const usuarios = [
  new Usuario("Matheus", 19),
  new Usuario("Ricardo", 38),
  new Usuario("Sheila", 42),
  new Usuario("Isabelle", 11)
];


const usuariosMaiorIdade = usuarios.filter(usuario => usuario.idade > 18);
console.log(usuariosMaiorIdade);