function area(largura, altura)
{
    let area = largura * altura;
    if(area > 20)
    {
        console.log(`Valor acima do permitido ${ area } m2.`);
    }
    else
    {
        return area;
    }
}

    console.log(area(2,2));//Retorno a area corretamente
    console.log(area(2));//NaN, pois 2 * undefinied = NaN
    console.log(area());//undefinied * undefinied  = NaN
    console.log(area(2,10,4,5,6));//Ele pega apenas os dois primeiros parametros e ignora os outros
    console.log(area(5,5));//Valor do if torna-se verdadeiro e retorna console.log e toda funcao js que nao tem retorno explicito retorna undefined