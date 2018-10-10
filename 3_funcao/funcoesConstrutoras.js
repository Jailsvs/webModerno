/**
 * JS Funções construtoras funcionam como os construtores em outras linguagens orientadas a objetos
 * porém em JS esses construtores são escritos como funções já que podemos criar funções e instanciar funções tbm
 */

 //Function neste caso funcionam como uma classe
 function Carro(velocidadeMaxima = 200, delta = 5)
 {
    //Atributo privado que existira apenas dentro do scopo dessa funcao
    let velocidadeAtual = 0;

    //Método publico
    this.acelerar = function()
    {
        if(velocidadeAtual + delta < velocidadeMaxima )
        {
            velocidadeAtual += delta;
        }
        else
        {
            velocidadeAtual = velocidadeMaxima;
        }

        
        //Métodos privados são declarado com const ou let
        //const ou let getVelocidadeAtual = function(){}
        
        
        //Método publico get para velocidade atual
        this.getVelocidadeAtual = function()
        {
            return velocidadeAtual; 
        }
    }
 }

 //() em Carro() não é obrigatório
 const carro =  new Carro;

 carro.acelerar();
 console.log(carro.getVelocidadeAtual());

 //instanciando objeto ferrri apartir da function(classe) carro
 const ferrari = new Carro(350, 20)

 ferrari.acelerar();
 ferrari.acelerar();
 ferrari.acelerar();
 console.log(ferrari.getVelocidadeAtual());

 console.log(typeof Carro);//Function parecendo uma classe
 console.log(typeof ferrari);//Objeto derivado da function Carro