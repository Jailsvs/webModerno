//For in retorno o indice do array percorrido
let marvelHeroes = ['Hulk', 'Iron Man', 'Spider Man', 'Ant Man', 'Black Phanter'];


for(let i in marvelHeroes)
{
    console.log('indice ' + i + ' Hero: ' + marvelHeroes[i]);
}

//Criando um objeto 
const pokemon = 
{
    nome:'Charmander',
    id:004,
    altura: 2.0,
    peso:'18.7',
    habilidades:'chama'

}

for(let atributo in pokemon)
{
    console.log(`Atributo: ${atributo}, Atributo associado: ${ pokemon[atributo]}`);
}