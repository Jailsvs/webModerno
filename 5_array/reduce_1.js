const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
     { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Alice', nota: 9.8, bolsita:false },
    { nome: 'Isabella',  nota: 8.7, bolsista:true}
]
/**
 * Reduce utilizar um acumulador e o valor atual podendo ser passado também o indice e o array 
 * caso nao seja passado um numero inicial ele assume o indice 0 como acumulador e o indice 1 como
 * valor atual
 */
const resultado = alunos.map(al => al.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
//Caso se queira inserir um valor inicial esse valor é passado no final neste caso 10 é o valor inicial
}, 10);

console.log(resultado);