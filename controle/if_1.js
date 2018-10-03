function soBoaNoticia( nota )
{
    if(nota >= 7)
   {
       console.log(`Aprovado com o valor da nota: ${ nota }`);
   }
}

soBoaNoticia(7);
soBoaNoticia(6.1);

function soSeForVerdadeEuFalo( valor )
{
    if( valor )
    {
        console.log('É verdade ' + valor);
    }
}

soSeForVerdadeEuFalo(null);// Não exibe nada, pois o Javascriprt considera null como falso
soSeForVerdadeEuFalo(NaN);// Não exibe nada, pois o Javascriprt considera NaN como falso
soSeForVerdadeEuFalo(undefined);// Não exibe nada, pois o Javascriprt considera undefined como falso
soSeForVerdadeEuFalo(0);// Não exibe nada, pois o Javascriprt considera 0 como falso
soSeForVerdadeEuFalo(1)// Exibe !Javascriprt considera qualquer valor diferente de 0 verdade
soSeForVerdadeEuFalo(-1);// Exibe ! Javascriprt considera qualquer valor diferente de 0 incluindo os negativos verdade
soSeForVerdadeEuFalo('')// Não exibe nada, pois o Javascriprt considera uma string vazia falsa