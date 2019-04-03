/**
 * ...
 */

// Rest para Juntar Spread para espalhar

//Usando spread com objetos
const funcionario = {
    nome: 'Jane Doe',
    salario: 12349.99,
}

const clone = {
    ativo: true,
    ...funcionario,
}

console.log(clone);

clone.nome = 'John';

console.log(funcionario);
console.log(clone);


//Spread com array
const grupoA = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];

console.log(grupoFinal);