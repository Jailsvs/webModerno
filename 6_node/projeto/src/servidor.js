//Porta para comunicação do servidor web
const porta = 3003;

/**
 * Importacoes
 */
//Importando o modulo bancoDeDados criado
const bancoDeDados = require('./bancoDeDados');
//Importando o Parse para receber requisicoes no servidor
const bodyParser = require('body-parser');
//importando express no modulo atual
const express = require('express');


//Aplicação que irá receber os recursos do express para desenvolvimento da API
const app = express();

//parseando as requisicoes em todas as urls através do use urlencoded extended
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos()) //Esse objeto será convertido para JSON automaticamente
});

//:id é um parametro
app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))
});

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: request.body.nome,
        preco: request.body.preco
    });
    response.send(produto); //JSON
});

//Alterando os dados de um produto
app.put('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.salvarProdutos({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    });
    response.send(produto); //JSON
});

//deletando um produto
app.delete('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.excluirProduto(request.params.id)
    response.send(produto); //JSON
});

//Seta a porta em que a aplicação ficará escutando para receber e enviar suas requisicoes.
app.listen(porta, () => {
    console.log(`Servidor executando na ${porta}.`);
});