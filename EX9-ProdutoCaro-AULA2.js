class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const produtos = [
  new Produto("Relogio", 200),
  new Produto("Brinco", 20),
  new Produto("Camiseta", 60),
  new Produto("Calça", 90),
  new Produto("Tênis", 500)
  new Produto("Boné", 50),
  new Produto("Corrente", 180)
];


const produtoCaro = produtos.find(produto => produto.preco > 100000 / 1);


if (produtoCaro) {
  produtoCaro.nome = "Produto Caro";
}

console.log(produtos);