//Tratamento de valor padrao

/**
 * Estratégia 1 - utilizar um valor padrão utilizado o operador ||
 */
function soma( valor_1, valor_2, valor_3)
{
    //Tratamento dos valores caso não seja passado os valores como parametros o valor padrão que a função assumirá será 1
    valor_1 = valor_1 || 1;
    valor_2 = valor_2 || 1;
    valor_3 = valor_3 || 1;

    return valor_1 + valor_2 + valor_3;
}

console.log(soma());
//Como foi informado apenas o primeiro parametro ele assumi que por padrão os outros valores serão 1
console.log(soma(1));
//Como foi informado apenas o primeiro parametro e o segundo ele assumi que por padrão o terceiro parametro será 1
console.log(soma(1,2));

// Para valores como 0 temos um problema como JS considera 0 como false ele acaba considerando como valor padrao o 1 e não o 0 como informado
console.log(soma(0,0,0));

/**
 * Estratégia 2 - 3 - 4
 */

function soma_2(valor_1, valor_2, valor_3)
{
    /**
     * Condional ternario (condicao) ? condicao satisfeita : condicao nao satisfeita
     * != --> o undefined e null são considerados
     * !== somente o undefined é considerado
    */
    valor_1 = valor_1 !== undefined ?  valor_1 : 1;

    // Verifica se no vetor arguments existe o valor com indice 1
    valor_2 = 1 in arguments ? valor_2 : 1;

    //isNaN verifica se é um numero
    valor_3 = isNaN(valor_3) ? 1 : valor_3;

    return valor_1 + valor_2 + valor_3;
}
console.log('----------');
console.log(soma_2());
console.log('----------');
console.log(soma_2(3));
console.log('----------');
console.log(soma_2(1,2,3));
console.log('----------');
console.log(soma_2(0,0,0));    

//Valor padrao utilizando ES6 - 2015
function soma_3(valor_1 = 1, valor_2 = 1, valor_3 = 1)
{
    return valor_1 + valor_2 + valor_3;
}

console.log('-----ES6-----');
console.log(soma_3());
console.log('----------');
console.log(soma_3(3));
console.log('----------');
console.log(soma_3(1,2,3));
console.log('----------');
console.log(soma_3(0,0,0));    
