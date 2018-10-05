function gerarNumeros([min = 0, max = 1000])
{
    //Trocando o valor caso min < max  [min, max] destructuring = [max, min] --> Criando o Array 
    if (min > max) [min, max] = [max, min]
    //Gerando o numero aleatorio
    const valor = Math.random() * (max - min) + min;
    //arredondando para baixo
    return Math.floor(valor);
   
}

console.log(gerarNumeros([50, 40]));
console.log(gerarNumeros([992]));
console.log(gerarNumeros([, 500]));
console.log(gerarNumeros([]));