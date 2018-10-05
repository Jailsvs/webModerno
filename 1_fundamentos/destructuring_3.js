//Destructuring como parametros de funcoes
function gerarNumeros({min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

//Passando o objeto diretamente = const obj = {max:10, min:0}
console.log(gerarNumeros({max:10, min:0}));

//Passando um objeto vazio para gerar numeros
console.log(gerarNumeros({}))

//Caso passar a funcao sem objetos ele da erro pois nao há como aplicar o destructing sem um objeto
/*console.log(gerarNumero());*/