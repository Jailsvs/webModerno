//Par nome valor
const saudacao = 'Ola'; // Contexto Léxico - Local em que foi escrita(definida) a variavel definindo assim seu escopo.

function exec()
{
    const saudacao = 'Opa'; //Contexto Léxico 2;
    return saudacao;
}

console.log(exec());
console.log(saudacao);

//Objetos são grupos aninhados de chave e valor
const hero =
{
    nome:'Bruce Wayne',
    peso:95,
    altura:1.88,
    endereco:{
        terraNatal:'Gotham City'
    }
};

console.log(hero);
