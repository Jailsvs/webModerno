function getPreco(imposto = 0, moeda = 'R$')
{
    return ` ${ moeda } ${ this.preco * (1 - this.desconto) * (1 + imposto) }`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}


console.log(getPreco());//Retorna NaN pois o this no contexto atual referece ao contexto global e alguns
//valores nao foram definidos

global.preco = 20;
global.desconto = 0.1;
console.log(getPreco());//Imprimi 18 pois defini os valores de preco e desconto no contexto global;

//Chamando a função getPreco através do objeto
console.log(produto.getPreco());

/**
 * Existem mais outras duas formas de chamar uma funcao atraves do call e do apply
 */

const carro = {
    preco:49990,
    desconto:0.20
}

//Chamando a funcao através do call passando como contexto de execucao o objeto carro
console.log(getPreco.call(carro));
//Chamando a função através do apply
console.log(getPreco.apply(carro));

/**
 * A diferença entre call e apply se percebe na passagem de parametros para as funcoes
 * 
 */

 /**
  * Passando os parametros com call
  * Primeiro passamos como parametro o contexto, depois os parametros necessário que serao passado para a funcao getPreco
  */
  console.log(getPreco.call(carro, 0.17, 'R$'));

  /**
   * Passando os parametros com apply
   * Primeiro passamos o objeto de contexto e criamos um array com os parametros que serao utilizados na funcao
   */
  console.log(getPreco.apply(global, [0.18, 'R$']));