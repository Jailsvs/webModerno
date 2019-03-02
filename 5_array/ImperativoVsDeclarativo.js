const alunos = [{
        nome: "João",
        nota: 7.9
    },
    {
        nome: "Maria",
        nota: 9.2
    }
];

//Abordagem Imperativa para calcular a média
let total = 0;

for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota;
}

console.log(total / alunos.length);

//Abordagem Declarativa para calcular a média

const getNota = aluno => aluno.nota;
const soma = (total, valorAtual) => total + valorAtual;
const total_2 = alunos.map(getNota).reduce(soma);


console.log(total_2 / alunos.length);

/*
* Abordagem Imperativa se preocupa em como as coisas devem ser feitas
nesta caso é necessário explicitar todo passo a passo no algoritmo
  Abordagem Declarativa se preocupa o que deve ser feito utilizando métodos
  que podem ser reaproveitados em outro contexto futuramente
*/