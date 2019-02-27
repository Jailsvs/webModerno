/**
 * This dentro de um modulo apontará para module.exports
 */

console.log(this === global);

console.log(this === module);

console.log(this === exports);

console.log(module.exports === exports);

function contextoThis() {
    console.log('Dentro de uma função...');
    console.log(this === global);
}

contextoThis();