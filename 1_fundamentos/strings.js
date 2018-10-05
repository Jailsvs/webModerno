const escola = 'C4d3r';

console.log(escola);

//Retorna o caracter localizado no índice 4 
console.log(escola.charAt(4));

//Retornando um valor fora do índice
console.log(escola.charAt(5)); //Retorna em branco

//Retornando o valor do caractere na tabela ASCII
console.log(escola.charCodeAt(3));

//Retornando qual o indice de determinado caractere
console.log(escola.indexOf('r'));

//Retornando os caracteres restante apartir do indice escolhido
console.log(escola.substring(1));

//Retornando os caracteres apatir de um intervalo de indice sem incluir o indice final
console.log(escola.substring(2, 4));

//Concatenado strings
console.log('Escola '.concat(escola).concat(' !'));

//Mudando o lugar de uma string
console.log(escola.replace(3, 'e'));

//Um pouco de Regex
//Substituí todos os digitos pela letra e
console.log(escola.replace(/\d/g, 'e'));

//Substituí todos os caracteres pela letra e
console.log(escola.replace(/\w/g, 'e'));

//Convertendo um conjunto de String em Array
console.log('Ana - Maria - João'.split('-'));

console.log('Ana - Maria - João'.split(' - '));

console.log("Teste auto save");