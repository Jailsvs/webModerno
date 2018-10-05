console.log(typeof console);

//Arredondando para cima com ceil
console.log(Math.ceil(5.6));
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.4));
console.log('================================');
//Arredondando para baixo com floor
console.log(Math.floor(5.6));
console.log(Math.floor(5.5));
console.log(Math.floor(5.4));

//Arredondando de acordo com as regras matemática de arredondamento
console.log('================================');
console.log(Math.round(5.6));
console.log(Math.round(5.5));
console.log(Math.round(5.4));

//Criando objeto vazio
const hero = {};

hero.nome = 'Bruce Wayne';
//Segunda maneira de criar um atributo dinamicamente de um objeto
hero['endereco'] = 'Gotham City';// Não recomendado pois para acessar o atributo deverá se usar a mesma notacao

console.log(hero);

function Villain(nome)
{
    this.nome = nome;//Deixando o atributo publico e acessivel fora da funcao
}

const villain_1 = new Villain('joker');
const villain_2 = new Villain('penguin');

console.log(villain_1.nome);
console.log(villain_2.nome);