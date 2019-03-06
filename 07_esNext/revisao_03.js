/**
 * Revisão de novos recurso com objetos
 */

/**
 * ES8
 * Object.values/Object.entries
 */

const objeto = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.values(objeto)); //[1,2,3]
console.log(Object.entries(objeto)); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


const nome = 'Bruce Wayne';


const superHeroi = {
    nome,
    ola: function() {
        return `Olá ${nome}`;
    }
}
console.log(superHeroi.nome);
console.log(superHeroi.ola());


class Animal {

}

class Cachorro extends Animal {

}