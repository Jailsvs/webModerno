/**
 * Função para declaração de números aleatórios
 */
function gerarNumerosEntre(valorMin, valorMax)
{
    const valorAleatorio = Math.random() * (valorMax - valorMin) + valorMin;

    return Math.floor(valorAleatorio);
}


let comando = -1;


do
{
    comando = gerarNumerosEntre(-1, 20);
    console.log(`Numero usado: ${ comando }`);

}while(comando != -1);

console.log('FIM');