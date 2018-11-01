/**
 * Filter utilizado para filtra um array e retornar os valores desejados
 */

const produtos = [
    {nome: "Notebok", preco: 2499, fragil: true},
    {nome: "Ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil:true},
    {nome: "Copo de plástico", preco:18.99, fragil:false}
];

/*console.log(produtos.filter(function(produto){
    //Aplica um tipo de lógico em que se verdadeiro retorna o valor dentro do array
    return produto.preco > 2500
}));*/

const produtosCaros = produtos => produtos.preco >= 500;
const produtosFrageis = produtos => produtos.fragil// Não é necessario == true prq o proprio elemento já informa se é true ou false

const resultado = produtos.filter(produtosCaros).filter(produtosFrageis);

console.log(resultado);