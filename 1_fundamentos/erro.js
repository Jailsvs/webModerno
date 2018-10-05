function tratarErroLancar(erro)
{
    throw new Error('Erro 01: ...');
    //throw 10;
    //throw 'Erro' + true;
    //throw false;
    //throw null;
    //throw undefined;
    /*throw {
        nome: 'Erro',
        mesage: 'number error' + 1050;
        date: new Date()
    }*/
}

function imprimirNome(obj)
{
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch(e){
        tratarErroLancar(e);
    }finally
    {
        console.log('Executa independende se houver erro ou não');
    }
    
}

const obj = {nome: 'Spider Man'};

imprimirNome(obj);