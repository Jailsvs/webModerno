function Pessoa(){
    this.idade = 0;

    //Cambiarra do JS
    const self = this;
    //Dispara uma determinada acao em um tempo determinado em milisegundo
    setInterval(function()  
    {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
}

new Pessoa();







