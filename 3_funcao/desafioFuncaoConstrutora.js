//Criando uma function class
function Pessoa(nome)
{
    
    //Como deixar o atributo private ??
    this.nome = nome;

//criando um método public
this.getNome = function()
{
    return nome;
}

this.falar = function()
{
    console.log(`Meu nome é: ${this.getNome()}`);
}

}

const pessoa = new Pessoa('Bruce');

pessoa.falar();
