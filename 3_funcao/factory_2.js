/**
 * Factory - Objetivo de fabricar objetos pois retorna um novo objeto
 */
function criarProduto(nome, preco)
{
    return {
        nome: nome,
        preco: preco,
        desconto : 0.20
    }   
}

const novoProduto = criarProduto('Mouse', 20.0);


console.log(novoProduto);