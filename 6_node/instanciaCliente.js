//Importando Modules

//Modulo de Instancia Unica
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

//Modulo de Instancia Nova como instancia nova devolve uma funcao devemos usar () para acessar o objeto
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.incrementar();
contadorA.incrementar();

console.log(contadorB.valor);

contadorC.incrementar();
contadorC.incrementar();

console.log(contadorD.valor);