//Funcao como Parametro
//Passar função como parametro
function imprimirMaioridade(verificaIdade, idade) {
    verificaIdade(idade)
}
 
function verificaIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de Idade')
    }
}
 
imprimirMaioridade(verificaIdade, 18)