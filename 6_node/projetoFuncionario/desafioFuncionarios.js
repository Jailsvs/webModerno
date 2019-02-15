//URL que contém um arquivo json de vários funcionários
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

//Importando o modulo do axios instalado via npm i --save axios -- package json
const axios = require('axios');


//Desafio para obter a mulher chinesa com menor salário dentro do json

//Solução
/**
 * Criar um filtro para todos os chineses
 * Criar filtro para as mulheres
 * Agregar todas as mulheres chinesas e pegar o menor salário
 */

const chineses = f => f.pais == 'China'; //Função para retornar as chinesas
const mulheres = funcMulheres => funcMulheres.genero == 'F'; //Função para retornar as mulheres
/**
 * paramentros = (acumulador, elemento atual)
 */
const menorSalario = (funcionario, funcionarioAtual) => {
        //verifica os salarios para pegar sempre o funcionário com menor salário
        return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
    }
    /**
     *  Axios é client http
     *  get(url) faz a requisicao
     * .then informa o que será feito quando receber um resposta
     */
axios.get(url).then(response => {
    //armazena a resposta em uma constante funcionarios
    const funcionarios = response.data;

    //Filtrando os funcionarios
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);

    //Resposta do desafio
    console.log(func);

});