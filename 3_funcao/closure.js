/**
 * Closure é o escopo criado quando uma funcao é declarada
 * esse escopo permite a função acessar manipular variáveis externas a função
 */

 const x = 'Global';

 function fora()
 {
     const x = 'Local';
     function dentro()
     {
         const x = 'dentro';
         return x;
     }
     return dentro;
 }

 const minhaFuncao = fora();


 console.log(minhaFuncao());// 'Dentro'

