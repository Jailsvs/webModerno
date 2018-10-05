function getInteiroAleatorioEntre(valorMinimo, valorMaximo)
{
    /**
     * Math.random --> Gera um numero aleatório entre 0 e 1;
     * Para obter um intervalor utiliza-se (valorMaximo - valorMinimo) == 10 - 1
     * + valorMinimo para deslocar a randomizacao para iniciar no valorMinimo
     */
    const valor = Math.random() * (valorMaximo - valorMinimo) + valorMinimo;

    return Math.ceil(valor);
}

//Cria uma variavel para ser comparada dentro do While
let opcao = 0;

//verifica se opcao é diferente de 10 quando a expressao for falsa sai do laço
while(opcao != 10)
{
    opcao = getInteiroAleatorioEntre(0, 10);
    console.log(`Opcao escolhida foi: ${ opcao }`);
}

console.log("FIM!");


