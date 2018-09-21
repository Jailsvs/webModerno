//Funcao sem retorno em Javascript
function imprimirSoma(valorA, valorB)
{

    console.log(valorA + valorB);
}


imprimirSoma(5,10);

imprimirSoma(2)// Soma o valor 2 com undefined resultado será NaN


//Funcao com Retorno
//Caso nao informado o segundo parametro ele inicializará como 0
function soma(valorA, valorB = 0){
    return valorA + valorB;

}

console.log(soma(5,1));
console.log(5);



