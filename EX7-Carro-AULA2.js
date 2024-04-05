class Carro {
  constructor(marca, ano) {
    this.marca = marca;
    this.ano = ano;
  }
}

const carros = [
  new Carro("Toyota", 2005),
  new Carro("Bmw", 2015),
  new Carro("Toyota", 2012),
  new Carro("Porsche", 2018),
  new Carro("Toyota", 2024),
  
];


const toyotaCar = carros.find(carro => carro.marca === "Toyota");
console.log(toyotaCar);

