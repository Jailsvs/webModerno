/**
 * Set estrutura não indexada que não aceita repetição
 */
const times = new Set();

times.add('Vasco');
times.add('São Paulo').add('Corinthians').add('Palmeiras');
times.add('Flamengo');
times.add('Vasco');

console.log(times);//Imprimi todos os valores e o Vasco é inserido apenas uma vez

//Algumas Funçoes com Set
console.log(times.size);
console.log(times.has('Vasco'));//True
times.delete('Vasco');
console.log(times.has('Vasco'));//False

//Outra maneira de criar um Set é através de um array
const nomes = ['João', 'Maria', 'Alice', 'Chapeuzinho', 'Mulan'];

const nomesSet = new Set(nomes);

console.log(nomesSet);