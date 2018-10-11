/**
 * Criando Arrow Function para exemplificar que o this não muda seu contexto é utilizado o mesmo contexto de onde a funcao foi criada
 * Respita o contexto lexico(palavra) = Local físico em que a palavra foi escrita no código fonte
 */

function Pessoa()
{
     this.idade = 0;

     setInterval(   () => {
        this.idade++;
        console.log(this.idade);
    }, 1000)

}



 new Pessoa()