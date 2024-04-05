class Animal {
  emitirSom() {
    console.log("O animal emite um som genérico.");
  }

  correr() {
    console.log("correndo.");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("au au au");
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("aiau.");
  }
}

const cachorro = new Cachorro();
const gato = new Gato();

cachorro.emitirSom(); 
cachorro.correr(); 

gato.emitirSom(); 
gato.correr(); 