/**
 * Factory é utilizada quando não se quer repetir muito o mesmo código
 */
const prod = {
    nome: 'mouse',
    preco: 50.0
}

const prod_2 = {
    nome: 'teclado',
    preco: 134.90
}

//Criando um Factory simples passando os atributos dentro dos parametros
function criarProduto(nome, preco)
{
    return {
        nome: nome,
        preco: preco
    }
}

function criarPessoa()
{
    return {
        nome: 'Peter Park',
        altura: 1.78
    }
}