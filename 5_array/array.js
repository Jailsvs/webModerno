/**
 * Array em JS é um Objeto
 */

 //console.log(typeof Array);//Function
 //console.log(typeof new Array);//Objeto
 //console.log(typeof []);//Objeto

 /**
  * Array tem seu tamanho Dinâmico e pode ter dados de tipos diferentes
  * por boas práticas trabalhamos com dados homogeneos ou seja do mesmo tipo
  */

//Não muito usual mas uma forma válida de criar um array
let herois = new Array('Homem Aranha', 'Batman', 'Super Man', 'Hulk', 'Pantera Negra', 'Viúva Negra', 'Mulher Maravilha', 'Capitão América');

//console.log(herois);

herois = ['Peter Park', 'Bruce Wayne', 'Clark Kent', 'Bruce Banner', "TChalla", 'Natasha Romanoff', 'Diana de Themyscira', 'Steve Rogers'];

//console.log(herois[0]);
//console.log(herois[6]);
//console.log(herois[10]);//Quando não existe um elemento retorna undefined

herois[7] = 'Wade Wilson';

console.log(herois[7]);

//Adicionar um novo elemento no array
herois.push('Steve Rogers');

//console.log(herois);

/**
 * Algumas Funcoes com arrays
 */

 //Ordem Alfabetica
 herois.sort();

 //console.log(herois);

 //Deletando um indice do array
 //delete herois[7];

 //console.log(herois);//Exclui mas não reordena o array

 /**
  * Splice possuí várias funcionalidades adicionar elementos, excluir elementos
  */

  console.log(herois);
  herois.splice(0, 1)//Primiero elemento informa o indice que gostaria de trabalhar e 1 indica que gostaria de excluir 1 elemento apartir do 0;
  herois.splice(0, 2);//Excluindo dois elementos
  herois.splice(0, 2, 'Bruce Wayne', 'Logan');//Apartir do 0 elemento exclui dois elementos e inseri os elementos 'Bruce Wayne' e 'Logan'
  console.log(herois);
