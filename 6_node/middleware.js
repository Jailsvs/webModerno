/**
 * Middleware pattern or chain of responsibility
 */

/**
 * 
 * @param { Object } context que será passado de iteração em iteração entre os passos 
 * @param {*} next  Função que enviará o objeto para o próximo passo.
 */
const step_fisrt = (context, next) => {
    context.valor_1 = 'mid_1';
    next();
}

const step_second = (context, next) => {
    context.valor_2 = 'mid_2';
    next()
}

const step_third = context => context.valor_3 = 'mid_3';

//middlewares é torna-se um array de funções devido ao ...[operador rest] que criar um array
const chain = (context, ...middlewares) => {
    const runSteps = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](context, () => runSteps(indice + 1));
    }
    runSteps(0);
}

const context = {};

chain(context, step_fisrt, step_second, step_third);
// chain(context, step_fisrt, step_third);



console.log(context);