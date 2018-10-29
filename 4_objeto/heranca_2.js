/**
 * Criando uma cadeia de prototipos Chain Prototype
 */
Object.prototype.isPokemon = true;//Criando um prototype isPokemons para ser herdado EVITAR AO MAXIMO ESSE TIPO DE ABORDAGEM

const charizard =  { height: 5.07, category:'Flame', abilities:'Blaze', type:'Fire'}//charizard tem como protótipo Object

//Estabelecendo que o atributo __proto__: referencia o objeto pai
const charmeleon = { __proto__: charizard, height: 3.7, abilities:'Blaze'}//charmeleon tem como protótipo charizard

const charmander = { __proto__: charmeleon, height: 2.0, category:'Lizard'}//charmande tem como protótipo charmeleon


console.log(`Abilities:  ${ charmander.abilities }`);
console.log(`Type: ${ charmander.type }`);
console.log(`Category: ${ charmeleon.category } `);
console.log(`isPokemosn: ${ charmander.isPokemon }`)//Herdando de Object
console.log(`Id:  ${ charmander.id }`);//Não existe esse atributo em nenhum outro objeto ou Função Object

console.log(charmander)



const carro = 
{
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerar: function(aceleracao)
    {
        if(this.velocidadeAtual + aceleracao <= this.velocidadeMaxima)
        {
            this.velocidadeAtual += aceleracao;
        }
        else
        {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    },
    status() {
        return `${ this.velocidadeAtual}KM/H de ${ this.velocidadeMaxima }KM/H`;
    }
}

const ferrari = 
{
    modelo:'F40',
    velocidadeMaxima:324 //Shadowing da velocidadeMaxima de carro || override
}

const volvo = 
{
    modelo:'V40',
    //Shadowing de status de carro também 
    status(){
        //Assim como this referencia o objeto atual o super referencia o prototipo pai
        return `Modelo ${ this.modelo }: ${ super.status() }`;

    }
}

console.log(typeof status)

/**
 * Uma outra maneira de estabelecer a relação de prototipo entre os objetos é através do Método Object.setPrototypeOf() 
 */
//Indica que ferrari herda caracteristicas de carro
 Object.setPrototypeOf(ferrari, carro);

 //Indica que volvo herda caracteristicas de carro
 Object.setPrototypeOf(volvo, carro);

/**
 * Ao exibir no console o objeto conseguimos visualizar apenas os atributos do próprio objeto e não do seu prototipe
 * */ 
console.log(ferrari);
console.log(volvo);

volvo.acelerar(200);
console.log(volvo.status());//Mostra o modelo e o super.status() // override do métodos aqui!

console.log("-----------------------")
ferrari.acelerar(300);
/*Exibi apenas o método de carro() pois nao existe o método status no objeto ferrari
 e valor da velocidade max é o valor de ferrari já que o this nesse contexto pertence ao objeto ferrari */
console.log(ferrari.status());
 