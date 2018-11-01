/**
 * Implementando o próprio filter
 */
Array.prototype.filter_2 = function(callback)
{
    const newArray = [];
    for(let i = 0; i < this.length; i++)
    {
        if(callback(this[i], i, this))
        {
            newArray.push(this[i])
        }

        return newArray
    } 
    
}

const produtos = [
    {nome: "Notebok", preco: 2499, fragil: true},
    {nome: "Ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil:true},
    {nome: "Copo de plástico", preco:18.99, fragil:false}
];

const produtosCaros = produtos => produtos.preco >= 500;
const produtosFrageis = produtos => produtos.fragil// Não é necessario == true prq o proprio elemento já informa se é true ou false

const resultado = produtos.filter_2(produtosCaros).filter_2(produtosFrageis);

console.log(resultado);