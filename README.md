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

// loop de 0 a 100
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





## ATIVIDADES DO DIA 23/02

## ATIVIDADES DO DIA 01/03

## ATIVIDADES DO DIA 08/03

## ATIVIDADES DO DIA 22/03
