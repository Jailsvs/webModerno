const NbaPlayers = ['Stephen Curry','Andre Iguodala','Lebron James','Draymond Green','Pau Gasol']

//removendo o ultimo elemento do array

NbaPlayers.pop();

console.log(NbaPlayers);

//Adicionando elemntos na ultima posicao do array
NbaPlayers.push('Kevin Duran');

console.log(NbaPlayers);

//Retirando elemento da primeira posicao
NbaPlayers.shift();

console.log(NbaPlayers);

NbaPlayers.unshift('Stephen Curry');//Inseri um elemento no 1 elemento do array

console.log(NbaPlayers);

/**
 * Slice retorna um novo array
 */
const players = NbaPlayers.slice(2)
 
 console.log(players);

 const players_2 = NbaPlayers.slice(1, 3);//Pega do indice 1 ao 3 incluindo o indice 1 e excluindo o indice 3 
 console.log(players_2);