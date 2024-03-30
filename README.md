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

## ATIVIDADES DO DIA 01/03

## ATIVIDADES DO DIA 08/03

## ATIVIDADES DO DIA 22/03
