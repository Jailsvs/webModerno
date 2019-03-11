//Para utilizar o Map é necessária criar um instancia de Map
const tecnologias = new  Map();
//Criando uma estrutura chave valor com um literal e um objeto
tecnologias.set('react', {framework: false});
tecnologias.set('angular', {framework: true});

//Para acessar a estrutura é necessario usar a palavra reservada get
console.log(tecnologias.get('react').framework);

/**
 * Outra maneira de criar as chaves e valores de um map é utilizando arrays
 */

 const outroMapComChavesVariadas = new Map([
     [function(){}, 'Funcão' ],
     [{}, 'Objeto'],
     [123, 'Números'],   
 ]);

 outroMapComChavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
 });

 //Verificando se um elemento esta ou não contido dentro de um map
 console.log(outroMapComChavesVariadas.has(123));//true

 //Excluindo um elemento dentro de um Map
 outroMapComChavesVariadas.delete(123);

 console.log(outroMapComChavesVariadas.has(123));//false

 //Verificando o tamanho de um map
 console.log(outroMapComChavesVariadas.size);//2