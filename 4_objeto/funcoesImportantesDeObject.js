const personagensResidentEvil = {
    nome:"Jill Valentine",
    sexo:'F',
    dataNascimento:1974,

}

/**
 * Funções importantes de Object
 */

 /**
  * Object.keys retora as chaves do objeto(atributos) já que objeto é uma coleção de chave e valor
  */
 console.log(Object.keys(personagensResidentEvil));

  /**
  * Object.values retora os valores do objeto(atributos) já que objeto é uma coleção de chave e valor
  */
 console.log(Object.values(personagensResidentEvil));

 /**
  * Retornando os registros[entries] de um objeto --> retorna um array com a colecao chave e valor como subarrays
  */
 console.log(Object.entries(personagensResidentEvil));

 /**
  * Object.defineProperty criar um atributo dinamicamente podendo assim escrever algumas caracteristicas desse atributo
  */

  //Definindo as propriedades do meu novo atributo atributo
  /**
   * defineProperty tem como parametros 
   *  1 - Target alvo ou objeto que recebera o atributo
   *  2 - Nome do novo atributo entre ''
   *  3 - e por ultimo passar um Objeto com as caracteristica do atributo 
   * */ 
console.log(Object.defineProperty(personagensResidentEvil, 'nacionalidade', {
    //Definindo as caracteristica do novo atributo neste objeto
    enumerable:true,//Define se o atributo é passível de ser listado no método key por exemplo
    writable:false, //Define se o atributo poderá ser modificado
    value:'Americana'//Define o valor do atributo
}));

//Tentando modificar o novo atributo criado dinamicamente com Object.defineProperty
personagensResidentEvil.nacionalidade = 'brasileira';

console.log(personagensResidentEvil);//Imprimindo o objeto a linha 46 foi ignorada e o atributo nacionalidade na foi modificado

console.log("----------------------------------------");

console.log(Object.keys(personagensResidentEvil));

/**
 * Object.assign Funcionalidade nova de ES6 
 * Através de um objeto de destino é possível adicionar atributos de um outro objeto para o objeto destino
 * em caso de atributos iguais prevalece o novo atributo
 */

 const destinoPessoa = {
     nome: 'João',
     idade: 18
 }

 const idade = {
     idade: 20,
 }

 const endereco = {
     rua:'Rua A'
 }

 Object.assign(destinoPessoa, idade, endereco);

 console.log(destinoPessoa);//Objeto destino agora tem os atributos de todos os outros objetos passados como parametro