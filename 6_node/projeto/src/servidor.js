//Porta para comunicação do servidor web
const porta = 3003;
//Importando o modulo bancoDeDados criado
const bancoDeDados = require('./bancoDeDados');

//importando express no modulo atual
const express = require('express');

//Aplicação que irá receber os recursos do express para desenvolvimento da API
const app = express();

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos()) //Esse objeto será convertido para JSON automaticamente
});

//:id é um parametro
app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))
});

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: request.body.name,
        preco: request.body.preco
    });
    response.send(produto); //JSON
})

//Seta a porta em que a aplicação ficará escutando para receber e enviar suas requisicoes.
app.listen(porta, () => {
    console.log(`Servidor executando na ${porta}.`);
});