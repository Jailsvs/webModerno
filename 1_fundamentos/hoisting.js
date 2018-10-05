//Hoisting significar Içar 

console.log('variavel a', a);
var a = 4;
console.log('variavel a', a);

console.log("O que realmente acontece é: ");

var b;
console.log('variavel b', b);
b = 6;
console.log('variavel b', b);

//O efeito de hoisting não acontece com variaveis declaradas com let