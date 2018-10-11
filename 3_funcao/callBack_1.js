const fabricantes = ['Mercedes', 'volkswagen', 'Fiat', 'Toyota', 'Chevrolet'];


//Esta assinatura da função pode ser passada para um foreach
function imprimir(nome, indice)
{
    console.log(`${indice + 1}.${ nome }`);
    
}

/**
 * CallBack é um outro nome em JS para se referir ao Design Pattern Observer -> Quando um determinado evento ocorretor outros objetos interessandos recebendo uma notificação
 * 
 * O CallBack neste exemplo mostrar que uma funçaõ chamará outra função quando determinado evento acontecer
 * A função CallBack poder ser chamada uma única vez ou várias vezes dependendo do contexto
 */


 //Para cada elemento do array o forEach irá chamará de volta a funcao imprimir passando os parametro nome e indice
 //Nos exemplos abaixo o evento ocorrido é o encntro de um novo elemento no array
fabricantes.forEach(imprimir);

//Outro Exemplo
fabricantes.forEach(function(a)
{
    console.log('--------------------');
    console.log(a);
});

//Passando uma arrow function como parametro para o forEach
fabricantes.forEach( fabricante => console.log(`Fabricantes: ${ fabricante } `));

