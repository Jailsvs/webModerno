let dobro = function(valor)
{
    //Verifica se o valor é um número caso não seja o valor padrão será 0
    valor = isNaN(valor) ? 0 : valor ;
    return 2 * valor;
}

console.log(dobro(1));

//Criando a mesma função como arrow function
/**
 * As funções arrow são sempre anonimas é necessário coloca-las em uma variável ou constante
 * Em caso de apenas um único parametro o () é opcional
 * E em caso de apenas uma sentença de código o {} também é opcional e o return é implicto
 */
dobro = (valor) => {
    //Verifica se o valor é um número caso não seja o valor padrão será 0
    valor = isNaN(valor) ? 0 : valor;

    return 2 * valor;
}

console.log(dobro());

dobro = valor => 2 * valor;


console.log(dobro(5));

let ola = function()
{
    return 'Olá';
}

/**
 * Criando uma Arrow Function sem parametros e com retorno implicito
 */
ola = () => 'Ola Arrow Function';

console.log(ola());