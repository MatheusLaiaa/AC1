
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

];


const userNamesUppercase = usuarios.map(usuario => usuario.nome.toUpperCase());
console.log(userNamesUppercase);


for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}