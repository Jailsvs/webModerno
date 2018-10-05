//Variavel var é acessível Globalmente exceto dentro de um função

{
    {
        {
            var teste = 'Texto teste';
            console.log(teste);
        }
    }
}
console.log('=====================================');
console.log(teste);

function ligar()
{
    var botao = 'Ligando o aparelho';
    console.log(botao);
}

ligar();

console.log(botao);//Chamando a variavel var 