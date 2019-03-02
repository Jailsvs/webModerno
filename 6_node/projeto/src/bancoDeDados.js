/**
 * Objeto para pegar a sequência de id que serão criados e persistidos
 */
const sequence = {
    _id: 1,
    //get para retornar os ids dos objetos 
    get id() { return this._id++ }
}

const produtos = {};

function salvarProdutos(produto) {
    if (!produto.id) produto.id = sequence.id; {
        produtos[produto.id] = produto;
    }
    return produto;
}

function getProduto(id) {
    //Retorna um produto caso não exista retornará um objeto vazio
    return produtos[id] || {}
}

//Retorna todos os valores que estão dentro do objeto produto
function getProdutos() {
    //pega somente a propriedade de produtos que neste caso é o próprio produto
    return Object.values(produtos);
}


//Exportando todas as funções para outros módulos
module.exports = { salvarProdutos, getProduto, getProdutos };