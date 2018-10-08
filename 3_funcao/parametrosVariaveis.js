/**
 * Uma função pode não receber parametros mas nao significa que voce nao possa passa-los
 * arguments é um propriedade da função - Arguments é um array  
 */

function soma()
{
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
//Neste exemplo é realizado a soma e depois concatenado a string
console.log(1.1, 2.2, 'Uma string qualquer');
//Neste exemplo concatenamos strings
console.log('String_1', 'String_2', 'String_3');