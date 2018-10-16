/**
 * Objeto é uma coleção dinâmica de pares chave e valor
 */

 const produto = new Object;

 //Como o objeto é dinâmico podemos criar os atributos
produto.nome = 'Caidera';//Notacao Ponto

//Utilizando uma outra notação parecida com array
produto['marca do produto'] = 'Generica';//Ao escrever dessa forma só é possivel acessar o valor usando []

produto.preco = 220;

console.log(produto['marca do produto']);//Acessa através da notacao []

//Como objeto é dinamico assim como criamos os atributos podemos deletaloss
delete produto.preco;
delete produto['marca do produto'];

console.log(produto);

//Criando um objeto mais complexo que possui outros objetos e arrays
const carro = 
{
    modelo:'A4',
    valor:89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }

    },
    condutores:[{
        nome: 'Junior',
        idade:19
    }, {
        nome: 'Ana',
        idade: 42
        }],
        calcularValorSeguro:function()
        {
            //...
        }
}

//Alterando os valores através das duas formas de acessar um atributo
carro.proprietario.endereco.logradouro = 'Avenida Gigante';
carro['proprietario']['endereco']['numero'] = 1000;

console.log(carro);

delete carro.condutores;//Deletando condutores e todos os atributos internos dele
delete carro.calcularValorSeguro //Deletando a funcao

console.log(carro)

/**
 * Cuidado ao acessar algum atributo que ainda não existe, não dará erro mas
 * o retorno será undefined
 */
console.log(carro.condutores)//Retorno undefined prq condutore foi deletado na linha 56
