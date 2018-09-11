const peso_1 = 1.0;
const peso_2 = Number('12.1');

console.log(peso_1, peso_2);
console.log(typeof peso_1);
console.log(typeof peso_2);
console.log('===================================');

/**
 * Números com .0 são considerados inteiros e não ponto flutuante.
 */
console.log(Number.isInteger(peso_1));
console.log(Number.isInteger(peso_2));

console.log('===================================');

const avaliacao_1 = 9.871;
const avaliacao_2 = 6.871;

console.log(avaliacao_1, avaliacao_2);
console.log(typeof avaliacao_2);

const total = avaliacao_1 * peso_1 + avaliacao_2 * peso_2;
const media = total / (peso_1 + peso_2);

console.log(media);

/**
 * Arredondamento em casas decimais
 */

console.log(media.toFixed(3));
/**
 * Transformando um Number em String
 */
console.log(media.toString());
console.log(typeof media.toString());