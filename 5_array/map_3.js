//Implementando um MAP

//Atribuindo uma funcao callback ao Array
Array.prototype.map_2 = function(callback){
    //criando o novo array que será retornado
    const newArray = [];
    //percorrendo o array
    for(let i = 0; i < this.length; i++)
    {
        //adicionando os valores no novo array passando os parametros valor, indice e array
        newArray.push(callback(this[i], i, this))
    }
    //retornando o novo array preenchido
    return newArray
}
//Array com um conjunto de JSON
const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'    
]

//Convertendo valores do array em objetos
const retornaObjeto = json => JSON.parse(json);
//Pegando atributo preco de cada objeto
const retornaPreco = produto => produto.preco;

//Transormando os valores e passando para a variavel resultado com o map
const resultado = carrinho.map_2(retornaObjeto).map_2(retornaPreco);

console.log(resultado);