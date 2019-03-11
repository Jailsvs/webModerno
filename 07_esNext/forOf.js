/**
 * Percorre através dos elementos e não do indice
 */

 for(let letra of 'Coder'){
     console.log(letra);//C o d e r
 }
console.log('\n');
 for(let letra in 'Coder'){
    console.log(letra);//0 1 2 3 4 
}