/**
 * Criando objetos apartir da notação literal
 */
const objeto = {}

console.log(typeof objeto);//Imprimi object

/**
 * Object em JS - Criando um objetos através da função Object
 */
console.log(typeof Object);//Imprimi function
console.log(typeof new Object);//Imprimi object

//A Função construtora Object pode receber ou nao paramêtro o () não é obrigatório
const objeto_2 = new Object;
console.log(typeof objeto_2)//Imprimir object

/**
 * Funções Construtoras
 */
function Produto(nome, preco, desconto)
{
    //Utilizando o this estamos deixando esse atributos públicos ou seja vísivel fora do escopo
    //da função construtora
    this.nome = nome;
    
    //preco e desconto estao privados e só podem ser acessados por meio do método getPrecoProduto
    this.getPrecoProduto = () => {
        return preco * ( 1 - desconto)
    }
}

const produto_1 = new Produto('Caneta', 7.99, 0.15);
const produto_2 = new Produto('Notebook', 2998.99, 0.25);

/**
 * Pegando os valores dos objetos
 */
console.log(produto_1.getPrecoProduto(), produto_2.getPrecoProduto());

produto_1.nome = 'Lápis';//Acessando e modificando o valor
console.log(produto_1);//Agora o nome do produto_1 é Lápis

console.log("--------------");
console.log(produto_1.preco);//undefined pois preco nao esta disponivel fora do objeto

console.log(produto_2);

//Criando um objeto através de uma factory
function criarFuncionario(nome, salario, faltas)
{
    //Como os atributos possuem o mesmo nome dos parametros pode se escrever apenas uma
    //vez o atributo e o JS já sabe que chave/valor sao iguais
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas);
        }
    }
}

const funcionario = criarFuncionario('João', 2000, 0);
const funcionario_2 = criarFuncionario('Rodrigo', 2500, 4);

console.log(funcionario);
console.log(funcionario_2);
console.log(funcionario_2.getSalario());

/**
 * Criando um objeto apartir da função create vinda de Object
 */

const filha = Object.create(null);
filha.nome = 'Ana';

console.log(filha);//Imprimir objeto { nome: 'Ana' }

//Função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');

console.log(fromJSON);//Imprimi { info: 'Sou um JSON' }
console.log(fromJSON.info)//Imprimi Sou um JSON