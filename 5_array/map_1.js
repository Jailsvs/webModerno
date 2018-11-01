/**
 * Map percorre os dados do array e retorna um outro array de mesmo tamanho mas com dados diferentes
 */

 const numeros = [1,2,3,4,5];
 
 //Ma é um for com proprósito 
 /**
  * Neste exemplo passamos uma callback para  o map que retorna o elemento em dobro
  */
 let resultado  = numeros.map(function(elemento)
{
    return elemento * 2;
});

console.log(resultado);

const soma_10 =  elemento => elemento + 10;
const triplo  = elemento => elemento * 3;
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`;

resultado = numeros.map(soma_10).map(triplo).map(paraDinheiro);

console.log(resultado);