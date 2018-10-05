/**
 * Ao se aproximar do zero em uma divisao o numero vai aumentando até o infinito
 */
console.log(7 / 0);

/**
 *  Transpiler verifica se o conteúdo dentro da string
 *  pode ser um número e realiza a conversao
 *  e o calculo
 */
console.log('10' / 2); //Comentário

console.log('10,2' / 2);
//Retorna NaN -> Not a Number não é um número

/**
 * Algumas operações com ponto fluente não tem uma precisao absoluta
 * seguindo a especificacao IEEE que retorna o valor mais próximo
 * possível para uma melhor de performance do transpiler
 */
console.log(0.1 + 0.7); //Resultado 0.7999999999999999

console.log((10.0).toString());
console.log(Number(22).toString());