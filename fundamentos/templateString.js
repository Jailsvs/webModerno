const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + ' !';

console.log(concatenacao);

//Faz a interpolacao da String através dentro do caracter especial `    `
const template = `
        Olá
        ${nome}!`
console.log(template);

console.log(`Soma = ${1 + 1}`);

//Arrow Funciton 

const up = texto => texto.toUpperCase();

console.log(`Olá  ${up('mundo')} !`);