/**
 * Dentro do Node um arquivo representa um módulo
 * Um modulo é uma forma de encapsular o código de forma interna para expor os dados para
 * outras partes da aplicação é necessário exportar ou importar 
 */

//Formas de Exportas

this.Ola = 'Boa Tarde pessoal'; // uma forma de exportar

exports.boasVindas = 'Bem Vindo ao Node JS'; //Outra maneira para exportar

//Maneira mais conhecida

module.exports.ateLogo = 'Até o próximo exemplo';

//Estas tres formas criam um objeto dinamicamente dentro do modulo do node