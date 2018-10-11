/**
 * A palavra reservada this pode ter o seu contexto mudado dependendo do scopo em que ele foi criado
 */

 //Criando um objeto
 const pessoa =
 {
     saudacao: 'Bom Dia!',
     //ES6 é possivel criar uma funcao dentro de um objeto sem a notacao chave-valor
     falar()
     {
        console.log(this.saudacao);
     }
 }


 pessoa.falar();

 const falar = pessoa.falar

 falar();//Conflito entre Programação Funcional e Programação Orientada a Objetos o falar() nao esta dentro do contexto do objeto e sim do node

 /**
  * Usando bind você consegue passar um objeto na qual deseja referenciar o this
  */

  const falarDePessoa = pessoa.falar.bind(pessoa);

  //Neste contexto o bind(pessoa) informa que o this referenciara ao objeto pessoa
  falarDePessoa();

  /**
   * É possível alcancar esses mesmos resultados utilizando se dos métodos .call e .apply mas nestes casos não é possível atribuir a uma variavel;
   */

 