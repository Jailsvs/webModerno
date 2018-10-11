/**
 * Funções Anônimas
 */

 const soma = function(valor_1, valor_2)
 {  
     valor_1 = isNaN(valor_1) ? 0 : valor_1;
     valor_2 = isNaN(valor_2) ? 0 : valor_2;

     return valor_1 + valor_2;

 }

 //Caso nao seja informada a funcao ele usará funcao soma como padrao
 const imprimirResultado = function(a, b, operacao = soma)
 {
     console.log(operacao(a, b))
 }

 imprimirResultado(4, 5);
 imprimirResultado(2, 3);
 //Passando uma função anônima no lugar de soma para subtrair valores
 imprimirResultado(100, 50, function(x, y){
     
        return x - y;
 });

 //Passando uma Arrow Function
 imprimirResultado(2, 3, (valorA, valorB) => valorA * valorB);

 //Criando uma funcao anonima através de um objeto

 const vilao = {
     nome: 'Eddie Brock',
     falar: function(){
         console.log("I'm Venom! ");
     }
 }

 //Chamando a funcao anonima através do atributo do objeto 
 vilao.falar();

 //ES 6

 const hero = {
     nome: 'Peter Park',
     falar(){
         console.log("I'm Spider Man");
     }
 }

 hero.falar();
 

 