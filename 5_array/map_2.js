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
const resultado = carrinho.map(retornaObjeto).map(retornaPreco);

console.log(resultado);