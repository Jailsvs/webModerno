//Porta para comunicação do servidor web
const porta = 3003;

//importando express no modulo atual
const express = require('express');

//Aplicação que irá receber os recursos do express para desenvolvimento da API
const app = express();

app.get('/produtos', (request, response, next) => {
    response.send({ nome: 'Notebook', preco: 123.45 }) //Esse objeto será convertido para JSON automaticamente
});

//Seta a porta em que a aplicação ficará escutando para receber e enviar suas requisicoes.
app.listen(porta, () => {
    console.log(`Servidor executando na ${porta}.`);
});