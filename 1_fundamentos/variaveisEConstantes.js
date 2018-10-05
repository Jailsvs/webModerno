/**
 * Criando variaveis e constantes em JS
 */

var a = 3;
let b = 4;

var a = 30;

/**
 * Variaveis do Tipo Let não podem ser declaradas mais de uma vez
 */

// let b = 40;

console.log(a, b);
/**
 * Maneira correta de declarar variaveis no mesmo escopo
 *  */
console.log("==========================")
let c = 10;
let d = 20;

c = 60
d = 70;

console.log(c, d);

/**
 * Definindo uma Constante em JS
 */

const PI = 3.14;

console.log("O valor de PI é de: " + PI);