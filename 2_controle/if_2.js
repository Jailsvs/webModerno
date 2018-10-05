function teste_1(valor)
{
    //Em Javascript não da erro caso exista mais de uma sentença sem o { } em um bloco de código
    if(valor > 7)
        //Sentença associada ao bloco IF
        console.log(valor);
    console.log('Final');
}


teste_1(6);
console.log("----------");
teste_1(8);


function teste_2(numero){
    // O ponto e virgula esta associado ao if e não faz nada 
    if(numero > 7);{//O {} não esta asssociado ao if então executa o console.log independente de qualquer coisa
            console.log(numero);
    }
    
}

teste_2(6);
teste_2(8);