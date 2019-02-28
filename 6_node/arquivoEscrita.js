const fs = require('fs');

//Conteúdo que será escrito no arquivo através desse objeto produto
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15,

}

//Escrevendo e criando um arquivo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'arquivo salvo !');
});