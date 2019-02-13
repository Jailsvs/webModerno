//Objetivo deste arquivo é acessar um modulo dentro da pasta node

const moduloA = require('../../modulo_A');

console.log(moduloA.boasVindas);

//Importando modulo direto da pasta node_modules sem utilizar o caminho relativo
const saudacao = require('saudacao');


console.log(saudacao.ola);


//Utilizando um module core do próprio node

const http = require('http');

http.createServer((requisicao, resposta) => {
    resposta.write('Enviando resposta da requisicao');
    resposta.end();
}).listen(8080);