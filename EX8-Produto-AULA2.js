class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const produtos = [
  new Produto("Brinco", 20),
  new Produto("Camisa", 60),
  new Produto("Calça", 90),
  new Produto("Tênis", 500),
  new Produto("Boné", 50),
  new Produto("Corrente", 180)

];

// Map the products to a new array with increased prices
const produtosComPrecoAumentado = produtos.map(produto => {
  const precoAumentado = produto.preco * 1.1; // Increase the price by 10%
  return new Produto(produto.nome, precoAumentado);
});

console.log(produtosComPrecoAumentado);