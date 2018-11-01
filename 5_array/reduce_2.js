const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
     { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Alice', nota: 9.8, bolsista:false },
    { nome: 'Isabella',  nota: 8.7, bolsista:true}
];

//Implementando um map para retornar somente a informacao de bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

//Algum é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map( a => a.bolsista ).reduce(algumBolsista));