let numero = 1;
let valor = 2;

numero++;

console.log(numero);

--numero;
console.log(numero);

//Modo prefixado tem prioridade
console.log(++numero === valor--);