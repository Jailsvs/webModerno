//Object.PreventExtensions
const produto = Object.preventExtensions({
    nome:'Monitor',
    preco: 1200.00,
    tag:'Promocão'
});

//Verifica se o Objeto é Extensivel ou seja pode ter atributos novos
console.log('Extensivel', Object.isExtensible(produto));//false

produto.nome = 'Impressora';//Troca o nome do atributo produto
produto.categoria = 'Eletronico';//tenta criar um novo atributo
delete produto.tag;//Deleta o atributo tag

console.log(produto);//Imprimi { nome: 'Impressora', preco: 1200 }

//Object.Seal
const personagem = {
    nome: 'Vegeta',
    raca: 'Sayajin',
}
//Deixa apenas modificar o valor dos atributos mas nao é possível excluir ou adicionar atributos
Object.seal(personagem);
console.log('Selado: ', Object.isSealed(personagem));

console.log(personagem);

personagem.localNascimento = 'Planeta Vegeta'
delete personagem.nome;    

console.log(personagem);

personagem.nome = 'Goku';//Alterando o atributo nome do objeto

console.log(personagem);