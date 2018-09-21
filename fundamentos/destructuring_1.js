const villain = {
    name:'Joker',
    abilities:'Criminal mastermind',
    affiliations:{
        teamA:'Injustice League',
        teamB:'Injustice Gang'
    }
}

//Destructuring
const {name, abilities} = villain;

console.log(name, abilities);

//Destructuring and rename variables

const {name: nome, abilities:habilidades} = villain;

console.log(nome, habilidades);

//Destructuringvalores que não existem e tratando um valor que nao existe para uma retorno padrao
const {produtora, primeiraAparicao = true} = villain;
console.log(produtora, primeiraAparicao);

//Destructuring objeto dentro do objeto
const {affiliations:{teamA, teamB}} = villain;
console.log(teamA, teamB);