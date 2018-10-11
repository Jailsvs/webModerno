class Pessoa
{
    constructor(nome)
    {
        this.nome = nome;
    }

    falar()
    {
        console.log("Meu nome é: " + this.nome);
    }
}

const novaPessoa = new Pessoa('Bruce Wyane');

novaPessoa.falar();


const produto = nome => {       
    return {
        //Não é necessário this.nome na factory
        falar: () => console.log(`Menu nome é ${ nome }`)
    }
} 

const novoProduto = produto('Mouse');
novoProduto.falar();
