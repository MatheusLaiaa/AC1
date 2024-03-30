# ATIVIDADE AVALIATIVA AC1

## ATIVIDADES DO DIA 16/02

### 1. Escreva um programa que declare duas variáveis numéricas e realize as quatro operações matemáticas básicas (+, -, *, /). Imprima os resultados no console.

var num1 = 20;
var num2 = 20;


var soma = num1 + num2;
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/ca583a94-3f9a-4de1-854d-18351dd84187)


### 2. Faça um programa que mostre os números impares em um intervalo de 0 a 100

loop de 0 a 100
for (var i = 0; i <= 100; i++) {
    
    if (i % 2 !== 0) {
      
        console.log(i);
    }
}



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/3d84ecfc-58f9-4cd0-a177-4e3eb8042f7c)


### 3. Faça um programa que mostre a quantidade de caracteres para o texto “Disciplina de Programação para web”.



var texto = "Disciplina de Programação para web";

var quantCaracteres = texto.length;

console.log("Quantidade de caracteres:", quantCaracteres);


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/14ab5c6f-8432-4486-b25c-2c4b86d797fc)


### 4. Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br Por exemplo: A variável nome possui o conteúdo “Edson Martin Feitosa”. Deve mostrar edson.feitosa@facens.br


function obterEmail(nomeCompleto) {
    var partesNome = nomeCompleto.split(" ");
    var primeiroNome = partesNome[0].toLowerCase();
    var ultimoNome = partesNome[partesNome.length - 1].toLowerCase();
    var email = primeiroNome + "." + ultimoNome + "@facens.br";
    
    return email;
}

var nome = "Matheus Ferreira De Laia";
var email = obterEmail(nome);
console.log(email); 



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/ca3c3803-1c3d-41fb-9f74-e4b2788f0f3d)


### 5. Escreva um programa que imprima os números de 1 a 10 no console usando um loop.Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. Observação:após o número 10 não pode ter um traço


var resultado = '';

for (var i = 1; i <= 10; i++) {
    
    resultado += i;
    if (i < 10) {
        resultado += ' - ';
    }
}

console.log(resultado);



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/07225cf6-9935-40f3-bedf-7cb0ad0c7fc5)


### 6.Faça uma função que mostre o dobro do número passado. Caso o número seja menorou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”

function dobro(numero) {
    
    if (numero <= 0) {
        return "Só é aceito números positivos maiores que zero";
    } else {
      
        return numero * 2;
    }
}


console.log(dobro(10)); 
console.log(dobro(-5)); 


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/866adcf8-0676-4f0c-8379-91616e6292e5)


### 7. Escreva uma função que receba uma string como argumento e retorne a string invertida.

function inverterString(str) {
    
    return str.split("").reverse().join("");
}


var stringOriginal = "Palmeiras maior campeao do Brasil!";
var stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida); 


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/03c5bdf2-0e22-4168-b1f7-ca4974411e5e)


### 8. Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u)


function contarVogais(str) {
    var vogais = "aeiou";
    var contador = 0;
    
    
    for (var i = 0; i < str.length; i++) {
       
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    
   
    return contador;
}


var stringExemplo = "Vamos em busca do hexa";
var numeroVogais = contarVogais(stringExemplo);
console.log("Número de vogais:", numeroVogais); 



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/72860326-c8ba-4a03-9e0c-827d3ce39268)


### 9. Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.


function validarEmail(email) {
    
    var indiceArroba = email.indexOf('@');
    if (indiceArroba === -1 || email.indexOf('@', indiceArroba + 1) !== -1) {
        return false; 
    }
    
    var indicePonto = email.indexOf('.', indiceArroba);
    if (indicePonto === -1) {
        return false;
    }
    
    if (indicePonto === email.length - 1) {
        return false; 
    }
    
    return true;
}

console.log(validarEmail("matheus.laia@facens.com")); 
console.log(validarEmail("matheus@facens")); 
console.log(validarEmail("matheus.laia")); 



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/d36ad305-f193-4a34-af72-9354cd90ebf5)



### 10. Escreva uma função que verifique se uma determinada string é um palíndromo (ou seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda). Exemplo: arara



function verificarPalindromo(str) {   
    str = str.replace(/\s/g, "").toLowerCase();
    
    var strInvertida = str.split("").reverse().join("");
    return str === strInvertida;
}


console.log(verificarPalindromo("arara")); 
console.log(verificarPalindromo("Palmeiras")); 
console.log(verificarPalindromo("Brasil")); 
console.log(verificarPalindromo("revive")); 


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/81cad304-b4ee-4ee6-8050-c262c0770b23)





## ATIVIDADES DO DIA 23/02

### 1. Crie uma classe Usuario com os atributos nome e idade. Em seguida, crie um array de objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras maiúsculas.Faça um programa que mostre os números impares em um intervalo de 0 a 100


class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

var usuarios = [
    new Usuario("Matheus", 19),
    new Usuario("Ricardo", 38),
    new Usuario("Sheila", 42)
];


var nomesEmMaiusculas = usuarios.map(usuario => usuario.nome.toUpperCase());


console.log("Nomes em letras maiúsculas:", nomesEmMaiusculas);


console.log("Números ímpares de 0 a 100:");
for (var i = 1; i <= 100; i += 2) {
    console.log(i);
}


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/823347fe-e064-4c15-8ffa-6a6f8dc950b1)


### 2. Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos


class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

var usuarios = [
    new Usuario("Matheus", 19),
    new Usuario("Ricardo", 38),
    new Usuario("Sheila", 42),
    new Usuario("Isabelle", 11),

];

var usuariosMaioresDe18 = usuarios.filter(usuario => usuario.idade > 18);


console.log("Usuários com idade superior a 18 anos:");
console.log(usuariosMaioresDe18);



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/021d930e-594e-4cbf-9701-b5ecc448640e)



### 3. Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos


class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}


var usuarios = [
    new Usuario("Matheus", 19),
    new Usuario("Ricardo", 38),
    new Usuario("Sheila", 42),
    new Usuario("Isabelle", 11),
    new Usuario("Joao", 25),
];


var primeiroUsuarioEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);


console.log("Primeiro usuário com idade entre 25 e 30 anos:");
console.log(primeiroUsuarioEntre25e30);


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/74f007e1-ad00-41f4-90cc-d30597590c51)


### 4. Crie um array de números e filtre apenas os números pares. Em seguida, mapeie esses números para o dobro de seus valores


var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var numerosPares = numeros.filter(numero => numero % 2 === 0);

var numerosDobro = numerosPares.map(numero => numero * 2);

console.log("Números originais:", numeros);

console.log("Números pares:", numerosPares);

console.log("Números pares com o dobro de seus valores:", numerosDobro);



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/05671cca-349f-49c0-bed9-1b42872b99fd)


### 5.Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro e Gato que herdam de Animal e implementam o método emitirSom de forma diferente para cada classe.

class Animal {
    emitirSom() {
        console.log("Som genérico do animal");
    }
    
    correr() {
        console.log("correndo");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("au au au");
    }
}

// Definição da subclasse Gato
class Gato extends Animal {
    emitirSom() {
        console.log("aiau");
    }
}

// Testes das classes
var cachorro = new Cachorro();
cachorro.emitirSom();
cachorro.correr(); 

var gato = new Gato();
gato.emitirSom(); 
gato.correr(); 



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/881735a0-411a-408d-b578-b9043e1145ef)

### 6. Crie uma classe Livro com os atributos titulo e paginas. Crie um array de objetos Livro e filtre os livros com mais de 300 páginas

class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

var livros = [
    new Livro("Diario de um banana", 267),
    new Livro("Guerra e Paz", 1225),
    new Livro("A formula Mágica", 976),
    new Livro("Racionais", 134),
    new Livro("Abel Ferreira", 624)
];

var livrosMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);

console.log("Livros com mais de 300 páginas:");
console.log(livrosMaisDe300Paginas);




![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/a11dfbc8-f811-4131-b0dd-5a6d228e48e2)


### 7. Crie uma classe Carro com os atributos marca e ano. Crie um array de objetos Carro e encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010


class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}


var carros = [
    new Carro("Toyota", 2005),
    new Carro("Bmw", 2015),
    new Carro("Toyota", 2012),
    new Carro("Porsche", 2018),
    new Carro("Toyota", 2014)
];

var primeiroCarroToyota = carros.find(carro => carro.marca === "Toyota");


var carrosFabricadosApos2010 = carros.filter(carro => carro.ano > 2010);

console.log("Primeiro carro da marca Toyota:");
console.log(primeiroCarroToyota);

console.log("Carros fabricados após 2010:");
console.log(carrosFabricadosApos2010);



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/bef1c108-1e28-46b1-9222-a7832258bc83)


### 8. Crie uma classe Produto com os atributos nome e preco. Crie um array de objetos Produto e mapeie esses produtos para um novo array com os preços aumentados em 10%

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

var produtos = [

    new Produto("Brinco", 20),
    new Produto("Camiseta", 60),
    new Produto("Calça", 90),
    new Produto("Tênis", 500),
    new Produto("Boné", 50),
    new Produto("Corrente", 180),
    
];


var produtosComAumento = produtos.map(produto => {
    return new Produto(produto.nome, produto.preco * 1.1);
});

console.log("Produtos com os preços aumentados em 10%:");
console.log(produtosComAumento);



![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/d7bc9f5b-efd9-4bbf-9208-aec20d617c8f)


### 9 . Utilizando a classe Produto, encontre o primeiro produto com preço superior a R$ 100,00 e altere o nome desse produto para "Produto Caro"


class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

var produtos = [

    new Produto("Relogio", 200),
    new Produto("Brinco", 20),
    new Produto("Camiseta", 60),
    new Produto("Calça", 90),
    new Produto("Tênis", 500),
    new Produto("Boné", 50),
    new Produto("Corrente", 180)

];

var primeiroProdutoCaro = produtos.find(produto => produto.preco > 100);

produtos.map(produto => {
    if (produto === primeiroProdutoCaro) {
        produto.nome = "Produto Caro";
    }
    return produto;
});

console.log("Produtos após a alteração:");
console.log(produtos);


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/57aa4db7-fff7-4115-9f25-be276d680f85)


### 10. Crie um array de números e filtre apenas os números divisíveis por 3. Em seguida, mapeie esses números para o quadrado de seus valores

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var numerosDivisiveisPor3 = numeros.filter(numero => numero % 3 === 0);

var quadradoDosNumeros = numerosDivisiveisPor3.map(numero => numero ** 2);

console.log("Números originais:", numeros);

console.log("Números divisíveis por 3:", numerosDivisiveisPor3);

console.log("Quadrados dos números divisíveis por 3:", quadradoDosNumeros);


![image](https://github.com/MatheusLaiaa/AC1/assets/144149403/306756dc-2073-445b-b5d9-818d9c3f2f3b)



## ATIVIDADES DO DIA 01/03

## ATIVIDADES DO DIA 08/03

## ATIVIDADES DO DIA 22/03
