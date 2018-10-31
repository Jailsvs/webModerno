const NbaPlayers = ['Stephen Curry','Andre Iguodala','Lebron James','Draymond Green','Pau Gasol', 'Kevin Duran'];

//Callback para cada lemento do array é executado a function que recebe o nome + o indice 
NbaPlayers.forEach(function(nome, indice)
{
    console.log(`${ indice + 1 } )` + ` ${ nome }`);
});

//Outro exemplo de callback
NbaPlayers.forEach(nome => console.log(nome));


//Exemplo de callback passando uma funcao para uma variavel

const exibirPlayer = player => console.log(player);

NbaPlayers.forEach(exibirPlayer);


//Foreach tem um terceiro parametro chamado array
NbaPlayers.forEach(function(nome, indice, NbaPlayers)
{
    console.log(`${ indice + 1 } )` + ` ${ nome }`);
    console.log(NbaPlayers);
});