/*
 *   Como passar parametros para um modulo
 */

//Recebendo na função um número de parametros variáveis através dos ...
module.exports = function(...nomes) {
    //para cada nome que a funcao receber será retornado Boa semana + nome
    return nomes.map(nome => `Boa semana ${ nome } ! `);
}