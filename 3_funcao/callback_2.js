const notas = [2.1, 3.2, 4.3, 4.4, 5.5, 6.6, 7.7];

/**
 * Objetivo criar um novo array como todas as notas menores que 6 não utilizando CallBack e utilizando CallBack
 */

 //Não utilizando CallBack
 let notasBaixas = [];

 for(let i = 0; i < notas.length; i++)
 {
     if(notas[i] < 6){
        notasBaixas[i] = notas[i];
     }
     
 }

 for(i = 0; i < notasBaixas.length; i++)
 {
     console.log(notasBaixas[i]);
 }


 //Com CAllBack

 let = notasBaixas_2 = notas.filter(function ( nota ){
     return nota < 7;
 });

 console.log('-------------');
 console.log(notasBaixas_2)