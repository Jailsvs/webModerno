/**
 * Convenção para criação de getters and setters em JS
 */

 const sequencia = {
     _valor:1,//Por convencao informa que esse valor é privado já que o JS não impede vc de acessar esse valor através do objeto
     
     //Criando o getValor
     get valor(){
         return this._valor++;
     },
     
     //Criando setValor
     set valor(valor)
     {
         //Verifica se o novo valor informado é maior que o valor atual
         if (valor > this._valor)
         {
            this._valor = valor;
         }
         
     }
 }

 /**
  * Quando o JS percebe que você esta lendo apenas o valor ele internamente chama o método get
  */
 console.log(sequencia.valor, sequencia.valor)

 //Como estou atribuindo um valor o JS já entende internamente que estou realizando um set
 sequencia.valor = 1000;
 console.log(sequencia.valor, sequencia.valor);


 sequencia.valor = 900;//Como nao entra na condicao do set o JS simplesmente ignora essa parte
 console.log(sequencia.valor, sequencia.valor);