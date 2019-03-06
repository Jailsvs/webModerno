/**
 * Arrow Function
 */
//Em caso de mais de um parametro o () é obrigatorop
const soma = (numero, numero_2) => numero + numero_2;

console.log(soma(2, 5));

//Em caso de apenas um parametro o () é opcional
const ola = nome => console.log(`Olá ${nome} seja bem vindo!`);
ola('Diana Prince');

//Nos casos em que a Arrow possui corpo o return deve ser explicito
const subtracao = (numero, numero_2) => {
    //numero - numero_2;
    return numero - numero_2;
}

console.log(subtracao(1, 4)); //undefined pois return nao foi declarado //comentado - //-3
console.log(subtracao(1, 5)); //-4 return explicito //nao comentado


//This
const contextoLexico = () => console.log(this === exports); //Como a função foi escrita dentro do module do node ela sempre será igual a exports ou module.exports

contextoLexico(); //true


//Function com parametro default
function parametroDefault(parametro = 'Eu sou default') {
    console.log(parametro);
}
parametroDefault(); //Eu sou default
parametroDefault(null); //null
parametroDefault(undefined); //Eu sou default
parametroDefault('Eu sou mais forte'); //Eu sou mais forte

function total(...numeros) {
    let total = 0;
    numeros.forEach(numero => total += numero);
    return total;
}

console.log(total(1, 2, 3, 4, 5));