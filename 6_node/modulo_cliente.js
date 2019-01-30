//Este modulo importara código dos modulos A e B criados

//Para importar um modulo basta utilizar o require mais caminho relativo
const moduloA = require('./modulo_A');
const moduloB = require('./modulo_B');

console.log(moduloA.boasVindas);
console.log(moduloB.boaNoite());