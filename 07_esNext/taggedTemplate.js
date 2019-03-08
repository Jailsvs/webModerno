function tag(partesDaStringTemplate, ...valoresInterpolados) {
    console.log(partesDaStringTemplate);
    console.log(valoresInterpolados);
    return 'Outra string qualquer';
}

const aluno = 'Bruce';
const idade = 18;
const situacao = 'Aprovado';


console.log(tag `${aluno} tem ${idade} anos e está ${situacao}.`);

//Criar uma função que faça um parce de alguns valores e aplicar uma máscara de dinheiro
function real(mascara, ...valores) {
    const resultado = [];
    //percorrendo o array de valores
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
        //intercalando os valores na ordem correta
        resultado.push(mascara[indice], valor);
    });

    return resultado.join('');
}

const preco = 29.99;
const parcela = 11;
console.log(real `1x de ${preco} ou 3x de ${parcela}.`);