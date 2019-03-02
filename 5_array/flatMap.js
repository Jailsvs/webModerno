const escola = [{
        nome: "Turma M1",
        alunos: [{
                nome: "Gustavo",
                nota: 8.1
            },
            {
                nome: "Ana",
                nota: 9.3
            }
        ]
    },
    {
        nome: "Turma M2",
        alunos: [{
                nome: "Rebeca",
                nota: 8.9
            },
            {
                nome: "Roberto",
                nota: 7.3
            }
        ]

    }
];

//Objetivo pegar as notas de todos os alunos independente da turma

//Pegando a nota do aluno
const getNotaAluno = aluno => aluno.nota

//Pegando a nota da turma
const getNotaTurma = turma => turma.alunos.map(getNotaAluno);

const notas = escola.map(getNotaTurma);

console.log(notas); //Imprimi um array de arrays

//Solucao usar o Flat Map

/* O Flat Map é usado para usar um map com concat para retornar
 * um único array com todas as notas
 */

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas_2 = escola.flatMap(getNotaTurma);
console.log(notas_2);