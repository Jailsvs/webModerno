//Declaracao da variavel
let contador = 0;

//Expressao de controle
while(contador <= 10)
{
    console.log(contador);
    //Incremento
    contador++;
    console.log("------------------------------");
}


for(let contador_2 = 0; contador_2 <= 10; contador_2++)
{
    console.log(`Contador: ${ contador_2 }`);
}

//Declarando um array 
let spiderManVillains = ['Duende Verde', 'Doutor Octopus', 'Venom', 'Lagarto', 'Escorpião'];

for(let i = 0; i < spiderManVillains.legth; i++)
{
    console.log(spiderManVillains[i]);
}

