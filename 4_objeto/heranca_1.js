/**
* Herança em JS é baseada em protótipos
* Evite herança e priorize composicao
*/

//Atributo prototype só está diponível dentro de uma função Object ou dentro de funções

/*[[prototyope]] --> Conceito de protótipo [Diagrama] que representa todo atributo __proto__ que um objeto possuí que aponta para uma função Object.prototype
*/

/**
 * Exemplo prático
 */

 const ferrari = {
     modelo: 'F40',
     velMax: 340

 }

 const volvo = {
     modelo:'V40',
     velMax:200
 }

 /**
  * __proto__ significa se ele procurar algum atributo dentro de ferrari e não encontrar ele procurará em um objeto pai
  * se não encontrar irá procurar em outros protótipos até encontrar o atributo caso não encontrar devolve undefined
  */
 console.log(ferrari.__proto__);//Retorna um objeto vazio

 //Como informado anteriormente um objeto criado aponta para Object.prototype
 console.log(ferrari.__proto__ === Object.prototype);//Retorna true

 console.log(volvo.__proto__ === Object.prototype);//True;

 //Object é a maior Hierarquia JS
 console.log(Object.prototype.__proto__)//Null
 

 function meuObjeto() {}
     console.log(typeof Object, typeof meuObjeto)//Os dois são functions
     console.log(Object.prototype, meuObjeto.prototype)//Os dois apontam para um objeto