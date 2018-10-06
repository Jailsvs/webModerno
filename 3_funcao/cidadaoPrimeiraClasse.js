//Funões em Javascrit são First-Class Object (Citizens)
//Higher Order function

/**
 * Isso quer dizer que JS trabalha função como dado, por padrão as funções retornam undefined
 * se por acaso não quisermos retornar undefined devemos declarar um return para a função
 */

 //Criando uma função de forma literal ou FUNCTION STATEMENT
 /**
  * Uma Function Statement pode ser chamada antes da declaração, ao compilar o compilador sabe que ele foi criada depois
  */
 function helloWorld()
{
    console.log('Hello World');
}

//Pode-se armazenar uma function em uma variavel FUNCTION EXPRESSION

/**
 * Não pode ser chamada antes de ser criada
 */
let imprimirDados = function()
{
    let imprimir = console.log("Retorno explicito");
        return imprimir;
}  


//Como uma função é tratada como dado em Javascript podemos utiliza-las em várias estruturas

//Armazenando uma funcao em um array
const arrayQualquer = [imprimirDados, helloWorld(), function naoEhComumMasDaPraFazer(valor, valor_2){ return valor + valor_2 }]

//Criando uma funcao em um atributo de objeto dinamicamente
const pessoa = {}
    pessoa.falar = function (){ return 'Blá Blá Blá';}
    console.log('-----------------');
    console.log(pessoa.falar());
    console.log('-----------------');

//Passando uma função como parametro
function funcaoRecebeFuncao( funcaoParametro)
{
    funcaoParametro();
}

//Chamando as funcoes;
funcaoRecebeFuncao(function funcaoParametro(){ console.log('Eu sou uma função e estou como parametro')});


//Passando uma funcao para uma outra funcao com retorno 
function soma(valor, valor_2)
{
    return function(valor_3)
    {
        console.log(`Soma total ${valor + valor_2 + valor_3}`);
    };
}

//Invocando a função e passando seus parametros como a funcao soma retorna outra funcao é necessario utilizar () novamente 
soma(2,3)(5);

//Outra possivilidade
let resultadoFuncaoExterna = soma(10, 7);
resultadoFuncaoExterna(3);


/**
 * Exemplo de Function Statement and Function Expression
 */

 //Function Statement
 function testeDeclaracao()
 {
     let imprimir = console.log("Eu sou uma função de declaração! ");
     
        return imprimir;
 }

 const testeExpressaoAnonima = function()
 {
     let imprimir = console.log("Eu sou uma função de expressão anônima! ");
    
        return imprimir;
 }

 const testeExpressao = function nomeFuncao()
 {
     let imprimir = console.log("Eu sou uma função de expressão não anônima! ");
     
     return imprimir;
 }

 const funcaoSemRetorno = function()
 {
     console.log("Eu não possuo retorno então o console exibirá undefined");
 }

 //Chamando para a função
 testeDeclaracao();

 //Não funciona para uma função de declaração () NAO DA ERRO
 //testeDeclaracao;

 //Chamada para a função de expressão usando o nome da variavel mais o () 
 testeExpressao();

 //Não funciona para uma funcao expressão sem o () NAO DA ERRO
 //testeExpressao;

 //Erro funcao não declarada é precisa chamar a variavel que recebe a funcao - ERRO
 //nomeFuncao()

 //Chamada para função expressão do tipo anônima 
 testeExpressaoAnonima();

 //Não funciona para uma funcao expressao do tipo anônima sem () NAO DA ERRO
 //testeExpressaoAnonima;
 

 funcaoSemRetorno()

