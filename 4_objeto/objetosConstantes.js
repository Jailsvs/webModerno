/**
 * Alterando atributos de um objeto atribuido a uma constante
 */

/* É possível mudar o atributo porque a constante heroes aponta para um endereço de memória
 * e não diretamente para o atributo então mudando o atributo eu não estou mudando o endereço
 */ 
const heroes = {nome: 'Spider Man'};
heroes.nome = 'Batman';

console.log(heroes);

/**
 * Esse mesmo exemplo não é possivel fazendo a troca do endereco de memoria criando um novo objeto
 * Erro -> Assigmen to consant variable
 */

 //heroes = {nome:'Curinga'};
//console.log(heroes);

/**
 * Congelando um objeto é possível ignorar alteracoes em seus atributos
 */

 //Congelando o objetos não e possível realizar a alteracao do atributo nome na linha 28 
 Object.freeze(heroes);

 heroes.nome = 'Tony Stark';
 
 console.log(heroes.nome);//Nova atribuicao de heroes.nome ignorada pois o objeto esta congelado.