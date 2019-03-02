//URL que contém um arquivo json de vários funcionários
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

//Importando o modulo do axios instalado via npm i --save axios -- package json
const axios = require('axios');

/**
 *  Axios é client http
 *  get(url) faz a requisicao
 * .then informa o que será feito quando receber um resposta
 */
axios.get(url).then(response => {
    //armazena a resposta em uma constante funcionarios
    const funcionarios = response.data;

    //Imprimi o primeiro funcionario
    console.log(funcionarios[0])
});