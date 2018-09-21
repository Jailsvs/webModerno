//Armazenando uma funcao anonima em uma variavel

const imprimirSoma = function (valorA, valorB)
{
    console.log(valorA + valorB);
}

imprimirSoma(2, 6);


//Armazenando uma funcao arrow a uma variavel

const soma = (a, b) => {
    return a + b;

}

console.log(soma(5, 8));


//Arrow function sem retorno explicito
const subtracao = (valorA, valorB) => valorA - valorB;
console.log(subtracao(5, 2));


//Arrow Function com um parametro
let helloWorld = texto => console.log('Hello World!');

helloWorld('Olá Mundo! ');