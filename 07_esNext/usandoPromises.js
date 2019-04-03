//Import
const http = require('http');

const getTurma = letra => {
   const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
   return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = '';

            resposta.on('data', dados => {
                resultado += dados
            });

            resposta.on('end', () => {
                try
                {
                    resolve(JSON.parse(resultado))
                }catch(erro){
                    reject(erro)
                }
            }); 
        });
   });
}

// let nomes = [];
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
//         getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
//             getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
//             console.log(nomes);
//         });
//     });
// });

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    //Tratando erro
    .catch(erro => console.log(erro.message));

//Simulando o erro de uma turma que não existe
getTurma('D').catch(erro => console.log(erro.message));//Imprimi Unexpected token < in JSON at position 0