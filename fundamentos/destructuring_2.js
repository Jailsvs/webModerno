//Destructuring com Arrays
const [pessoas] = ['Peter Park'];

console.log(typeof pessoas);
console.log(pessoas);

//Desestruturando o array 10,9,8,7 undefinied para as variaveis n1...n5
const [n1, n2, n3, n4, n5] = [10,9,8,7,];
console.log(n1, n2, n3, n4, n5);

//Retirando o segundo elemento do segundo array interno
const [, [,numero]] = [[,8,9], [1,2,3]];
console.log(numero);

const herosMarvel = ['Peter Park', 'Logan', 'Wade Winston Wilson'];
console.log(typeof herosMarvel);

const [nomeA, nomeB, nomeC] = herosMarvel;

console.log(nomeA, nomeB, nomeC);

