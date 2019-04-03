/**
 * Revisão dos principais temas let, var, const
 */

{
    var a = 2;
    let b = 7;
    console.log(b);
}
console.log(a); //2
//console.log(b); //Reference error:b is not defined

//Template String
const produto = 'Ipad';
console.log(`O ${produto} é caro!!!`); //Interpolação de strings

//Operador Destructuring
const [l, e, ...tras] = 'Cod3r';
/**
 * valores de cada variavel do destructuring
 * l = C
 * e = o
 * tras = ['d', '3', 'r']
 */
console.log(l, e, tras);

/**
 * Destructuring um array
 */
const [x, , y] = [1, 2, 3];
console.log(x, y); //Imprimi 1 3

/**
 * Destructuring um objeto
 */
const { idade: i, nome } = { nome: 'Ana', idade: 18 };
console.log(i, nome) //Desistruturando idade e o nome com idade sendo renomeada para i através do :i